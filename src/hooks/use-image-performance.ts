
import { useState, useEffect } from "react";

interface ImageLoadOptions {
  crossOrigin?: 'anonymous' | 'use-credentials' | '';
  referrerPolicy?: string;
  priority?: boolean;
}

/**
 * Hook to handle image loading states with performance optimizations
 */
export function useImageLoading(
  src: string,
  options: ImageLoadOptions = {}
) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  useEffect(() => {
    if (!src || typeof window === 'undefined') return;
    
    setStatus('loading');
    
    const img = new Image();
    if (options.crossOrigin) img.crossOrigin = options.crossOrigin;
    if (options.referrerPolicy) img.referrerPolicy = options.referrerPolicy;
    
    const handleLoad = () => setStatus('success');
    const handleError = () => setStatus('error');
    
    // Use high priority loading if specified
    if (options.priority && 'fetchPriority' in img) {
      (img as any).fetchPriority = 'high';
    }
    
    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = src;
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, options.crossOrigin, options.referrerPolicy, options.priority]);
  
  return {
    isLoading: status === 'loading',
    isLoaded: status === 'success',
    hasError: status === 'error',
    status
  };
}

/**
 * Hook to preload multiple images for better user experience
 */
export function usePreloadImages(imageSources: string[]) {
  const [loadedCount, setLoadedCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  
  useEffect(() => {
    if (!imageSources.length || typeof window === 'undefined') return;
    
    let mounted = true;
    const images: HTMLImageElement[] = [];
    
    imageSources.forEach(src => {
      const img = new Image();
      
      img.onload = () => {
        if (!mounted) return;
        setLoadedCount(count => count + 1);
      };
      
      img.onerror = () => {
        if (!mounted) return;
        setErrorCount(count => count + 1);
      };
      
      img.src = src;
      images.push(img);
    });
    
    return () => {
      mounted = false;
      images.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageSources]);
  
  const totalImages = imageSources.length;
  const isComplete = loadedCount + errorCount === totalImages;
  const progress = totalImages > 0 ? (loadedCount + errorCount) / totalImages : 0;
  
  return {
    loadedCount,
    errorCount,
    progress,
    isComplete
  };
}
