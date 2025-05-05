
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
import { useDevicePerformance } from "@/hooks/useDevicePerformance";
import { useIsMobile } from "@/hooks/useDeviceDetection";
import { SectionLoading } from "@/components/layout/SectionLoading";
import { ErrorFallback } from "@/components/layout/ErrorFallback";

// Lazy-loaded components with improved error handling
const SecondPriorityComponents = lazy(() => 
  import("@/components/sections/SecondPriorityComponents")
    .then(module => ({ default: module.SecondPriorityComponents }))
    .catch(() => ({ 
      default: () => <ErrorFallback /> 
    }))
);

const ThirdPriorityComponents = lazy(() => 
  import("@/components/sections/ThirdPriorityComponents")
    .then(module => ({ default: module.ThirdPriorityComponents }))
    .catch(() => ({ 
      default: () => <ErrorFallback /> 
    }))
);

// Improved loading placeholder with reduced UI shifting
const LoadingPlaceholder = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`h-${isMobile ? '16' : '32'} flex items-center justify-center bg-sheraa-light/30 rounded-md`}>
      <SectionLoading />
    </div>
  );
};

// Component for handling preloading logic
const useComponentPreloader = (deepScroll, devicePerformance) => {
  useEffect(() => {
    if (devicePerformance === 'low') return; // Skip preloading on low-end devices
    
    let timeoutId: NodeJS.Timeout;
    
    const preloadSecondaryComponents = async () => {
      try {
        // Preload critical secondary components
        await import("@/components/sections/SecondPriorityComponents");
        
        // Only preload tertiary components on high-performance devices or when deep scrolled
        if (devicePerformance === 'high' || deepScroll) {
          await import("@/components/sections/ThirdPriorityComponents");
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
};

const Index = () => {
  const { scrollY } = useOptimizedScroll();
  const backgroundStyle = useBackgroundAnimation(scrollY);
  const scrollDirection = useScrollDirection(scrollY);
  const firstInteraction = useFirstInteraction();
  const deepScroll = useDeepScroll();
  const devicePerformance = useDevicePerformance();
  const isMobile = useIsMobile();
  
  // Setup smooth scroll behavior based on device performance
  useSmoothScroll();
  
  // Use the preloader hook
  useComponentPreloader(deepScroll, devicePerformance);

  return (
    <MainLayout backgroundStyle={backgroundStyle}>
      {/* Progress bar for scrolling */}
      <ProgressBar />

      {/* Hero section - load immediately */}
      <HeroSection />
      
      <div className="space-y-0 relative z-10">
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
