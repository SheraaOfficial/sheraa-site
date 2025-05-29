
import React from "react";
import { motion } from "framer-motion";

interface BackgroundEffectsProps {
  mousePosition: { x: number; y: number };
  animationStage: string;
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({
  mousePosition,
  animationStage
}) => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <>
      {/* Cinematic Background Grid */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(34, 211, 238, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 2px, transparent 2px),
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 50px 50px, 50px 50px',
          }}
          animate={{
            x: [0, 100],
            y: [0, 100],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Dynamic Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -200, 0],
              opacity: animationStage === 'inspiration' ? [0, 0.8, 0] : [0, 0.4, 0],
              scale: [0.3, 1.2, 0.3],
              rotate: [0, 360],
              x: (mousePosition.x - window.innerWidth / 2) * (0.001 + particle.id * 0.0001),
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
              x: { duration: 0.5 }
            }}
          />
        ))}
      </div>

      {/* Morphing Geometric Shapes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg width="800" height="800" className="opacity-5">
          <motion.path
            d="M400,200 Q600,300 400,400 Q200,300 400,200 Z"
            fill="url(#dynamicGradient)"
            initial={false}
            animate={{ 
              d: [
                "M400,200 Q600,300 400,400 Q200,300 400,200 Z",
                "M400,150 Q650,300 400,450 Q150,300 400,150 Z", 
                "M400,200 Q600,300 400,400 Q200,300 400,200 Z"
              ]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="dynamicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Interactive Glow Effects */}
      <motion.div 
        className="absolute w-96 h-96 rounded-full blur-[100px]" 
        style={{ 
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, rgba(29, 7, 58, 0.1) 70%)',
          left: `${mousePosition.x * 0.01}%`,
          top: `${mousePosition.y * 0.01}%`,
        }}
        animate={{
          scale: animationStage === 'action' ? [1, 1.3, 1] : [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  );
};
