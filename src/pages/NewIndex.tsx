
import React from "react";
import MainLayout from "@/layouts/MainLayout";
import UltimateHero from "@/components/hero/UltimateHero";
import DealDockMarquee from "@/components/homepage/DealDockMarquee";
import { ImpactMetricsSection } from "@/components/homepage/redesign/ImpactMetricsSection";
import { ProgramsJourneySection } from "@/components/homepage/redesign/ProgramsJourneySection";
import { StartupEcosystemSection } from "@/components/homepage/redesign/StartupEcosystemSection";
import { SEFHighlightSection } from "@/components/homepage/redesign/SEFHighlightSection";
import { CommunityPartnersSection } from "@/components/homepage/redesign/CommunityPartnersSection";
import { VisionQuoteSection } from "@/components/homepage/redesign/VisionQuoteSection";
import { FinalCTASection } from "@/components/homepage/redesign/FinalCTASection";
import { CyclingStickyCornerCTA } from "@/components/ui/cycling-sticky-cta";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { PerformanceOptimizer } from "@/components/performance/PerformanceOptimizer";

const NewIndex: React.FC = () => {
  return (
    <MainLayout className="bg-white dark:bg-sheraa-dark">
      {/* Critical above-the-fold content */}
      <UltimateHero />
      <DealDockMarquee />
      
      {/* High priority content */}
      <ImpactMetricsSection />
      <ProgramsJourneySection />
      
      {/* Medium priority content with performance optimization */}
      <PerformanceOptimizer componentName="Testimonials" priority="medium" height={600}>
        <TestimonialsSection />
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
