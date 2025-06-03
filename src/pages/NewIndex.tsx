
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { ImmersiveHero } from "@/components/hero/ImmersiveHero";
import DealDockMarquee from "@/components/homepage/DealDockMarquee";
import { ImpactMetricsSection } from "@/components/homepage/redesign/ImpactMetricsSection";
import { ProgramsJourneySection } from "@/components/homepage/redesign/ProgramsJourneySection";
import { StartupEcosystemSection } from "@/components/homepage/redesign/StartupEcosystemSection";
import { SEFHighlightSection } from "@/components/homepage/redesign/SEFHighlightSection";
import { CommunityPartnersSection } from "@/components/homepage/redesign/CommunityPartnersSection";
import { VisionQuoteSection } from "@/components/homepage/redesign/VisionQuoteSection";
import { FinalCTASection } from "@/components/homepage/redesign/FinalCTASection";
import { CyclingStickyCornerCTA } from "@/components/ui/cycling-sticky-cta";
import SheraaTestimonials from "@/components/testimonials/SheraaTestimonials";
import { PerformanceOptimizer } from "@/components/performance/PerformanceOptimizer";

const NewIndex: React.FC = () => {
  return (
    <MainLayout className="bg-white dark:bg-sheraa-dark">
      {/* Critical above-the-fold content */}
      <ImmersiveHero />
      <DealDockMarquee />
      
      {/* High priority content */}
      <ImpactMetricsSection />
      <ProgramsJourneySection />
      
      {/* Medium priority content with performance optimization */}
      <PerformanceOptimizer componentName="Sheraa Testimonials" priority="medium" height={600}>
        <SheraaTestimonials />
      </PerformanceOptimizer>
      
      <PerformanceOptimizer componentName="Startup Ecosystem" priority="medium">
        <StartupEcosystemSection />
      </PerformanceOptimizer>
      
      <PerformanceOptimizer componentName="SEF Highlight" priority="low">
        <SEFHighlightSection />
      </PerformanceOptimizer>
      
      <PerformanceOptimizer componentName="Community Partners" priority="low">
        <CommunityPartnersSection />
      </PerformanceOptimizer>
      
      <VisionQuoteSection />
      <FinalCTASection />
      
      {/* Enhanced Cycling Sticky CTA */}
      <CyclingStickyCornerCTA />
    </MainLayout>
  );
};

export default NewIndex;
