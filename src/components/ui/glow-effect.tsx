
import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlowProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "normal" | "center" | "radial";
  size?: "sm" | "md" | "lg" | "xl";
  strength?: "low" | "medium" | "high";
}

export function Glow({
  variant = "normal",
  size = "lg",
  strength = "medium",
  className,
  ...props
}: GlowProps) {
  const sizes = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64",
    xl: "w-80 h-80",
  };

  const strengths = {
    low: "opacity-30",
    medium: "opacity-50",
    high: "opacity-70",
  };

  const variants = {
    normal: "bg-gradient-to-r from-sheraa-primary/40 to-sheraa-secondary/40 blur-2xl",
    center: "bg-gradient-to-r from-sheraa-primary/40 via-sheraa-secondary/40 to-sheraa-primary/40 blur-2xl",
    radial: "bg-gradient-radial from-sheraa-primary/40 to-transparent blur-2xl",
  };

  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 pointer-events-none",
        sizes[size],
        strengths[strength],
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
