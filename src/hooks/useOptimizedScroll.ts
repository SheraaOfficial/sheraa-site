
import * as React from "react";
import { useIsMobile } from "./useDeviceDetection";

/**
 * Hook for optimized scroll position tracking
 * @param threshold - Pixel threshold for updating scroll position on mobile
 * @returns Object containing scrollY position and isScrolling state
 */
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
