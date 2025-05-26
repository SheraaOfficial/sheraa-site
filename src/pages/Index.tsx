
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { NewHeroSection } from "@/components/homepage/redesign/NewHeroSection";
import { ImpactMetricsSection } from "@/components/homepage/redesign/ImpactMetricsSection";
import { ProgramsJourneySection } from "@/components/homepage/redesign/ProgramsJourneySection";
import { StartupEcosystemSection } from "@/components/homepage/redesign/StartupEcosystemSection";
import { SEFHighlightSection } from "@/components/homepage/redesign/SEFHighlightSection";
import { CommunityPartnersSection } from "@/components/homepage/redesign/CommunityPartnersSection";
import { VisionQuoteSection } from "@/components/homepage/redesign/VisionQuoteSection";
import { FinalCTASection } from "@/components/homepage/redesign/FinalCTASection";

const Index: React.FC = () => {
  return (
    <MainLayout className="bg-white dark:bg-sheraa-dark">
      <NewHeroSection />
      <ImpactMetricsSection />
      <ProgramsJourneySection />
      <StartupEcosystemSection />
      <SEFHighlightSection />
      <CommunityPartnersSection />
      <VisionQuoteSection />
      <FinalCTASection />
    </MainLayout>
  );
};

export default Index;
