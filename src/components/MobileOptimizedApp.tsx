
import React from 'react';
import { OptimizedMobileLayout } from './layouts/OptimizedMobileLayout';
import { useIsMobile } from '@/hooks/use-mobile';

interface MobileOptimizedAppProps {
  children: React.ReactNode;
}

export function MobileOptimizedApp({ children }: MobileOptimizedAppProps) {
  const isMobile = useIsMobile();
  
  // Apply specific mobile optimizations at the app level
  return <OptimizedMobileLayout>{children}</OptimizedMobileLayout>;
}
