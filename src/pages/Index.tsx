
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { ImmersiveHero } from "@/components/hero/ImmersiveHero";
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
      <ImmersiveHero />
      <ImpactMetricsSection />
      <ProgramsJourneySection />
      <StartupEcosystemSection />
      <SEFHighlightSection />
      <CommunityPartnersSection />
      <VisionQuoteSection />
      <FinalCTASection />
      
      <CyclingStickyCornerCTA />
    </MainLayout>
  );
};

export default Index;
