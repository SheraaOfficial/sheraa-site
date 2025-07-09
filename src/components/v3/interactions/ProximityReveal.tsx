import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface ProximityRevealProps {
  children: React.ReactNode;
  revealContent: React.ReactNode;
  triggerDistance?: number;
  className?: string;
  revealDirection?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export const ProximityReveal: React.FC<ProximityRevealProps> = ({
  children,
  revealContent,
  triggerDistance = 100,
  className = "",
  revealDirection = 'fade'
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [proximityLevel, setProximityLevel] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  const revealProgress = useMotionValue(0);
  const springProgress = useSpring(revealProgress, { damping: 20, stiffness: 300 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      const proximity = Math.max(0, 1 - distance / triggerDistance);
      setProximityLevel(proximity);

      if (distance < triggerDistance) {
        setIsRevealed(true);
        revealProgress.set(proximity);
      } else {
        setIsRevealed(false);
        revealProgress.set(0);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [triggerDistance, revealProgress]);

  const getRevealTransform = () => {
    const progress = springProgress.get();
    switch (revealDirection) {
      case 'up':
        return { y: `${100 - progress * 100}%`, opacity: progress };
      case 'down':
        return { y: `${-100 + progress * 100}%`, opacity: progress };
      case 'left':
        return { x: `${100 - progress * 100}%`, opacity: progress };
      case 'right':
        return { x: `${-100 + progress * 100}%`, opacity: progress };
      case 'fade':
      default:
        return { opacity: progress, scale: 0.8 + progress * 0.2 };
    }
  };

  return (
    <div ref={elementRef} className={`relative ${className}`}>
      {children}
      
      {/* Proximity indicator */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          boxShadow: `0 0 ${proximityLevel * 30}px hsl(var(--sheraa-primary) / ${proximityLevel * 0.3})`,
          borderColor: `hsl(var(--sheraa-primary) / ${proximityLevel * 0.5})`,
        }}
        style={{
          border: proximityLevel > 0 ? '1px solid' : 'none',
          borderRadius: '8px',
        }}
      />

      {/* Revealed content */}
      {isRevealed && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          initial={getRevealTransform()}
          animate={getRevealTransform()}
          exit={{ opacity: 0, scale: 0.8 }}
          style={{
            background: 'linear-gradient(135deg, hsl(var(--background) / 0.95), hsl(var(--background) / 0.9))',
            backdropFilter: 'blur(8px)',
            borderRadius: '8px',
            border: '1px solid hsl(var(--border) / 0.3)',
          }}
        >
          <div className="p-4 h-full flex items-center justify-center">
            {revealContent}
          </div>
        </motion.div>
      )}
    </div>
  );
};