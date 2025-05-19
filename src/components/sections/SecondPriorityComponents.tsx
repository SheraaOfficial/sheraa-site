
import React, { lazy, Suspense } from 'react';
import { SafeSuspense } from '../layout/SafeSuspense';
import { useIsMobile } from '@/hooks/useDeviceDetection';
import { ErrorFallback } from '../layout/ErrorFallback';

// Second priority components with improved error handling
const ProgramsOverview = lazy(() => 
  import("@/components/ProgramsOverview")
    .then(module => ({ default: module.default || module }))
    .catch(() => ({ default: () => <ErrorFallback message="Failed to load Programs Overview" /> }))
);

const EligibilityChecker = lazy(() => 
  import("@/components/EligibilityChecker")
    .then(module => ({ default: module.default || module }))
    .catch(() => ({ default: () => <ErrorFallback message="Failed to load Eligibility Checker" /> }))
);

const SEFSection = lazy(() => 
  import("@/components/SEFSection")
    .then(module => ({ default: module.default || module }))
    .catch(() => ({ default: () => <ErrorFallback message="Failed to load SEF Section" /> }))
);

const WhySharjah = lazy(() => 
  import("@/components/WhySharjah")
    .then(module => ({ default: module.default || module }))
    .catch(() => ({ default: () => <ErrorFallback message="Failed to load Why Sharjah Section" /> }))
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
