
import * as React from "react"
import { cn } from "@/lib/utils"

// Completely disable all tooltip functionality to avoid React hook issues
// This is a safe fallback that doesn't use any Radix UI components

const TooltipProvider: React.FC<{ 
  children: React.ReactNode; 
  delayDuration?: number;
  skipDelayDuration?: number;
  disableHoverableContent?: boolean;
}> = ({ children }) => {
  // Just return children without any tooltip functionality
  return <>{children}</>;
};

// Create safe fallback components that don't render anything
const Tooltip: React.FC<{ 
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  delayDuration?: number;
  disableHoverableContent?: boolean;
}> = ({ children }) => <>{children}</>;

const TooltipTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & {
    asChild?: boolean;
  }
>(({ children, asChild, ...props }, ref) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { ...props, ref } as any);
  }
  return (
    <div ref={ref as any} {...props}>
      {children}
    </div>
  );
});
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    sideOffset?: number;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
    alignOffset?: number;
    avoidCollisions?: boolean;
    collisionBoundary?: Element | null | Array<Element | null>;
    collisionPadding?: number | Partial<Record<"top" | "right" | "bottom" | "left", number>>;
    arrowPadding?: number;
    sticky?: "partial" | "always";
    hideWhenDetached?: boolean;
    asChild?: boolean;
  }
>(({ className, sideOffset = 4, children, asChild, ...props }, ref) => {
  // Return null to not render tooltip content at all
  return null;
});
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
