import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';

interface ElasticScrollPhysicsProps {
  children: React.ReactNode;
  elasticity?: number; // 0-1, higher = more elastic
  overshoot?: number; // How much overshoot to allow
  damping?: number; // Spring damping
  stiffness?: number; // Spring stiffness
  mass?: number; // Spring mass
  enabled?: boolean;
  className?: string;
}

export const ElasticScrollPhysics: React.FC<ElasticScrollPhysicsProps> = ({
  children,
  elasticity = 0.8,
  overshoot = 100,
  damping = 20,
  stiffness = 300,
  mass = 1,
  enabled = true,
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  
  const scrollY = useMotionValue(0);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Spring configuration for elastic physics
  const springConfig = { damping, stiffness, mass };
  
  // Elastic transforms
  const elasticY = useSpring(scrollY, springConfig);
  const elasticScale = useSpring(
    useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1.02, 1.02, 1]),
    springConfig
  );
  
  const elasticRotation = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]),
    { ...springConfig, damping: damping * 1.5 }
  );

  // Overshoot effect at boundaries
  const overshootY = useSpring(0, {
    damping: damping * 0.8,
    stiffness: stiffness * 1.5,
    mass: mass * 0.6
  });

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY.current;
      
      setIsScrolling(true);
      setScrollDirection(deltaY > 0 ? 'down' : 'up');
      
      // Apply elasticity to scroll
      const elasticDelta = deltaY * elasticity;
      scrollY.set(currentScrollY + elasticDelta);
      
      // Handle overshoot at boundaries
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      if (currentScrollY <= 0 && deltaY < 0) {
        // Top overshoot
        overshootY.set(-overshoot * Math.abs(deltaY) * 0.01);
      } else if (currentScrollY >= maxScroll && deltaY > 0) {
        // Bottom overshoot
        overshootY.set(overshoot * deltaY * 0.01);
      } else {
        overshootY.set(0);
      }
      
      lastScrollY.current = currentScrollY;
      
      // Reset scrolling state after delay
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        setScrollDirection(null);
        scrollY.set(currentScrollY); // Snap back to actual position
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, [enabled, elasticity, overshoot, scrollY, overshootY]);

  // Bounce animation for scroll direction
  const bounceScale = useTransform(
    elasticY,
    (value) => isScrolling ? 1 + (Math.abs(value - window.scrollY) * 0.0001) : 1
  );

  // Directional skew based on scroll
  const skewY = useTransform(
    elasticY,
    (value) => {
      const delta = value - window.scrollY;
      return isScrolling ? delta * 0.01 : 0;
    }
  );

  // Elastic background effects
  const backgroundY = useTransform(elasticY, (value) => value * 0.5);
  const backgroundScale = useTransform(
    elasticY,
    (value) => 1 + Math.abs(value - window.scrollY) * 0.00005
  );

  return (
    <motion.div
      ref={containerRef}
      className={`elastic-scroll-container ${className}`}
      style={{
        y: enabled ? elasticY : 0,
        scale: enabled ? elasticScale : 1,
        rotateZ: enabled ? elasticRotation : 0,
      }}
    >
      {/* Elastic background effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: enabled ? backgroundY : 0,
          scale: enabled ? backgroundScale : 1,
          opacity: isScrolling ? 0.1 : 0,
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-sheraa-primary/20 to-sheraa-teal/20" />
      </motion.div>

      {/* Overshoot indicator */}
      {enabled && (
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sheraa-primary to-sheraa-teal z-50"
          style={{
            y: overshootY,
            scaleX: useTransform(overshootY, [-overshoot, overshoot], [0, 1]),
            opacity: useTransform(overshootY, [0, overshoot * 0.5], [0, 1]),
          }}
        />
      )}

      {/* Directional bounce effects */}
      <motion.div
        style={{
          scale: enabled ? bounceScale : 1,
          skewY: enabled ? skewY : 0,
        }}
      >
        {children}
      </motion.div>

      {/* Scroll velocity particles */}
      {enabled && isScrolling && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-sheraa-primary/60 rounded-full"
              style={{
                left: `${10 + i * 10}%`,
                top: `${20 + i * 8}%`,
              }}
              animate={{
                y: scrollDirection === 'down' ? [0, -30, 0] : [0, 30, 0],
                x: [-5, 5, -5],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: i * 0.05
              }}
            />
          ))}
        </div>
      )}

      {/* Debug info (remove in production) */}
      {process.env.NODE_ENV === 'development' && enabled && (
        <motion.div
          className="fixed top-4 left-4 z-50 p-2 bg-black/80 text-white text-xs rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolling ? 1 : 0 }}
        >
          <div>Elastic: {elasticity}</div>
          <div>Direction: {scrollDirection || 'none'}</div>
          <div>Overshoot: {Math.round(overshootY.get())}</div>
        </motion.div>
      )}
    </motion.div>
  );
};