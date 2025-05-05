
import React from 'react';
import { useIsMobile } from '@/hooks/useDeviceDetection';

export const SectionLoading: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`min-h-[${isMobile ? '60px' : '100px'}] flex items-center justify-center`}>
      <div className="w-6 h-6 border-t-2 border-sheraa-primary rounded-full animate-spin"></div>
    </div>
  );
};
