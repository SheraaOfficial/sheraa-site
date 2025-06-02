
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
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
import { SmartThemeRouter } from "@/components/navigation/SmartThemeRouter";

const NewIndex: React.FC = () => {
  return (
    <MainLayout className="bg-white dark:bg-sheraa-dark">
      <SmartThemeRouter />
      <UltimateHero />
      <DealDockMarquee />
      <ImpactMetricsSection />
      <ProgramsJourneySection />
      <StartupEcosystemSection />
      <SEFHighlightSection />
      <CommunityPartnersSection />
      <VisionQuoteSection />
      <FinalCTASection />
      
      {/* Enhanced Cycling Sticky CTA */}
      <CyclingStickyCornerCTA />
    </MainLayout>
  );
};

export default NewIndex;
