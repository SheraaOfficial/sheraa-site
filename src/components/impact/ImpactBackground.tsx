
import React, { useRef } from "react";
import { motion, MotionValue, useSpring, useTransform } from "framer-motion";

interface ImpactBackgroundProps {
  springScroll: MotionValue<number>;
}

// Optimized Impact Background using React.memo for better performance
const ImpactBackground: React.FC<ImpactBackgroundProps> = React.memo(({ springScroll }) => {
  // Enhanced background effects with optimized transforms
  const bgOpacity = useTransform(springScroll, [0, 0.5, 1], [0.3, 1, 0.3]);
  const rotate = useTransform(springScroll, [0, 0.5, 1], [0, 12, 24]);
  const rotate2 = useTransform(springScroll, [0, 0.5, 1], [0, -8, -16]);
  const rotate3 = useTransform(springScroll, [0, 0.5, 1], [0, 15, 0]);
  const scale = useTransform(springScroll, [0, 0.5, 1], [0.9, 1.05, 0.95]);
  
  return (
    <>
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ 
          opacity: bgOpacity,
          background: "radial-gradient(circle at center, rgba(0,51,102,0.08) 0%, rgba(255,255,255,0) 70%)",
          scale,
        }}
      />
      
      <motion.div
        className="absolute -z-10 w-[800px] h-[800px] border border-sheraa-primary/10 rounded-full left-1/2 top-1/2"
        style={{
          x: "-50%",
          y: "-50%",
          rotate,
        }}
      />
      
      <motion.div
        className="absolute -z-10 w-[600px] h-[600px] border border-sheraa-secondary/10 rounded-full left-1/2 top-1/2"
        style={{
          x: "-50%",
          y: "-50%",
          rotate: rotate2,
        }}
      />
      
      <motion.div
        className="absolute -z-10 w-[400px] h-[400px] border border-sheraa-teal/10 rounded-full left-1/2 top-1/2"
        style={{
          x: "-50%",
          y: "-50%",
          rotate: rotate3,
          scale: useTransform(springScroll, [0, 0.5, 1], [0.8, 1.2, 0.9]),
        }}
      />
      
      {/* Added fewer pulsing background orbs for better performance */}
      <motion.div
        className="absolute -z-10 w-32 h-32 rounded-full bg-sheraa-primary/5 blur-2xl"
        style={{
          left: '15%',
          top: '20%',
          scale: useTransform(springScroll, [0, 0.5, 1], [0.8, 1.3, 1]),
          x: useTransform(springScroll, [0, 1], [0, -50]),
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -z-10 w-48 h-48 rounded-full bg-sheraa-teal/5 blur-3xl"
        style={{
          right: '20%',
          bottom: '25%',
          scale: useTransform(springScroll, [0, 0.5, 1], [1, 0.7, 1.1]),
          x: useTransform(springScroll, [0, 1], [0, 70]),
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </>
  );
});

ImpactBackground.displayName = 'ImpactBackground';

export default ImpactBackground;
