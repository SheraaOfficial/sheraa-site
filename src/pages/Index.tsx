
import React, { lazy, Suspense, useEffect, useMemo } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { useOptimizedScroll } from "@/hooks/useOptimizedScroll";
import { useBackgroundAnimation } from "@/hooks/use-background-animation";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { useFirstInteraction, useDeepScroll } from "@/hooks/use-interaction";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import ProgressBar from "@/components/ProgressBar";
import { HeroSection } from "@/components/HeroSection";
import { FirstPriorityComponents } from "@/components/sections/FirstPriorityComponents";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";

// Lazy-loaded components with improved loading indicators and error boundaries
const SecondPriorityComponents = lazy(() => 
  import("@/components/sections/SecondPriorityComponents")
    .then(module => ({ default: module.SecondPriorityComponents }))
    .catch(error => {
      console.error("Failed to load SecondPriorityComponents:", error);
      return { default: () => <ErrorFallback /> };
    })
);

const ThirdPriorityComponents = lazy(() => 
  import("@/components/sections/ThirdPriorityComponents")
    .then(module => ({ default: module.ThirdPriorityComponents }))
    .catch(error => {
      console.error("Failed to load ThirdPriorityComponents:", error);
      return { default: () => <ErrorFallback /> };
    })
);

// Simple error fallback component
const ErrorFallback = () => (
  <div className="p-4 bg-red-50 rounded-md">
    <p className="text-center text-red-500">
      Failed to load content. Please refresh the page.
    </p>
  </div>
);

// Loading placeholder with reduced UI shifting and better visual appearance
const LoadingPlaceholder = () => (
  <div className="h-32 flex items-center justify-center bg-sheraa-light/50 rounded-md animate-pulse">
    <div className="flex space-x-4 w-full max-w-3xl">
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
  const devicePerformance = useDevicePerformance();
  
  // Setup smooth scroll behavior based on device performance
  useSmoothScroll(devicePerformance !== 'low');
  
  // Smart preloading strategy based on device performance
  useEffect(() => {
    if (devicePerformance === 'low') return; // Skip preloading on low-end devices
    
    let timeoutId: NodeJS.Timeout;
    
    const preloadSecondaryComponents = async () => {
      try {
        // Preload critical secondary components
        const preloadTimer = setTimeout(() => {}, 0); // Keep event loop active
        await import("@/components/sections/SecondPriorityComponents");
        clearTimeout(preloadTimer);
        
        // Only preload tertiary components on high-performance devices or when deep scrolled
        if (devicePerformance === 'high' || deepScroll) {
          const secondaryTimer = setTimeout(() => {}, 0);
          await import("@/components/sections/ThirdPriorityComponents");
          clearTimeout(secondaryTimer);
        }
      } catch (error) {
        console.error("Failed to preload components:", error);
      }
    };
    
    // Smart delay based on device performance
    const delay = devicePerformance === 'high' ? 1000 : 2000;
    timeoutId = setTimeout(preloadSecondaryComponents, delay);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [deepScroll, devicePerformance]);

  // Memoize background style to prevent unnecessary re-renders
  const memoizedBackgroundStyle = useMemo(() => backgroundStyle, [backgroundStyle]);

  return (
    <MainLayout backgroundStyle={memoizedBackgroundStyle}>
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
