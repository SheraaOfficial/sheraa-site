
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

const ScrollProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [showProgress, setShowProgress] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Only show the progress indicator after scrolling down a bit
      setShowProgress(window.scrollY > 200);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sheraa-primary via-sheraa-secondary to-sheraa-teal z-[100] origin-left ${
        showProgress ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgressIndicator;
