
import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export const ParallaxOverlay: React.FC<{
  className?: string;
  opacity?: number;
}> = ({ className = "", opacity = 0.1 }) => {
  const { scrollYProgress } = useScroll();
  const isMobile = useIsMobile();
  
  // Use simplified spring on mobile
  const springScroll = useSpring(scrollYProgress, { 
    stiffness: isMobile ? 100 : 30, 
    damping: isMobile ? 50 : 30 
  });
  
  // Reduce opacity on mobile
  const actualOpacity = isMobile ? opacity * 0.5 : opacity;
  
  const overlayOpacity = useTransform(
    springScroll,
    [0, 0.3, 0.7, 1],
    [0, actualOpacity, actualOpacity, 0]
  );
  
  return (
    <motion.div
      className={`fixed inset-0 pointer-events-none z-0 will-change-opacity ${className}`}
      style={{ 
        opacity: overlayOpacity,
        backgroundImage: "url('/placeholder.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        mixBlendMode: "overlay",
      }}
    />
  );
};
