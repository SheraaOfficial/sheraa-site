import React, { useRef, useState, useEffect, CSSProperties, memo } from "react";
import { cn } from "@/lib/utils";

// Type for individual sparkle
interface SparkleType {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: CSSProperties;
}

// Generate a random number within a range
const random = (min: number, max: number): number => Math.floor(Math.random() * (max - min) + min);

// Generate a random color with transparency
const randomColor = (colors: string[]): string => colors[Math.floor(Math.random() * colors.length)];
interface SparklesProps {
  colors?: string[];
  count?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number; // Animation duration in ms
  className?: string;
  children?: React.ReactNode;
}

// Use React.memo to prevent unnecessary re-renders
const SparkleInstance = memo(({
  sparkle
}: {
  sparkle: SparkleType;
}) => <span className="absolute animate-sparkle pointer-events-none select-none z-10" style={{
  ...sparkle.style,
  color: sparkle.color,
  width: sparkle.size,
  height: sparkle.size
}}>
    <svg width="100%" height="100%" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z" fill="currentColor" />
    </svg>
  </span>);
SparkleInstance.displayName = 'SparkleInstance';
export const Sparkles: React.FC<SparklesProps> = ({
  colors = ["#FFC700", "#FF3D65", "#378EFF", "#9580FF"],
  count = 10,
  // Reduced from 20 to improve performance
  minSize = 10,
  maxSize = 20,
  speed = 1000,
  // Increased to reduce updates
  className,
  children
}) => {
  const [sparkles, setSparkles] = useState<SparkleType[]>([]);
  const [animationVersion, setAnimationVersion] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useRef<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  // Check for reduced motion preference once on mount
  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Create initial sparkles
    if (!prefersReducedMotion.current) {
      const initialSparkles = generateSparkles(count);
      setSparkles(initialSparkles);
    }

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [count]);

  // Setup interval for sparkle regeneration
  useEffect(() => {
    if (prefersReducedMotion.current) return;
    intervalRef.current = window.setInterval(() => {
      setSparkles(prevSparkles => {
        const now = Date.now();

        // Only remove the oldest sparkle if it's old enough
        const oldestSparkle = prevSparkles.sort((a, b) => a.createdAt - b.createdAt)[0];
        if (now - oldestSparkle.createdAt < speed * 0.8) {
          return prevSparkles;
        }
        return [...prevSparkles.slice(1), generateSparkle()];
      });
      setAnimationVersion(v => v + 1);
    }, speed);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [speed, colors, minSize, maxSize]);

  // Generate a single sparkle
  const generateSparkle = (): SparkleType => {
    const timestamp = Date.now();
    const sparkleId = `sparkle-${timestamp}`;
    const top = random(0, 100);
    const left = random(0, 100);
    const size = random(minSize, maxSize);
    return {
      id: sparkleId,
      createdAt: timestamp,
      color: randomColor(colors),
      size,
      style: {
        top: `${top}%`,
        left: `${left}%`
      }
    };
  };

  // Generate multiple sparkles
  const generateSparkles = (num: number): SparkleType[] => {
    return Array.from({
      length: num
    }, () => generateSparkle());
  };
  return <div ref={containerRef} className="rounded-full mx-0 my-0 px-0">
      {sparkles.map(sparkle => <SparkleInstance key={sparkle.id} sparkle={sparkle} />)}
      <span className="relative z-0" key={`children-${animationVersion}`}>
        {children}
      </span>
    </div>;
};