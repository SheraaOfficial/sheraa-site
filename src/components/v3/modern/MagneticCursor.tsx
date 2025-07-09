import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface MagneticCursorProps {
  children: React.ReactNode;
  magneticRadius?: number;
  magneticStrength?: number;
  className?: string;
  disabled?: boolean;
}

export const MagneticCursor: React.FC<MagneticCursorProps> = ({
  children,
  magneticRadius = 100,
  magneticStrength = 0.3,
  className = "",
  disabled = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
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

      if (distance < magneticRadius) {
        const magneticX = distanceX * magneticStrength;
        const magneticY = distanceY * magneticStrength;
        
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
  }, [x, y, magneticRadius, magneticStrength, disabled]);

  return (
    <motion.div
      ref={elementRef}
      className={`magnetic-cursor ${className}`}
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
      
      {/* Magnetic Field Visualization (optional) */}
      {isHovered && !disabled && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 border border-white/30 rounded-full"
            style={{
              width: magneticRadius * 2,
              height: magneticRadius * 2,
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