import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { EnhancedHeroSystem } from "@/components/v3/enhanced/EnhancedHeroSystems";
import ProgramMatchingQuiz from "@/components/v3/ProgramMatchingQuiz";
import SuccessStoryCarousel from "@/components/v3/SuccessStoryCarousel";
import { ImpactMetricsSection } from "@/components/homepage/redesign/ImpactMetricsSection";
import { ProgramsJourneySection } from "@/components/homepage/redesign/ProgramsJourneySection";
import { CommunityPartnersSection } from "@/components/homepage/redesign/CommunityPartnersSection";
import { ReadyToStartSection } from "@/components/homepage/sections/ReadyToStartSection";
import { CyclingStickyCornerCTA } from "@/components/ui/cycling-sticky-cta";
import { MagneticCursor } from "@/components/v3/modern/MagneticCursor";
import { BrutalistGlassmorphism } from "@/components/v3/modern/BrutalistGlassmorphism";
import { EnhancedMobileOptimizations } from "@/components/v3/mobile/EnhancedMobileOptimizations";

const AdultEntrepreneurOp2: React.FC = () => {
  return (
    <EnhancedMobileOptimizations>
      <MagneticCursor>
        <MainLayout>
          {/* Enhanced Hero Section with Modern Video Slider */}
          <EnhancedHeroSystem persona="adult" />
      
          {/* Program Matching Quiz */}
          <BrutalistGlassmorphism className="py-16">
            <section className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 kinetic-text">
                  Find Your Perfect Program Match
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Take our quick 3-question quiz to discover which Sheraa program is designed for your startup stage and goals.
                </p>
              </div>
              <ProgramMatchingQuiz />
            </section>
          </BrutalistGlassmorphism>

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
      </MagneticCursor>
    </EnhancedMobileOptimizations>
  );
};

export default AdultEntrepreneurOp2;