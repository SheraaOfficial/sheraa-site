
import React, { lazy, Suspense } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { useOptimizedScroll } from "@/hooks/useOptimizedScroll";
import { useBackgroundAnimation } from "@/hooks/use-background-animation";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { useFirstInteraction, useDeepScroll } from "@/hooks/use-interaction";
import ProgressBar from "@/components/ProgressBar";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";
import { useIsMobile } from "@/hooks/useDeviceDetection";
import { SectionLoading } from "@/components/layout/SectionLoading";
import { ErrorFallback } from "@/components/layout/ErrorFallback";
import { SafeSuspense } from "@/components/layout/SafeSuspense";
import { WelcomeAnimation } from "@/components/ui/welcome-animation";

// Import critical components directly for better performance
import HomepageHero from "@/components/homepage/HomepageHero";
import HomepageMarquee from "@/components/homepage/HomepageMarquee";
import { HomepageCore } from "@/components/homepage/HomepageCore";

// Lazy load secondary components
const HomepageSecondary = lazy(() => 
  import("@/components/homepage/HomepageSecondary")
    .then(module => ({ 
      default: module.HomepageSecondary as React.ComponentType<any>
    }))
    .catch(() => ({ 
      default: (() => <ErrorFallback />) as React.ComponentType<any>
    }))
);

// Enhanced loading placeholder
const LoadingPlaceholder: React.FC = () => {
  const isMobile = useIsMobile();
  const devicePerformance = useDevicePerformance();
  
  if (devicePerformance === 'low') {
    return (
      <div className={`h-${isMobile ? '12' : '24'} flex items-center justify-center`}>
        <div className="w-8 h-8 border-2 border-sheraa-primary/30 border-t-sheraa-primary rounded-full animate-spin"></div>
      </div>
    );
  }
  
  return (
    <div className={`h-${isMobile ? '16' : '32'} flex items-center justify-center bg-gradient-to-r from-sheraa-light/30 to-white/30 dark:from-sheraa-dark/30 dark:to-sheraa-dark/50 rounded-lg`}>
      <SectionLoading />
    </div>
  );
};

// Enhanced preloader hook
const useComponentPreloader = (deepScroll: boolean, devicePerformance: string, isMobile: boolean) => {
  React.useEffect(() => {
    if (isMobile && devicePerformance === 'low') return;
    if (devicePerformance === 'low') return; 
    
    let timeoutId: NodeJS.Timeout;
    
    const preloadSecondaryComponents = async () => {
      try {
        await import("@/components/homepage/HomepageSecondary");
      } catch (error) {
        console.error("Failed to preload components:", error);
      }
    };
    
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
  
  useComponentPreloader(deepScroll, devicePerformance, isMobile);

  return (
    <MainLayout 
      backgroundStyle={backgroundStyle}
      className="relative"
    >
      {/* Welcome animation for first-time visitors */}
      <WelcomeAnimation />
      
      {/* Progress bar for navigation */}
      {(!isMobile || devicePerformance === 'high') && <ProgressBar />}

      {/* Hero Section - Primary brand introduction */}
      <HomepageHero />
      
      {/* News Marquee - Latest updates and announcements */}
      <HomepageMarquee />
      
      {/* Main content sections */}
      <div className="relative z-10">
        {/* Core content - always load */}
        <HomepageCore />
        
        {/* Secondary content - load after user interaction */}
        {firstInteraction && (
          <SafeSuspense fallback={<LoadingPlaceholder />}>
            <HomepageSecondary />
          </SafeSuspense>
        )}
      </div>
    </MainLayout>
  );
};

export default Index;
