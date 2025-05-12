
import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { useIsMobile } from '@/hooks/useDeviceDetection';

interface ImpactBackgroundProps {
  springScroll: MotionValue<number>;
}

const ImpactBackground: React.FC<ImpactBackgroundProps> = ({ springScroll }) => {
  const isMobile = useIsMobile();
  
  if (isMobile) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-sheraa-primary/5 to-transparent rounded-full blur-3xl"
        style={{ 
          y: springScroll
        }}
      />
      
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-sheraa-teal/5 to-transparent rounded-full blur-3xl"
        style={{ 
          y: springScroll
        }}
      />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5" />
    </div>
  );
};

export default ImpactBackground;
