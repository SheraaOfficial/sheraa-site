
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import EnhancedHero from "@/components/hero/EnhancedHero";
import ImpactMetricsSnapshot from "@/components/homepage/enhanced/ImpactMetricsSnapshot";
import MarqueeUpdates from "@/components/MarqueeUpdates";
import PersonaEventsSection from "@/components/homepage/enhanced/PersonaEventsSection";
import CommunityConnectSection from "@/components/homepage/enhanced/CommunityConnectSection";
import WhySharjahSection from "@/components/homepage/enhanced/WhySharjahSection";
import CTASection from "@/components/homepage/enhanced/CTASection";

const Index = () => {
  return (
    <MainLayout>
      <EnhancedHero />
      <ImpactMetricsSnapshot />
      <MarqueeUpdates />
      <PersonaEventsSection />
      <CommunityConnectSection />
      <WhySharjahSection />
      <CTASection />
    </MainLayout>
  );
};

export default Index;
