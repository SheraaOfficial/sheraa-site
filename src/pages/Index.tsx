
import React, { lazy, Suspense, useEffect } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { useOptimizedScroll } from "@/hooks/useOptimizedScroll";
import { useBackgroundAnimation } from "@/hooks/use-background-animation";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { useFirstInteraction, useDeepScroll } from "@/hooks/use-interaction";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import ProgressBar from "@/components/ProgressBar";
import { HeroSection } from "@/components/HeroSection";
import { FirstPriorityComponents } from "@/components/sections/FirstPriorityComponents";

// Lazy-loaded components with improved loading indicators
const SecondPriorityComponents = lazy(() => import("@/components/sections/SecondPriorityComponents").then(module => ({ default: module.SecondPriorityComponents })));
const ThirdPriorityComponents = lazy(() => import("@/components/sections/ThirdPriorityComponents").then(module => ({ default: module.ThirdPriorityComponents })));

// Loading placeholder with reduced UI shifting
const LoadingPlaceholder = () => (
  <div className="h-32 flex items-center justify-center bg-sheraa-light/50 rounded-md">
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </div>
);

const Index = () => {
  const { scrollY } = useOptimizedScroll();
  const backgroundStyle = useBackgroundAnimation(scrollY);
  const scrollDirection = useScrollDirection(scrollY);
  const firstInteraction = useFirstInteraction();
  const deepScroll = useDeepScroll();
  
  // Setup smooth scroll behavior
  useSmoothScroll();
  
  // Preload secondary components after initial render
  useEffect(() => {
    const preloadSecondaryComponents = async () => {
      try {
        // Use dynamic import to preload the components in the background
        await import("@/components/sections/SecondPriorityComponents");
        if (deepScroll) {
          await import("@/components/sections/ThirdPriorityComponents");
        }
      } catch (error) {
        console.error("Failed to preload components:", error);
      }
    };
    
    // Delay preloading slightly to prioritize initial render
    const timeoutId = setTimeout(preloadSecondaryComponents, 2000);
    return () => clearTimeout(timeoutId);
  }, [deepScroll]);

  return (
    <MainLayout backgroundStyle={backgroundStyle}>
      {/* Progress bar for scrolling */}
      <ProgressBar />

      {/* Hero section - load immediately */}
      <HeroSection />
      
      <div className="space-y-0 relative z-10" style={{ position: "relative" }}>
        {/* First priority components - always load */}
        <FirstPriorityComponents />
        
        {/* Second priority components - load after user interaction */}
        {firstInteraction && (
          <Suspense fallback={<LoadingPlaceholder />}>
            <SecondPriorityComponents />
          </Suspense>
        )}
        
        {/* Third priority components - load after deep scroll */}
        {deepScroll && (
          <Suspense fallback={<LoadingPlaceholder />}>
            <ThirdPriorityComponents />
          </Suspense>
        )}
      </div>
    </MainLayout>
  );
};

export default Index;
