
import React, { lazy, ComponentType } from 'react';
import { SafeSuspense } from '../layout/SafeSuspense';
import { useIsMobile } from '@/hooks/useDeviceDetection';
import { ErrorFallback } from '../layout/ErrorFallback';

// Simple fallback component
const SimpleFallback = () => <div className="h-20 md:h-32"></div>;

// Use a more flexible type that matches what React.lazy() actually returns
// This avoids the strict NamedExoticComponent requirement
type LazyComponent = React.LazyExoticComponent<React.ComponentType<any>>;

const PartnersSection: LazyComponent = lazy(() => 
  import("@/components/PartnersSection")
    .catch(error => {
      console.error("Failed to load Partners section:", error);
      return { default: () => <ErrorFallback message="Unable to load Partners section" /> };
    })
);

const ContactSection: LazyComponent = lazy(() => 
  import("@/components/ContactSection")
    .catch(error => {
      console.error("Failed to load Contact section:", error);
      return { default: () => <ErrorFallback message="Unable to load Contact section" /> };
    })
);

const StartupsShowcase: LazyComponent = lazy(() => 
  import("@/components/StartupsShowcase")
    .catch(error => {
      console.error("Failed to load Startups showcase:", error);
      return { default: () => <ErrorFallback message="Unable to load Startups showcase" /> };
    })
);

const PodcastSection: LazyComponent = lazy(() => 
  import("@/components/PodcastSection")
    .catch(error => {
      console.error("Failed to load Podcast section:", error);
      return { default: () => <ErrorFallback message="Unable to load Podcast section" /> };
    })
);

const CommunitySection: LazyComponent = lazy(() => 
  import("@/components/CommunitySection")
    .catch(error => {
      console.error("Failed to load Community section:", error);
      return { default: () => <ErrorFallback message="Unable to load Community section" /> };
    })
);

const StartupTestimonials: LazyComponent = lazy(() => 
  import("@/components/StartupTestimonials")
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
