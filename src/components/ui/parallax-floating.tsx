
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface FloatingProps {
  children: React.ReactNode;
  className?: string;
  sensitivity?: number;
  disabled?: boolean; // Add the disabled prop to the interface
}

function Floating({
  children,
  className,
  sensitivity = 1,
  disabled = false // Set a default value
}: FloatingProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  useEffect(() => {
    // Skip effect if disabled
    if (disabled) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Get mouse position relative to screen size
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      // Update motion values
      mouseX.set(x);
      mouseY.set(y);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, disabled]); // Add disabled to dependencies
  
  return (
    <div className={cn("relative", className)}>
      {children}
    </div>
  );
}

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  animate?: boolean;
  delay?: number;
}

function FloatingElement({
  children,
  className,
  depth = 1,
  animate = true,
  delay = 0
}: FloatingElementProps) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const isMobile = useIsMobile();
  const [isHovering, setIsHovering] = useState(false);
  
  // Use stiffer spring settings on mobile for better performance
  const springConfig = {
    damping: isMobile ? 50 : 30,
    stiffness: isMobile ? 150 : 100
  };
  
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  
  useEffect(() => {
    // Skip effect on mobile to improve performance
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Get mouse position relative to screen size
      const mouseXValue = e.clientX / window.innerWidth;
      const mouseYValue = e.clientY / window.innerHeight;

      // Update motion values with some easing
      mouseX.set(mouseXValue);
      mouseY.set(mouseYValue);
    };
    
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, isMobile]);
  
  // Reduce movement on mobile
  const depthFactor = isMobile ? depth * 0.5 : depth;
  const xRange = useTransform(x, [0, 1], [-depthFactor * 20, depthFactor * 20]);
  const yRange = useTransform(y, [0, 1], [-depthFactor * 20, depthFactor * 20]);
  
  // Hover effect
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  
  // Scale effect on hover
  const scale = isHovering ? 1.03 : 1;
  
  return (
    <motion.div 
      className={cn("absolute z-10", className)}
      style={{
        x: animate ? xRange : 0,
        y: animate ? yRange : 0,
        scale: animate ? scale : 1,
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        opacity: { duration: 0.6 },
        y: { type: "spring", stiffness: 100, damping: 15 }
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

export { FloatingElement };
export default Floating;
