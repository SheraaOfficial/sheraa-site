
import * as React from "react";
import { useIsMobile } from "./useDeviceDetection";

/**
 * Hook to detect the performance capabilities of the current device
 * @returns 'low' | 'medium' | 'high' indicating device performance level
 */
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
