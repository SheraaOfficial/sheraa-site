
import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 20, 
    restDelta: 0.001 
  });
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sheraa-primary to-purple-500 z-[9999] origin-left"
      style={{ scaleX }}
    />
  );
};

export default ProgressBar;
