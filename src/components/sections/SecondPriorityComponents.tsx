
import React, { lazy } from 'react';
import { SafeSuspense } from '../layout/SafeSuspense';

// Second priority components
const ProgramsOverview = lazy(() => import("@/components/ProgramsOverview"));
const EligibilityChecker = lazy(() => import("@/components/EligibilityChecker"));
const SEFSection = lazy(() => import("@/components/SEFSection"));
const WhySharjah = lazy(() => import("@/components/WhySharjah"));

export const SecondPriorityComponents: React.FC = () => {
  return (
    <>
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
    </>
  );
};
