
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
    <div className="flex flex-col w-full gap-4 md:gap-0 my-4 md:my-0 pb-8 md:pb-0">
      <div className="w-full overflow-visible">
        <SafeSuspense>
          <MarqueeUpdates />
        </SafeSuspense>
      </div>
      
      <div className="w-full overflow-visible">
        <SafeSuspense>
          <ImpactNumbers />
        </SafeSuspense>
      </div>
      
      <div className="w-full overflow-visible">
        <SafeSuspense>
          <QuoteSection />
        </SafeSuspense>
      </div>
    </div>
  );
};
