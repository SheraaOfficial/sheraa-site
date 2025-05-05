
import React, { useState, useEffect } from 'react';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedLazyLoadProps {
  children: React.ReactNode;
  placeholder?: React.ReactNode;
  height?: string | number;
  priority?: 'high' | 'medium' | 'low';
  threshold?: number;
  rootMargin?: string;
  id?: string;
}

export function OptimizedLazyLoad({
  children,
  placeholder,
  height = 'auto',
  priority = 'medium',
  threshold = 0.1,
  rootMargin = '200px',
  id
}: OptimizedLazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const devicePerformance = useDevicePerformance();
  
  // High priority items load immediately on high-performance devices
  const shouldLoadImmediately = priority === 'high' && devicePerformance === 'high';

  useEffect(() => {
    // Skip intersection observer for high priority content on good devices
    if (shouldLoadImmediately) {
      setIsVisible(true);
      return;
    }

    const currentRef = containerRef.current;
    if (!currentRef || typeof IntersectionObserver === 'undefined') {
      // Fallback for browsers that don't support IntersectionObserver
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold,
        rootMargin, // Load before element comes into view
      }
    );

    observer.observe(currentRef);

    // Cleanup observer
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [shouldLoadImmediately, threshold, rootMargin]);

  // Set hasLoaded to true after a short delay once visible
  useEffect(() => {
    if (isVisible && !hasLoaded) {
      const timer = setTimeout(() => {
        setHasLoaded(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasLoaded]);

  // Default placeholder when none is provided
  const defaultPlaceholder = (
    <Skeleton 
      className="w-full h-full min-h-[100px]" 
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
    />
  );

  return (
    <div
      ref={containerRef}
      className="optimized-lazy-load"
      data-loaded={hasLoaded}
      data-priority={priority}
      id={id}
    >
      {isVisible ? children : placeholder || defaultPlaceholder}
    </div>
  );
}
