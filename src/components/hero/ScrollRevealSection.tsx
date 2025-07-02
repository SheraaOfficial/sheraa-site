import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useOptimizedScroll } from '@/hooks/useOptimizedScroll';

interface ScrollRevealSectionProps {
  children: ReactNode;
  className?: string;
  offset?: number;
  parallaxOffset?: number;
}

export const ScrollRevealSection: React.FC<ScrollRevealSectionProps> = ({
  children,
  className = '',
  offset = 100,
  parallaxOffset = 0.3
}) => {
  const { scrollY } = useOptimizedScroll();
  
  // Calculate reveal progress based on scroll position
  const startReveal = window.innerHeight - offset;
  const revealProgress = Math.max(0, Math.min(1, (scrollY - startReveal) / window.innerHeight));
  
  // Parallax effect
  const parallaxY = scrollY * parallaxOffset;

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        transform: `translateY(${parallaxY}px)`,
        opacity: revealProgress,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};