import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import AdultEntrepreneurHero from "@/components/v3/AdultEntrepreneurHero";
import ProgramMatchingQuiz from "@/components/v3/ProgramMatchingQuiz";
import SuccessStoryCarousel from "@/components/v3/SuccessStoryCarousel";
import { ImpactMetricsSection } from "@/components/homepage/redesign/ImpactMetricsSection";
import { ProgramsJourneySection } from "@/components/homepage/redesign/ProgramsJourneySection";
import { CommunityPartnersSection } from "@/components/homepage/redesign/CommunityPartnersSection";
import { ReadyToStartSection } from "@/components/homepage/sections/ReadyToStartSection";
import { CyclingStickyCornerCTA } from "@/components/ui/cycling-sticky-cta";

const AdultEntrepreneurIndex: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section - Adult Entrepreneur Focused */}
      <AdultEntrepreneurHero />
      
      {/* Program Matching Quiz */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Find Your Perfect Program Match
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take our quick 3-question quiz to discover which Sheraa program is designed for your startup stage and goals.
            </p>
          </div>
          <ProgramMatchingQuiz />
        </div>
      </section>

      {/* Success Stories */}
      <SuccessStoryCarousel />

      {/* Impact Metrics - Entrepreneur Focused */}
      <ImpactMetricsSection />

      {/* Programs Journey */}
      <ProgramsJourneySection />

      {/* Community & Partners */}
      <CommunityPartnersSection />

      {/* Final CTA */}
      <ReadyToStartSection />

      {/* Sticky CTA */}
      <CyclingStickyCornerCTA />
    </MainLayout>
  );
};

export default AdultEntrepreneurIndex;