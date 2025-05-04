
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useIsMobile } from "@/hooks/useDeviceDetection";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";
import { useOptimizedScroll } from "@/hooks/useOptimizedScroll";

interface ScrollProgressIndicatorProps {
  className?: string;
  threshold?: number;
}

const ScrollProgressIndicator: React.FC<ScrollProgressIndicatorProps> = ({ 
  className,
  threshold = 50
}) => {
  const { scrollYProgress } = useScroll();
  const { isScrolling } = useOptimizedScroll();
  const [showProgress, setShowProgress] = useState(false);
  const isMobile = useIsMobile();
  const devicePerformance = useDevicePerformance();
  const rafId = useRef<number | null>(null);
  
  // Optimize scroll event listener with requestAnimationFrame
  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) return;
      
      rafId.current = requestAnimationFrame(() => {
        setShowProgress(window.scrollY > threshold);
        rafId.current = null;
      });
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [threshold]);

  // Simplified gradient and effects for low-performance devices
  const barGradient = devicePerformance === 'low'
    ? "#003366"
    : "linear-gradient(90deg, #003366 0%, #008080 50%, #FF6600 100%)";

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 z-[100] origin-left will-change-transform ${
        showProgress ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300 ${className || ''}`}
      style={{
        scaleX: scrollYProgress,
        background: barGradient,
        contain: "strict",
        position: "relative"
      }}
      transition={{
        duration: devicePerformance === 'low' ? 0.1 : 0,
      }}
    />
  );
};

export default ScrollProgressIndicator;
