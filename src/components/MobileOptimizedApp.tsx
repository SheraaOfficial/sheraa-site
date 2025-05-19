
import React, { useEffect } from 'react';
import { OptimizedMobileLayout } from './layouts/OptimizedMobileLayout';
import { useIsMobile } from '@/hooks/use-mobile';
import { usePerformanceMonitor } from '@/hooks/use-performance-monitor';

interface MobileOptimizedAppProps {
  children: React.ReactNode;
}

export function MobileOptimizedApp({ children }: MobileOptimizedAppProps) {
  const isMobile = useIsMobile();
  const performanceMetrics = usePerformanceMonitor();
  
  useEffect(() => {
    // Apply optimizations based on device capabilities
    if (isMobile) {
      // Add mobile stylesheet to head
      const linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = '/styles/mobile-optimizations.css';
      linkElement.id = 'mobile-optimizations-css';
      document.head.appendChild(linkElement);
      
      // Apply low-end optimizations if needed
      if (performanceMetrics.isLowEndExperience) {
        document.documentElement.classList.add('reduce-animations', 'reduce-effects');
      }
    }
    
    return () => {
      // Cleanup when component unmounts
      const linkElement = document.getElementById('mobile-optimizations-css');
      if (linkElement) {
        document.head.removeChild(linkElement);
      }
      document.documentElement.classList.remove('reduce-animations', 'reduce-effects');
    };
  }, [isMobile, performanceMetrics.isLowEndExperience]);
  
  if (isMobile) {
    return <OptimizedMobileLayout>{children}</OptimizedMobileLayout>;
  }
  
  return <>{children}</>;
}
