
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const ScrollProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [showProgress, setShowProgress] = useState(false);
  const isMobile = useIsMobile();
  
  // Optimize scroll event listener with throttling
  useEffect(() => {
    let lastKnownScrollPosition = 0;
    let ticking = false;
    
    const handleScroll = () => {
      lastKnownScrollPosition = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowProgress(lastKnownScrollPosition > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simple gradient for all devices - avoid complex animations on mobile
  const barGradient = "linear-gradient(90deg, #003366 0%, #008080 50%, #FF6600 100%)";

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 z-[100] origin-left ${
        showProgress ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300 will-change-transform gpu-accelerated`}
      style={{
        scaleX: scrollYProgress,
        background: barGradient,
      }}
    />
  );
};

export default ScrollProgressIndicator;
