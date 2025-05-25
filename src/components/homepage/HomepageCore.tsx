
import React from "react";
import { WhyChooseSheraaSection } from "./sections/WhyChooseSheraaSection";
import { EntrepreneurialJourneySection } from "./sections/EntrepreneurialJourneySection";
import { ImpactStorySection } from "./sections/ImpactStorySection";
import { InnovationShowcaseSection } from "./sections/InnovationShowcaseSection";
import { CommunityEcosystemSection } from "./sections/CommunityEcosystemSection";
import { ImmersiveQuoteSection } from "./sections/ImmersiveQuoteSection";
import { FinalCallToActionSection } from "./sections/FinalCallToActionSection";

export const HomepageCore: React.FC = () => {
  return (
    <>
      <WhyChooseSheraaSection />
      <EntrepreneurialJourneySection />
      <ImpactStorySection />
      <InnovationShowcaseSection />
      <CommunityEcosystemSection />
      <ImmersiveQuoteSection />
      <FinalCallToActionSection />
    </>
  );
};
