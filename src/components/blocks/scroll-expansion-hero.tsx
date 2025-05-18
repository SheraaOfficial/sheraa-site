
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType: 'video' | 'image';
  mediaSrc: string;
  bgImageSrc: string;
  title: string;
  date: string;
  scrollToExpand: string;
  posterSrc?: string;
  textBlend?: boolean;
  children: React.ReactNode;
}

const ScrollExpandMedia: React.FC<ScrollExpandMediaProps> = ({
  mediaType,
  mediaSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  posterSrc,
  textBlend = false,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  
  // Get scroll progress within the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  // Transform values based on scroll progress
  const mediaScale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);
  const mediaBorderRadius = useTransform(scrollYProgress, [0, 0.5], [32, 0]);
  const mediaY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 0.6]);
  const contentOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.6, 0.8], [60, 0]);

  // Calculate container height on mount and window resize
  useEffect(() => {
    const calculateHeight = () => {
      if (containerRef.current) {
        // Set height to 200vh to ensure enough scroll space
        setContainerHeight(window.innerHeight * 2);
      }
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    
    // Reset function for external control
    const handleReset = () => {
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('resetSection', handleReset);
    
    return () => {
      window.removeEventListener('resize', calculateHeight);
      window.removeEventListener('resetSection', handleReset);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full"
      style={{ height: `${containerHeight}px` }}
    >
      {/* Fixed position container that stays in view while scrolling through the section */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-start">
        {/* Background image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImageSrc})` }}
        >
          {/* Gradient overlay that becomes more visible as you scroll */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
            style={{ opacity: overlayOpacity }}
          />
        </div>

        {/* Header section */}
        <div className="relative z-10 w-full px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-lg font-medium text-white/70">{date}</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">{title}</h2>
            <p className="text-white/70 mt-4 text-sm font-medium tracking-wider uppercase">
              {scrollToExpand}
            </p>
          </div>
        </div>
        
        {/* Media container that grows as you scroll */}
        <div className="relative flex-grow flex items-center justify-center px-4 z-10">
          <motion.div 
            className="relative w-full max-w-7xl mx-auto overflow-hidden"
            style={{ 
              scale: mediaScale,
              borderRadius: mediaBorderRadius,
              y: mediaY,
            }}
          >
            {mediaType === 'video' ? (
              <video
                src={mediaSrc}
                poster={posterSrc}
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
                playsInline
              />
            ) : (
              <img
                src={mediaSrc}
                alt={title}
                className="w-full h-full object-cover"
              />
            )}
            
            {/* Text blend overlay (optional) */}
            {textBlend && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            )}
          </motion.div>
        </div>
        
        {/* Content section - appears as you scroll past halfway */}
        <motion.div 
          className="relative z-20 mt-auto w-full bg-white dark:bg-gray-900 py-16 px-4"
          style={{ 
            opacity: contentOpacity,
            y: contentY
          }}
        >
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollExpandMedia;
