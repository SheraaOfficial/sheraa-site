import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
interface ParallaxSectionProps {
  children: React.ReactNode;
  baseVelocity?: number;
  scrollMultiplier?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  spring?: boolean;
  stiffness?: number;
  damping?: number;
}
export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  baseVelocity = 0.2,
  scrollMultiplier = 0.5,
  className = "",
  direction = "up",
  spring = false,
  stiffness = 50,
  damping = 15
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const {
    scrollY
  } = useScroll();
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
  const transformDistance = isMobile ? viewportHeight * (scrollMultiplier * 0.2) : viewportHeight * (scrollMultiplier * 0.4);
  let rawTransformValue;

  // Skip expensive calculations if on mobile and spring is disabled
  if (isMobile && !spring) {
    // Simplified transformations for mobile
    switch (direction) {
      case "up":
      case "down":
        rawTransformValue = useTransform(scrollY, [elementTop - viewportHeight, elementTop + viewportHeight], [transformDistance / 2, -transformDistance / 2]);
        break;
      default:
        rawTransformValue = 0;
    }
  } else {
    // Standard transformations for desktop
    switch (direction) {
      case "up":
        rawTransformValue = useTransform(scrollY, [elementTop - viewportHeight, elementTop + viewportHeight], [transformDistance, -transformDistance]);
        break;
      case "down":
        rawTransformValue = useTransform(scrollY, [elementTop - viewportHeight, elementTop + viewportHeight], [-transformDistance, transformDistance]);
        break;
      case "left":
        rawTransformValue = useTransform(scrollY, [elementTop - viewportHeight, elementTop + viewportHeight], [transformDistance, -transformDistance]);
        break;
      case "right":
        rawTransformValue = useTransform(scrollY, [elementTop - viewportHeight, elementTop + viewportHeight], [-transformDistance, transformDistance]);
        break;
      default:
        rawTransformValue = useTransform(scrollY, [elementTop - viewportHeight, elementTop + viewportHeight], [transformDistance, -transformDistance]);
    }
  }

  // Apply spring physics for smoother transitions if spring is enabled and not on mobile
  const transformValue = spring && !isMobile ? useSpring(rawTransformValue, {
    stiffness,
    damping
  }) : rawTransformValue;
  return <div ref={containerRef} className="px-[66px]">
      <motion.div style={{
      y: direction === "up" || direction === "down" ? transformValue : 0,
      x: direction === "left" || direction === "right" ? transformValue : 0,
      willChange: "transform"
    }} className="parallax-content will-change-transform">
        {children}
      </motion.div>
    </div>;
};