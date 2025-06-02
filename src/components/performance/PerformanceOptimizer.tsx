
import React, { Suspense, lazy } from 'react';
import { OptimizedLazyLoad } from '@/components/utils/OptimizedLazyLoad';
import { usePerformance } from '@/contexts/PerformanceContext';

// Lazy load heavy components
const TestimonialsSection = lazy(() => import('@/components/testimonials/TestimonialsSection').then(mod => ({ default: mod.TestimonialsSection })));
const InteractiveStartupsShowcase = lazy(() => import('@/components/startups/InteractiveStartupsShowcase'));

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  componentName: string;
  priority?: 'high' | 'medium' | 'low';
  height?: string | number;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  componentName,
  priority = 'medium',
  height = 'auto'
}) => {
  const { reduceAnimations, enableLazyLoading } = usePerformance();

  // Skip lazy loading for high priority components on good devices
  if (priority === 'high' || !enableLazyLoading) {
    return <>{children}</>;
  }

  return (
    <OptimizedLazyLoad 
      priority={priority}
      height={height}
      id={`perf-${componentName.toLowerCase().replace(/\s+/g, '-')}`}
      placeholder={
        <div 
          className="flex items-center justify-center bg-gray-50 dark:bg-sheraa-dark/30 rounded-lg"
          style={{ height: typeof height === 'number' ? `${height}px` : height, minHeight: '200px' }}
        >
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-sheraa-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400">Loading {componentName}...</p>
          </div>
        </div>
      }
    >
      <Suspense fallback={
        <div className="flex items-center justify-center py-8">
          <div className="w-6 h-6 border-2 border-sheraa-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        {children}
      </Suspense>
    </OptimizedLazyLoad>
  );
};
