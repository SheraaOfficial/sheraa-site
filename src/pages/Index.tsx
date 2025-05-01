
import React, { useEffect, Suspense } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { useIsMobile, useOptimizedScroll } from "@/hooks/use-mobile";
import { useBackgroundAnimation } from "@/hooks/use-background-animation";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import ProgressBar from "@/components/ProgressBar";
import { HeroSection } from "@/components/HeroSection";
import MarqueeUpdates from "@/components/MarqueeUpdates";
import ImpactNumbers from "@/components/ImpactNumbers";
import QuoteSection from "@/components/QuoteSection";
import ProgramsOverview from "@/components/ProgramsOverview";
import EligibilityChecker from "@/components/EligibilityChecker";
import CommunitySection from "@/components/CommunitySection";
import SEFSection from "@/components/SEFSection";
import WhySharjah from "@/components/WhySharjah";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";

// Components that can be lazy loaded separately if needed
const StartupsShowcase = React.lazy(() => import("@/components/StartupsShowcase"));
const StartupTestimonials = React.lazy(() => import("@/components/StartupTestimonials"));
const PodcastSection = React.lazy(() => import("@/components/PodcastSection"));

// Simple fallback loading component
const SectionLoading = () => <div className="min-h-[300px] flex items-center justify-center">Loading section...</div>;

const Index = () => {
  const isMobile = useIsMobile();
  const { scrollY, isScrolling } = useOptimizedScroll();
  const backgroundStyle = useBackgroundAnimation(scrollY);
  const scrollDirection = useScrollDirection(scrollY);
  
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
      
      {/* Marquee Updates - moved right after hero section */}
      <MarqueeUpdates />
      
      <div className="space-y-0 md:space-y-0 lg:space-y-0 relative z-10">
        {/* Impact Numbers Section */}
        <ImpactNumbers />
        
        {/* Quote Section */}
        <QuoteSection />
        
        {/* Programs Overview */}
        <ProgramsOverview />
        
        {/* Eligibility Checker */}
        <EligibilityChecker />
        
        {/* SEF Section */}
        <SEFSection />
        
        {/* Startups Showcase - Lazy loaded */}
        <Suspense fallback={<SectionLoading />}>
          <StartupsShowcase />
        </Suspense>
        
        {/* Podcast Section - Lazy loaded */}
        <Suspense fallback={<SectionLoading />}>
          <PodcastSection />
        </Suspense>
        
        {/* Community Section */}
        <CommunitySection />
        
        {/* Startup Testimonials - Lazy loaded */}
        <Suspense fallback={<SectionLoading />}>
          <StartupTestimonials />
        </Suspense>
        
        {/* Why Sharjah */}
        <WhySharjah />
        
        {/* Partners Section */}
        <PartnersSection />
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </MainLayout>
  );
};

export default Index;
