
import * as React from "react"

// Safe fallback tooltip components that render nothing to avoid any React issues
// These components are designed to be completely safe and not cause any errors

const TooltipProvider: React.FC<{ 
  children: React.ReactNode; 
  delayDuration?: number;
  skipDelayDuration?: number;
  disableHoverableContent?: boolean;
}> = ({ children }) => {
  console.log('TooltipProvider fallback called - rendering children only');
  return <React.Fragment>{children}</React.Fragment>;
};

const Tooltip: React.FC<{ 
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  delayDuration?: number;
  disableHoverableContent?: boolean;
}> = ({ children }) => {
  console.log('Tooltip fallback called - rendering children only');
  return <React.Fragment>{children}</React.Fragment>;
};

const TooltipTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & {
    asChild?: boolean;
  }
>(({ children, asChild, ...props }, ref) => {
  console.log('TooltipTrigger fallback called');
  // Simply render the children without any tooltip behavior
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
  console.log('TooltipContent fallback called - rendering nothing to avoid issues');
  // Don't render any tooltip content to avoid issues
  return null;
});
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
