
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
    <div className="space-y-2 md:space-y-0">
      <SafeSuspense>
        <MarqueeUpdates />
      </SafeSuspense>
      
      <SafeSuspense>
        <ImpactNumbers />
      </SafeSuspense>
      
      <SafeSuspense>
        <QuoteSection />
      </SafeSuspense>
    </div>
  );
};
