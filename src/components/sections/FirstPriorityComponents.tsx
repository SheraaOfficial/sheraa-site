
import React, { lazy, Suspense } from 'react';
import { SafeSuspense } from '../layout/SafeSuspense';
import { useIsMobile } from '@/hooks/useDeviceDetection';

// First priority components with improved error handling
const MarqueeUpdates = lazy(() => 
  import("@/components/MarqueeUpdates").catch(() => ({ 
    default: () => null 
  }))
);

const ImpactNumbers = lazy(() => 
  import("@/components/ImpactNumbers").catch(() => ({ 
    default: () => null 
  }))
);

const QuoteSection = lazy(() => 
  import("@/components/QuoteSection").catch(() => ({ 
    default: () => null 
  }))
);

export const FirstPriorityComponents: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="space-y-8 md:space-y-0 w-full">
      <SafeSuspense>
        <MarqueeUpdates />
      </SafeSuspense>
      
      <div className="w-full overflow-visible my-4 md:my-0">
        <SafeSuspense>
          <ImpactNumbers />
        </SafeSuspense>
      </div>
      
      <div className="w-full overflow-visible my-4 md:my-0">
        <SafeSuspense>
          <QuoteSection />
        </SafeSuspense>
      </div>
    </div>
  );
};
