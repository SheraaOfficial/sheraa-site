
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
import PodcastSection from "@/components/PodcastSection";
import MarqueeUpdates from "@/components/MarqueeUpdates";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <MarqueeUpdates />
      <main className="flex-grow pt-12">
        <Hero />
        <div className="space-y-0 md:space-y-0 lg:space-y-0">
          <ImpactNumbers />
          <QuoteSection />
          <ProgramsOverview />
          <EligibilityChecker />
          <SEFSection />
          <StartupsShowcase />
          <PodcastSection />
          <CommunitySection />
          <StartupTestimonials />
          <WhySharjah />
          <PartnersSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
