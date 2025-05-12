
import React from 'react';
import { OptimizedMobileLayout } from './layouts/OptimizedMobileLayout';
import { useIsMobile } from '@/hooks/use-mobile';
import { PerformanceProvider } from '@/contexts/PerformanceContext';

interface MobileOptimizedAppProps {
  children: React.ReactNode;
}

export function MobileOptimizedApp({ children }: MobileOptimizedAppProps) {
  const isMobile = useIsMobile();
  
  // Apply specific mobile optimizations at the app level
  return (
    <PerformanceProvider>
      <OptimizedMobileLayout>
        {children}
      </OptimizedMobileLayout>
    </PerformanceProvider>
  );
}
