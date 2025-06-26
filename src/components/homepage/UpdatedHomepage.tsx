
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import EnhancedHero from "@/components/hero/EnhancedHero";
import { StickyJoinCommunityButton } from "@/components/header/StickyJoinCommunityButton";
import { ImpactMetricsSection } from "@/components/homepage/redesign/ImpactMetricsSection";
import { ReorganizedSuccessStoriesSection } from "@/components/homepage/sections/ReorganizedSuccessStoriesSection";
import { EnhancedProgramsSection } from "@/components/programs/EnhancedProgramsSection";
import { SEFHighlightSection } from "@/components/homepage/redesign/SEFHighlightSection";
import { CommunityPartnersSection } from "@/components/homepage/redesign/CommunityPartnersSection";
import { WhySharjahSection } from "@/components/homepage/sections/WhySharjahSection";
import { ReadyToStartSection } from "@/components/homepage/sections/ReadyToStartSection";
import { CyclingStickyCornerCTA } from "@/components/ui/cycling-sticky-cta";

const UpdatedHomepage: React.FC = () => {
  console.log("UpdatedHomepage component is rendering");
  
  return (
    <MainLayout className="bg-white dark:bg-sheraa-dark">
      {/* Sticky Join Community Button - moved to top-right */}
      <StickyJoinCommunityButton />
      
      {/* Hero Section - with subtle pattern animation, removed "Sharjah's #1" tag */}
      <EnhancedHero />
      
      {/* Impact Numbers Section */}
      <ImpactMetricsSection />
      
      {/* Success Stories Section - moved after impact numbers */}
      <ReorganizedSuccessStoriesSection />
      
      {/* Enhanced Programs Section - with Centers of Excellence and logos */}
      <EnhancedProgramsSection />
      
      {/* SEF Highlight */}
      <SEFHighlightSection />
      
      {/* Community Partners */}
      <CommunityPartnersSection />
      
      {/* Why Sharjah */}
      <WhySharjahSection />
      
      {/* Ready to Start */}
      <ReadyToStartSection />
      
      {/* Cycling Sticky CTA */}
      <CyclingStickyCornerCTA />
    </MainLayout>
  );
};

export default UpdatedHomepage;
