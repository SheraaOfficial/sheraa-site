
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface TextShimmerProps {
  children: React.ReactNode;
  className?: string;
}

export const TextShimmer = forwardRef<HTMLSpanElement, TextShimmerProps>(
  ({ children, className }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex animate-text-shimmer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[200%_auto] bg-clip-text text-transparent",
          className
        )}
      >
        {children}
      </span>
    );
  }
);

// Ensure displayName is set for React DevTools
TextShimmer.displayName = "TextShimmer";
