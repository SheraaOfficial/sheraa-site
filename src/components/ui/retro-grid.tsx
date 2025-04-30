
import React from "react";
import { cn } from "@/lib/utils";

interface RetroGridProps {
  className?: string;
}

export function RetroGrid({ className }: RetroGridProps) {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="retro-grid">
        <div className="grid-lines x"></div>
        <div className="grid-lines y"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <style jsx>{`
        .retro-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          perspective: 500px;
          transform-style: preserve-3d;
          overflow: hidden;
        }
        
        .grid-lines {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }
        
        .grid-lines.x {
          animation: moveGridX 20s linear infinite;
          background-image: linear-gradient(to right, rgba(96, 60, 220, 0.2) 1px, transparent 1px);
          background-size: 50px 100%;
          background-repeat: repeat;
          transform: rotateX(70deg) translateZ(-120px);
        }
        
        .grid-lines.y {
          animation: moveGridY 15s linear infinite;
          background-image: linear-gradient(to bottom, rgba(96, 60, 220, 0.2) 1px, transparent 1px);
          background-size: 100% 50px;
          background-repeat: repeat;
          transform: rotateX(70deg) translateZ(-120px);
        }
        
        .grid-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 70%;
          background: linear-gradient(to top, var(--background) 0%, transparent 100%);
          z-index: 2;
        }
        
        @keyframes moveGridX {
          0% {
            background-position: 0px 0px;
          }
          100% {
            background-position: 1000px 0px;
          }
        }
        
        @keyframes moveGridY {
          0% {
            background-position: 0px 0px;
          }
          100% {
            background-position: 0px 1000px;
          }
        }
      `}</style>
    </div>
  );
}
