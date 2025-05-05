
import React, { useState, useEffect, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { SectionLoading } from './SectionLoading';
import { ErrorFallback } from './ErrorFallback';

interface SafeSuspenseProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const SafeSuspense: React.FC<SafeSuspenseProps> = ({ 
  children, 
  fallback = <SectionLoading />
}) => {
  const [hasError, setHasError] = useState(false);
  const [key, setKey] = useState(0);
  
  // Reset the error state when the key changes
  const handleRetry = () => {
    setHasError(false);
    setKey(prevKey => prevKey + 1);
  };
  
  return (
    <ErrorBoundary 
      key={key} 
      onError={() => setHasError(true)}
    >
      {hasError ? (
        <ErrorFallback onRetry={handleRetry} />
      ) : (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      )}
    </ErrorBoundary>
  );
};
