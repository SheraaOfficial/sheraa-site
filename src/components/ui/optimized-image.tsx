
import React, { useState, useEffect } from 'react';
import { useOptimizedImage } from '@/hooks/use-optimized-image';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

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
  ...props
}: OptimizedImageProps) {
  const { src: optimizedSrc, loading: isLoading, error } = useOptimizedImage({
    src,
    lowQualitySrc,
    priority,
    sizes: props.sizes,
  });

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

  return (
    <div 
      className={cn("relative overflow-hidden", containerClassName)} 
      style={aspectRatio ? containerStyle : undefined}
    >
      {(isLoading && showSkeleton) && (
        <Skeleton 
          className={cn("absolute inset-0 w-full h-full", className)} 
        />
      )}
      
      <img
        src={optimizedSrc}
        alt={alt}
        loading={priority ? 'eager' : loading}
        className={cn(
          "transition-opacity duration-300", 
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        {...props}
      />
    </div>
  );
}
