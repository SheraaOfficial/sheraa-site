
import { useState, useEffect, useCallback } from "react";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";

interface ImageLoadOptions {
  crossOrigin?: 'anonymous' | 'use-credentials' | '';
  referrerPolicy?: string;
  priority?: boolean;
  sizes?: string;
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
    
    // Track if component is still mounted
    let isMounted = true;
    
    const img = new Image();
    if (options.crossOrigin) img.crossOrigin = options.crossOrigin;
    if (options.referrerPolicy) img.referrerPolicy = options.referrerPolicy;
    if (options.sizes) img.sizes = options.sizes;
    
    const handleLoad = () => {
      if (!isMounted) return;
      setStatus('success');
    };
    
    const handleError = () => {
      if (!isMounted) return;
      setStatus('error');
    };
    
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
        if (!isMounted) return;
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
      isMounted = false;
      img.onload = null;
      img.onerror = null;
    };
  }, [src, options.crossOrigin, options.referrerPolicy, options.priority, options.sizes, devicePerformance]);
  
  return {
    isLoading: status === 'loading',
    isLoaded: status === 'success',
    hasError: status === 'error',
    status
  };
}

/**
 * Enhanced hook to preload multiple images with performance awareness and loading indicators
 */
export function usePreloadImages(imageSources: string[], priority: boolean = false) {
  const [loadedCount, setLoadedCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const devicePerformance = useDevicePerformance();
  
  // Callback to handle successful image loads
  const handleImageLoad = useCallback((src: string) => {
    setLoadedCount(prev => prev + 1);
    setLoadedImages(prev => ({
      ...prev,
      [src]: true
    }));
  }, []);
  
  // Callback to handle image load errors
  const handleImageError = useCallback((src: string) => {
    setErrorCount(prev => prev + 1);
    console.error(`Failed to preload image: ${src}`);
  }, []);
  
  useEffect(() => {
    if (!imageSources.length || typeof window === 'undefined') return;
    
    let mounted = true;
    const images: HTMLImageElement[] = [];
    
    // For low-performance devices with non-priority images, only preload critical ones
    const imagesToLoad = devicePerformance === 'low' && !priority 
      ? imageSources.slice(0, Math.min(3, imageSources.length))
      : imageSources;
    
    // Use intersection observer for smarter loading if available
    const useIntersectionObserver = 'IntersectionObserver' in window && devicePerformance !== 'low';
    
    if (useIntersectionObserver) {
      // Create a div to observe
      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.top = '0';
      div.style.left = '0';
      div.style.width = '1px';
      div.style.height = '1px';
      div.style.opacity = '0';
      document.body.appendChild(div);
      
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          // Start loading images when div is visible
          imagesToLoad.forEach((src, index) => {
            const img = new Image();
            
            if ((priority || devicePerformance === 'high') && 'fetchPriority' in img) {
              (img as any).fetchPriority = priority ? 'high' : 'auto';
            }
            
            img.onload = () => {
              if (!mounted) return;
              setTimeout(() => handleImageLoad(src), index * 50); // Stagger loading events
            };
            
            img.onerror = () => {
              if (!mounted) return;
              handleImageError(src);
            };
            
            img.src = src;
            images.push(img);
          });
          
          // Disconnect once started
          observer.disconnect();
          document.body.removeChild(div);
        }
      }, { threshold: 0.1 });
      
      observer.observe(div);
      
      return () => {
        mounted = false;
        observer.disconnect();
        if (document.body.contains(div)) {
          document.body.removeChild(div);
        }
        images.forEach(img => {
          img.onload = null;
          img.onerror = null;
        });
      };
    } else {
      // Fall back to direct loading
      imagesToLoad.forEach(src => {
        const img = new Image();
        
        if ((priority || devicePerformance === 'high') && 'fetchPriority' in img) {
          (img as any).fetchPriority = priority ? 'high' : 'auto';
        }
        
        img.onload = () => {
          if (!mounted) return;
          handleImageLoad(src);
        };
        
        img.onerror = () => {
          if (!mounted) return;
          handleImageError(src);
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
    }
  }, [imageSources, priority, devicePerformance, handleImageLoad, handleImageError]);
  
  const totalImages = imageSources.length;
  const processedImages = loadedCount + errorCount;
  const isComplete = processedImages === totalImages;
  const progress = totalImages > 0 ? processedImages / totalImages : 0;
  
  return {
    loadedCount,
    errorCount,
    progress,
    isComplete,
    isPartiallyLoaded: loadedCount > 0,
    loadedImages,
    isImageLoaded: (src: string) => loadedImages[src] || false
  };
}
