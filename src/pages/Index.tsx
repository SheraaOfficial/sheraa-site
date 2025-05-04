
import React, { lazy, Suspense } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { useOptimizedScroll } from "@/hooks/use-mobile";
import { useBackgroundAnimation } from "@/hooks/use-background-animation";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { useFirstInteraction, useDeepScroll } from "@/hooks/use-interaction";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import ProgressBar from "@/components/ProgressBar";
import { HeroSection } from "@/components/HeroSection";
import { FirstPriorityComponents } from "@/components/sections/FirstPriorityComponents";

// Lazy-loaded components
const SecondPriorityComponents = lazy(() => import("@/components/sections/SecondPriorityComponents").then(module => ({ default: module.SecondPriorityComponents })));
const ThirdPriorityComponents = lazy(() => import("@/components/sections/ThirdPriorityComponents").then(module => ({ default: module.ThirdPriorityComponents })));

const Index = () => {
  const { scrollY } = useOptimizedScroll();
  const backgroundStyle = useBackgroundAnimation(scrollY);
  const scrollDirection = useScrollDirection(scrollY);
  const firstInteraction = useFirstInteraction();
  const deepScroll = useDeepScroll();
  
  // Setup smooth scroll behavior
  useSmoothScroll();

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
          <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading...</div>}>
            <SecondPriorityComponents />
          </Suspense>
        )}
        
        {/* Third priority components - load after deep scroll */}
        {deepScroll && (
          <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading...</div>}>
            <ThirdPriorityComponents />
          </Suspense>
        )}
      </div>
    </MainLayout>
  );
};

export default Index;
