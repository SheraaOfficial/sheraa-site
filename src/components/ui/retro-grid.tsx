
import * as React from "react"
import { cn } from "@/lib/utils"

interface RetroGridProps {
  className?: string
  fadeDirection?: "top" | "bottom" | "left" | "right" | "all" | "none"
  fadeSize?: "sm" | "md" | "lg"
  cellSize?: "sm" | "md" | "lg"
}

export function RetroGrid({
  className,
  fadeDirection = "bottom",
  fadeSize = "md",
  cellSize = "md",
}: RetroGridProps) {
  // Calculate fade gradient based on direction
  const fadeSizeMap = {
    sm: "10%",
    md: "20%",
    lg: "30%",
  }
  
  const cellSizeMap = {
    sm: "1rem",
    md: "2rem",
    lg: "3rem",
  }
  
  const fadeStyle = {
    none: "none",
    top: `linear-gradient(to top, transparent 0%, var(--background) ${fadeSizeMap[fadeSize]})`,
    bottom: `linear-gradient(to bottom, transparent 0%, var(--background) ${fadeSizeMap[fadeSize]})`,
    left: `linear-gradient(to left, transparent 0%, var(--background) ${fadeSizeMap[fadeSize]})`,
    right: `linear-gradient(to right, transparent 0%, var(--background) ${fadeSizeMap[fadeSize]})`,
    all: `radial-gradient(circle at center, transparent 0%, var(--background) ${fadeSizeMap[fadeSize]})`,
  }

  return (
    <div
      className={cn(
        "absolute inset-0 z-0 opacity-20",
        className
      )}
      style={{
        backgroundSize: `${cellSizeMap[cellSize]} ${cellSizeMap[cellSize]}`,
        backgroundImage: `linear-gradient(to right, var(--sheraa-primary) / 10% 1px, transparent 1px), 
                         linear-gradient(to bottom, var(--sheraa-primary) / 10% 1px, transparent 1px)`,
        maskImage: fadeStyle[fadeDirection],
        WebkitMaskImage: fadeStyle[fadeDirection],
      }}
    />
  )
}
