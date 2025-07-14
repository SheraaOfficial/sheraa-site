
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import SimpleHero from "@/components/hero/SimpleHero";
import ValuePropsSection from "@/components/homepage/simple/ValuePropsSection";
import SimpleProgramsSection from "@/components/homepage/simple/SimpleProgramsSection";
import SimplePartnersSection from "@/components/homepage/simple/SimplePartnersSection";
import AboutSharjahSection from "@/components/homepage/simple/AboutSharjahSection";
import AboutSheraaSection from "@/components/homepage/simple/AboutSheraaSection";

const Index = () => {
  return (
    <MainLayout>
      <SimpleHero />
      <ValuePropsSection />
      <SimpleProgramsSection />
      <SimplePartnersSection />
      <AboutSharjahSection />
      <AboutSheraaSection />
    </MainLayout>
  );
};

export default Index;
