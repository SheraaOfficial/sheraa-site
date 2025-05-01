
import React, { useState, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { SectionLoading } from './SectionLoading';
import { ErrorFallback } from './ErrorFallback';

interface SafeSuspenseProps {
  children: React.ReactNode;
}

export const SafeSuspense: React.FC<SafeSuspenseProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) return <ErrorFallback />;
  
  return (
    <React.Fragment>
      <ErrorBoundary onError={() => setHasError(true)}>
        <Suspense fallback={<SectionLoading />}>
          {children}
        </Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
};
