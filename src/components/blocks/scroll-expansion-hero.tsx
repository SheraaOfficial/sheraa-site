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
  return;
};
export default ScrollExpandMedia;