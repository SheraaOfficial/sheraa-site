
import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

// Optimized stars background component
export const ParallaxStars: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const isMobile = useIsMobile();
  
  // Don't render on mobile
  if (isMobile) {
    return null;
  }
  
  const springScroll = useSpring(scrollYProgress, { stiffness: 20, damping: 30 });
  
  const starsY1 = useTransform(springScroll, [0, 1], ["0%", "-30%"]);
  const starsY2 = useTransform(springScroll, [0, 1], ["0%", "-20%"]);
  const starsY3 = useTransform(springScroll, [0, 1], ["0%", "-40%"]);
  const starsOpacity = useTransform(springScroll, [0, 0.5, 1], [0.8, 0.6, 0.4]);
  
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute inset-0 will-change-transform"
          style={{ y: starsY1, opacity: starsOpacity }}
        >
          <div className="stars-sm" />
        </motion.div>
        <motion.div 
          className="absolute inset-0 will-change-transform"
          style={{ y: starsY2, opacity: starsOpacity }}
        >
          <div className="stars-md" />
        </motion.div>
        <motion.div 
          className="absolute inset-0 will-change-transform"
          style={{ y: starsY3, opacity: starsOpacity }}
        >
          <div className="stars-lg" />
        </motion.div>
      </div>
    </>
  );
};
