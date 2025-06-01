
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-sheraa-primary text-white hover:bg-sheraa-primary/90 shadow-sm hover:shadow-md transition-all duration-200",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-destructive/20 shadow-sm hover:shadow-md",
        outline:
          "border border-sheraa-primary bg-transparent text-sheraa-primary hover:bg-sheraa-primary/10 transition-all duration-200",
        secondary:
          "bg-sheraa-teal text-white hover:bg-sheraa-teal/90 shadow-sm hover:shadow-md transition-all duration-200",
        accent: 
          "bg-sheraa-orange text-white hover:bg-sheraa-orange/90 shadow-sheraa-orange/20 shadow-sm hover:shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-sheraa-primary underline-offset-4 hover:underline",
        gradient: "gradient-button px-9 py-4 rounded-[11px] min-w-[132px] font-bold text-base text-white shadow-md hover:shadow-lg transform hover:scale-[1.01] transition-all",
        gradientAccent: "gradient-button gradient-button-variant px-9 py-4 rounded-[11px] min-w-[132px] font-bold text-base text-white shadow-md hover:shadow-lg transform hover:scale-[1.01] transition-all",
        elevated: "bg-white text-sheraa-primary border border-gray-100 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all",
        shimmer: "relative bg-sheraa-primary text-white overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:animate-shimmer",
        neo: "bg-sheraa-primary text-white rounded-md shadow-[5px_5px_0px_0px_rgba(0,51,102,0.7)] border-sheraa-primary border-2 hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all",
        sef: "bg-sheraa-sef-primary text-white hover:bg-sheraa-sef-primary/90 shadow-sm hover:shadow-md transition-all duration-200",
        'sef-outline': "border border-sheraa-sef-primary bg-transparent text-sheraa-sef-primary hover:bg-sheraa-sef-primary/10 transition-all duration-200",
        warm: "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-sm hover:shadow-md transition-all duration-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        md: "h-10 rounded-md px-6",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-md px-10 text-base",
        icon: "h-10 w-10",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
        float: "hover:animate-float",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animation, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, animation, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
