
import React, { lazy, Suspense } from 'react';
import { SafeSuspense } from '../layout/SafeSuspense';
import { useIsMobile } from '@/hooks/useDeviceDetection';
import { ErrorFallback } from '../layout/ErrorFallback';

// Define a type for the fallback components to ensure proper typing
type FallbackComponent = React.ComponentType<{
  message?: string;
}>;

// Create properly typed lazy imports
const ProgramsOverview = lazy(() => 
  import("@/components/ProgramsOverview")
    .then(module => ({ 
      default: module.default as React.ComponentType<any>
    }))
    .catch(() => ({ 
      default: (() => <ErrorFallback message="Failed to load Programs Overview" />) as React.ComponentType<any>
    }))
);

const EligibilityChecker = lazy(() => 
  import("@/components/EligibilityChecker")
    .then(module => ({ 
      default: module.default as React.ComponentType<any>
    }))
    .catch(() => ({ 
      default: (() => <ErrorFallback message="Failed to load Eligibility Checker" />) as React.ComponentType<any>
    }))
);

const SEFSection = lazy(() => 
  import("@/components/SEFSection")
    .then(module => ({ 
      default: module.default as React.ComponentType<any>
    }))
    .catch(() => ({ 
      default: (() => <ErrorFallback message="Failed to load SEF Section" />) as React.ComponentType<any>
    }))
);

const WhySharjah = lazy(() => 
  import("@/components/WhySharjah")
    .then(module => ({ 
      default: module.default as React.ComponentType<any>
    }))
    .catch(() => ({ 
      default: (() => <ErrorFallback message="Failed to load Why Sharjah Section" />) as React.ComponentType<any>
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
