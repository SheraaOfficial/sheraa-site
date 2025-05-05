
import { useState, useEffect, useCallback, useRef } from 'react';
import { useDevicePerformance } from './useDevicePerformance';

interface ExecutionControlOptions {
  priority?: 'high' | 'medium' | 'low';
  maxExecTimeMs?: number;
  debounceMs?: number;
  disableOnLowEnd?: boolean;
}

/**
 * A hook that helps control and optimize function execution based on device performance
 */
export function useExecutionControl(options: ExecutionControlOptions = {}) {
  const {
    priority = 'medium',
    maxExecTimeMs = 16, // Default to 16ms (60fps frame budget)
    debounceMs = 100,
    disableOnLowEnd = true,
  } = options;
  
  const devicePerformance = useDevicePerformance();
  const [isExecuting, setIsExecuting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef<number | null>(null);
  
  // Determine if execution should be allowed based on device performance
  const shouldExecute = !(disableOnLowEnd && devicePerformance === 'low');
  
  // Cleanup function
  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    
    setIsExecuting(false);
  }, []);
  
  // Cleanup on unmount
  useEffect(() => {
    return cleanup;
  }, [cleanup]);
  
  // Main execution controller function
  const executeControlled = useCallback(<T extends (...args: any[]) => any>(
    fn: T,
    ...args: Parameters<T>
  ): Promise<ReturnType<T> | null> => {
    if (!shouldExecute) {
      return Promise.resolve(null);
    }
    
    cleanup();
    setIsExecuting(true);
    
    return new Promise((resolve) => {
      // Use different scheduling strategies based on priority
      if (priority === 'high') {
        // Execute immediately
        try {
          const startTime = performance.now();
          const result = fn(...args);
          const elapsedTime = performance.now() - startTime;
          
          console.debug(`High priority execution took ${elapsedTime.toFixed(2)}ms`);
          
          setIsExecuting(false);
          resolve(result);
        } catch (error) {
          console.error('Error in high priority execution:', error);
          setIsExecuting(false);
          resolve(null);
        }
      } else {
        // Use debounced execution for medium/low priority
        timeoutRef.current = setTimeout(() => {
          rafRef.current = requestAnimationFrame(() => {
            try {
              const startTime = performance.now();
              const result = fn(...args);
              const elapsedTime = performance.now() - startTime;
              
              console.debug(`${priority} priority execution took ${elapsedTime.toFixed(2)}ms`);
              
              // Split long-running operations if needed
              if (elapsedTime > maxExecTimeMs) {
                console.debug(`Execution exceeded target time (${elapsedTime.toFixed(2)}ms > ${maxExecTimeMs}ms)`);
              }
              
              setIsExecuting(false);
              resolve(result);
            } catch (error) {
              console.error(`Error in ${priority} priority execution:`, error);
              setIsExecuting(false);
              resolve(null);
            }
          });
        }, priority === 'medium' ? debounceMs : debounceMs * 2);
      }
    });
  }, [cleanup, debounceMs, maxExecTimeMs, priority, shouldExecute]);
  
  return {
    executeControlled,
    isExecuting,
    shouldExecute,
    cancel: cleanup,
  };
}
