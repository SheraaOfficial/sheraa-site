
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import UltimateHero from "@/components/hero/UltimateHero";
import DealDockMarquee from "@/components/homepage/DealDockMarquee";
import { ImpactMetricsSection } from "@/components/homepage/redesign/ImpactMetricsSection";
import { ProgramsJourneySection } from "@/components/homepage/redesign/ProgramsJourneySection";
import { StartupEcosystemSection } from "@/components/homepage/redesign/StartupEcosystemSection";
import { SEFHighlightSection } from "@/components/homepage/redesign/SEFHighlightSection";
import { CommunityPartnersSection } from "@/components/homepage/redesign/CommunityPartnersSection";
import { WhySharjahSection } from "@/components/homepage/sections/WhySharjahSection";
import { ReadyToStartSection } from "@/components/homepage/sections/ReadyToStartSection";
import { CyclingStickyCornerCTA } from "@/components/ui/cycling-sticky-cta";
import SheraaTestimonials from "@/components/testimonials/SheraaTestimonials";
import { PerformanceOptimizer } from "@/components/performance/PerformanceOptimizer";
import { ThemeSelector } from "@/components/theme/ThemeSelector";

const NewIndex: React.FC = () => {
  return (
    <MainLayout className="sheraa-gradient-bg">
      {/* Critical above-the-fold content with Sheraa branding */}
      <UltimateHero />
      <DealDockMarquee />
      
      {/* High priority content with Sheraa background */}
      <div className="bg-white dark:bg-sheraa-dark">
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
        
        <WhySharjahSection />
        <ReadyToStartSection />
      </div>
      
      {/* Enhanced Cycling Sticky CTA */}
      <CyclingStickyCornerCTA />
      
      {/* Theme Selector for Preview */}
      <ThemeSelector />
    </MainLayout>
  );
};

export default NewIndex;
