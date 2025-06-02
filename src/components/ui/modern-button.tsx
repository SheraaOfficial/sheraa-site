
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

interface ModernButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  asChild?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  glow?: boolean;
}

export const ModernButton: React.FC<ModernButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  asChild = false,
  disabled = false,
  onClick,
  glow = false,
  ...props
}) => {
  const Comp = asChild ? Slot : motion.button;

  const variants = {
    primary: cn(
      "bg-gradient-to-r from-sheraa-primary to-sheraa-teal",
      "text-white font-medium",
      "shadow-lg shadow-sheraa-primary/25",
      "hover:shadow-xl hover:shadow-sheraa-primary/40",
      "border-0"
    ),
    secondary: cn(
      "bg-white/10 dark:bg-white/5",
      "backdrop-blur-sm border border-sheraa-primary/30",
      "text-sheraa-primary font-medium",
      "hover:bg-sheraa-primary/10 hover:border-sheraa-primary/50"
    ),
    ghost: cn(
      "bg-transparent text-sheraa-primary",
      "hover:bg-sheraa-primary/10",
      "border-0"
    ),
    glass: cn(
      "backdrop-blur-xl bg-white/10 dark:bg-white/5",
      "border border-white/20 dark:border-white/10",
      "text-sheraa-primary font-medium",
      "shadow-2xl",
      "hover:bg-white/20 hover:border-white/30"
    )
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl",
    xl: "px-10 py-5 text-xl rounded-2xl"
  };

  const glowEffect = glow ? "before:absolute before:inset-0 before:rounded-[inherit] before:p-[2px] before:bg-gradient-to-r before:from-sheraa-primary before:to-sheraa-teal before:-z-10 before:blur-sm" : "";

  return (
    <Comp
      whileHover={{ 
        y: -2, 
        scale: 1.02,
        transition: { type: "spring", damping: 20, stiffness: 300 }
      }}
      whileTap={{ 
        y: 0, 
        scale: 0.98,
        transition: { type: "spring", damping: 20, stiffness: 300 }
      }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2",
        "transition-all duration-300 ease-out",
        "focus:outline-none focus:ring-2 focus:ring-sheraa-primary/50 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "overflow-hidden cursor-pointer",
        variants[variant],
        sizes[size],
        glowEffect,
        className
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Comp>
  );
};
