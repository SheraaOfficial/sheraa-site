
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
  const [key, setKey] = useState(0);
  
  const handleRetry = () => {
    setKey(prevKey => prevKey + 1);
  };
  
  // Create a more stable error boundary component
  const ErrorFallbackComponent = () => {
    return <ErrorFallback onRetry={handleRetry} />;
  };
  
  return (
    <div className="w-full">
      <ErrorBoundary 
        key={key} 
        FallbackComponent={ErrorFallbackComponent}
      >
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
