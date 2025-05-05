
import React, { lazy } from 'react';
import { SafeSuspense } from '../layout/SafeSuspense';
import { useIsMobile } from '@/hooks/useDeviceDetection';
import { ErrorFallback } from '../layout/ErrorFallback';

// Simple fallback component
const SimpleFallback = () => <div className="h-20 md:h-32"></div>;

// Properly type the lazy imports without explicit annotations
// React.lazy() will correctly infer the component types
const PartnersSection = lazy(() => 
  import("@/components/PartnersSection")
    .then(module => ({ default: module.default }))
    .catch(error => {
      console.error("Failed to load Partners section:", error);
      return { default: () => <ErrorFallback message="Unable to load Partners section" /> };
    })
);

const ContactSection = lazy(() => 
  import("@/components/ContactSection")
    .then(module => ({ default: module.default }))
    .catch(error => {
      console.error("Failed to load Contact section:", error);
      return { default: () => <ErrorFallback message="Unable to load Contact section" /> };
    })
);

const StartupsShowcase = lazy(() => 
  import("@/components/StartupsShowcase")
    .then(module => ({ default: module.default }))
    .catch(error => {
      console.error("Failed to load Startups showcase:", error);
      return { default: () => <ErrorFallback message="Unable to load Startups showcase" /> };
    })
);

const PodcastSection = lazy(() => 
  import("@/components/PodcastSection")
    .then(module => ({ default: module.default }))
    .catch(error => {
      console.error("Failed to load Podcast section:", error);
      return { default: () => <ErrorFallback message="Unable to load Podcast section" /> };
    })
);

const CommunitySection = lazy(() => 
  import("@/components/CommunitySection")
    .then(module => ({ default: module.default }))
    .catch(error => {
      console.error("Failed to load Community section:", error);
      return { default: () => <ErrorFallback message="Unable to load Community section" /> };
    })
);

const StartupTestimonials = lazy(() => 
  import("@/components/StartupTestimonials")
    .then(module => ({ default: module.default }))
    .catch(error => {
      console.error("Failed to load Testimonials:", error);
      return { default: () => <ErrorFallback message="Unable to load Testimonials" /> };
    })
);

export const ThirdPriorityComponents: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="space-y-4 md:space-y-0">
      <div className="w-full" id="startups-section">
        <SafeSuspense fallback={<SimpleFallback />}>
          <StartupsShowcase />
        </SafeSuspense>
      </div>
      
      <div className="w-full" id="podcast-section">
        <SafeSuspense fallback={<SimpleFallback />}>
          <PodcastSection />
        </SafeSuspense>
      </div>
      
      <div className="w-full" id="community-section">
        <SafeSuspense fallback={<SimpleFallback />}>
          <CommunitySection />
        </SafeSuspense>
      </div>
      
      <div className="w-full" id="testimonials-section">
        <SafeSuspense fallback={<SimpleFallback />}>
          <StartupTestimonials />
        </SafeSuspense>
      </div>
      
      <div className="w-full" id="partners-section">
        <SafeSuspense fallback={<SimpleFallback />}>
          <PartnersSection />
        </SafeSuspense>
      </div>
      
      <div className="w-full" id="contact-section">
        <SafeSuspense fallback={<SimpleFallback />}>
          <ContactSection />
        </SafeSuspense>
      </div>
    </div>
  );
};
