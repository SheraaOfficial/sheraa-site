
/**
 * Consolidated device detection hooks for easier imports and better performance
 */

import { useIsMobile, useIsTablet, useIsDesktop } from "./useDeviceDetection";
import { useDevicePerformance } from "./useDevicePerformance";
import { useOptimizedScroll } from "./useOptimizedScroll";
import { useViewportSize, useIsTouchDevice, useBreakpoint } from "./use-responsive";

// Export all hooks for easier imports
export { 
  // Device detection
  useIsMobile, 
  useIsTablet,
  useIsDesktop,
  useBreakpoint,
  
  // Device capabilities
  useDevicePerformance,
  useIsTouchDevice,
  
  // Scroll and viewport
  useOptimizedScroll,
  useViewportSize
};
