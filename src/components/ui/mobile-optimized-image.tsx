
import React from 'react';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';
import { useIsMobile } from '@/hooks/useDeviceDetection'; 
import { OptimizedImage } from '@/components/ui/optimized-image';

interface MobileOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  containerClassName?: string;
  priority?: boolean;
  quality?: 'low' | 'medium' | 'high';
}

export function MobileOptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  containerClassName,
  priority = false,
  quality = 'medium'
}: MobileOptimizedImageProps) {
  const isMobile = useIsMobile();
  const devicePerformance = useDevicePerformance();
  
  // Determine actual quality based on device performance and quality prop
  const actualQuality = isMobile ? 
    (devicePerformance === 'low' ? 'low' : quality) : 
    quality;
  
  // Generate responsive sizes for mobile vs desktop
  const sizes = isMobile ? 
    '(max-width: 768px) 100vw, 50vw' : 
    '(max-width: 768px) 50vw, 33vw';
  
  // Calculate aspect ratio if both dimensions provided
  const aspectRatio = (width && height) ? width / height : undefined;
  
  // Generate a lower quality version for low-end devices
  const lowQualitySrc = src.includes('lovable-uploads') ? 
    src.replace('.png', '-small.png') : // Assuming we have smaller versions
    src;
  
  return (
    <OptimizedImage
      src={src}
      lowQualitySrc={isMobile ? lowQualitySrc : undefined}
      alt={alt}
      className={className}
      containerClassName={containerClassName}
      aspectRatio={aspectRatio}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      sizes={sizes}
      fadeIn={devicePerformance !== 'low'} // Disable fade-in animation on low-end devices
      showSkeleton={devicePerformance !== 'low'} // Disable skeleton on low-end devices
    />
  );
}
