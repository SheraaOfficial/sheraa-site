
import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparklesProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  size?: "sm" | "md" | "lg";
  count?: number;
}

interface SparkleProps {
  color: string;
  size: number;
  duration: number;
}

const Sparkle: React.FC<SparkleProps> = ({ color, size, duration }) => {
  const pathLength = React.useMemo(() => Math.random() * 0.5 + 0.5, []);
  
  return (
    <motion.div
      className="absolute"
      style={{
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        position: "absolute",
      }}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: duration,
        delay: Math.random() * 1.5,
        repeat: Infinity,
        repeatDelay: Math.random() * 5 + 2,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color }}
      >
        <motion.path
          d="M12 2L9 7L3 9L9 11L12 16L15 11L21 9L15 7Z"
          initial={{ pathLength: 0 }}
          animate={{ pathLength }}
          transition={{ duration: duration * 0.8, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
};

export function Sparkles({
  children,
  className,
  colors = ["#9b87f5", "#F97316", "#D946EF"],
  size = "md",
  count = 10,
}: SparklesProps) {
  const sizeMap = React.useMemo(
    () => ({
      sm: [4, 8],
      md: [8, 12],
      lg: [12, 16],
    }),
    []
  );
  
  // Create random sparkles
  const sparkles = React.useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * (sizeMap[size][1] - sizeMap[size][0]) + sizeMap[size][0],
      duration: Math.random() * 2 + 1,
    }));
  }, [colors, count, size, sizeMap]);

  return (
    <div className={cn("relative inline-block", className)}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          duration={sparkle.duration}
        />
      ))}
      {children}
    </div>
  );
}
