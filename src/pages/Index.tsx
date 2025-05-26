
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HomepageHero from "@/components/homepage/HomepageHero";
import { ImpactMetricsSection } from "@/components/homepage/redesign/ImpactMetricsSection";
import { ProgramsJourneySection } from "@/components/homepage/redesign/ProgramsJourneySection";
import { StartupEcosystemSection } from "@/components/homepage/redesign/StartupEcosystemSection";
import { SEFHighlightSection } from "@/components/homepage/redesign/SEFHighlightSection";
import { CommunityPartnersSection } from "@/components/homepage/redesign/CommunityPartnersSection";
import { VisionQuoteSection } from "@/components/homepage/redesign/VisionQuoteSection";
import { FinalCTASection } from "@/components/homepage/redesign/FinalCTASection";
import { CyclingStickyCornerCTA } from "@/components/ui/cycling-sticky-cta";

const Index = () => {
  return (
    <MainLayout>
      <HomepageHero />
      <ImpactMetricsSection />
      <ProgramsJourneySection />
      <StartupEcosystemSection />
      <SEFHighlightSection />
      <CommunityPartnersSection />
      <VisionQuoteSection />
      <FinalCTASection />
      
      {/* Replace the old sticky CTAs with the new cycling one */}
      <CyclingStickyCornerCTA />
    </MainLayout>
  );
};

export default Index;
