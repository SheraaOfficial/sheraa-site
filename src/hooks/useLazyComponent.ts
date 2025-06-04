
import { lazy, useState, useEffect } from 'react';

interface LazyComponentOptions {
  fallback?: React.ReactNode;
  errorElement?: React.ReactNode;
  threshold?: number; // Visibility threshold
  rootMargin?: string; // IntersectionObserver root margin
}

/**
 * Custom hook for lazy loading components when they become visible in the viewport
 */
export function useLazyComponent<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  options: LazyComponentOptions = {}
) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [ref, setRef] = useState<Element | null>(null);
  
  const {
    threshold = 0.1,
    rootMargin = '100px',
  } = options;

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin]);

  const LazyComponent = lazy(() => {
    if (shouldLoad) {
      return factory();
    }
    
    // Return a placeholder component until it should load
    return new Promise<{ default: T }>((resolve) => {
      const checkInterval = setInterval(() => {
        if (shouldLoad) {
          clearInterval(checkInterval);
          resolve(factory());
        }
      }, 100);
    });
  });

  return { LazyComponent, ref: setRef };
}
