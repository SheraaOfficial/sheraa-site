
import React, { useState, useEffect } from 'react';
import { useOptimizedImage } from '@/hooks/use-optimized-image';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';
import { useIsMobile } from '@/hooks/useDeviceDetection';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  lowQualitySrc?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  fallback?: React.ReactNode;
  showSkeleton?: boolean;
  fadeIn?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedImage({
  src,
  lowQualitySrc,
  alt,
  className,
  containerClassName,
  aspectRatio,
  priority = false,
  loading = 'lazy',
  fallback,
  showSkeleton = true,
  fadeIn = true,
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  const devicePerformance = useDevicePerformance();
  const isMobile = useIsMobile();
  const { src: optimizedSrc, loading: isLoading, error } = useOptimizedImage({
    src,
    lowQualitySrc,
    priority,
    sizes: props.sizes,
    onLoad,
    onError
  });

  // Use native lazy loading for non-priority images
  const nativeLazyLoading = !priority && 'loading' in HTMLImageElement.prototype;
  
  // Generate appropriate sizes if not provided
  const imageSizes = props.sizes || (isMobile ? '100vw' : '50vw');

  // Determine container style based on aspect ratio
  const containerStyle = aspectRatio
    ? {
        position: 'relative' as const,
        paddingBottom: `${(1 / aspectRatio) * 100}%`,
      }
    : { position: 'relative' as const };

  if (error && fallback) {
    return <>{fallback}</>;
  }

  // Optimize skeleton animation for lower-end devices
  const shouldAnimate = devicePerformance !== 'low';

  return (
    <div 
      className={cn("relative overflow-hidden", containerClassName)} 
      style={aspectRatio ? containerStyle : undefined}
    >
      {(isLoading && showSkeleton) && (
        <Skeleton 
          className={cn("absolute inset-0 w-full h-full", className)} 
          // Disable animation on low-end devices
          style={{ animation: shouldAnimate ? undefined : 'none' }}
        />
      )}
      
      <img
        src={optimizedSrc}
        alt={alt}
        loading={nativeLazyLoading ? 'lazy' : (priority ? 'eager' : loading)}
        className={cn(
          "max-w-full h-auto will-change-opacity", 
          fadeIn && devicePerformance !== 'low' ? "transition-opacity duration-300" : "",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        // Add decoding attribute for better performance
        decoding={priority ? "sync" : "async"}
        // Add fetchpriority attribute for modern browsers
        fetchPriority={priority ? "high" : "auto"}
        sizes={imageSizes}
        {...props}
      />
    </div>
  );
}
