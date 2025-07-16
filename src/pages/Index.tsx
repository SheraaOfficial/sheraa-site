
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import EnhancedHero from "@/components/hero/EnhancedHero";
import WhoWeAreSection from "@/components/homepage/WhoWeAreSection";
import MarqueeUpdates from "@/components/MarqueeUpdates";
import WhatsHappeningSection from "@/components/homepage/WhatsHappeningSection";
import FounderFirstValueProps from "@/components/homepage/simple/FounderFirstValueProps";
import AuthenticProgramsSection from "@/components/homepage/simple/AuthenticProgramsSection";
import EcosystemPartnersSection from "@/components/homepage/simple/EcosystemPartnersSection";
import InnovationCapitalSection from "@/components/homepage/simple/InnovationCapitalSection";
import ChangemakersAboutSection from "@/components/homepage/simple/ChangemakersAboutSection";

const Index = () => {
  return (
    <MainLayout>
      <EnhancedHero />
      <WhoWeAreSection />
      <MarqueeUpdates />
      <WhatsHappeningSection />
      <FounderFirstValueProps />
      <AuthenticProgramsSection />
      <EcosystemPartnersSection />
      <InnovationCapitalSection />
      <ChangemakersAboutSection />
    </MainLayout>
  );
};

export default Index;
