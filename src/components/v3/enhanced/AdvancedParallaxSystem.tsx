import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

interface ParallaxLayer {
  id: string;
  depth: number; // 1-10, higher = more parallax effect
  content: React.ReactNode;
  physics?: 'normal' | 'elastic' | 'magnetic' | 'organic';
  opacity?: [number, number]; // [start, end] opacity
  scale?: [number, number]; // [start, end] scale
  rotation?: [number, number]; // [start, end] rotation in degrees
  offset?: number; // Offset start position
}

interface AdvancedParallaxSystemProps {
  layers: ParallaxLayer[];
  height?: string;
  className?: string;
  scrollVelocityMultiplier?: number;
  enableMouseParallax?: boolean;
  enableMorphing?: boolean;
  persona?: 'young' | 'adult' | 'stakeholder' | 'general';
}

export const AdvancedParallaxSystem: React.FC<AdvancedParallaxSystemProps> = ({
  layers,
  height = '100vh',
  className = '',
  scrollVelocityMultiplier = 1,
  enableMouseParallax = true,
  enableMorphing = true,
  persona = 'general'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollVelocity, setScrollVelocity] = useState(0);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const { scrollY, scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Advanced spring configurations for different physics
  const getSpringConfig = (physics: string) => {
    switch (physics) {
      case 'elastic':
        return { damping: 8, stiffness: 400, mass: 0.3 };
      case 'magnetic':
        return { damping: 15, stiffness: 300, mass: 0.8 };
      case 'organic':
        return { damping: 20, stiffness: 200, mass: 1.2 };
      default:
        return { damping: 25, stiffness: 400, mass: 0.5 };
    }
  };

  // Scroll velocity tracking
  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const updateScrollVelocity = () => {
      const currentScrollY = scrollY.get();
      const velocity = Math.abs(currentScrollY - lastScrollY) * scrollVelocityMultiplier;
      setScrollVelocity(velocity);
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollVelocity);
        ticking = true;
      }
    };

    const unsubscribe = scrollY.onChange(onScroll);
    return unsubscribe;
  }, [scrollY, scrollVelocityMultiplier]);

  // Mouse parallax tracking
  useEffect(() => {
    if (!enableMouseParallax) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const normalizedX = (e.clientX - centerX) / (rect.width / 2);
      const normalizedY = (e.clientY - centerY) / (rect.height / 2);
      
      setMousePosition({ x: normalizedX, y: normalizedY });
      mouseX.set(normalizedX * 50);
      mouseY.set(normalizedY * 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enableMouseParallax, mouseX, mouseY]);

  const getPersonaColors = () => {
    switch (persona) {
      case 'young':
        return {
          particle1: 'hsl(var(--young-lavender) / 0.3)',
          particle2: 'hsl(var(--young-rose-pink) / 0.3)',
          particle3: 'hsl(var(--young-warm-coral) / 0.3)'
        };
      case 'adult':
        return {
          particle1: 'hsl(var(--sheraa-primary) / 0.3)',
          particle2: 'hsl(var(--sheraa-secondary) / 0.3)',
          particle3: 'hsl(var(--sheraa-teal) / 0.3)'
        };
      case 'stakeholder':
        return {
          particle1: 'hsl(var(--warm-gold) / 0.3)',
          particle2: 'hsl(var(--mocha-500) / 0.3)',
          particle3: 'hsl(var(--sheraa-primary) / 0.3)'
        };
      default:
        return {
          particle1: 'hsl(var(--sheraa-primary) / 0.3)',
          particle2: 'hsl(var(--sheraa-teal) / 0.3)',
          particle3: 'hsl(var(--sheraa-secondary) / 0.3)'
        };
    }
  };

  const colors = getPersonaColors();

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      {/* Velocity-based morphing background */}
      {enableMorphing && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              `radial-gradient(ellipse 100% 50% at 50% 0%, ${colors.particle1}, transparent)`,
              `radial-gradient(ellipse 120% 60% at 30% 20%, ${colors.particle2}, transparent)`,
              `radial-gradient(ellipse 80% 40% at 70% 80%, ${colors.particle3}, transparent)`,
              `radial-gradient(ellipse 100% 50% at 50% 0%, ${colors.particle1}, transparent)`
            ]
          }}
          transition={{
            duration: 8 + scrollVelocity * 0.1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Advanced Parallax Layers */}
      {layers.map((layer) => {
        const springConfig = getSpringConfig(layer.physics || 'normal');
        
        // Calculate parallax intensity based on depth
        const parallaxIntensity = layer.depth * 10;
        
        // Scroll-based transforms
        const yTransform = useTransform(
          scrollYProgress,
          [0, 1],
          [layer.offset || 0, -parallaxIntensity * (1 + scrollVelocity * 0.01)]
        );
        
        const scaleTransform = layer.scale ? useTransform(
          scrollYProgress,
          [0, 1],
          layer.scale
        ) : 1;
        
        const opacityTransform = layer.opacity ? useTransform(
          scrollYProgress,
          [0, 1],
          layer.opacity
        ) : 1;
        
        const rotationTransform = layer.rotation ? useTransform(
          scrollYProgress,
          [0, 1],
          layer.rotation
        ) : 0;

        // Mouse parallax with spring physics
        const mouseParallaxX = useSpring(
          useTransform(mouseX, [-50, 50], [-layer.depth, layer.depth]),
          springConfig
        );
        
        const mouseParallaxY = useSpring(
          useTransform(mouseY, [-50, 50], [-layer.depth, layer.depth]),
          springConfig
        );

        // Velocity-based morphing effects
        const velocityScale = useTransform(
          scrollYProgress,
          [0, 1],
          [1, 1 + (scrollVelocity * 0.001)]
        );

        const velocitySkew = useTransform(
          scrollYProgress,
          [0, 1],
          [0, scrollVelocity * 0.1]
        );

        return (
          <motion.div
            key={layer.id}
            className="absolute inset-0"
            style={{
              y: yTransform,
              scale: typeof scaleTransform === 'number' ? velocityScale : scaleTransform,
              opacity: opacityTransform,
              rotate: rotationTransform,
              x: enableMouseParallax ? mouseParallaxX : 0,
              skewY: enableMorphing ? velocitySkew : 0,
              zIndex: 10 - layer.depth,
            }}
          >
            {/* Perspective shift effects */}
            <motion.div
              style={{
                rotateX: enableMouseParallax ? useTransform(mouseY, [-1, 1], [2, -2]) : 0,
                rotateY: enableMouseParallax ? useTransform(mouseX, [-1, 1], [-2, 2]) : 0,
                transformStyle: 'preserve-3d',
              }}
            >
              {layer.content}
            </motion.div>
          </motion.div>
        );
      })}

      {/* Scroll velocity indicator */}
      {scrollVelocity > 5 && (
        <motion.div
          className="absolute top-4 right-4 z-50 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          Velocity: {Math.round(scrollVelocity)}
        </motion.div>
      )}

      {/* Dynamic floating particles based on scroll velocity */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{
            background: i % 2 === 0 ? colors.particle1 : colors.particle2,
            left: `${20 + i * 15}%`,
            top: `${10 + i * 10}%`,
          }}
          animate={{
            y: scrollVelocity > 10 ? [-20, 20, -20] : [0, -10, 0],
            x: scrollVelocity > 10 ? [-10, 10, -10] : [0, 5, 0],
            scale: scrollVelocity > 15 ? [1, 1.5, 1] : [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
    </div>
  );
};