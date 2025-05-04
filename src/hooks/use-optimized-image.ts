
import { useState, useEffect } from 'react';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';

interface UseOptimizedImageProps {
  src: string;
  lowQualitySrc?: string;
  placeholder?: string;
  sizes?: string;
  priority?: boolean;
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
  priority = false
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
    
    // Function to load the high-quality image
    const loadHighQuality = () => {
      const highQualityImage = new Image();
      
      // Set fetchPriority if supported and priority is true
      if (priority && 'fetchPriority' in highQualityImage) {
        (highQualityImage as any).fetchPriority = 'high';
      }
      
      if (sizes) {
        highQualityImage.sizes = sizes;
      }
      
      highQualityImage.onload = () => {
        if (!isMounted) return;
        setCurrentSrc(src);
        setLoading(false);
      };
      
      highQualityImage.onerror = () => {
        if (!isMounted) return;
        setError(true);
        setLoading(false);
      };
      
      highQualityImage.src = src;
    };
    
    // Progressive loading strategy based on device performance
    if (shouldOptimize && lowQualitySrc) {
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
    } else {
      // For high-performance devices or when no low-quality src, load high-quality directly
      loadHighQuality();
    }
    
    return () => {
      isMounted = false;
    };
  }, [src, lowQualitySrc, placeholder, sizes, priority, devicePerformance]);

  return { 
    src: currentSrc, 
    loading, 
    error,
    isLoaded: !loading && !error
  };
}
