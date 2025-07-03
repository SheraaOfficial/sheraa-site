
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import GeneralNavigation from "@/components/v3/general/GeneralNavigation";
import GeneralHeroSection from "@/components/v3/general/GeneralHeroSection";
import EducationalPathways from "@/components/v3/general/EducationalPathways";
import InteractiveLearningHub from "@/components/v3/general/InteractiveLearningHub";
import CommunityFeaturesSection from "@/components/v3/general/CommunityFeaturesSection";
import GettingStartedAssessment from "@/components/v3/general/GettingStartedAssessment";
import GeneralFAQSection from "@/components/v3/general/GeneralFAQSection";
import NewsletterEventsSection from "@/components/v3/general/NewsletterEventsSection";

const GeneralEntrepreneurIndex: React.FC = () => {
  return (
    <MainLayout>
      <GeneralNavigation />
      <GeneralHeroSection />
      <EducationalPathways />
      <InteractiveLearningHub />
      <CommunityFeaturesSection />
      <GettingStartedAssessment />
      <NewsletterEventsSection />
      <GeneralFAQSection />
    </MainLayout>
  );
};

export default GeneralEntrepreneurIndex;
