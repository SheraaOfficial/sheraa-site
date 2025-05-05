
import React, { lazy, Suspense } from 'react';
import { SafeSuspense } from '../layout/SafeSuspense';
import { useIsMobile } from '@/hooks/useDeviceDetection';

// Define a consistent return type for the error fallback
type ComponentWithErrorFallback = {
  default: React.ComponentType<any>;
};

// Lowest priority components with improved error handling
const PartnersSection = lazy<ComponentWithErrorFallback>(() => 
  import("@/components/PartnersSection").catch(() => ({ 
    default: () => null 
  }))
);

const ContactSection = lazy<ComponentWithErrorFallback>(() => 
  import("@/components/ContactSection").catch(() => ({ 
    default: () => null 
  }))
);

const StartupsShowcase = lazy<ComponentWithErrorFallback>(() => 
  import("@/components/StartupsShowcase").catch(() => ({ 
    default: () => null 
  }))
);

const PodcastSection = lazy<ComponentWithErrorFallback>(() => 
  import("@/components/PodcastSection").catch(() => ({ 
    default: () => null 
  }))
);

const CommunitySection = lazy<ComponentWithErrorFallback>(() => 
  import("@/components/CommunitySection").catch(() => ({ 
    default: () => null 
  }))
);

const StartupTestimonials = lazy<ComponentWithErrorFallback>(() => 
  import("@/components/StartupTestimonials").catch(() => ({ 
    default: () => null 
  }))
);

export const ThirdPriorityComponents: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="space-y-2 md:space-y-0">
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
    </div>
  );
};
