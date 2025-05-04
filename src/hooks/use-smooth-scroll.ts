
import { useEffect } from "react";

/**
 * Hook to enable/disable smooth scrolling behavior based on performance considerations
 * @param enable Optional boolean to determine if smooth scrolling should be enabled (defaults to true)
 */
export function useSmoothScroll(enable?: boolean) {
  useEffect(() => {
    // Default to enabled if not specified
    const shouldEnable = enable !== false;
    
    if (typeof document === 'undefined') return;
    
    // Save the original scroll behavior to restore it when the component unmounts
    const originalStyle = document.documentElement.style.scrollBehavior;
    
    if (shouldEnable) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    
    // Cleanup function to restore original scroll behavior
    return () => {
      document.documentElement.style.scrollBehavior = originalStyle;
    };
  }, [enable]);
}
