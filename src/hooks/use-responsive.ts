
import { useState, useEffect } from "react";

// Breakpoint definitions based on common device sizes
export const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

type Breakpoint = keyof typeof breakpoints;

/**
 * Hook to detect if the current viewport is within a specified breakpoint range
 */
export function useBreakpoint(minWidth?: Breakpoint, maxWidth?: Breakpoint) {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    // Don't run on server-side
    if (typeof window === 'undefined') return;
    
    // Initialize state with current matches
    const minWidthPx = minWidth ? breakpoints[minWidth] : 0;
    const maxWidthPx = maxWidth ? breakpoints[maxWidth] : Infinity;
    
    const updateMatches = () => {
      const width = window.innerWidth;
      setMatches(width >= minWidthPx && width < maxWidthPx);
    };
    
    // Set initial state
    updateMatches();
    
    // Use matchMedia for efficient event handling when possible
    if (window.matchMedia) {
      const minWidthQuery = minWidth ? `(min-width: ${breakpoints[minWidth]}px)` : null;
      const maxWidthQuery = maxWidth ? `(max-width: ${breakpoints[maxWidth] - 1}px)` : null;
      
      let mediaQuery: MediaQueryList | null = null;
      
      if (minWidthQuery && maxWidthQuery) {
        mediaQuery = window.matchMedia(`${minWidthQuery} and ${maxWidthQuery}`);
      } else if (minWidthQuery) {
        mediaQuery = window.matchMedia(minWidthQuery);
      } else if (maxWidthQuery) {
        mediaQuery = window.matchMedia(maxWidthQuery);
      }
      
      if (mediaQuery) {
        const handleChange = (e: MediaQueryListEvent) => {
          setMatches(e.matches);
        };
        
        if (mediaQuery.addEventListener) {
          mediaQuery.addEventListener('change', handleChange);
          return () => mediaQuery?.removeEventListener('change', handleChange);
        } else if (mediaQuery.addListener) {
          // Legacy support
          mediaQuery.addListener(handleChange);
          return () => mediaQuery?.removeListener(handleChange);
        }
      }
    }
    
    // Fallback to resize event if matchMedia isn't available
    const handleResize = () => {
      const timerId = window.requestAnimationFrame(() => {
        updateMatches();
      });
      return () => window.cancelAnimationFrame(timerId);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [minWidth, maxWidth]);
  
  return matches;
}

/**
 * Convenience hooks for common device detections
 */
export function useIsMobile() {
  return useBreakpoint(undefined, 'md');
}

export function useIsTablet() {
  return useBreakpoint('md', 'lg');
}

export function useIsDesktop() {
  return useBreakpoint('lg');
}

/**
 * Hook to get viewport dimensions with debouncing for performance
 */
export function useViewportSize(debounceMs = 100) {
  const [size, setSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    
    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = setTimeout(() => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }, debounceMs);
    };
    
    // Set initial size
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [debounceMs]);
  
  return size;
}

/**
 * Hook to determine if the user is on a touch device
 */
export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const touchSupported = 'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 ||
      (navigator as any).msMaxTouchPoints > 0;
    
    setIsTouch(touchSupported);
  }, []);
  
  return isTouch;
}
