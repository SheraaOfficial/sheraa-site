import { useEffect, useState } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  hasTouch: boolean;
  orientation: 'portrait' | 'landscape';
  performance: 'high' | 'medium' | 'low';
}

export const useMobileOptimization = () => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    hasTouch: false,
    orientation: 'landscape',
    performance: 'high'
  });

  useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Detect device type
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;
      
      // Detect orientation
      const orientation = height > width ? 'portrait' : 'landscape';
      
      // Simple performance detection based on device capabilities
      const performance = getPerformanceLevel();
      
      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        hasTouch,
        orientation,
        performance
      });
      
      // Apply optimizations based on device
      applyMobileOptimizations({ isMobile, isTablet, hasTouch, performance });
    };

    const getPerformanceLevel = (): 'high' | 'medium' | 'low' => {
      // Check for performance indicators
      const memory = (navigator as any).deviceMemory;
      const cores = navigator.hardwareConcurrency;
      
      if (memory && memory < 2) return 'low';
      if (cores && cores < 4) return 'medium';
      if (deviceInfo.isMobile) return 'medium';
      
      return 'high';
    };

    const applyMobileOptimizations = (info: Partial<DeviceInfo>) => {
      const html = document.documentElement;
      
      // Apply performance optimizations
      if (info.performance === 'low') {
        html.classList.add('reduce-animations', 'reduce-effects');
      } else {
        html.classList.remove('reduce-animations', 'reduce-effects');
      }
      
      // Mobile-specific optimizations
      if (info.isMobile) {
        // Prevent zoom on input focus
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
          viewport.setAttribute('content', 
            'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
          );
        }
        
        // Add mobile class for specific styling
        html.classList.add('mobile-device');
      } else {
        html.classList.remove('mobile-device');
      }
      
      // Touch device optimizations
      if (info.hasTouch) {
        html.classList.add('touch-device');
      } else {
        html.classList.remove('touch-device');
      }
    };

    // Initial setup
    updateDeviceInfo();
    
    // Listen for resize and orientation changes
    window.addEventListener('resize', updateDeviceInfo);
    window.addEventListener('orientationchange', updateDeviceInfo);
    
    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
      window.removeEventListener('orientationchange', updateDeviceInfo);
    };
  }, []);

  return deviceInfo;
};

export default useMobileOptimization;