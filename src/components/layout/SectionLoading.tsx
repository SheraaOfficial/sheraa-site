
import React from 'react';
import { useIsMobile } from '@/hooks/useDeviceDetection';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';

interface SectionLoadingProps {
  message?: string;
  height?: string;
  className?: string;
}

export const SectionLoading: React.FC<SectionLoadingProps> = ({ 
  message = 'Loading content...', 
  height,
  className = ''
}) => {
  const isMobile = useIsMobile();
  const devicePerformance = useDevicePerformance();
  
  // Simplify animation for low-end devices
  const shouldAnimate = devicePerformance !== 'low';
  
  // Determine appropriate height
  const loadingHeight = height || (isMobile ? 'min-h-60px' : 'min-h-100px');
  
  return (
    <div className={`${loadingHeight} flex flex-col items-center justify-center ${className}`}>
      <div className={`w-6 h-6 border-t-2 border-sheraa-primary rounded-full ${shouldAnimate ? 'animate-spin' : ''}`}></div>
      {message && (
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {message}
        </div>
      )}
    </div>
  );
};
