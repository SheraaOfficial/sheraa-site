
import React, { lazy } from 'react';
import { SafeSuspense } from '../layout/SafeSuspense';

// Lowest priority components
const PartnersSection = lazy(() => import("@/components/PartnersSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const StartupsShowcase = lazy(() => import("@/components/StartupsShowcase"));
const PodcastSection = lazy(() => import("@/components/PodcastSection"));
const CommunitySection = lazy(() => import("@/components/CommunitySection"));
const StartupTestimonials = lazy(() => import("@/components/StartupTestimonials"));

export const ThirdPriorityComponents: React.FC = () => {
  return (
    <>
      <SafeSuspense>
        <StartupsShowcase />
      </SafeSuspense>
      
      <SafeSuspense>
        <PodcastSection />
      </SafeSuspense>
      
      <SafeSuspense>
        <CommunitySection />
      </SafeSuspense>
      
      <SafeSuspense>
        <StartupTestimonials />
      </SafeSuspense>
      
      <SafeSuspense>
        <PartnersSection />
      </SafeSuspense>
      
      <SafeSuspense>
        <ContactSection />
      </SafeSuspense>
    </>
  );
};
