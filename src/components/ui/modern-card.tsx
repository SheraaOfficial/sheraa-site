
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ModernCardProps {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'gradient' | 'minimal';
  hover?: boolean;
  className?: string;
  glow?: boolean;
}

export const ModernCard: React.FC<ModernCardProps> = ({
  children,
  variant = 'default',
  hover = true,
  className,
  glow = false
}) => {
  const variants = {
    default: cn(
      "bg-white dark:bg-gray-900",
      "border border-gray-200 dark:border-gray-800",
      "shadow-lg",
      "rounded-2xl"
    ),
    glass: cn(
      "backdrop-blur-xl bg-white/10 dark:bg-white/5",
      "border border-white/20 dark:border-white/10",
      "shadow-2xl",
      "rounded-2xl",
      "relative overflow-hidden",
      "before:absolute before:inset-0",
      "before:bg-gradient-to-br before:from-white/20 before:to-transparent",
      "before:pointer-events-none"
    ),
    gradient: cn(
      "bg-gradient-to-br from-white via-gray-50 to-gray-100",
      "dark:from-gray-900 dark:via-gray-800 dark:to-gray-900",
      "border border-gray-200/50 dark:border-gray-700/50",
      "shadow-xl",
      "rounded-2xl"
    ),
    minimal: cn(
      "bg-white/50 dark:bg-gray-900/50",
      "backdrop-blur-sm",
      "border border-gray-200/30 dark:border-gray-700/30",
      "rounded-xl"
    )
  };

  const glowEffect = glow ? "shadow-2xl shadow-sheraa-primary/20" : "";

  return (
    <motion.div
      whileHover={hover ? { 
        y: -8, 
        scale: 1.02,
        rotateX: 5,
        transition: { type: "spring", damping: 20, stiffness: 300 }
      } : {}}
      className={cn(
        "relative transition-all duration-300 ease-out",
        "transform-gpu perspective-1000",
        variants[variant],
        glowEffect,
        hover && "cursor-pointer",
        className
      )}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Inner glow effect for glass variant */}
      {variant === 'glass' && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sheraa-primary/10 via-transparent to-sheraa-teal/10 pointer-events-none" />
      )}
      
      {children}
    </motion.div>
  );
};

export const ModernCardHeader: React.FC<{ 
  children: ReactNode; 
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("p-6 pb-4", className)}>
      {children}
    </div>
  );
};

export const ModernCardContent: React.FC<{ 
  children: ReactNode; 
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("px-6 pb-6", className)}>
      {children}
    </div>
  );
};

export const ModernCardFooter: React.FC<{ 
  children: ReactNode; 
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("px-6 py-4 border-t border-gray-200/20 dark:border-gray-700/20", className)}>
      {children}
    </div>
  );
};
