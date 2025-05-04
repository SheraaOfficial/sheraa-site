
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./ui/border-beam";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";
import { useOptimizedScroll } from "@/hooks/useOptimizedScroll";

interface ProgressBarProps {
  className?: string;
  color?: string;
  height?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  className,
  color,
  height = 1.5
}) => {
  const { scrollYProgress } = useScroll();
  const { isScrolling } = useOptimizedScroll();
  const [showProgress, setShowProgress] = useState(false);
  const devicePerformance = useDevicePerformance();
  const rafId = useRef<number | null>(null);
  
  // Optimize the scroll event listener with RAF and throttling
  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) return;
      
      rafId.current = requestAnimationFrame(() => {
        setShowProgress(window.scrollY > 10);
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
  }, []);

  // Simplify effects on low-performance devices
  const shouldShowBeam = devicePerformance !== 'low';
  
  // Determine gradient based on device performance
  const barGradient = color || (devicePerformance === 'low' 
    ? "#003366"
    : "linear-gradient(90deg, #003366 0%, #008080 50%, #FF6600 100%)");

  return (
    <>
      <motion.div
        className={cn(
          `fixed top-0 left-0 right-0 h-${height} z-[100] origin-left will-change-transform`,
          showProgress ? "opacity-100" : "opacity-0",
          "transition-opacity duration-200",
          className
        )}
        style={{
          scaleX: scrollYProgress,
          background: barGradient,
          position: "relative"
        }}
        transition={{
          duration: devicePerformance === 'low' ? 0.1 : 0,
        }}
      />
      
      {/* Decorative beam effect only for higher-end devices */}
      {shouldShowBeam && (
        <div className={cn(
          `fixed top-0 left-0 right-0 h-${height} z-[99] pointer-events-none`, 
          showProgress ? "opacity-60" : "opacity-0",
          "transition-opacity duration-300"
        )}>
          <BorderBeam 
            size={300} 
            duration={devicePerformance === 'medium' ? 30 : 20} 
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
