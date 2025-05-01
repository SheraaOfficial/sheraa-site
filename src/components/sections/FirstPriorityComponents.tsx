
import React, { lazy } from 'react';
import { SafeSuspense } from '../layout/SafeSuspense';

// First priority components
const MarqueeUpdates = lazy(() => import("@/components/MarqueeUpdates"));
const ImpactNumbers = lazy(() => import("@/components/ImpactNumbers"));
const QuoteSection = lazy(() => import("@/components/QuoteSection"));

export const FirstPriorityComponents: React.FC = () => {
  return (
    <>
      <SafeSuspense>
        <MarqueeUpdates />
      </SafeSuspense>
      
      <SafeSuspense>
        <ImpactNumbers />
      </SafeSuspense>
      
      <SafeSuspense>
        <QuoteSection />
      </SafeSuspense>
    </>
  );
};
