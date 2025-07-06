
import React, { ReactNode } from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

// Advanced animation variants
export const motionVariants = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -60 }
  },
  fadeInScale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  },
  slideInRight: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  },
  staggerContainer: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  staggerChild: {
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  },
  floatingElement: {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  },
  glowPulse: {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  }
};

interface AdvancedMotionProps {
  children: ReactNode;
  variant?: keyof typeof motionVariants;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export const AdvancedMotion: React.FC<AdvancedMotionProps> = ({ 
  children, 
  variant = 'fadeInUp', 
  delay = 0, 
  duration = 0.6,
  className,
  once = true,
  amount = 0.1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  
  const variants = motionVariants[variant];
  
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{
        duration,
        delay,
        type: "spring",
        damping: 20,
        stiffness: 100
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<{ children: ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  return (
    <motion.div
      ref={ref}
      variants={motionVariants.staggerContainer}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerChild: React.FC<{ children: ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => {
  return (
    <motion.div
      variants={motionVariants.staggerChild}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Modern glassmorphism card component
export const GlassCard: React.FC<{ 
  children: ReactNode; 
  className?: string;
  hover?: boolean;
}> = ({ children, className, hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
      className={cn(
        "backdrop-blur-xl bg-white/10 dark:bg-white/5",
        "border border-white/20 dark:border-white/10",
        "rounded-2xl shadow-2xl",
        "relative overflow-hidden",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-br before:from-white/20 before:to-transparent",
        "before:pointer-events-none",
        hover && "cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

// Enhanced gradient background
export const GradientBackground: React.FC<{ 
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}> = ({ children, variant = 'primary', className }) => {
  const gradients = {
    primary: "bg-gradient-to-br from-sheraa-primary/20 via-sheraa-teal/10 to-transparent",
    secondary: "bg-gradient-to-br from-sheraa-teal/20 via-sheraa-primary/10 to-transparent", 
    accent: "bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-transparent"
  };
  
  return (
    <div className={cn("relative", gradients[variant], className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(14,148,136,0.1),transparent_50%)]" />
      {children}
    </div>
  );
};

// Floating animation wrapper
export const FloatingElement: React.FC<{ 
  children: ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
}> = ({ children, className, intensity = 'medium' }) => {
  const intensityMap = {
    light: { y: [-5, 5, -5], duration: 6 },
    medium: { y: [-10, 10, -10], duration: 4 },
    strong: { y: [-15, 15, -15], duration: 3 }
  };
  
  const config = intensityMap[intensity];
  
  return (
    <motion.div
      animate={{
        y: config.y,
        transition: {
          duration: config.duration,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
