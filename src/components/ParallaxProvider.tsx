
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/useDeviceDetection";

interface ParallaxSectionProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  scrollMultiplier?: number;
  spring?: boolean;
  damping?: number;
  stiffness?: number;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  direction = "up",
  scrollMultiplier = 0.2,
  spring = false,
  damping = 15,
  stiffness = 40,
}) => {
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll();
  const effectiveMultiplier = isMobile ? (scrollMultiplier * 0.5) : scrollMultiplier;
  
  let yValue, xValue;
  
  switch (direction) {
    case "up":
      yValue = useTransform(scrollYProgress, [0, 1], [0, -50 * effectiveMultiplier]);
      xValue = useTransform(scrollYProgress, [0, 1], [0, 0]);
      break;
    case "down":
      yValue = useTransform(scrollYProgress, [0, 1], [0, 50 * effectiveMultiplier]);
      xValue = useTransform(scrollYProgress, [0, 1], [0, 0]);
      break;
    case "left":
      xValue = useTransform(scrollYProgress, [0, 1], [0, -50 * effectiveMultiplier]);
      yValue = useTransform(scrollYProgress, [0, 1], [0, 0]);
      break;
    case "right":
      xValue = useTransform(scrollYProgress, [0, 1], [0, 50 * effectiveMultiplier]);
      yValue = useTransform(scrollYProgress, [0, 1], [0, 0]);
      break;
    default:
      yValue = useTransform(scrollYProgress, [0, 1], [0, 0]);
      xValue = useTransform(scrollYProgress, [0, 1], [0, 0]);
  }
  
  const springY = spring ? useSpring(yValue, { damping, stiffness }) : yValue;
  const springX = spring ? useSpring(xValue, { damping, stiffness }) : xValue;

  return (
    <motion.div
      style={{
        y: springY,
        x: springX,
      }}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};
