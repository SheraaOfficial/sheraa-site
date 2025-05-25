
import React, { lazy, Suspense } from "react";
import { FirstPriorityComponents } from "../sections/FirstPriorityComponents";
import { WhyChooseSheraaSection } from "./sections/WhyChooseSheraaSection";
import { VideoBackgroundSection } from "./sections/VideoBackgroundSection";
import { SectionLoading } from "../layout/SectionLoading";

// Lazy load secondary components
const CommunityPartnersSection = lazy(() => import("./sections/CommunityPartnersSection").then(mod => ({ default: mod.CommunityPartnersSection })));
const SEFHighlightSection = lazy(() => import("./sections/SEFHighlightSection").then(mod => ({ default: mod.SEFHighlightSection })));

export const HomepageCore: React.FC = () => {
  return (
    <>
      {/* Critical above-the-fold content */}
      <FirstPriorityComponents />
      
      {/* Video background section */}
      <VideoBackgroundSection />
      
      {/* Why Choose Sheraa section */}
      <WhyChooseSheraaSection />
      
      {/* Lazy-loaded sections */}
      <Suspense fallback={<SectionLoading />}>
        <SEFHighlightSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <CommunityPartnersSection />
      </Suspense>
    </>
  );
};
