
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import GeneralNavigation from "@/components/v3/general/GeneralNavigation";
import { EnhancedHeroSystem } from "@/components/v3/enhanced/EnhancedHeroSystems";
import EducationalPathways from "@/components/v3/general/EducationalPathways";
import InteractiveLearningHub from "@/components/v3/general/InteractiveLearningHub";
import CommunityFeaturesSection from "@/components/v3/general/CommunityFeaturesSection";
import GettingStartedAssessment from "@/components/v3/general/GettingStartedAssessment";
import GeneralFAQSection from "@/components/v3/general/GeneralFAQSection";
import NewsletterEventsSection from "@/components/v3/general/NewsletterEventsSection";
import { MagneticCursor } from "@/components/v3/modern/MagneticCursor";
import { BrutalistGlassmorphism } from "@/components/v3/modern/BrutalistGlassmorphism";
import { EnhancedMobileOptimizations } from "@/components/v3/mobile/EnhancedMobileOptimizations";

const GeneralEntrepreneurIndex: React.FC = () => {
  return (
    <EnhancedMobileOptimizations>
      <MagneticCursor>
        <MainLayout>
          <GeneralNavigation />
          <EnhancedHeroSystem persona="general" />
          <BrutalistGlassmorphism>
            <EducationalPathways />
            <InteractiveLearningHub />
            <CommunityFeaturesSection />
            <GettingStartedAssessment />
            <NewsletterEventsSection />
            <GeneralFAQSection />
          </BrutalistGlassmorphism>
        </MainLayout>
      </MagneticCursor>
    </EnhancedMobileOptimizations>
  );
};

export default GeneralEntrepreneurIndex;
