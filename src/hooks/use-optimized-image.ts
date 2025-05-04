
import { useState, useEffect } from 'react';

interface UseOptimizedImageProps {
  src: string;
  lowQualitySrc?: string;
  placeholder?: string;
  sizes?: string;
}

/**
 * Hook for optimized image loading with low quality placeholders
 */
export function useOptimizedImage({ 
  src, 
  lowQualitySrc, 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PC9zdmc+',
  sizes
}: UseOptimizedImageProps) {
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Don't run image loading logic on server-side
    if (typeof window === 'undefined') return;
    
    setLoading(true);
    setError(false);
    
    // Track if the component is still mounted
    let isMounted = true;
    
    // If a low quality version is provided, load it first
    if (lowQualitySrc) {
      const lowQualityImage = new Image();
      lowQualityImage.src = lowQualitySrc;
      lowQualityImage.onload = () => {
        if (!isMounted) return;
        setCurrentSrc(lowQualitySrc);
        
        // Then load the high quality version
        loadHighQuality();
      };
      lowQualityImage.onerror = () => {
        if (!isMounted) return;
        // If low quality fails, try loading high quality directly
        loadHighQuality();
      };
    } else {
      // If no low quality version, load high quality directly
      loadHighQuality();
    }
    
    function loadHighQuality() {
      const highQualityImage = new Image();
      highQualityImage.src = src;
      
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
    }
    
    return () => {
      isMounted = false;
    };
  }, [src, lowQualitySrc, placeholder, sizes]);

  return { 
    src: currentSrc, 
    loading, 
    error,
    isLoaded: !loading && !error
  };
}
