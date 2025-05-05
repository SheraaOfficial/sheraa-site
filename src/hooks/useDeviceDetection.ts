
import * as React from "react";

export const MOBILE_BREAKPOINT = 768;
export const TABLET_BREAKPOINT = 1024;

/**
 * Enhanced optimized hook for device detection using MediaQueryList for better performance
 */
export function useDeviceDetection() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [isTablet, setIsTablet] = React.useState<boolean>(false);
  const [isDesktop, setIsDesktop] = React.useState<boolean>(false);
  
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Use matchMedia for efficient listening
    const mobileQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const tabletMinQuery = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`);
    const tabletMaxQuery = window.matchMedia(`(max-width: ${TABLET_BREAKPOINT - 1}px)`);
    const desktopQuery = window.matchMedia(`(min-width: ${TABLET_BREAKPOINT}px)`);
    
    // Initial check
    setIsMobile(mobileQuery.matches);
    setIsTablet(tabletMinQuery.matches && tabletMaxQuery.matches);
    setIsDesktop(desktopQuery.matches);
    
    // Define handlers
    const handleMobileChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    const handleTabletChange = () => setIsTablet(tabletMinQuery.matches && tabletMaxQuery.matches);
    const handleDesktopChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    
    // Use modern event listeners with fallback
    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener('change', handleMobileChange);
      tabletMinQuery.addEventListener('change', handleTabletChange);
      tabletMaxQuery.addEventListener('change', handleTabletChange);
      desktopQuery.addEventListener('change', handleDesktopChange);
    } else {
      // Legacy fallback
      mobileQuery.addListener(handleMobileChange);
      tabletMinQuery.addListener(handleTabletChange);
      tabletMaxQuery.addListener(handleTabletChange);
      desktopQuery.addListener(handleDesktopChange);
    }
    
    return () => {
      if (mobileQuery.removeEventListener) {
        mobileQuery.removeEventListener('change', handleMobileChange);
        tabletMinQuery.removeEventListener('change', handleTabletChange);
        tabletMaxQuery.removeEventListener('change', handleTabletChange);
        desktopQuery.removeEventListener('change', handleDesktopChange);
      } else {
        // Legacy cleanup
        mobileQuery.removeListener(handleMobileChange);
        tabletMinQuery.removeListener(handleTabletChange);
        tabletMaxQuery.removeListener(handleTabletChange);
        desktopQuery.removeListener(handleDesktopChange);
      }
    };
  }, []);
  
  return { isMobile, isTablet, isDesktop };
}

/**
 * Individual hooks for backward compatibility
 */
export function useIsMobile() {
  const { isMobile } = useDeviceDetection();
  return isMobile;
}

export function useIsTablet() {
  const { isTablet } = useDeviceDetection();
  return isTablet;
}

export function useIsDesktop() {
  const { isDesktop } = useDeviceDetection();
  return isDesktop;
}

/**
 * Export breakpoint constants for reuse
 */
export const breakpoints = {
  mobile: MOBILE_BREAKPOINT,
  tablet: TABLET_BREAKPOINT
};
