
import React, { lazy, Suspense } from 'react';
import { SafeSuspense } from '../layout/SafeSuspense';
import { useIsMobile } from '@/hooks/useDeviceDetection';

// Second priority components with improved error handling
const ProgramsOverview = lazy(() => 
  import("@/components/ProgramsOverview").catch(() => ({ 
    default: () => null 
  }))
);

const EligibilityChecker = lazy(() => 
  import("@/components/EligibilityChecker").catch(() => ({ 
    default: () => null 
  }))
);

const SEFSection = lazy(() => 
  import("@/components/SEFSection").catch(() => ({ 
    default: () => null 
  }))
);

const WhySharjah = lazy(() => 
  import("@/components/WhySharjah").catch(() => ({ 
    default: () => null 
  }))
);

export const SecondPriorityComponents: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="space-y-2 md:space-y-0">
      <SafeSuspense>
        <ProgramsOverview />
      </SafeSuspense>
      
      <SafeSuspense>
        <EligibilityChecker />
      </SafeSuspense>
      
      <SafeSuspense>
        <SEFSection />
      </SafeSuspense>
      
      <SafeSuspense>
        <WhySharjah />
      </SafeSuspense>
    </div>
  );
};
