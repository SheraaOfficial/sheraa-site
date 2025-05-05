
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, EasingFunction } from "framer-motion";
import { useIsMobile } from "@/hooks/useDeviceDetection";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";
import { cn } from "@/lib/utils";  // Import cn function

interface ScrollProgressIndicatorProps {
  className?: string;
  threshold?: number;
  color?: string;
  height?: number;
  showOnlyWhenScrolling?: boolean;
}

const ScrollProgressIndicator: React.FC<ScrollProgressIndicatorProps> = ({ 
  className,
  threshold = 50,
  color,
  height = 4,
  showOnlyWhenScrolling = false,
}) => {
  const { scrollYProgress } = useScroll();
  const [showProgress, setShowProgress] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const isMobile = useIsMobile();
  const devicePerformance = useDevicePerformance();
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const rafId = useRef<number | null>(null);
  
  // Optimize scroll event listener with requestAnimationFrame
  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) return;
      
      rafId.current = requestAnimationFrame(() => {
        setShowProgress(window.scrollY > threshold);
        setIsScrolling(true);
        
        // Clear previous timeout
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
        
        // Set a new timeout to track when scrolling stops
        if (showOnlyWhenScrolling) {
          scrollTimeout.current = setTimeout(() => {
            setIsScrolling(false);
          }, 1000); // Hide after 1 second of inactivity
        }
        
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
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [threshold, showOnlyWhenScrolling]);

  // Transform scroll progress for smoother animation on high-performance devices
  // Fixed: Use proper easing function instead of string
  const transformedProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1],
    { 
      // Only apply easing on medium/high performance devices, and use proper format
      ease: devicePerformance === 'low' ? undefined : (t: number) => {
        // Simple easeOut function
        return 1 - Math.pow(1 - t, 2);
      }
    }
  );

  // Simplify effects for low-performance devices
  const barColor = color || (devicePerformance === 'low'
    ? "#003366"
    : "linear-gradient(90deg, #003366 0%, #008080 50%, #FF6600 100%)");

  return (
    <motion.div
      className={cn(
        `fixed top-0 left-0 right-0 z-[100] origin-left will-change-transform`,
        showProgress && (!showOnlyWhenScrolling || isScrolling) ? "opacity-100" : "opacity-0",
        "transition-opacity duration-300",
        className
      )}
      style={{
        scaleX: transformedProgress,
        background: barColor,
        height: `${height}px`,
        transformOrigin: "left",
      }}
      transition={{
        duration: devicePerformance === 'low' ? 0.1 : 0,
      }}
    />
  );
};

export default ScrollProgressIndicator;
