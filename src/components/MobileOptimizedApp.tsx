
import React from 'react';
import { OptimizedMobileLayout } from './layouts/OptimizedMobileLayout';
import { useIsMobile } from '@/hooks/use-mobile';

interface MobileOptimizedAppProps {
  children: React.ReactNode;
}

export function MobileOptimizedApp({ children }: MobileOptimizedAppProps) {
  const isMobile = useIsMobile();
  
  return <>{children}</>; // Simplified to just render children directly
}
