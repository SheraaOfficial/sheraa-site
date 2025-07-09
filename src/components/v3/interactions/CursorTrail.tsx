import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  velocity: number;
}

interface CursorTrailProps {
  maxParticles?: number;
  trailLength?: number;
  enabled?: boolean;
}

export const CursorTrail: React.FC<CursorTrailProps> = ({
  maxParticles = 20,
  trailLength = 10,
  enabled = true
}) => {
  const [particles, setParticles] = useState<TrailParticle[]>([]);
  const particleIdRef = useRef(0);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      const currentPos = { x: e.clientX, y: e.clientY };
      const lastPos = lastPositionRef.current;
      
      // Calculate velocity
      const distance = Math.sqrt(
        Math.pow(currentPos.x - lastPos.x, 2) + Math.pow(currentPos.y - lastPos.y, 2)
      );
      velocityRef.current = Math.min(distance * 0.1, 5);
      
      // Create new particle
      const newParticle: TrailParticle = {
        id: particleIdRef.current++,
        x: currentPos.x,
        y: currentPos.y,
        opacity: 1,
        scale: 0.5 + velocityRef.current * 0.2,
        velocity: velocityRef.current
      };

      setParticles(prev => {
        const updated = [newParticle, ...prev].slice(0, maxParticles);
        return updated;
      });

      lastPositionRef.current = currentPos;
    };

    const updateParticles = () => {
      setParticles(prev => 
        prev.map((particle, index) => ({
          ...particle,
          opacity: Math.max(0, 1 - (index / trailLength)),
          scale: particle.scale * 0.98
        })).filter(particle => particle.opacity > 0.01)
      );
      
      animationFrame = requestAnimationFrame(updateParticles);
    };

    window.addEventListener('mousemove', handleMouseMove);
    updateParticles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [enabled, maxParticles, trailLength]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle, index) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: particle.x - 4,
            top: particle.y - 4,
            background: `linear-gradient(135deg, 
              hsl(var(--sheraa-primary) / ${particle.opacity}), 
              hsl(var(--sheraa-teal) / ${particle.opacity * 0.8})
            )`,
            filter: `blur(${particle.velocity * 0.5}px)`,
          }}
          animate={{
            scale: particle.scale,
            opacity: particle.opacity,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};