
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';
import { usePerformanceMonitor } from '@/hooks/use-performance-monitor';

interface OptimizedMobileLayoutProps {
  children: React.ReactNode;
}

export function OptimizedMobileLayout({ children }: OptimizedMobileLayoutProps) {
  const isMobile = useIsMobile();
  const devicePerformance = useDevicePerformance();
  const performanceMetrics = usePerformanceMonitor();
  const [isOptimized, setIsOptimized] = useState(false);
  
  useEffect(() => {
    if (isMobile) {
      // Set viewport meta tag for proper mobile scaling
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover');
      }

      // Apply performance optimizations based on device capability
      if (devicePerformance === 'low' || performanceMetrics.connectionType === 'slow-2g' || performanceMetrics.connectionType === '2g') {
        // For very low-end devices or poor connections, apply aggressive optimizations
        document.documentElement.classList.add('reduce-animations', 'reduce-effects');
      }
      
      setIsOptimized(true);
    }
    
    return () => {
      // Cleanup if needed
      document.documentElement.classList.remove('reduce-animations', 'reduce-effects');
    };
  }, [isMobile, devicePerformance, performanceMetrics.connectionType]);

  // Apply mobile-specific styles and optimizations with proper TypeScript types
  const mobileOptimizationStyles: React.CSSProperties = isMobile ? {
    overscrollBehavior: 'contain', 
    WebkitOverflowScrolling: 'touch', 
    touchAction: 'manipulation'
  } : {};

  return (
    <div 
      className={`mobile-optimized ${isOptimized ? 'optimized' : ''}`}
      style={mobileOptimizationStyles}
      data-performance={devicePerformance}
      data-connection={performanceMetrics.connectionType || 'unknown'}
    >
      {children}
    </div>
  );
}
