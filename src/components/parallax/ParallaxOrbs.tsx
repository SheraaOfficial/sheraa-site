
import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

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
