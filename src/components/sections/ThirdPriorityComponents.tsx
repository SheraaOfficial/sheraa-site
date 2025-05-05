
import React, { lazy, Suspense } from 'react';
import { SafeSuspense } from '../layout/SafeSuspense';
import { useIsMobile } from '@/hooks/useDeviceDetection';

// Proper way to define lazy-loaded components with error handling
const PartnersSection = lazy(() => 
  import("@/components/PartnersSection").catch(() => ({ 
    default: () => null 
  }))
);

const ContactSection = lazy(() => 
  import("@/components/ContactSection").catch(() => ({ 
    default: () => null 
  }))
);

const StartupsShowcase = lazy(() => 
  import("@/components/StartupsShowcase").catch(() => ({ 
    default: () => null 
  }))
);

const PodcastSection = lazy(() => 
  import("@/components/PodcastSection").catch(() => ({ 
    default: () => null 
  }))
);

const CommunitySection = lazy(() => 
  import("@/components/CommunitySection").catch(() => ({ 
    default: () => null 
  }))
);

const StartupTestimonials = lazy(() => 
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
