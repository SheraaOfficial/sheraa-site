
import React, { lazy } from 'react';
import { SafeSuspense } from '../layout/SafeSuspense';
import { useIsMobile } from '@/hooks/useDeviceDetection';
import { ErrorFallback } from '../layout/ErrorFallback';

// Simple fallback component
const SimpleFallback = () => <div className="h-20 md:h-32 flex items-center justify-center">
  <div className="w-6 h-6 border-t-2 border-sheraa-primary rounded-full animate-spin"></div>
</div>;

// Improved lazy loading with better error handling
const PartnersSection = lazy(() => 
  import("@/components/PartnersSection")
    .then(module => ({ 
      default: module.default as React.ComponentType<any>
    }))
    .catch(() => ({ 
      default: () => <ErrorFallback error={new Error("Failed to load Partners Section")} resetErrorBoundary={() => window.location.reload()} /> 
    }))
);

const ContactSection = lazy(() => 
  import("@/components/ContactSection")
    .then(module => ({ 
      default: module.default as React.ComponentType<any>
    }))
    .catch(() => ({ 
      default: () => <ErrorFallback error={new Error("Failed to load Contact Section")} resetErrorBoundary={() => window.location.reload()} /> 
    }))
);

const StartupsShowcase = lazy(() => 
  import("@/components/StartupsShowcase")
    .then(module => ({ 
      default: module.default as React.ComponentType<any>
    }))
    .catch(() => ({ 
      default: () => <ErrorFallback error={new Error("Failed to load Startups Showcase")} resetErrorBoundary={() => window.location.reload()} /> 
    }))
);

const PodcastSection = lazy(() => 
  import("@/components/PodcastSection")
    .then(module => ({ 
      default: module.default as React.ComponentType<any>
    }))
    .catch(() => ({ 
      default: () => <ErrorFallback error={new Error("Failed to load Podcast Section")} resetErrorBoundary={() => window.location.reload()} /> 
    }))
);

const CommunitySection = lazy(() => 
  import("@/components/CommunitySection")
    .then(module => ({ 
      default: module.default as React.ComponentType<any>
    }))
    .catch(() => ({ 
      default: () => <ErrorFallback error={new Error("Failed to load Community Section")} resetErrorBoundary={() => window.location.reload()} /> 
    }))
);

const StartupTestimonials = lazy(() => 
  import("@/components/StartupTestimonials")
    .then(module => ({ 
      default: module.default as React.ComponentType<any>
    }))
    .catch(() => ({ 
      default: () => <ErrorFallback error={new Error("Failed to load Startup Testimonials")} resetErrorBoundary={() => window.location.reload()} /> 
    }))
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
