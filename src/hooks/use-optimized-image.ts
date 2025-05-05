
import { useState, useEffect } from 'react';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';

interface UseOptimizedImageProps {
  src: string;
  lowQualitySrc?: string;
  placeholder?: string;
  sizes?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Optimized hook for image loading with performance-based strategies
 */
export function useOptimizedImage({ 
  src, 
  lowQualitySrc, 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PC9zdmc+',
  sizes,
  priority = false,
  onLoad,
  onError
}: UseOptimizedImageProps) {
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const devicePerformance = useDevicePerformance();
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Determine if we should use optimized loading
    const shouldOptimize = devicePerformance !== 'low' || priority;
    
    setLoading(true);
    setError(false);
    
    // Track component mount state
    let isMounted = true;
    
    // Feature detection
    const supportsIntersectionObserver = 'IntersectionObserver' in window;
    
    // Function to load high quality image
    const loadHighQuality = () => {
      const highQualityImage = new Image();
      
      // Priority handling without using fetchpriority
      if (priority) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        preloadLink.href = src;
        document.head.appendChild(preloadLink);
      }
      
      if (sizes) {
        highQualityImage.sizes = sizes;
      }
      
      highQualityImage.onload = () => {
        if (!isMounted) return;
        setCurrentSrc(src);
        setLoading(false);
        if (onLoad) onLoad();
      };
      
      highQualityImage.onerror = () => {
        if (!isMounted) return;
        setError(true);
        setLoading(false);
        if (onError) onError();
      };
      
      // Enable async decoding for better performance
      highQualityImage.decoding = 'async';
      highQualityImage.src = src;
    };
    
    // Progressive loading implementation
    if (shouldOptimize && lowQualitySrc) {
      // Use intersection observer for non-priority images
      if (!priority && supportsIntersectionObserver) {
        const observer = new IntersectionObserver(
          entries => {
            if (entries[0].isIntersecting) {
              const lowQualityImage = new Image();
              lowQualityImage.src = lowQualitySrc;
              lowQualityImage.onload = () => {
                if (!isMounted) return;
                setCurrentSrc(lowQualitySrc);
                
                // Delay loading for better perceived performance
                requestAnimationFrame(loadHighQuality);
              };
              
              lowQualityImage.onerror = loadHighQuality;
              observer.disconnect();
            }
          },
          { rootMargin: '200px', threshold: 0.01 }
        );
        
        // Create temporary element to observe
        const element = document.createElement('div');
        observer.observe(element);
        
        return () => {
          isMounted = false;
          observer.disconnect();
        };
      } else {
        // Direct loading for priority images
        const lowQualityImage = new Image();
        lowQualityImage.src = lowQualitySrc;
        lowQualityImage.onload = () => {
          if (!isMounted) return;
          setCurrentSrc(lowQualitySrc);
          requestAnimationFrame(loadHighQuality);
        };
        lowQualityImage.onerror = loadHighQuality;
      }
    } else {
      // Simplified loading for low performance devices or when no low quality src
      if (!priority && supportsIntersectionObserver) {
        const observer = new IntersectionObserver(
          entries => {
            if (entries[0].isIntersecting) {
              loadHighQuality();
              observer.disconnect();
            }
          },
          { rootMargin: '200px', threshold: 0.01 }
        );
        
        const element = document.createElement('div');
        observer.observe(element);
        
        return () => {
          isMounted = false;
          observer.disconnect();
        };
      } else {
        loadHighQuality();
      }
    }
    
    return () => {
      isMounted = false;
    };
  }, [src, lowQualitySrc, placeholder, sizes, priority, devicePerformance, onLoad, onError]);

  return { 
    src: currentSrc, 
    loading, 
    error,
    isLoaded: !loading && !error
  };
}
