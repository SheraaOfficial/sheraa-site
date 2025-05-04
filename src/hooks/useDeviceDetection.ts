
import * as React from "react";

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

/**
 * Hook to detect if the current viewport is mobile size
 * @returns boolean indicating if the device is mobile
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  
  React.useEffect(() => {
    // Set default state based on initial check
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    
    // Use matchMedia for efficient listening
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // Define handler outside to avoid recreating it
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };
    
    // Modern API with fallback
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      // Handle initial state consistently 
      handleChange(mediaQuery);
    } else {
      // Legacy fallback using highly optimized resize handler
      let timeout: number | undefined;
      const handleResize = () => {
        if (timeout) {
          window.cancelAnimationFrame(timeout);
        }
        
        timeout = window.requestAnimationFrame(() => {
          setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        });
      };
      
      window.addEventListener('resize', handleResize, { passive: true });
      // Set initial value
      handleResize();
      
      return () => {
        window.removeEventListener('resize', handleResize);
        if (timeout) window.cancelAnimationFrame(timeout);
      };
    }
    
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      }
    };
  }, []);
  
  return isMobile;
}

/**
 * Hook to detect if the current viewport is tablet size
 * @returns boolean indicating if the device is a tablet
 */
export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean>(false);
  
  React.useEffect(() => {
    const handleTabletCheck = () => {
      const width = window.innerWidth;
      setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT);
    };
    
    // Set initial value
    handleTabletCheck();
    
    // Use matchMedia for efficient listening
    const mediaQueryMin = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`);
    const mediaQueryMax = window.matchMedia(`(max-width: ${TABLET_BREAKPOINT - 1}px)`);
    
    const handleChange = () => {
      handleTabletCheck();
    };
    
    if (mediaQueryMin.addEventListener && mediaQueryMax.addEventListener) {
      mediaQueryMin.addEventListener('change', handleChange);
      mediaQueryMax.addEventListener('change', handleChange);
    } else {
      // Legacy fallback using optimized handler
      let timeout: number | undefined;
      const handleResize = () => {
        if (timeout) {
          window.cancelAnimationFrame(timeout);
        }
        
        timeout = window.requestAnimationFrame(handleTabletCheck);
      };
      
      window.addEventListener('resize', handleResize, { passive: true });
      
      return () => {
        window.removeEventListener('resize', handleResize);
        if (timeout) window.cancelAnimationFrame(timeout);
      };
    }
    
    return () => {
      if (mediaQueryMin.removeEventListener && mediaQueryMax.removeEventListener) {
        mediaQueryMin.removeEventListener('change', handleChange);
        mediaQueryMax.removeEventListener('change', handleChange);
      }
    };
  }, []);
  
  return isTablet;
}

/**
 * Export breakpoint constants for reuse
 */
export const breakpoints = {
  mobile: MOBILE_BREAKPOINT,
  tablet: TABLET_BREAKPOINT
};
