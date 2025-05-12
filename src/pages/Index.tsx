
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
import { MobileOptimizedApp } from "@/components/MobileOptimizedApp";
import { usePerformanceMonitor } from "@/hooks/use-performance-monitor";

// Enhanced error handling with proper typing for lazy-loaded components
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

// Improved loading placeholder with mobile optimization
const LoadingPlaceholder: React.FC = () => {
  const isMobile = useIsMobile();
  const devicePerformance = useDevicePerformance();
  
  // Simpler placeholder for low-end devices
  if (devicePerformance === 'low') {
    return (
      <div className={`h-${isMobile ? '12' : '24'} flex items-center justify-center`}>
        <div className="w-8 h-8 border-2 border-sheraa-primary/30 border-t-sheraa-primary rounded-full animate-spin"></div>
      </div>
    );
  }
  
  return (
    <div className={`h-${isMobile ? '16' : '32'} flex items-center justify-center bg-sheraa-light/30 rounded-md`}>
      <SectionLoading />
    </div>
  );
};

// Hook for optimized component preloading
const useComponentPreloader = (deepScroll: boolean, devicePerformance: string) => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Skip preloading on mobile low-end devices
    if (isMobile && devicePerformance === 'low') return;
    
    // Skip preloading on any low-end devices
    if (devicePerformance === 'low') return; 
    
    let timeoutId: NodeJS.Timeout;
    
    const preloadSecondaryComponents = async () => {
      try {
        // Preload critical secondary components
        await import("@/components/sections/SecondPriorityComponents");
        
        // Only preload tertiary components on high-performance devices or when deep scrolled
        // Skip tertiary preloading on mobile
        if ((devicePerformance === 'high' && !isMobile) || (deepScroll && !isMobile)) {
          await import("@/components/sections/ThirdPriorityComponents");
        }
      } catch (error) {
        console.error("Failed to preload components:", error);
      }
    };
    
    // Smart delay based on device performance and mobile status
    const delay = isMobile ? 2000 : devicePerformance === 'high' ? 1000 : 2000;
    timeoutId = setTimeout(preloadSecondaryComponents, delay);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [deepScroll, devicePerformance, isMobile]);
};

const Index: React.FC = () => {
  const { scrollY } = useOptimizedScroll();
  const backgroundStyle = useBackgroundAnimation(scrollY);
  const scrollDirection = useScrollDirection(scrollY);
  const firstInteraction = useFirstInteraction();
  const deepScroll = useDeepScroll();
  const devicePerformance = useDevicePerformance();
  const isMobile = useIsMobile();
  const performanceMetrics = usePerformanceMonitor();
  
  // Setup smooth scroll behavior based on device performance
  // Disable smooth scroll on mobile or low-end devices
  const enableSmoothScroll = !isMobile && devicePerformance !== 'low';
  if (enableSmoothScroll) {
    useSmoothScroll();
  }
  
  // Use the preloader hook
  useComponentPreloader(deepScroll, devicePerformance);

  return (
    <MobileOptimizedApp>
      <MainLayout backgroundStyle={backgroundStyle}>
        {/* Only show progress bar on non-mobile or high-performance devices */}
        {(!isMobile || devicePerformance === 'high') && <ProgressBar />}

        {/* Hero section - load immediately */}
        <HeroSection />
        
        <div className="space-y-0 relative z-10">
          {/* First priority components - always load */}
          <FirstPriorityComponents />
          
          {/* Second priority components - load after user interaction */}
          {(firstInteraction || (isMobile && performanceMetrics.fcp !== null)) && (
            <Suspense fallback={<LoadingPlaceholder />}>
              <SecondPriorityComponents />
            </Suspense>
          )}
          
          {/* Third priority components - load after deep scroll */}
          {/* On mobile, check if we're on a good connection before loading */}
          {(deepScroll && (!isMobile || performanceMetrics.connectionType !== '2g')) && (
            <Suspense fallback={<LoadingPlaceholder />}>
              <ThirdPriorityComponents />
            </Suspense>
          )}
        </div>
      </MainLayout>
    </MobileOptimizedApp>
  );
};

export default Index;
