
import React, { useEffect, lazy, Suspense, useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { useIsMobile, useOptimizedScroll } from "@/hooks/use-mobile";
import { useBackgroundAnimation } from "@/hooks/use-background-animation";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import ProgressBar from "@/components/ProgressBar";
import { HeroSection } from "@/components/HeroSection";

// Simple section loading component
const SectionLoading = () => <div className="min-h-[100px] flex items-center justify-center"></div>;

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
  
  // Track user interaction and deep scroll
  useEffect(() => {
    const handleInteraction = () => setFirstInteraction(true);
    
    // Consider first scroll or click as first interaction
    window.addEventListener('scroll', handleInteraction, { once: true });
    window.addEventListener('click', handleInteraction, { once: true });
    
    // Track deep scroll for the lowest priority components
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setDeepScroll(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Add smooth scroll behavior on navigation clicks - with optimized debounce
  useEffect(() => {
    if (isMobile) return; // Skip on mobile for performance
    
    let isScrolling = false;
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        if (isScrolling) return; // Prevent multiple rapid scrolls
        
        e.preventDefault();
        isScrolling = true;
        
        const id = target.getAttribute('href')?.substring(1);
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
      }
    };
    
    document.addEventListener('click', handleAnchorClick, { passive: false });
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [isMobile]);

  return (
    <MainLayout backgroundStyle={backgroundStyle}>
      {/* Add the progress bar */}
      <ProgressBar />

      {/* Hero section - load immediately */}
      <HeroSection />
      
      {/* First priority components */}
      <Suspense fallback={<SectionLoading />}>
        <MarqueeUpdates />
      </Suspense>
      
      <div className="space-y-0 relative z-10">
        <Suspense fallback={<SectionLoading />}>
          <ImpactNumbers />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <QuoteSection />
        </Suspense>
        
        {/* Second priority components - load after interaction */}
        {(firstInteraction || !isMobile) && (
          <>
            <Suspense fallback={<SectionLoading />}>
              <ProgramsOverview />
            </Suspense>
            
            <Suspense fallback={<SectionLoading />}>
              <EligibilityChecker />
            </Suspense>
            
            <Suspense fallback={<SectionLoading />}>
              <SEFSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoading />}>
              <WhySharjah />
            </Suspense>
          </>
        )}
        
        {/* Lowest priority components - load after deep scroll */}
        {(deepScroll || !isMobile) && (
          <>
            <Suspense fallback={<SectionLoading />}>
              <StartupsShowcase />
            </Suspense>
            
            <Suspense fallback={<SectionLoading />}>
              <PodcastSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoading />}>
              <CommunitySection />
            </Suspense>
            
            <Suspense fallback={<SectionLoading />}>
              <StartupTestimonials />
            </Suspense>
            
            <Suspense fallback={<SectionLoading />}>
              <PartnersSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoading />}>
              <ContactSection />
            </Suspense>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default Index;
