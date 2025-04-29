
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity?: number;
  scrollMultiplier?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export const ParallaxSection: React.FC<ParallaxProps> = ({
  children,
  baseVelocity = 0.2,
  scrollMultiplier = 0.5,
  className = "",
  direction = "up",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    if (containerRef.current) {
      setElementTop(containerRef.current.offsetTop);
    }
  }, []);
  
  let transformValue;
  
  switch (direction) {
    case "up":
      transformValue = useTransform(
        scrollY,
        [elementTop - 800, elementTop + 800],
        [200 * scrollMultiplier, -200 * scrollMultiplier]
      );
      break;
    case "down":
      transformValue = useTransform(
        scrollY,
        [elementTop - 800, elementTop + 800],
        [-200 * scrollMultiplier, 200 * scrollMultiplier]
      );
      break;
    case "left":
      transformValue = useTransform(
        scrollY,
        [elementTop - 800, elementTop + 800],
        [200 * scrollMultiplier, -200 * scrollMultiplier]
      );
      break;
    case "right":
      transformValue = useTransform(
        scrollY,
        [elementTop - 800, elementTop + 800],
        [-200 * scrollMultiplier, 200 * scrollMultiplier]
      );
      break;
    default:
      transformValue = useTransform(
        scrollY,
        [elementTop - 800, elementTop + 800],
        [200 * scrollMultiplier, -200 * scrollMultiplier]
      );
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{
          y: direction === "up" || direction === "down" ? transformValue : 0,
          x: direction === "left" || direction === "right" ? transformValue : 0,
        }}
        className="parallax-content"
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
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollPosition(latest);
  });

  return (
    <div className={`parallax-background ${className}`}>
      <div
        className="parallax-gradient absolute inset-0 pointer-events-none z-0"
        style={{
          background: `linear-gradient(${
            140 + scrollPosition * 40
          }deg, rgba(0,51,102,${0.2 + scrollPosition * 0.3}) 0%, rgba(0,128,128,${
            0.1 + scrollPosition * 0.2
          }) 100%)`,
        }}
      />
      {children}
    </div>
  );
};

export const ParallaxOrbs: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const orbPos1 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );
  
  const orbPos2 = useTransform(
    scrollYProgress,
    [0, 1],
    ["10%", "80%"]
  );
  
  const orbPos3 = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "60%"]
  );
  
  const orbScale1 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1.2, 0.6]
  );
  
  const orbScale2 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.7, 1.3]
  );
  
  const orbScale3 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.6, 1.1, 0.8]
  );

  return (
    <>
      <motion.div
        className="fixed left-[10%] w-[300px] h-[300px] rounded-full bg-sheraa-primary/10 blur-[100px] pointer-events-none z-0"
        style={{
          top: orbPos1,
          scale: orbScale1,
        }}
      />
      <motion.div
        className="fixed right-[15%] w-[250px] h-[250px] rounded-full bg-sheraa-secondary/10 blur-[80px] pointer-events-none z-0"
        style={{
          top: orbPos2,
          scale: orbScale2,
        }}
      />
      <motion.div
        className="fixed left-[60%] w-[200px] h-[200px] rounded-full bg-sheraa-teal/10 blur-[60px] pointer-events-none z-0"
        style={{
          top: orbPos3,
          scale: orbScale3,
        }}
      />
    </>
  );
};
