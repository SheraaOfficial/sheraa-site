
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

export const gradientButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300",
        destructive: "bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-sm",
        outline:
          "bg-gradient-to-r from-transparent to-transparent hover:from-muted-foreground/10 hover:to-muted-foreground/10 text-foreground border border-input",
        secondary:
          "bg-gradient-to-r from-sheraa-teal to-sheraa-primary/80 text-white shadow-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        accent: "bg-gradient-to-r from-sheraa-orange to-sheraa-coral text-white shadow-sm",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(gradientButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
GradientButton.displayName = "GradientButton"

export { GradientButton }
