
/**
 * @deprecated This file is maintained for backward compatibility.
 * Please use the individual hooks from useDeviceDetection, useDevicePerformance,
 * and useOptimizedScroll directly.
 */

import { useIsMobile, useIsTablet } from "./useDeviceDetection";
import { useDevicePerformance } from "./useDevicePerformance";
import { useOptimizedScroll } from "./useOptimizedScroll";

// Re-export for backward compatibility
export { 
  useIsMobile, 
  useIsTablet, 
  useDevicePerformance,
  useOptimizedScroll
};
