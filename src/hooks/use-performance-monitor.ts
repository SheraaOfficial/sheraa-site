
import { useEffect, useState } from 'react';

// Define NetworkInformation interface that's missing in standard TypeScript types
interface NetworkInformation {
  effectiveType: 'slow-2g' | '2g' | '3g' | '4g';
  saveData: boolean;
  addEventListener(type: string, listener: EventListener): void;
  removeEventListener(type: string, listener: EventListener): void;
}

// Extend Navigator interface to include non-standard properties
interface ExtendedNavigator extends Navigator {
  connection?: NetworkInformation;
  deviceMemory?: number;
}

// Define the types for the performance metrics
interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  cls: number | null; // Cumulative Layout Shift
  fid: number | null; // First Input Delay
  ttfb: number | null; // Time to First Byte
  connectionType: string | null; // Connection type (4g, 3g, 2g, slow-2g)
  deviceMemory: number | null; // Device memory in GB
  hardwareConcurrency: number | null; // Number of logical CPU cores
  saveData: boolean | null; // Whether the user has requested reduced data usage
}

/**
 * Hook to monitor performance metrics of the application
 */
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
    ttfb: null,
    connectionType: null,
    deviceMemory: null,
    hardwareConcurrency: null,
    saveData: null,
  });

  useEffect(() => {
    // Check browser support for various APIs
    const hasPerfObserver = typeof PerformanceObserver === 'function';
    const hasConnection = 'connection' in navigator;
    const hasMemory = 'deviceMemory' in navigator;
    const hasConcurrency = 'hardwareConcurrency' in navigator;

    // Network information
    if (hasConnection) {
      // Cast navigator to our extended type
      const extendedNavigator = navigator as ExtendedNavigator;
      const conn = extendedNavigator.connection;
      
      if (conn) {
        setMetrics(prev => ({
          ...prev,
          connectionType: conn.effectiveType || null,
          saveData: conn.saveData || null,
        }));

        // Listen for connection changes
        const updateConnectionInfo = () => {
          setMetrics(prev => ({
            ...prev,
            connectionType: conn.effectiveType || null,
            saveData: conn.saveData || null,
          }));
        };

        conn.addEventListener('change', updateConnectionInfo);
        return () => conn.removeEventListener('change', updateConnectionInfo);
      }
    }

    // Device capabilities
    if (hasMemory) {
      const extendedNavigator = navigator as ExtendedNavigator;
      setMetrics(prev => ({
        ...prev,
        deviceMemory: extendedNavigator.deviceMemory || null,
      }));
    }

    if (hasConcurrency) {
      setMetrics(prev => ({
        ...prev,
        hardwareConcurrency: navigator.hardwareConcurrency || null,
      }));
    }

    // Performance metrics using PerformanceObserver
    if (hasPerfObserver) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const fcp = entries[0].startTime;
          setMetrics(prev => ({ ...prev, fcp }));
        }
      });

      try {
        fcpObserver.observe({ type: 'paint', buffered: true });
      } catch (e) {
        console.error('FCP observation error:', e);
      }

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });

      try {
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {
        console.error('LCP observation error:', e);
      }

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((entryList) => {
        let clsValue = 0;
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });

      try {
        clsObserver.observe({ type: 'layout-shift', buffered: true });
      } catch (e) {
        console.error('CLS observation error:', e);
      }

      // First Input Delay
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const firstInput = entries[0];
          const fid = (firstInput as any).processingStart - firstInput.startTime;
          setMetrics(prev => ({ ...prev, fid }));
        }
      });

      try {
        fidObserver.observe({ type: 'first-input', buffered: true });
      } catch (e) {
        console.error('FID observation error:', e);
      }

      // Time to First Byte (using Navigation Timing API)
      const navigationEntries = performance.getEntriesByType('navigation');
      if (navigationEntries.length > 0) {
        const navEntry = navigationEntries[0] as PerformanceNavigationTiming;
        const ttfb = navEntry.responseStart - navEntry.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
      }

      return () => {
        // Clean up observers
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        clsObserver.disconnect();
        fidObserver.disconnect();
      };
    }
  }, []);

  return metrics;
};
