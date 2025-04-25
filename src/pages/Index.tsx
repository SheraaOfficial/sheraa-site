
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImpactNumbers from "@/components/ImpactNumbers";
import ProgramsOverview from "@/components/ProgramsOverview";
import CommunitySection from "@/components/CommunitySection";
import SEFSection from "@/components/SEFSection";
import WhySharjah from "@/components/WhySharjah";
import PartnersSection from "@/components/PartnersSection";
import EligibilityChecker from "@/components/EligibilityChecker";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <div className="space-y-24">
          <ImpactNumbers />
          <ProgramsOverview />
          <EligibilityChecker />
          <CommunitySection />
          <SEFSection />
          <WhySharjah />
          <PartnersSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
