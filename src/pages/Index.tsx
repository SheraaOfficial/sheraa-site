import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HomepageHero from "@/components/homepage/HomepageHero";
import { ImpactMetricsSection } from "@/components/homepage/ImpactMetricsSection";
import { ProgramsJourneySection } from "@/components/homepage/ProgramsJourneySection";
import { StartupEcosystemSection } from "@/components/homepage/StartupEcosystemSection";
import { SEFHighlightSection } from "@/components/homepage/SEFHighlightSection";
import { CommunityPartnersSection } from "@/components/homepage/CommunityPartnersSection";
import { VisionQuoteSection } from "@/components/homepage/VisionQuoteSection";
import { FinalCTASection } from "@/components/homepage/FinalCTASection";
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
