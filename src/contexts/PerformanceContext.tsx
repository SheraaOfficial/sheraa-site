
import React, { createContext, useContext, useState, useEffect } from 'react';

interface PerformanceContextType {
  reduceAnimations: boolean;
  enableLazyLoading: boolean;
  connectionSpeed: 'slow' | 'medium' | 'fast';
  deviceCapability: 'low' | 'medium' | 'high';
  setReduceAnimations: (reduce: boolean) => void;
  setEnableLazyLoading: (enable: boolean) => void;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

export function PerformanceProvider({ children }: { children: React.ReactNode }) {
  const [reduceAnimations, setReduceAnimations] = useState(false);
  const [enableLazyLoading, setEnableLazyLoading] = useState(true);
  const [connectionSpeed, setConnectionSpeed] = useState<'slow' | 'medium' | 'fast'>('fast');
  const [deviceCapability, setDeviceCapability] = useState<'low' | 'medium' | 'high'>('high');

  useEffect(() => {
    // Detect user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setReduceAnimations(true);
    }

    // Detect connection speed
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        const effectiveType = connection.effectiveType;
        if (effectiveType === 'slow-2g' || effectiveType === '2g') {
          setConnectionSpeed('slow');
          setEnableLazyLoading(true);
        } else if (effectiveType === '3g') {
          setConnectionSpeed('medium');
        } else {
          setConnectionSpeed('fast');
        }
      }
    }

    // Detect device capability
    const hardwareConcurrency = navigator.hardwareConcurrency || 4;
    const deviceMemory = (navigator as any).deviceMemory || 4;
    
    if (hardwareConcurrency <= 2 || deviceMemory <= 2) {
      setDeviceCapability('low');
      setEnableLazyLoading(true);
    } else if (hardwareConcurrency <= 4 || deviceMemory <= 4) {
      setDeviceCapability('medium');
    } else {
      setDeviceCapability('high');
    }
  }, []);

  return (
    <PerformanceContext.Provider value={{
      reduceAnimations,
      enableLazyLoading,
      connectionSpeed,
      deviceCapability,
      setReduceAnimations,
      setEnableLazyLoading
    }}>
      {children}
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
