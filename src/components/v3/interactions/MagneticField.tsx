import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface MagneticFieldProps {
  children: React.ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
  disabled?: boolean;
}

export const MagneticField: React.FC<MagneticFieldProps> = ({
  children,
  strength = 0.4,
  radius = 150,
  className = "",
  disabled = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.8 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      setMousePosition({ x: e.clientX, y: e.clientY });

      if (distance < radius) {
        const magneticX = distanceX * strength * (1 - distance / radius);
        const magneticY = distanceY * strength * (1 - distance / radius);
        
        x.set(magneticX);
        y.set(magneticY);
        setIsHovered(true);
      } else {
        x.set(0);
        y.set(0);
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
      setIsHovered(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    elementRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      elementRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [x, y, radius, strength, disabled]);

  return (
    <motion.div
      ref={elementRef}
      className={`magnetic-field ${className}`}
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        scale: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {children}
      
      {/* Magnetic field visualization */}
      {isHovered && !disabled && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute border border-white/20 rounded-full"
            style={{
              width: radius * 2,
              height: radius * 2,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <div
            className="absolute border border-white/10 rounded-full animate-pulse"
            style={{
              width: radius * 1.5,
              height: radius * 1.5,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};