
import React, { lazy, Suspense } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { useOptimizedScroll } from "@/hooks/useOptimizedScroll";
import { useBackgroundAnimation } from "@/hooks/use-background-animation";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { useFirstInteraction, useDeepScroll } from "@/hooks/use-interaction";
import ProgressBar from "@/components/ProgressBar";
import { HeroSection } from "@/components/HeroSection";
import { FirstPriorityComponents } from "@/components/sections/FirstPriorityComponents";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";
import { useIsMobile } from "@/hooks/useDeviceDetection";
import { SectionLoading } from "@/components/layout/SectionLoading";
import { ErrorFallback } from "@/components/layout/ErrorFallback";
import { SafeSuspense } from "@/components/layout/SafeSuspense";

// Enhanced error handling with proper typing for lazy-loaded components
const SecondPriorityComponents = lazy(() => 
  import("@/components/sections/SecondPriorityComponents")
    .then(module => ({ 
      default: module.SecondPriorityComponents as React.ComponentType<any>
    }))
    .catch(() => ({ 
      default: (() => <ErrorFallback />) as React.ComponentType<any>
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
const useComponentPreloader = (deepScroll: boolean, devicePerformance: string, isMobile: boolean) => {
  React.useEffect(() => {
    // Skip preloading on mobile low-end devices
    if (isMobile && devicePerformance === 'low') return;
    
    // Skip preloading on any low-end devices
    if (devicePerformance === 'low') return; 
    
    let timeoutId: NodeJS.Timeout;
    
    const preloadSecondaryComponents = async () => {
      try {
        // Preload critical secondary components
        await import("@/components/sections/SecondPriorityComponents");
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
  
  // Use the preloader hook
  useComponentPreloader(deepScroll, devicePerformance, isMobile);

  return (
    <MainLayout backgroundStyle={backgroundStyle}>
      {/* Only show progress bar on non-mobile or high-performance devices */}
      {(!isMobile || devicePerformance === 'high') && <ProgressBar />}

      {/* Hero section - load immediately */}
      <HeroSection />
      
      <div className="space-y-0 relative z-10">
        {/* First priority components - always load */}
        <FirstPriorityComponents />
        
        {/* Second priority components - load after user interaction */}
        {firstInteraction && (
          <SafeSuspense fallback={<LoadingPlaceholder />}>
            <SecondPriorityComponents />
          </SafeSuspense>
        )}
      </div>
    </MainLayout>
  );
};

export default Index;
