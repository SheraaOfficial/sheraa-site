
import * as React from "react"
import { cn } from "@/lib/utils"

// Completely disable all tooltip functionality to avoid React hook issues
// This is a safe fallback that doesn't use any Radix UI components

const TooltipProvider: React.FC<{ children: React.ReactNode; delayDuration?: number }> = ({ children }) => {
  // Just return children without any tooltip functionality
  return <>{children}</>;
};

// Create safe fallback components that don't render anything
const Tooltip: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;

const TooltipTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>
    {children}
  </div>
));
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { sideOffset?: number }
>(({ className, sideOffset = 4, children, ...props }, ref) => (
  // Return null to not render tooltip content at all
  null
));
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
