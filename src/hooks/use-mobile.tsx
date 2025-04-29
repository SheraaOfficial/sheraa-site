
import * as React from "react"

const MOBILE_BREAKPOINT = 768
const TABLET_BREAKPOINT = 1024

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Set default state immediately based on window width to avoid flicker
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Debounced resize handler
    let resizeTimer: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      }, 100);
    };

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    if (mql.addEventListener) {
      mql.addEventListener("change", handleResize)
    } else {
      // Fallback for older browsers
      window.addEventListener('resize', handleResize);
    }
    
    return () => {
      clearTimeout(resizeTimer);
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handleResize)
      } else {
        window.removeEventListener('resize', handleResize);
      }
    }
  }, [])

  return !!isMobile
}

export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Set default state immediately based on window width
    const width = window.innerWidth;
    setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT)
    
    // Debounced resize handler
    let resizeTimer: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const width = window.innerWidth;
        setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT)
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return !!isTablet
}

export function useDevicePerformance() {
  const [performance, setPerformance] = React.useState<'low' | 'medium' | 'high'>('high');
  const isMobile = useIsMobile();
  
  React.useEffect(() => {
    // Basic performance detection
    const detectPerformance = () => {
      // For mobile devices, default to lower performance
      if (isMobile) {
        setPerformance('low');
        return;
      }
      
      // Check for hardware concurrency (available CPU cores)
      const cpuCores = navigator.hardwareConcurrency || 0;
      
      // Simple heuristic
      if (cpuCores <= 2) {
        setPerformance('low');
      } else if (cpuCores <= 4) {
        setPerformance('medium');
      } else {
        setPerformance('high');
      }
    };
    
    detectPerformance();
  }, [isMobile]);
  
  return performance;
}
