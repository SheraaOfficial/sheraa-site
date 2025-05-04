
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
    
    // Create a MediaQueryList with the appropriate media query
    let mediaQueryString = '';
    if (minWidthPx > 0 && maxWidthPx < Infinity) {
      mediaQueryString = `(min-width: ${minWidthPx}px) and (max-width: ${maxWidthPx - 1}px)`;
    } else if (minWidthPx > 0) {
      mediaQueryString = `(min-width: ${minWidthPx}px)`;
    } else if (maxWidthPx < Infinity) {
      mediaQueryString = `(max-width: ${maxWidthPx - 1}px)`;
    }
    
    // If no media query is needed, just check directly
    if (!mediaQueryString) {
      setMatches(true);
      return;
    }
    
    const mediaQuery = window.matchMedia(mediaQueryString);
    
    // Set initial value
    setMatches(mediaQuery.matches);
    
    // Define handler for media query changes
    const handleChange = () => setMatches(mediaQuery.matches);
    
    // Use modern addEventListener API with fallback
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } 
    
    // Legacy fallback for older browsers
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
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
    
    // Use ResizeObserver when available (better performance)
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
    
    // More comprehensive touch detection
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
    }
    
    // Legacy fallback
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);
  
  return isTouch;
}
