import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EnhancedCardProps {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'gradient' | 'premium';
  hover?: boolean;
  className?: string;
  glow?: boolean;
  index?: number;
}

export const EnhancedCard: React.FC<EnhancedCardProps> = ({
  children,
  variant = 'default',
  hover = true,
  className,
  glow = false,
  index = 0
}) => {
  const variants = {
    default: cn(
      "bg-card dark:bg-card",
      "border border-border dark:border-border",
      "shadow-lg dark:shadow-2xl",
      "rounded-2xl"
    ),
    glass: cn(
      "backdrop-blur-xl bg-white/10 dark:bg-white/5",
      "border border-white/20 dark:border-white/10",
      "shadow-2xl dark:shadow-3xl",
      "rounded-2xl",
      "relative overflow-hidden"
    ),
    gradient: cn(
      "bg-gradient-to-br from-card via-muted/30 to-muted/50",
      "dark:from-card dark:via-muted/20 dark:to-muted/30",
      "border border-border/50 dark:border-border/30",
      "shadow-xl dark:shadow-3xl",
      "rounded-2xl",
      "relative"
    ),
    premium: cn(
      "bg-gradient-to-br from-sheraa-primary/5 via-card to-sheraa-teal/5",
      "dark:from-sheraa-primary/10 dark:via-card dark:to-sheraa-teal/10",
      "border border-sheraa-primary/20 dark:border-sheraa-primary/30",
      "shadow-2xl dark:shadow-3xl shadow-sheraa-primary/10",
      "rounded-2xl",
      "relative overflow-hidden"
    )
  };

  const glowEffect = glow ? "shadow-2xl shadow-sheraa-primary/20 dark:shadow-sheraa-primary/30" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      whileHover={hover ? { 
        y: -8, 
        scale: 1.02,
        transition: { type: "spring", damping: 25, stiffness: 300 }
      } : {}}
      className={cn(
        "relative transition-all duration-300 ease-out",
        "transform-gpu will-change-transform",
        variants[variant],
        glowEffect,
        hover && "cursor-pointer group",
        className
      )}
    >
      {/* Gradient border effect for premium variant */}
      {variant === 'premium' && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sheraa-primary/20 via-sheraa-teal/20 to-sheraa-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      )}
      
      {/* Glass morphism overlay */}
      {variant === 'glass' && (
        <>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tl from-sheraa-primary/10 via-transparent to-sheraa-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Hover glow effect */}
      {hover && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-sheraa-primary/20 to-sheraa-teal/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
      )}
    </motion.div>
  );
};

export const EnhancedCardHeader: React.FC<{ 
  children: ReactNode; 
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("p-6 pb-4", className)}>
      {children}
    </div>
  );
};

export const EnhancedCardContent: React.FC<{ 
  children: ReactNode; 
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("px-6 pb-6", className)}>
      {children}
    </div>
  );
};

export const EnhancedCardFooter: React.FC<{ 
  children: ReactNode; 
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("px-6 py-4 border-t border-border/20 dark:border-border/10", className)}>
      {children}
    </div>
  );
};