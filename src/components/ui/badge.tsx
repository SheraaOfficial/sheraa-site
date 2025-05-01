
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all hover:scale-105",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-sheraa-primary text-white shadow-sm shadow-sheraa-primary/20",
        secondary:
          "border-transparent bg-sheraa-teal text-white shadow-sm shadow-sheraa-teal/20",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-sm shadow-destructive/20",
        outline: 
          "text-sheraa-primary border-sheraa-primary/30 hover:bg-sheraa-primary/10",
        accent: 
          "border-transparent bg-sheraa-orange text-white shadow-sm shadow-sheraa-orange/20",
        coral:
          "border-transparent bg-sheraa-coral text-white shadow-sm shadow-sheraa-coral/20",
        success:
          "border-transparent bg-emerald-500 text-white shadow-sm shadow-emerald-500/20",
        info:
          "border-transparent bg-sky-500 text-white shadow-sm shadow-sky-500/20",
        warning:
          "border-transparent bg-amber-500 text-white shadow-sm shadow-amber-500/20",
        purple:
          "border-transparent bg-purple-500 text-white shadow-sm shadow-purple-500/20",
        // New gradient badges
        gradient: 
          "border-transparent bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white shadow-md",
        "gradient-warm": 
          "border-transparent bg-gradient-to-r from-sheraa-coral to-sheraa-orange text-white shadow-md",
        // Soft/pastel variants with subtle shadows
        "soft-primary": 
          "border border-sheraa-primary/20 bg-sheraa-primary/10 text-sheraa-primary shadow-sm",
        "soft-teal": 
          "border border-sheraa-teal/20 bg-sheraa-teal/10 text-sheraa-teal shadow-sm",
        "soft-coral": 
          "border border-sheraa-coral/20 bg-sheraa-coral/10 text-sheraa-coral shadow-sm",
      },
      size: {
        default: "h-6 px-2.5 py-0.5 text-xs",
        sm: "h-5 px-2 py-0 text-xs",
        lg: "h-7 px-3 py-0.5 text-sm",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
        shimmer: "animate-shimmer bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:200%_100%]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ 
  className, 
  variant, 
  size, 
  animation, 
  ...props 
}: BadgeProps) {
  return (
    <div 
      className={cn(badgeVariants({ variant, size, animation }), className)} 
      {...props} 
    />
  )
}

export { Badge, badgeVariants }
