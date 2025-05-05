
/**
 * Consolidated device detection hooks for easier imports and better performance
 */

import { useIsMobile, useIsTablet, useIsDesktop } from "./useDeviceDetection";
import { useDevicePerformance } from "./useDevicePerformance";
import { useOptimizedScroll } from "./useOptimizedScroll";

// Export all hooks for easier imports
export { 
  useIsMobile, 
  useIsTablet,
  useIsDesktop,
  useDevicePerformance,
  useOptimizedScroll
};
