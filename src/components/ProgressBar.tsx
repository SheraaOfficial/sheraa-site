
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./ui/border-beam";

interface ProgressBarProps {
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const [showProgress, setShowProgress] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowProgress(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className={cn(
          "fixed top-0 left-0 right-0 h-1.5 z-[100] origin-left",
          showProgress ? "opacity-100" : "opacity-0",
          className
        )}
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, #003366 0%, #008080 50%, #FF6600 100%)"
        }}
      />
      
      {/* Decorative beam effect over the progress bar */}
      <div className={cn("fixed top-0 left-0 right-0 h-1.5 z-[99] pointer-events-none", 
        showProgress ? "opacity-60" : "opacity-0")}>
        <BorderBeam 
          size={300} 
          duration={20} 
          colorFrom="#33aaff" 
          colorTo="#00ffcc" 
          borderWidth={1}
          delay={0}
        />
      </div>
    </>
  );
};

export default ProgressBar;
