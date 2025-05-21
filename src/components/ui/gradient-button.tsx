
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const gradientButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-sheraa-primary to-purple-500 text-white shadow-lg shadow-sheraa-primary/20 hover:shadow-xl hover:shadow-sheraa-primary/30 hover:scale-[1.03] active:scale-[0.97]",
        secondary:
          "bg-gradient-to-r from-sheraa-teal to-blue-500 text-white shadow-lg shadow-sheraa-teal/20 hover:shadow-xl hover:shadow-sheraa-teal/30 hover:scale-[1.03] active:scale-[0.97]",
        warm:
          "bg-gradient-to-r from-sheraa-coral to-sheraa-orange text-white shadow-lg shadow-sheraa-coral/20 hover:shadow-xl hover:shadow-sheraa-coral/30 hover:scale-[1.03] active:scale-[0.97]",
        outline:
          "border-2 border-transparent bg-clip-padding text-sheraa-primary hover:bg-sheraa-primary/10 transition-colors relative z-10 before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-gradient-to-r before:from-sheraa-primary before:to-purple-500 before:p-0.5 before:-m-0.5",
        ghost:
          "bg-transparent text-sheraa-primary hover:bg-sheraa-primary/10",
        shimmer:
          "bg-gradient-to-r from-sheraa-primary to-purple-500 text-white shadow-lg shadow-sheraa-primary/20 hover:scale-[1.03] active:scale-[0.97] relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-3.5 py-1.5",
        lg: "h-11 rounded-md px-7 py-2.5 text-base",
        xl: "h-12 rounded-md px-8 py-3 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(gradientButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
GradientButton.displayName = "GradientButton";

export { GradientButton, gradientButtonVariants };
