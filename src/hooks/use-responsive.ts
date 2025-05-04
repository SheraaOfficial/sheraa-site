
import { useState, useEffect, useMemo } from "react";

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
 * Enhanced hook to detect if the current viewport is within a specified breakpoint range
 * with optimized event handling and memoization
 */
export function useBreakpoint(minWidth?: Breakpoint, maxWidth?: Breakpoint) {
  const [matches, setMatches] = useState(false);
  
  // Memoize the min/max width values to prevent recalculations
  const { minWidthPx, maxWidthPx } = useMemo(() => ({
    minWidthPx: minWidth ? breakpoints[minWidth] : 0,
    maxWidthPx: maxWidth ? breakpoints[maxWidth] : Infinity
  }), [minWidth, maxWidth]);
  
  useEffect(() => {
    // Don't run on server-side
    if (typeof window === 'undefined') return;
    
    // Function to check if the current viewport matches the breakpoint range
    const updateMatches = () => {
      const width = window.innerWidth;
      setMatches(width >= minWidthPx && width < maxWidthPx);
    };
    
    // Set initial state
    updateMatches();
    
    // Use ResizeObserver when available for better performance
    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(updateMatches);
      resizeObserver.observe(document.documentElement);
      return () => resizeObserver.disconnect();
    }
    
    // Use matchMedia for efficient event handling when possible
    if (window.matchMedia) {
      // Construct media query strings
      const minWidthQuery = minWidth ? `(min-width: ${breakpoints[minWidth]}px)` : null;
      const maxWidthQuery = maxWidth ? `(max-width: ${breakpoints[maxWidth] - 1}px)` : null;
      
      let mediaQuery: MediaQueryList | null = null;
      
      // Create the appropriate media query
      if (minWidthQuery && maxWidthQuery) {
        mediaQuery = window.matchMedia(`${minWidthQuery} and ${maxWidthQuery}`);
      } else if (minWidthQuery) {
        mediaQuery = window.matchMedia(minWidthQuery);
      } else if (maxWidthQuery) {
        mediaQuery = window.matchMedia(maxWidthQuery);
      }
      
      if (mediaQuery) {
        const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
          setMatches(e.matches);
        };
        
        // Use modern API with fallback
        if (mediaQuery.addEventListener) {
          mediaQuery.addEventListener('change', handleChange);
          handleChange(mediaQuery); // Set initial value
          return () => mediaQuery?.removeEventListener('change', handleChange);
        } else if ('addListener' in mediaQuery) {
          // Legacy support
          mediaQuery.addListener(handleChange as any);
          handleChange(mediaQuery); // Set initial value
          return () => mediaQuery?.removeListener(handleChange as any);
        }
      }
    }
    
    // Fallback to resize event with proper cleanup and RAF
    let rafId: number | null = null;
    const handleResize = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(updateMatches);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [minWidthPx, maxWidthPx]);
  
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
 * Hook to get viewport dimensions with performance optimizations
 */
export function useViewportSize(debounceMs = 100) {
  const [size, setSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let rafId: number | null = null;
    
    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      // Use RAF for smoother updates
      rafId = requestAnimationFrame(() => {
        // Only update after debounce period
        timeoutId = setTimeout(() => {
          setSize({
            width: window.innerWidth,
            height: window.innerHeight
          });
        }, debounceMs);
      });
    };
    
    // Set initial size
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    // Use ResizeObserver when available
    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(document.documentElement);
      
      return () => {
        resizeObserver.disconnect();
        if (timeoutId) clearTimeout(timeoutId);
        if (rafId) cancelAnimationFrame(rafId);
      };
    }
    
    // Fallback to resize event
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutId) clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [debounceMs]);
  
  return size;
}

/**
 * Hook to determine if the user is on a touch device with memoization
 */
export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const detectTouch = () => {
      const touchSupported = 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0;
      
      setIsTouch(touchSupported);
    };
    
    detectTouch();
    
    // Listen for changes in touch capability (e.g., device mode changes)
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    const handleChange = () => detectTouch();
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else if ('addListener' in mediaQuery) {
      // Legacy support
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);
  
  return isTouch;
}
