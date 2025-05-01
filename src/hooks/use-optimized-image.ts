
import { useState, useEffect } from 'react';

interface UseOptimizedImageProps {
  src: string;
  lowQualitySrc?: string;
  placeholder?: string;
}

/**
 * Hook for optimized image loading with low quality placeholders
 */
export function useOptimizedImage({ 
  src, 
  lowQualitySrc, 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PC9zdmc+'
}: UseOptimizedImageProps) {
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    
    // If a low quality version is provided, load it first
    if (lowQualitySrc) {
      const lowQualityImage = new Image();
      lowQualityImage.src = lowQualitySrc;
      lowQualityImage.onload = () => {
        setCurrentSrc(lowQualitySrc);
        
        // Then load the high quality version
        const highQualityImage = new Image();
        highQualityImage.src = src;
        highQualityImage.onload = () => {
          setCurrentSrc(src);
          setLoading(false);
        };
        highQualityImage.onerror = () => {
          setError(true);
          setLoading(false);
        };
      };
      lowQualityImage.onerror = () => {
        // If low quality fails, try loading high quality directly
        const highQualityImage = new Image();
        highQualityImage.src = src;
        highQualityImage.onload = () => {
          setCurrentSrc(src);
          setLoading(false);
        };
        highQualityImage.onerror = () => {
          setError(true);
          setLoading(false);
        };
      };
    } else {
      // If no low quality version, load high quality directly
      const highQualityImage = new Image();
      highQualityImage.src = src;
      highQualityImage.onload = () => {
        setCurrentSrc(src);
        setLoading(false);
      };
      highQualityImage.onerror = () => {
        setError(true);
        setLoading(false);
      };
    }
    
    return () => {
      // Cleanup
    };
  }, [src, lowQualitySrc, placeholder]);

  return { src: currentSrc, loading, error };
}
