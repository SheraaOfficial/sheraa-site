
import React, { useEffect, lazy, Suspense, useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { useIsMobile, useOptimizedScroll } from "@/hooks/use-mobile";
import { useBackgroundAnimation } from "@/hooks/use-background-animation";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import ProgressBar from "@/components/ProgressBar";
import { HeroSection } from "@/components/HeroSection";

// Enhanced section loading component with subtle animation
const SectionLoading = () => (
  <div className="min-h-[100px] flex items-center justify-center">
    <div className="w-8 h-8 border-t-2 border-sheraa-primary rounded-full animate-spin"></div>
  </div>
);

// First priority components load immediately
const MarqueeUpdates = lazy(() => import("@/components/MarqueeUpdates"));
const ImpactNumbers = lazy(() => import("@/components/ImpactNumbers"));
const QuoteSection = lazy(() => import("@/components/QuoteSection"));

// Second priority components load after first interaction/scroll
const ProgramsOverview = lazy(() => import("@/components/ProgramsOverview"));
const EligibilityChecker = lazy(() => import("@/components/EligibilityChecker"));
const SEFSection = lazy(() => import("@/components/SEFSection"));
const WhySharjah = lazy(() => import("@/components/WhySharjah"));

// Lowest priority components - load last
const PartnersSection = lazy(() => import("@/components/PartnersSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const StartupsShowcase = lazy(() => import("@/components/StartupsShowcase"));
const PodcastSection = lazy(() => import("@/components/PodcastSection"));
const CommunitySection = lazy(() => import("@/components/CommunitySection"));
const StartupTestimonials = lazy(() => import("@/components/StartupTestimonials"));

const Index = () => {
  const isMobile = useIsMobile();
  const { scrollY, isScrolling } = useOptimizedScroll();
  const backgroundStyle = useBackgroundAnimation(scrollY);
  const scrollDirection = useScrollDirection(scrollY);
  const [firstInteraction, setFirstInteraction] = useState(false);
  const [deepScroll, setDeepScroll] = useState(false);
  
  // Enhanced track user interaction and deep scroll with optimization
  useEffect(() => {
    const handleInteraction = () => setFirstInteraction(true);
    
    // Consider first scroll or click as first interaction with passive event listeners
    window.addEventListener('scroll', handleInteraction, { once: true, passive: true });
    window.addEventListener('click', handleInteraction, { once: true });
    
    // Optimized tracking of deep scroll for the lowest priority components with throttling
    let scrollTimeout: number | null = null;
    const handleScroll = () => {
      if (scrollTimeout === null) {
        scrollTimeout = window.setTimeout(() => {
          if (window.scrollY > window.innerHeight * 0.5) {
            setDeepScroll(true);
            window.removeEventListener('scroll', handleScroll);
          }
          scrollTimeout = null;
        }, 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) window.clearTimeout(scrollTimeout);
    };
  }, []);
  
  // Optimized smooth scroll behavior on navigation clicks - with enhanced debounce
  useEffect(() => {
    if (isMobile) return; // Skip on mobile for performance
    
    let isScrolling = false;
    let clickTimeout: number | null = null;
    
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestAnchor = target.closest('a');
      
      if (closestAnchor && closestAnchor.getAttribute('href')?.startsWith('#')) {
        if (isScrolling) return; // Prevent multiple rapid scrolls
        
        if (clickTimeout) clearTimeout(clickTimeout);
        
        clickTimeout = window.setTimeout(() => {
          e.preventDefault();
          isScrolling = true;
          
          const id = closestAnchor.getAttribute('href')?.substring(1);
          const element = document.getElementById(id || '');
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 100,
              behavior: 'smooth'
            });
            
            // Reset scrolling flag after animation completes
            setTimeout(() => {
              isScrolling = false;
            }, 1000);
          } else {
            isScrolling = false;
          }
        }, 50);
      }
    };
    
    document.addEventListener('click', handleAnchorClick, { passive: false });
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      if (clickTimeout) clearTimeout(clickTimeout);
    }
  }, [isMobile]);

  // Enhanced error boundary for component loading
  const ErrorFallback = () => (
    <div className="py-8 text-center">
      <p className="text-gray-600">Something went wrong loading this section.</p>
    </div>
  );

  // Custom error boundary wrapper for lazy components
  const SafeSuspense = ({ children }: { children: React.ReactNode }) => {
    const [hasError, setHasError] = useState(false);
    
    if (hasError) return <ErrorFallback />;
    
    return (
      <React.Fragment>
        <ErrorBoundary onError={() => setHasError(true)}>
          <Suspense fallback={<SectionLoading />}>
            {children}
          </Suspense>
        </ErrorBoundary>
      </React.Fragment>
    );
  };

  // Simple error boundary component
  class ErrorBoundary extends React.Component<{
    children: React.ReactNode;
    onError: () => void;
  }, { hasError: boolean }> {
    constructor(props: { children: React.ReactNode; onError: () => void }) {
      super(props);
      this.state = { hasError: false };
    }
    
    static getDerivedStateFromError() {
      return { hasError: true };
    }
    
    componentDidCatch() {
      this.props.onError();
    }
    
    render() {
      if (this.state.hasError) return null;
      return this.props.children;
    }
  }

  return (
    <MainLayout backgroundStyle={backgroundStyle}>
      {/* Progress bar for scrolling */}
      <ProgressBar />

      {/* Hero section - load immediately */}
      <HeroSection />
      
      {/* First priority components */}
      <SafeSuspense>
        <MarqueeUpdates />
      </SafeSuspense>
      
      <div className="space-y-0 relative z-10">
        <SafeSuspense>
          <ImpactNumbers />
        </SafeSuspense>
        
        <SafeSuspense>
          <QuoteSection />
        </SafeSuspense>
        
        {/* Second priority components - load after interaction or immediately on desktop */}
        {(firstInteraction || !isMobile) && (
          <>
            <SafeSuspense>
              <ProgramsOverview />
            </SafeSuspense>
            
            <SafeSuspense>
              <EligibilityChecker />
            </SafeSuspense>
            
            <SafeSuspense>
              <SEFSection />
            </SafeSuspense>
            
            <SafeSuspense>
              <WhySharjah />
            </SafeSuspense>
          </>
        )}
        
        {/* Lowest priority components - load after deep scroll or immediately on desktop */}
        {(deepScroll || !isMobile) && (
          <>
            <SafeSuspense>
              <StartupsShowcase />
            </SafeSuspense>
            
            <SafeSuspense>
              <PodcastSection />
            </SafeSuspense>
            
            <SafeSuspense>
              <CommunitySection />
            </SafeSuspense>
            
            <SafeSuspense>
              <StartupTestimonials />
            </SafeSuspense>
            
            <SafeSuspense>
              <PartnersSection />
            </SafeSuspense>
            
            <SafeSuspense>
              <ContactSection />
            </SafeSuspense>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default Index;
