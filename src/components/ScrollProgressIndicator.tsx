
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [showProgress, setShowProgress] = useState(false);
  
  // Transform the progress to a smoother, slightly non-linear scale
  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 0.4, 0.8, 1]
  );
  
  // Add color transformation based on scroll progress
  const barColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(90deg, #003366 0%, #008080 100%)",
      "linear-gradient(90deg, #008080 0%, #FF6600 100%)",
      "linear-gradient(90deg, #FF6600 0%, #003366 100%)",
    ]
  );
  
  useEffect(() => {
    const handleScroll = () => {
      // Only show the progress indicator after scrolling down a bit
      setShowProgress(window.scrollY > 100);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1.5 z-[100] origin-left ${
        showProgress ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500`}
      style={{ 
        scaleX, 
        background: barColor,
        boxShadow: '0 0 10px rgba(0, 128, 128, 0.4)'
      }}
    />
  );
};

export default ScrollProgressIndicator;
