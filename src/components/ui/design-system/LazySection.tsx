
import React, { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  errorFallback?: React.ComponentType<{ error: Error; resetErrorBoundary: () => void }>;
}

const DefaultSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  </div>
);

const DefaultErrorFallback: React.FC<{ error: Error; resetErrorBoundary: () => void }> = ({ 
  error, 
  resetErrorBoundary 
}) => (
  <div className="text-center py-8">
    <h2 className="text-lg font-semibold text-gray-900 mb-2">Something went wrong</h2>
    <p className="text-gray-600 mb-4">{error.message}</p>
    <button 
      onClick={resetErrorBoundary}
      className="px-4 py-2 bg-sheraa-primary text-white rounded hover:bg-sheraa-primary/90 transition-colors"
    >
      Try again
    </button>
  </div>
);

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback = <DefaultSkeleton />,
  errorFallback = DefaultErrorFallback
}) => {
  return (
    <ErrorBoundary FallbackComponent={errorFallback}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

// Higher-order component for lazy loading sections
export const withLazyLoading = <P extends Record<string, any>>(
  Component: React.ComponentType<P>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  return React.forwardRef<any, P>((props, ref) => (
    <LazySection fallback={fallback}>
      <LazyComponent {...props} ref={ref} />
    </LazySection>
  ));
};
