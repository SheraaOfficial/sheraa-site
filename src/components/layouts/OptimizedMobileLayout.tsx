
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
        viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover');
      }

      // Apply performance optimizations based on device capability
      if (devicePerformance === 'low' || performanceMetrics.connectionType === 'slow-2g' || performanceMetrics.connectionType === '2g') {
        // For very low-end devices or poor connections, apply aggressive optimizations
        document.documentElement.classList.add('reduce-animations', 'reduce-effects');
      }
      
      // Add a class to the body for mobile-specific styling
      document.body.classList.add('mobile-device');
      
      setIsOptimized(true);
    } else {
      // Remove mobile class if not mobile
      document.body.classList.remove('mobile-device');
      
      // Reset viewport if needed
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1, viewport-fit=cover');
      }
    }
    
    return () => {
      // Cleanup when component unmounts
      document.documentElement.classList.remove('reduce-animations', 'reduce-effects');
      document.body.classList.remove('mobile-device');
    };
  }, [isMobile, devicePerformance, performanceMetrics.connectionType]);

  // Apply mobile-specific styles and optimizations
  const mobileOptimizationStyles = isMobile ? {
    overscrollBehavior: 'contain' as const, 
    WebkitOverflowScrolling: 'touch' as const, 
    touchAction: 'manipulation' as const,
    maxWidth: '100vw'
  } : {};

  return (
    <div 
      className={`${isMobile ? 'mobile-optimized' : ''} ${isOptimized ? 'optimized' : ''}`}
      style={mobileOptimizationStyles}
      data-performance={devicePerformance}
      data-connection={performanceMetrics.connectionType || 'unknown'}
      data-device={isMobile ? 'mobile' : 'desktop'}
    >
      {children}
    </div>
  );
}
