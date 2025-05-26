
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const FloatingBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Floating Background Orb */}
      <div 
        className="fixed pointer-events-none z-30 opacity-20 transition-all duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(0,51,102,0.3) 0%, rgba(0,128,128,0.15) 50%, transparent 70%)',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          top: '10%',
          left: '50%',
          marginLeft: '-200px',
          filter: 'blur(40px)',
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-sheraa-primary/30 rounded-full"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + Math.sin(i) * 20}%`,
            }}
          />
        ))}
      </div>
    </>
  );
};
