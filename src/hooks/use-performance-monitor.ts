
import { useState, useEffect } from 'react';
import { useDevicePerformance } from './useDevicePerformance';
import { useIsMobile } from './useDeviceDetection';

interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  cls: number | null; // Cumulative Layout Shift
  fid: number | null; // First Input Delay
  isLowEnd: boolean;
  connectionType: string | null;
}

export function usePerformanceMonitor(): PerformanceMetrics {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
    isLowEnd: false,
    connectionType: null
  });
  const devicePerformance = useDevicePerformance();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Set basic performance indicators
    setMetrics(prev => ({
      ...prev,
      isLowEnd: devicePerformance === 'low'
    }));

    // Check connection type if available
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        setMetrics(prev => ({
          ...prev,
          connectionType: connection.effectiveType || null
        }));

        const updateConnectionInfo = () => {
          setMetrics(prev => ({
            ...prev,
            connectionType: connection.effectiveType || null
          }));
        };

        connection.addEventListener('change', updateConnectionInfo);
        return () => connection.removeEventListener('change', updateConnectionInfo);
      }
    }

    // Web Vitals metrics
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const fcp = entries[0].startTime;
          setMetrics(prev => ({ ...prev, fcp }));
          fcpObserver.disconnect();
        }
      });
      
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const lastEntry = entries[entries.length - 1];
          const lcp = lastEntry.startTime;
          setMetrics(prev => ({ ...prev, lcp }));
        }
      });
      
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
      
      // First Input Delay
      const fidObserver = new PerformanceObserver((entryList) => {
        const firstEntry = entryList.getEntries()[0];
        if (firstEntry) {
          const fid = firstEntry.processingStart - firstEntry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
          fidObserver.disconnect();
        }
      });

      // Start observing
      try {
        fcpObserver.observe({ type: 'paint', buffered: true });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
        fidObserver.observe({ type: 'first-input', buffered: true });
        
        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          clsObserver.disconnect();
          fidObserver.disconnect();
        };
      } catch (e) {
        console.warn('Performance observers not fully supported', e);
      }
    }
  }, [devicePerformance, isMobile]);

  return metrics;
}
