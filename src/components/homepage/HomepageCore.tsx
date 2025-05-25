
import React from "react";
import { ImpactAtScaleSection } from "./sections/ImpactAtScaleSection";
import { EntrepreneurialJourneySection } from "./sections/EntrepreneurialJourneySection";
import { InnovationShowcaseSection } from "./sections/InnovationShowcaseSection";
import { CommunityEcosystemSection } from "./sections/CommunityEcosystemSection";
import { FinalCallToActionSection } from "./sections/FinalCallToActionSection";

export const HomepageCore: React.FC = () => {
  return (
    <>
      <ImpactAtScaleSection />
      <EntrepreneurialJourneySection />
      <InnovationShowcaseSection />
      <CommunityEcosystemSection />
      <FinalCallToActionSection />
    </>
  );
};
