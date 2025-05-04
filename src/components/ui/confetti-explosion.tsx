
import React, { useCallback, useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks/use-window-size";

interface ConfettiExplosionProps {
  duration?: number;
  particleCount?: number;
  spreadRadius?: number;
}

export const ConfettiExplosion = ({ 
  duration = 3000, 
  particleCount = 100, 
  spreadRadius = 50 
}: ConfettiExplosionProps) => {
  const [isActive, setIsActive] = useState(true);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isActive) return null;

  return (
    <Confetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={particleCount}
      gravity={0.2}
      initialVelocityX={{ min: -spreadRadius, max: spreadRadius }}
      initialVelocityY={{ min: -spreadRadius, max: spreadRadius }}
    />
  );
};
