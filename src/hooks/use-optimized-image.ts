
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
 * Enhanced hook for optimized image loading with low quality placeholders
 * and device performance awareness
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
    // Don't run image loading logic on server-side
    if (typeof window === 'undefined') return;
    
    // Skip intensive loading for low-performance devices
    const shouldOptimize = devicePerformance !== 'low' || priority;
    
    setLoading(true);
    setError(false);
    
    // Track if the component is still mounted
    let isMounted = true;
    
    // Use modern browser features when available
    const supportsIntersectionObserver = 'IntersectionObserver' in window;
    const supportsFetchPriority = 'fetchPriority' in HTMLImageElement.prototype;
    
    // Function to load the high-quality image
    const loadHighQuality = () => {
      const highQualityImage = new Image();
      
      // Set fetchPriority if supported and priority is true
      if (priority && supportsFetchPriority) {
        // Using dataset to avoid React warning about unknown prop
        highQualityImage.dataset.fetchpriority = 'high';
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
      
      // Add decoding="async" for better performance
      highQualityImage.decoding = 'async';
      
      // Finally set source to start loading
      highQualityImage.src = src;
    };
    
    // Progressive loading strategy based on device performance and priority
    if (shouldOptimize && lowQualitySrc) {
      // Check if we should use intersection observer for lazy loading
      if (!priority && supportsIntersectionObserver) {
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            const lowQualityImage = new Image();
            lowQualityImage.src = lowQualitySrc;
            lowQualityImage.onload = () => {
              if (!isMounted) return;
              setCurrentSrc(lowQualitySrc);
              
              // Delay loading high-quality image for better perceived performance
              requestAnimationFrame(() => {
                loadHighQuality();
              });
            };
            
            lowQualityImage.onerror = () => {
              if (!isMounted) return;
              // If low quality fails, try loading high quality directly
              loadHighQuality();
            };
            
            // Stop observing once we start loading
            observer.disconnect();
          }
        }, {
          rootMargin: '200px', // Start loading when within 200px of viewport
          threshold: 0.01
        });
        
        const dummyElement = document.createElement('div');
        observer.observe(dummyElement);
        
        return () => {
          isMounted = false;
          observer.disconnect();
        };
      } else {
        // For high priority or when IntersectionObserver isn't supported
        const lowQualityImage = new Image();
        lowQualityImage.src = lowQualitySrc;
        lowQualityImage.onload = () => {
          if (!isMounted) return;
          setCurrentSrc(lowQualitySrc);
          
          // Delay loading high-quality image for better perceived performance
          requestAnimationFrame(() => {
            loadHighQuality();
          });
        };
        lowQualityImage.onerror = () => {
          if (!isMounted) return;
          // If low quality fails, try loading high quality directly
          loadHighQuality();
        };
      }
    } else {
      // For high-performance devices or when no low-quality src, load high-quality directly
      if (!priority && supportsIntersectionObserver) {
        // Use intersection observer for non-priority images
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            loadHighQuality();
            observer.disconnect();
          }
        }, {
          rootMargin: '200px',
          threshold: 0.01
        });
        
        const dummyElement = document.createElement('div');
        observer.observe(dummyElement);
        
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
