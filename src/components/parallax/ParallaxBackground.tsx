
import React, { useState } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export const ParallaxBackground: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  const { scrollYProgress } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = useIsMobile();
  
  // Use spring only on desktop for smoother gradient transitions
  const springConfig = isMobile ? { stiffness: 100, damping: 30 } : { stiffness: 50, damping: 15 };
  const springScrollPosition = useSpring(scrollYProgress, springConfig);
  
  // Optimize updates by skipping some frames on mobile
  useMotionValueEvent(springScrollPosition, "change", (latest) => {
    // On mobile, update less frequently
    if (isMobile) {
      if (Math.abs(scrollPosition - latest) > 0.05) {
        setScrollPosition(latest);
      }
    } else {
      setScrollPosition(latest);
    }
  });

  return (
    <div className={`parallax-background ${className}`}>
      <div
        className="parallax-gradient absolute inset-0 pointer-events-none z-0 will-change-background"
        style={{
          background: `linear-gradient(${
            140 + scrollPosition * 60
          }deg, rgba(0,51,102,${isMobile ? 0.05 : 0.1 + scrollPosition * 0.2}) 0%, rgba(0,128,128,${
            isMobile ? 0.03 : 0.05 + scrollPosition * 0.15
          }) 50%, rgba(255,102,0,${
            isMobile ? 0.02 : 0.03 + scrollPosition * 0.1
          }) 100%)`,
          transition: isMobile ? "none" : "background 0.1s ease-out",
        }}
      />
      {children}
    </div>
  );
};
