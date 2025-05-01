import React, { useEffect, Suspense, lazy } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { useIsMobile, useOptimizedScroll } from "@/hooks/use-mobile";
import { useBackgroundAnimation } from "@/hooks/use-background-animation";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import ProgressBar from "@/components/ProgressBar";
import { HeroSection } from "@/components/HeroSection";

// Lazy load components to improve initial page load performance
const EligibilityChecker = lazy(() => import("@/components/EligibilityChecker"));
const HomePageSections = lazy(() => import("@/components/home/HomePageSections"));

// Simple fallback loading component
const PageSectionLoading = () => <div className="min-h-[300px] flex items-center justify-center">Loading...</div>;

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
      
      {/* Lazy loaded components with Suspense */}
      <Suspense fallback={<PageSectionLoading />}>
        {/* Eligibility checker */}
        <EligibilityChecker />
        
        {/* Other home page sections */}
        <HomePageSections 
          isScrolling={isScrolling}
          scrollDirection={scrollDirection}
        />
      </Suspense>
    </MainLayout>
  );
};

export default Index;
