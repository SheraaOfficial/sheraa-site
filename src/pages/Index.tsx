
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

const Index: React.FC = () => {
  const { scrollY } = useOptimizedScroll();
  const backgroundStyle = useBackgroundAnimation(scrollY);
  const scrollDirection = useScrollDirection(scrollY);
  const firstInteraction = useFirstInteraction();
  const deepScroll = useDeepScroll();
  const devicePerformance = useDevicePerformance();
  const isMobile = useIsMobile();

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
      
      {/* Main content - now fully integrated and optimized */}
      <div className="relative z-10">
        <HomepageCore />
      </div>
    </MainLayout>
  );
};

export default Index;
