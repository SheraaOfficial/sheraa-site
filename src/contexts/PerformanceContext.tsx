
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';
import { useIsMobile, useIsTouchDevice } from '@/hooks/use-mobile';

interface PerformanceContextType {
  // General settings
  reduceAnimations: boolean;
  prefersReducedMotion: boolean;
  preferHighContrast: boolean;
  
  // Visual quality settings
  imageQuality: 'low' | 'medium' | 'high';
  maxParallaxElements: number;
  enableBackgroundEffects: boolean;
  
  // Feature flags
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enableOptimisticUI: boolean;
  
  // Debugging
  debugPerformance: boolean;
  toggleDebugPerformance: () => void;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

export function PerformanceProvider({ children }: { children: React.ReactNode }) {
  const devicePerformance = useDevicePerformance();
  const isMobile = useIsMobile();
  const isTouchDevice = useIsTouchDevice();
  const [debugPerformance, setDebugPerformance] = useState(false);
  
  // Detect reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [preferHighContrast, setPreferHighContrast] = useState(false);
  
  // Detect user preferences
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    
    // Check contrast preference
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    setPreferHighContrast(contrastQuery.matches);
    
    // Listen for changes
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setPreferHighContrast(e.matches);
    
    // Use modern API with fallback
    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', handleMotionChange);
      contrastQuery.addEventListener('change', handleContrastChange);
    } else {
      // Legacy fallback
      motionQuery.addListener(handleMotionChange);
      contrastQuery.addListener(handleContrastChange);
    }
    
    return () => {
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener('change', handleMotionChange);
        contrastQuery.removeEventListener('change', handleContrastChange);
      } else {
        motionQuery.removeListener(handleMotionChange);
        contrastQuery.removeListener(handleContrastChange);
      }
    };
  }, []);

  // Calculate optimized settings based on device capabilities
  const contextValue = useMemo<PerformanceContextType>(() => ({
    // Determine if animations should be reduced based on device performance and user preference
    reduceAnimations: devicePerformance === 'low' || prefersReducedMotion,
    prefersReducedMotion,
    preferHighContrast,
    
    // Adjust image quality based on device performance
    imageQuality: devicePerformance === 'high' ? 'high' : (devicePerformance === 'medium' ? 'medium' : 'low'),
    
    // Limit parallax elements on lower-end devices
    maxParallaxElements: devicePerformance === 'high' ? 50 : (devicePerformance === 'medium' ? 20 : 5),
    
    // Only enable background effects on higher-end devices
    enableBackgroundEffects: devicePerformance !== 'low',
    
    // Feature flags
    enableLazyLoading: true, // Always enable lazy loading
    enableCodeSplitting: true, // Always enable code splitting
    enableOptimisticUI: devicePerformance !== 'low', // Only on medium/high devices
    
    // Debugging
    debugPerformance,
    toggleDebugPerformance: () => setDebugPerformance(prev => !prev),
  }), [devicePerformance, prefersReducedMotion, preferHighContrast, debugPerformance]);

  return (
    <PerformanceContext.Provider value={contextValue}>
      {children}
      
      {/* Render performance debug overlay if enabled */}
      {debugPerformance && <PerformanceDebugOverlay />}
    </PerformanceContext.Provider>
  );
}

export function usePerformance() {
  const context = useContext(PerformanceContext);
  
  if (context === undefined) {
    throw new Error('usePerformance must be used within a PerformanceProvider');
  }
  
  return context;
}

// Simple debug overlay component to monitor performance metrics
function PerformanceDebugOverlay() {
  const [metrics, setMetrics] = useState({
    fps: 0,
    memory: 0,
    networkLatency: 0
  });
  
  useEffect(() => {
    let frameCount = 0;
    let lastTimestamp = performance.now();
    let frameId: number;
    
    // Track FPS
    const measureFPS = (timestamp: number) => {
      frameCount++;
      
      const elapsed = timestamp - lastTimestamp;
      
      if (elapsed >= 1000) { // Update every second
        const fps = Math.round((frameCount * 1000) / elapsed);
        
        setMetrics(prev => ({
          ...prev,
          fps
        }));
        
        frameCount = 0;
        lastTimestamp = timestamp;
      }
      
      frameId = requestAnimationFrame(measureFPS);
    };
    
    frameId = requestAnimationFrame(measureFPS);
    
    // Track memory if available
    const memoryInterval = setInterval(() => {
      if ('memory' in performance) {
        const memoryInfo = (performance as any).memory;
        if (memoryInfo) {
          const usedMemoryMB = Math.round(memoryInfo.usedJSHeapSize / (1024 * 1024));
          setMetrics(prev => ({
            ...prev,
            memory: usedMemoryMB
          }));
        }
      }
    }, 2000);
    
    // Measure network latency
    const latencyInterval = setInterval(() => {
      const start = performance.now();
      
      fetch('/favicon.ico', { 
        method: 'HEAD',
        cache: 'no-store'
      })
        .then(() => {
          const latency = performance.now() - start;
          setMetrics(prev => ({
            ...prev,
            networkLatency: Math.round(latency)
          }));
        })
        .catch(() => {
          // Ignore errors
        });
    }, 5000);
    
    return () => {
      cancelAnimationFrame(frameId);
      clearInterval(memoryInterval);
      clearInterval(latencyInterval);
    };
  }, []);
  
  return (
    <div className="fixed bottom-0 right-0 bg-black/80 text-white p-2 text-xs z-[9999] font-mono">
      <div>FPS: {metrics.fps}</div>
      {metrics.memory > 0 && <div>Memory: {metrics.memory} MB</div>}
      {metrics.networkLatency > 0 && <div>Network: {metrics.networkLatency} ms</div>}
    </div>
  );
}
