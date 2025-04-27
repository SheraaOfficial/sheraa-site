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
import StartupsShowcase from "@/components/StartupsShowcase";
import StartupTestimonials from "@/components/StartupTestimonials";
const Index = () => {
  return <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <div className="space-y-0md:space-y-0 lg:space-y-0">
          <ImpactNumbers />
          <QuoteSection />
          <ProgramsOverview />
          <EligibilityChecker />
          <SEFSection />
          <StartupsShowcase />
          <CommunitySection />
          <StartupTestimonials />
          <WhySharjah />
          <PartnersSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>;
};
export default Index;