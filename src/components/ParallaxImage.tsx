
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  overlay?: boolean | 'light' | 'dark' | 'gradient' | 'none';
  overlayStrength?: 'light' | 'medium' | 'strong';
  position?: 'center' | 'top' | 'bottom';
}

const ParallaxImage = ({ 
  src, 
  alt, 
  className = "", 
  speed = 0.5, 
  overlay = true, 
  overlayStrength = 'medium',
  position = 'center'
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  // Determine overlay classes based on type and strength
  const getOverlayClasses = () => {
    if (overlay === false || overlay === 'none') return '';
    
    const strengthMap = {
      light: {
        true: 'bg-black/20',
        dark: 'bg-black/30',
        light: 'bg-white/30',
        gradient: 'bg-gradient-to-b from-black/10 to-black/40'
      },
      medium: {
        true: 'bg-black/40',
        dark: 'bg-black/50',
        light: 'bg-white/50',
        gradient: 'bg-gradient-to-b from-black/20 to-black/60'
      },
      strong: {
        true: 'bg-black/60',
        dark: 'bg-black/70',
        light: 'bg-white/70',
        gradient: 'bg-gradient-to-b from-black/30 to-black/80'
      }
    };
    
    // Convert boolean true to 'true' string for indexing
    const overlayType = overlay === true ? 'true' : overlay;
    return `${strengthMap[overlayStrength][overlayType]} mix-blend-multiply`;
  };

  // Determine position class
  const getPositionClass = () => {
    switch (position) {
      case 'top': return 'object-top';
      case 'bottom': return 'object-bottom';
      default: return 'object-center';
    }
  };

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="w-full h-[120%] -top-[10%] absolute"
      >
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${getPositionClass()}`}
        />
      </motion.div>
      {overlay !== false && overlay !== 'none' && (
        <div className={`absolute inset-0 ${getOverlayClasses()}`} />
      )}
    </div>
  );
};

export default ParallaxImage;
