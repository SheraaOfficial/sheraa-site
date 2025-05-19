
import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fps: number | null;
  connectionType: string | null;
  deviceMemory: number | null;
  hardwareConcurrency: number | null;
  isLowEndDevice: boolean;
  isLowEndExperience: boolean;
}

export function usePerformanceMonitor(): PerformanceMetrics {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: null,
    connectionType: null,
    deviceMemory: null,
    hardwareConcurrency: null,
    isLowEndDevice: false,
    isLowEndExperience: false
  });

  useEffect(() => {
    // Check for performance API support
    if (typeof performance === 'undefined') return;

    // Detect network info using Network Information API
    const detectNetworkInfo = () => {
      const nav = navigator as any;
      if (nav.connection) {
        const { effectiveType, type } = nav.connection;
        return effectiveType || type || null;
      }
      return null;
    };

    // Get hardware info
    const detectHardwareInfo = () => {
      const nav = navigator as any;
      const memory = nav.deviceMemory || null;
      const cores = navigator.hardwareConcurrency || null;
      
      // Determine if this is a low-end device
      const isLowEnd = (memory && memory <= 4) || 
                        (cores && cores <= 4) ||
                        false;
      
      return {
        memory,
        cores,
        isLowEnd
      };
    };

    // FPS monitoring (simplified approach)
    let lastTime = performance.now();
    let frames = 0;
    let fps = 0;
    
    const measureFPS = () => {
      frames++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        fps = frames;
        frames = 0;
        lastTime = currentTime;
        
        const hardware = detectHardwareInfo();
        const connectionType = detectNetworkInfo();
        
        // Determine if this is a low-end experience based on FPS and hardware
        const isLowEndExperience = fps < 30 || hardware.isLowEnd || 
                                  connectionType === 'slow-2g' || 
                                  connectionType === '2g';
        
        setMetrics({
          fps,
          connectionType,
          deviceMemory: hardware.memory,
          hardwareConcurrency: hardware.cores,
          isLowEndDevice: hardware.isLowEnd,
          isLowEndExperience
        });
      }
      
      // Schedule next frame
      requestAnimationFrame(measureFPS);
    };
    
    // Start FPS monitoring
    const animationId = requestAnimationFrame(measureFPS);
    
    // Initial values
    const hardware = detectHardwareInfo();
    const connectionType = detectNetworkInfo();
    
    setMetrics({
      fps: null,
      connectionType,
      deviceMemory: hardware.memory,
      hardwareConcurrency: hardware.cores,
      isLowEndDevice: hardware.isLowEnd,
      isLowEndExperience: hardware.isLowEnd || connectionType === 'slow-2g' || connectionType === '2g'
    });
    
    // Network connection change listener
    if (navigator.connection) {
      (navigator as any).connection.addEventListener('change', () => {
        const updatedConnectionType = detectNetworkInfo();
        setMetrics(prev => ({
          ...prev,
          connectionType: updatedConnectionType,
          isLowEndExperience: prev.fps ? 
            (prev.fps < 30 || prev.isLowEndDevice || updatedConnectionType === 'slow-2g' || updatedConnectionType === '2g') :
            (prev.isLowEndDevice || updatedConnectionType === 'slow-2g' || updatedConnectionType === '2g')
        }));
      });
    }
    
    return () => {
      // Clean up
      cancelAnimationFrame(animationId);
      if (navigator.connection) {
        (navigator as any).connection.removeEventListener('change', () => {});
      }
    };
  }, []);
  
  return metrics;
}
