
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useIsMobile } from "@/hooks/useDeviceDetection";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";

const ScrollProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [showProgress, setShowProgress] = useState(false);
  const isMobile = useIsMobile();
  const devicePerformance = useDevicePerformance();
  const ticking = useRef(false);
  
  // Optimize scroll event listener with throttling
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setShowProgress(window.scrollY > 50);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simplified gradient and effects for low-performance devices
  const barGradient = devicePerformance === 'low'
    ? "#003366"
    : "linear-gradient(90deg, #003366 0%, #008080 50%, #FF6600 100%)";

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 z-[100] origin-left will-change-transform ${
        showProgress ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      style={{
        scaleX: scrollYProgress,
        background: barGradient,
        contain: "strict",
        position: "relative" // Add position relative to fix framer-motion warning
      }}
      transition={{
        duration: devicePerformance === 'low' ? 0.1 : 0,
      }}
    />
  );
};

export default ScrollProgressIndicator;
