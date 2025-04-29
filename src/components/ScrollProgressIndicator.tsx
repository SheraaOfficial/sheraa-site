
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const ScrollProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [showProgress, setShowProgress] = useState(false);
  const isMobile = useIsMobile();
  
  // Simpler transform for mobile
  const scaleX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  );
  
  // Simpler color transformation for mobile
  const barColor = isMobile 
    ? "linear-gradient(90deg, #003366 0%, #008080 100%)"
    : useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [
          "linear-gradient(90deg, #003366 0%, #008080 100%)",
          "linear-gradient(90deg, #008080 0%, #FF6600 100%)",
          "linear-gradient(90deg, #FF6600 0%, #003366 100%)",
        ]
      );
  
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowProgress(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1.5 z-[100] origin-left ${
        showProgress ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 will-change-transform`}
      style={{ 
        scaleX, 
        background: isMobile ? barColor : barColor,
        boxShadow: isMobile ? 'none' : '0 0 10px rgba(0, 128, 128, 0.4)',
      }}
    />
  );
};

export default ScrollProgressIndicator;
