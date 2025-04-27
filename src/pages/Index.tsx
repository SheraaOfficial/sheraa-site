
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImpactNumbers from "@/components/ImpactNumbers";
import QuoteSection from "@/components/QuoteSection";
import ProgramsOverview from "@/components/ProgramsOverview";
import CommunitySection from "@/components/CommunitySection";
import SEFSection from "@/components/SEFSection";
import WhySharjah from "@/components/WhySharjah";
import PartnersSection from "@/components/PartnersSection";
import EligibilityChecker from "@/components/EligibilityChecker";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0A0D14] to-[#1F2937]">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <div className="relative z-10 -mt-24 md:-mt-48">
          <div className="bg-white rounded-t-[2.5rem] overflow-hidden shadow-2xl">
            <div className="space-y-0">
              <ImpactNumbers />
              <QuoteSection />
              <ProgramsOverview />
              <div className="relative z-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#9b87f5]/10 to-[#D946EF]/10 -z-10" />
                <EligibilityChecker />
              </div>
              <CommunitySection />
              <SEFSection />
              <WhySharjah />
              <PartnersSection />
              <ContactSection />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
