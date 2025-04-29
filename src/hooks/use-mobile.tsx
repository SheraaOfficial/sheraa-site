
import * as React from "react"

const MOBILE_BREAKPOINT = 768
const TABLET_BREAKPOINT = 1024

// Optimized mobile detection with single source of truth
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

export function useDevicePerformance() {
  const [performance, setPerformance] = React.useState<'low' | 'medium' | 'high'>('high');
  const isMobile = useIsMobile();
  
  React.useEffect(() => {
    // Enhanced performance detection
    const detectPerformance = () => {
      // Check for mobile first
      if (isMobile) {
        setPerformance('low');
        return;
      }
      
      // Check for hardware concurrency (CPU cores)
      const cpuCores = navigator.hardwareConcurrency || 0;
      
      // Check for memory (if available)
      let memory = Infinity;
      if ('deviceMemory' in navigator) {
        memory = (navigator as any).deviceMemory;
      }
      
      // Better heuristic with multiple factors
      if (cpuCores <= 2 || memory <= 2) {
        setPerformance('low');
      } else if (cpuCores <= 4 || memory <= 4) {
        setPerformance('medium');
      } else {
        setPerformance('high');
      }
    };
    
    detectPerformance();
  }, [isMobile]);
  
  return performance;
}

// Add a new hook for optimized parallax calculations
export function useOptimizedScroll(threshold = 100) {
  const [scrollY, setScrollY] = React.useState(0);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const isMobile = useIsMobile();
  
  React.useEffect(() => {
    let lastKnownScrollPosition = 0;
    let ticking = false;
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      lastKnownScrollPosition = window.scrollY;
      setIsScrolling(true);
      
      // Clear previous timeout
      clearTimeout(scrollTimeout);
      
      // Only update if we're not already processing a frame
      if (!ticking) {
        // Use requestAnimationFrame for smoother performance
        window.requestAnimationFrame(() => {
          // On mobile, only update every X pixels of scrolling for better performance
          if (!isMobile || Math.abs(scrollY - lastKnownScrollPosition) > threshold) {
            setScrollY(lastKnownScrollPosition);
          }
          ticking = false;
        });
        ticking = true;
      }
      
      // Set timeout to detect when scrolling stops
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        // Always update position when scrolling stops
        setScrollY(window.scrollY);
      }, 150);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isMobile, threshold, scrollY]);
  
  return { scrollY, isScrolling };
}
