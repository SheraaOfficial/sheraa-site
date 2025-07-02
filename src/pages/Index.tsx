
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { ImmersiveHero } from "@/components/hero/ImmersiveHero";
import { ImpactMetricsSection } from "@/components/homepage/redesign/ImpactMetricsSection";
import { ProgramsJourneySection } from "@/components/homepage/redesign/ProgramsJourneySection";
import { StartupEcosystemSection } from "@/components/homepage/redesign/StartupEcosystemSection";
import { SEFHighlightSection } from "@/components/homepage/redesign/SEFHighlightSection";
import { CommunityPartnersSection } from "@/components/homepage/redesign/CommunityPartnersSection";
import { WhySharjahSection } from "@/components/homepage/sections/WhySharjahSection";
import { ReadyToStartSection } from "@/components/homepage/sections/ReadyToStartSection";
import { CyclingStickyCornerCTA } from "@/components/ui/cycling-sticky-cta";
import { ThemeSelector } from "@/components/theme/ThemeSelector";

const Index = () => {
  return (
    <MainLayout>
      <ImmersiveHero />
      <ImpactMetricsSection />
      <ProgramsJourneySection />
      <SEFHighlightSection />
      <CommunityPartnersSection />
      <WhySharjahSection />
      <StartupEcosystemSection />
      <ReadyToStartSection />
      
      <CyclingStickyCornerCTA />
      
      {/* Theme Selector for Preview */}
      <ThemeSelector />
    </MainLayout>
  );
};

export default Index;
