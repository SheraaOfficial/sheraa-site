
import { useState, useEffect } from 'react';

type DevicePerformance = 'low' | 'medium' | 'high';

export const useDevicePerformance = (): DevicePerformance => {
  const [performance, setPerformance] = useState<DevicePerformance>('medium');

  useEffect(() => {
    const determinePerformance = () => {
      // Use navigator information to detect mobile devices
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

      // Check for hardware concurrency (CPU cores)
      const cpuCores = navigator.hardwareConcurrency || 2;
      
      // Check for device memory (in GB)
      const deviceMemory = (navigator as any).deviceMemory || 4;
      
      // Check for connection speed
      const connection = (navigator as any).connection;
      const isSlowConnection = connection && 
        (connection.effectiveType === 'slow-2g' || 
         connection.effectiveType === '2g' || 
         connection.saveData);

      // Determine performance category based on collected data
      if (
        (isMobile && cpuCores <= 4) ||
        deviceMemory <= 2 ||
        isSlowConnection
      ) {
        setPerformance('low');
      } else if (
        (isMobile && cpuCores > 4) ||
        (cpuCores > 2 && cpuCores < 8) ||
        (deviceMemory > 2 && deviceMemory < 8)
      ) {
        setPerformance('medium');
      } else {
        setPerformance('high');
      }
    };

    // Run the performance check
    determinePerformance();
    
    // Listen for connection changes (if supported)
    const connection = (navigator as any).connection;
    if (connection) {
      connection.addEventListener('change', determinePerformance);
      return () => connection.removeEventListener('change', determinePerformance);
    }
  }, []);

  return performance;
};
