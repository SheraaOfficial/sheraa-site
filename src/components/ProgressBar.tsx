
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./ui/border-beam";
import { useDevicePerformance } from "@/hooks/use-mobile";

interface ProgressBarProps {
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const [showProgress, setShowProgress] = useState(false);
  const devicePerformance = useDevicePerformance();
  
  useEffect(() => {
    // Use a more efficient scroll handler with RAF
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowProgress(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simplify effects on low-performance devices
  const shouldShowBeam = devicePerformance !== 'low';

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
          background: "linear-gradient(90deg, #003366 0%, #008080 50%, #FF6600 100%)",
          position: "relative"
        }}
      />
      
      {/* Decorative beam effect only for higher-end devices */}
      {shouldShowBeam && (
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
      )}
    </>
  );
};

export default ProgressBar;
