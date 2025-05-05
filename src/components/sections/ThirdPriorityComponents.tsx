
import React, { lazy, ComponentType } from 'react';
import { SafeSuspense } from '../layout/SafeSuspense';
import { useIsMobile } from '@/hooks/useDeviceDetection';
import { ErrorFallback } from '../layout/ErrorFallback';

// Simple fallback component
const SimpleFallback = () => <div className="h-20 md:h-32"></div>;

// Fix type issues by using the correct typing for lazy-loaded components
// React.lazy() returns a component that renders the default export of another module
type LazyComponentType = React.LazyExoticComponent<ComponentType<any>>;

const PartnersSection: LazyComponentType = lazy(() => 
  import("@/components/PartnersSection")
    .catch(error => {
      console.error("Failed to load Partners section:", error);
      return { default: () => <ErrorFallback message="Unable to load Partners section" /> };
    })
);

const ContactSection: LazyComponentType = lazy(() => 
  import("@/components/ContactSection")
    .catch(error => {
      console.error("Failed to load Contact section:", error);
      return { default: () => <ErrorFallback message="Unable to load Contact section" /> };
    })
);

const StartupsShowcase: LazyComponentType = lazy(() => 
  import("@/components/StartupsShowcase")
    .catch(error => {
      console.error("Failed to load Startups showcase:", error);
      return { default: () => <ErrorFallback message="Unable to load Startups showcase" /> };
    })
);

const PodcastSection: LazyComponentType = lazy(() => 
  import("@/components/PodcastSection")
    .catch(error => {
      console.error("Failed to load Podcast section:", error);
      return { default: () => <ErrorFallback message="Unable to load Podcast section" /> };
    })
);

const CommunitySection: LazyComponentType = lazy(() => 
  import("@/components/CommunitySection")
    .catch(error => {
      console.error("Failed to load Community section:", error);
      return { default: () => <ErrorFallback message="Unable to load Community section" /> };
    })
);

const StartupTestimonials: LazyComponentType = lazy(() => 
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
