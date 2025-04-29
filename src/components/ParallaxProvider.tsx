
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useMotionValue, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity?: number;
  scrollMultiplier?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  spring?: boolean;
  stiffness?: number;
  damping?: number;
}

export const ParallaxSection: React.FC<ParallaxProps> = ({
  children,
  baseVelocity = 0.2,
  scrollMultiplier = 0.5,
  className = "",
  direction = "up",
  spring = false,
  stiffness = 50,
  damping = 15,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const { scrollY } = useScroll();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (containerRef.current) {
      const updateElementTop = () => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          setElementTop(window.scrollY + rect.top);
        }
      };
      
      // Initial measurement
      updateElementTop();
      
      // Optimize resize listener with debounce
      let resizeTimer: NodeJS.Timeout;
      const handleResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateElementTop, 100);
      };
      
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimer);
      };
    }
  }, []);
  
  // Calculate transform distance based on viewport height for more consistent parallax
  // Use smaller transform distance on mobile
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;
  const transformDistance = isMobile 
    ? viewportHeight * (scrollMultiplier * 0.2) 
    : viewportHeight * (scrollMultiplier * 0.4);
  
  let rawTransformValue;
  
  // Skip expensive calculations if on mobile and spring is disabled
  if (isMobile && !spring) {
    // Simplified transformations for mobile
    switch (direction) {
      case "up":
      case "down":
        rawTransformValue = useTransform(
          scrollY,
          [elementTop - viewportHeight, elementTop + viewportHeight],
          [transformDistance/2, -transformDistance/2]
        );
        break;
      default:
        rawTransformValue = 0;
    }
  } else {
    // Standard transformations for desktop
    switch (direction) {
      case "up":
        rawTransformValue = useTransform(
          scrollY,
          [elementTop - viewportHeight, elementTop + viewportHeight],
          [transformDistance, -transformDistance]
        );
        break;
      case "down":
        rawTransformValue = useTransform(
          scrollY,
          [elementTop - viewportHeight, elementTop + viewportHeight],
          [-transformDistance, transformDistance]
        );
        break;
      case "left":
        rawTransformValue = useTransform(
          scrollY,
          [elementTop - viewportHeight, elementTop + viewportHeight],
          [transformDistance, -transformDistance]
        );
        break;
      case "right":
        rawTransformValue = useTransform(
          scrollY,
          [elementTop - viewportHeight, elementTop + viewportHeight],
          [-transformDistance, transformDistance]
        );
        break;
      default:
        rawTransformValue = useTransform(
          scrollY,
          [elementTop - viewportHeight, elementTop + viewportHeight],
          [transformDistance, -transformDistance]
        );
    }
  }
  
  // Apply spring physics for smoother transitions if spring is enabled and not on mobile
  const transformValue = (spring && !isMobile)
    ? useSpring(rawTransformValue, { stiffness, damping }) 
    : rawTransformValue;

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        style={{
          y: direction === "up" || direction === "down" ? transformValue : 0,
          x: direction === "left" || direction === "right" ? transformValue : 0,
          willChange: "transform",
        }}
        className="parallax-content will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

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

export const ParallaxOrbs: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const isMobile = useIsMobile();
  
  // Simplified rendering for mobile - exit early
  if (isMobile) {
    return null;
  }
  
  // Apply spring for smoother orb movements
  const springScroll = useSpring(scrollYProgress, { stiffness: 30, damping: 20 });
  
  const orbPos1 = useTransform(
    springScroll,
    [0, 1],
    ["0%", "130%"]
  );
  
  const orbPos2 = useTransform(
    springScroll,
    [0, 1],
    ["10%", "90%"]
  );
  
  const orbPos3 = useTransform(
    springScroll,
    [0, 1],
    ["0%", "70%"]
  );
  
  const orbScale1 = useTransform(
    springScroll,
    [0, 0.3, 0.6, 1],
    [0.8, 1.3, 0.9, 0.5]
  );
  
  const orbScale2 = useTransform(
    springScroll,
    [0, 0.4, 0.7, 1],
    [1, 0.7, 1.2, 0.9]
  );
  
  const orbScale3 = useTransform(
    springScroll,
    [0, 0.2, 0.5, 0.8, 1],
    [0.6, 1.1, 0.8, 1.3, 0.7]
  );
  
  // Additional orbs for more dynamic background
  const orbPos4 = useTransform(
    springScroll,
    [0, 0.5, 1],
    ["20%", "50%", "90%"]
  );
  
  const orbScale4 = useTransform(
    springScroll,
    [0, 0.5, 1],
    [0.4, 1.0, 0.7]
  );
  
  const orbPos5 = useTransform(
    springScroll,
    [0, 0.3, 0.7, 1],
    ["70%", "40%", "60%", "30%"]
  );

  return (
    <>
      <motion.div
        className="fixed left-[10%] w-[350px] h-[350px] rounded-full bg-sheraa-primary/10 blur-[120px] pointer-events-none z-0 will-change-transform"
        style={{
          top: orbPos1,
          scale: orbScale1,
          opacity: useTransform(springScroll, [0, 0.5, 1], [0.7, 0.9, 0.5]),
          x: useTransform(springScroll, [0, 0.5, 1], ["0vw", "-5vw", "5vw"]),
        }}
      />
      <motion.div
        className="fixed right-[15%] w-[300px] h-[300px] rounded-full bg-sheraa-teal/10 blur-[100px] pointer-events-none z-0 will-change-transform"
        style={{
          top: orbPos2,
          scale: orbScale2,
          opacity: useTransform(springScroll, [0, 0.5, 1], [0.6, 1, 0.7]),
          x: useTransform(springScroll, [0, 0.5, 1], ["0vw", "7vw", "-3vw"]),
        }}
      />
      <motion.div
        className="fixed left-[60%] w-[250px] h-[250px] rounded-full bg-sheraa-orange/10 blur-[80px] pointer-events-none z-0 will-change-transform"
        style={{
          top: orbPos3,
          scale: orbScale3,
          opacity: useTransform(springScroll, [0, 0.5, 1], [0.5, 0.8, 0.4]),
          x: useTransform(springScroll, [0, 0.5, 1], ["0vw", "-10vw", "10vw"]),
        }}
      />
      <motion.div
        className="fixed left-[30%] w-[200px] h-[200px] rounded-full bg-indigo-500/10 blur-[90px] pointer-events-none z-0 will-change-transform"
        style={{
          top: orbPos4,
          scale: orbScale4,
          opacity: useTransform(springScroll, [0, 0.5, 1], [0.3, 0.7, 0.4]),
          x: useTransform(springScroll, [0, 0.5, 1], ["5vw", "0vw", "-8vw"]),
        }}
      />
      <motion.div
        className="fixed right-[25%] w-[270px] h-[270px] rounded-full bg-rose-400/10 blur-[110px] pointer-events-none z-0 will-change-transform"
        style={{
          top: orbPos5,
          scale: useTransform(springScroll, [0, 0.5, 1], [0.7, 1.2, 0.8]),
          opacity: useTransform(springScroll, [0, 0.5, 1], [0.4, 0.9, 0.6]),
          x: useTransform(springScroll, [0, 0.5, 1], ["-3vw", "7vw", "0vw"]),
        }}
      />
    </>
  );
};

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

// Optimize overlay component
export const ParallaxOverlay: React.FC<{
  className?: string;
  opacity?: number;
}> = ({ className = "", opacity = 0.1 }) => {
  const { scrollYProgress } = useScroll();
  const isMobile = useIsMobile();
  
  // Use simplified spring on mobile
  const springScroll = useSpring(scrollYProgress, { 
    stiffness: isMobile ? 100 : 30, 
    damping: isMobile ? 50 : 30 
  });
  
  // Reduce opacity on mobile
  const actualOpacity = isMobile ? opacity * 0.5 : opacity;
  
  const overlayOpacity = useTransform(
    springScroll,
    [0, 0.3, 0.7, 1],
    [0, actualOpacity, actualOpacity, 0]
  );
  
  return (
    <motion.div
      className={`fixed inset-0 pointer-events-none z-0 will-change-opacity ${className}`}
      style={{ 
        opacity: overlayOpacity,
        backgroundImage: "url('/placeholder.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        mixBlendMode: "overlay",
      }}
    />
  );
};
