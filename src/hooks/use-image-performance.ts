
import { useState, useEffect } from "react";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";

interface ImageLoadOptions {
  crossOrigin?: 'anonymous' | 'use-credentials' | '';
  referrerPolicy?: string;
  priority?: boolean;
}

/**
 * Enhanced hook to handle image loading states with performance optimizations
 * and device-aware loading strategies
 */
export function useImageLoading(
  src: string,
  options: ImageLoadOptions = {}
) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const devicePerformance = useDevicePerformance();
  
  useEffect(() => {
    if (!src || typeof window === 'undefined') return;
    
    setStatus('loading');
    
    const img = new Image();
    if (options.crossOrigin) img.crossOrigin = options.crossOrigin;
    if (options.referrerPolicy) img.referrerPolicy = options.referrerPolicy;
    
    const handleLoad = () => setStatus('success');
    const handleError = () => setStatus('error');
    
    // Use high priority loading if specified or device performance is high
    if ((options.priority || devicePerformance === 'high') && 'fetchPriority' in img) {
      (img as any).fetchPriority = options.priority ? 'high' : 'auto';
    }
    
    // On low-performance devices, use a simple image loading approach
    if (devicePerformance === 'low' && !options.priority) {
      // For low-performance devices, we use a simpler approach
      img.onload = handleLoad;
      img.onerror = handleError;
      img.src = src;
    } else {
      // For better devices, use decode() for smoother rendering if available
      img.onload = () => {
        if ('decode' in img) {
          img.decode().then(handleLoad).catch(handleError);
        } else {
          handleLoad();
        }
      };
      img.onerror = handleError;
      img.src = src;
    }
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, options.crossOrigin, options.referrerPolicy, options.priority, devicePerformance]);
  
  return {
    isLoading: status === 'loading',
    isLoaded: status === 'success',
    hasError: status === 'error',
    status
  };
}

/**
 * Enhanced hook to preload multiple images with performance awareness
 */
export function usePreloadImages(imageSources: string[], priority: boolean = false) {
  const [loadedCount, setLoadedCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const devicePerformance = useDevicePerformance();
  
  useEffect(() => {
    if (!imageSources.length || typeof window === 'undefined') return;
    
    let mounted = true;
    const images: HTMLImageElement[] = [];
    
    // For low-performance devices with non-priority images, only preload critical ones
    const imagesToLoad = devicePerformance === 'low' && !priority 
      ? imageSources.slice(0, Math.min(3, imageSources.length))
      : imageSources;
    
    imagesToLoad.forEach(src => {
      const img = new Image();
      
      // Set fetchPriority if supported and available
      if ((priority || devicePerformance === 'high') && 'fetchPriority' in img) {
        (img as any).fetchPriority = priority ? 'high' : 'auto';
      }
      
      img.onload = () => {
        if (!mounted) return;
        setLoadedCount(count => count + 1);
      };
      
      img.onerror = () => {
        if (!mounted) return;
        setErrorCount(count => count + 1);
        console.error(`Failed to preload image: ${src}`);
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
  }, [imageSources, priority, devicePerformance]);
  
  const totalImages = imageSources.length;
  const processedImages = loadedCount + errorCount;
  const isComplete = processedImages === totalImages;
  const progress = totalImages > 0 ? processedImages / totalImages : 0;
  
  return {
    loadedCount,
    errorCount,
    progress,
    isComplete,
    isPartiallyLoaded: loadedCount > 0
  };
}
