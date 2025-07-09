import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import ImmersiveYoungEntrepreneurHero from "@/components/v3/young/ImmersiveYoungEntrepreneurHero";
import YoungEntrepreneurNavigation from "@/components/v3/young/YoungEntrepreneurNavigation";
import { CyclingStickyCornerCTA } from "@/components/ui/cycling-sticky-cta";

const YoungEntrepreneurIndex: React.FC = () => {
  return (
    <MainLayout>
      <YoungEntrepreneurNavigation />
      {/* Hero Section - Young Entrepreneur Focused */}
      <ImmersiveYoungEntrepreneurHero />
      
      {/* Placeholder for upcoming components */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 young-gradient-text">
            More Amazing Features Coming Soon! 🎮
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're building the most engaging entrepreneurial experience for young innovators. 
            Interactive games, peer matching, and gamified learning are on the way!
          </p>
        </div>
      </section>

      {/* Sticky CTA */}
      <CyclingStickyCornerCTA />
    </MainLayout>
  );
};

export default YoungEntrepreneurIndex;