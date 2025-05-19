
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
  children
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // Get scroll progress within the section
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
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
      style={{ height: containerHeight }}
    >
      <div className="sticky top-0 left-0 right-0 overflow-hidden h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImageSrc})` }} />
        
        {/* Media Container */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            scale: mediaScale,
            y: mediaY,
            borderRadius: mediaBorderRadius
          }}
        >
          {mediaType === 'video' ? (
            <video
              src={mediaSrc}
              poster={posterSrc}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img 
              src={mediaSrc} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
        
        {/* Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
          style={{ opacity: overlayOpacity }}
        />
        
        {/* Text Content */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-8"
          style={{ 
            opacity: contentOpacity,
            y: contentY
          }}
        >
          <div className={`container mx-auto ${textBlend ? 'mix-blend-difference' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
            <p className="text-xl text-white/80">{date}</p>
            <div className="mt-4 text-white">
              {children}
            </div>
            <div className="mt-6 text-white/50 text-sm animate-pulse">
              {scrollToExpand}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollExpandMedia;
