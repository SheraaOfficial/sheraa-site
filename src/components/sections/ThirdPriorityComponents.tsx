
import React, { lazy, Suspense } from 'react';
import { SafeSuspense } from '../layout/SafeSuspense';
import { useIsMobile } from '@/hooks/useDeviceDetection';
import { ErrorFallback } from '../layout/ErrorFallback';

// Properly define the lazy-loaded components with correct typing and better error handling
const PartnersSection = lazy(() => 
  import("@/components/PartnersSection")
    .then(module => ({ default: module.default }))
    .catch(() => ({ default: () => <ErrorFallback message="Failed to load Partners section" /> }))
);

const ContactSection = lazy(() => 
  import("@/components/ContactSection")
    .then(module => ({ default: module.default }))
    .catch(() => ({ default: () => <ErrorFallback message="Failed to load Contact section" /> }))
);

// Fix StartupsShowcase import using type assertion
const StartupsShowcase = lazy(() => 
  import("@/components/StartupsShowcase")
    .then(module => ({ default: module.default as React.ComponentType<{}> }))
    .catch(() => ({ default: () => <ErrorFallback message="Failed to load Startups showcase" /> }))
);

const PodcastSection = lazy(() => 
  import("@/components/PodcastSection")
    .then(module => ({ default: module.default }))
    .catch(() => ({ default: () => <ErrorFallback message="Failed to load Podcast section" /> }))
);

const CommunitySection = lazy(() => 
  import("@/components/CommunitySection")
    .then(module => ({ default: module.default }))
    .catch(() => ({ default: () => <ErrorFallback message="Failed to load Community section" /> }))
);

const StartupTestimonials = lazy(() => 
  import("@/components/StartupTestimonials")
    .then(module => ({ default: module.default }))
    .catch(() => ({ default: () => <ErrorFallback message="Failed to load Testimonials" /> }))
);

export const ThirdPriorityComponents: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="space-y-4 md:space-y-0">
      {/* Disable parallax wrapper on mobile which might cause the pulsating effect */}
      <div className="w-full" id="startups-section">
        <SafeSuspense>
          <StartupsShowcase />
        </SafeSuspense>
      </div>
      
      <div className="w-full" id="podcast-section">
        <SafeSuspense>
          <PodcastSection />
        </SafeSuspense>
      </div>
      
      <div className="w-full" id="community-section">
        <SafeSuspense>
          <CommunitySection />
        </SafeSuspense>
      </div>
      
      <div className="w-full" id="testimonials-section">
        <SafeSuspense>
          <StartupTestimonials />
        </SafeSuspense>
      </div>
      
      <div className="w-full" id="partners-section">
        <SafeSuspense>
          <PartnersSection />
        </SafeSuspense>
      </div>
      
      <div className="w-full" id="contact-section">
        <SafeSuspense>
          <ContactSection />
        </SafeSuspense>
      </div>
    </div>
  );
};
