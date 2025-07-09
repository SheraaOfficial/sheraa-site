import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface ParallaxLayer {
  speed: number;
  elements: React.ReactNode;
  zIndex?: number;
}

interface ImmersiveParallaxProps {
  layers: {
    background: ParallaxLayer;
    midground: ParallaxLayer;
    foreground: ParallaxLayer;
  };
  persona: 'young' | 'adult' | 'stakeholder' | 'general';
  viewport: 'mobile' | 'tablet' | 'desktop';
  className?: string;
}

export const ImmersiveParallaxSystem: React.FC<ImmersiveParallaxProps> = ({
  layers,
  persona,
  viewport,
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const isMobile = useIsMobile();
  const isInView = useInView(containerRef, { margin: "-20%" });
  
  // Performance optimization: reduce complexity on mobile
  const effectiveSpeed = (speed: number) => {
    if (isMobile) return speed * 0.3;
    return speed;
  };

  // Smooth spring physics for desktop, direct for mobile
  const springConfig = isMobile 
    ? { stiffness: 100, damping: 30 }
    : { stiffness: 50, damping: 15 };

  // Background layer transforms
  const backgroundY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, effectiveSpeed(layers.background.speed)]),
    springConfig
  );

  // Midground layer transforms
  const midgroundY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, effectiveSpeed(layers.midground.speed)]),
    springConfig
  );

  // Foreground layer transforms
  const foregroundY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, effectiveSpeed(layers.foreground.speed)]),
    springConfig
  );

  // Persona-specific background effects
  const getPersonaBackground = () => {
    switch (persona) {
      case 'young':
        return "bg-gradient-to-br from-blue-400/10 via-purple-400/5 to-pink-400/10";
      case 'stakeholder':
        return "bg-gradient-to-br from-amber-500/15 via-yellow-600/10 to-orange-500/5";
      case 'adult':
        return "bg-gradient-to-br from-gray-600/10 via-slate-500/5 to-gray-700/10";
      default:
        return "bg-gradient-to-br from-sheraa-primary/10 via-sheraa-teal/5 to-sheraa-secondary/10";
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${getPersonaBackground()} ${className}`}
    >
      {/* Background Layer */}
      <motion.div
        style={{ 
          y: backgroundY,
          zIndex: layers.background.zIndex || 1
        }}
        className="absolute inset-0 will-change-transform"
      >
        {layers.background.elements}
      </motion.div>

      {/* Midground Layer */}
      <motion.div
        style={{ 
          y: midgroundY,
          zIndex: layers.midground.zIndex || 10
        }}
        className="absolute inset-0 will-change-transform"
      >
        {layers.midground.elements}
      </motion.div>

      {/* Foreground Layer */}
      <motion.div
        style={{ 
          y: foregroundY,
          zIndex: layers.foreground.zIndex || 20
        }}
        className="relative will-change-transform"
      >
        {layers.foreground.elements}
      </motion.div>

      {/* Persona-specific floating elements */}
      {!isMobile && isInView && (
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {persona === 'young' && <YoungFloatingElements />}
          {persona === 'stakeholder' && <StakeholderFloatingElements />}
          {persona === 'adult' && <AdultFloatingElements />}
        </motion.div>
      )}
    </div>
  );
};

// Persona-specific floating elements
const YoungFloatingElements: React.FC = () => (
  <>
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "easeInOut"
        }}
      />
    ))}
  </>
);

const StakeholderFloatingElements: React.FC = () => (
  <>
    {Array.from({ length: 6 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-amber-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: "easeInOut"
        }}
      />
    ))}
  </>
);

const AdultFloatingElements: React.FC = () => (
  <>
    {Array.from({ length: 5 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 bg-gray-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -25, 0],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 5 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 4,
          ease: "easeInOut"
        }}
      />
    ))}
  </>
);