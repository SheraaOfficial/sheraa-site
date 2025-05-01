"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
interface FloatingProps {
  children: React.ReactNode;
  className?: string;
  sensitivity?: number;
}
function Floating({
  children,
  className,
  sensitivity = 1
}: FloatingProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Get mouse position relative to screen size
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      // Update motion values
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);
  return <div className="">
      {children}
    </div>;
}
interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
}
function FloatingElement({
  children,
  className,
  depth = 1
}: FloatingElementProps) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = {
    damping: 30,
    stiffness: 100
  };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Get mouse position relative to screen size
      const mouseXValue = e.clientX / window.innerWidth;
      const mouseYValue = e.clientY / window.innerHeight;

      // Update motion values
      mouseX.set(mouseXValue);
      mouseY.set(mouseYValue);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);
  const xRange = useTransform(x, [0, 1], [-depth * 20, depth * 20]);
  const yRange = useTransform(y, [0, 1], [-depth * 20, depth * 20]);
  return <motion.div className={cn("absolute z-10", className)} style={{
    x: xRange,
    y: yRange
  }}>
      {children}
    </motion.div>;
}
export { FloatingElement };
export default Floating;