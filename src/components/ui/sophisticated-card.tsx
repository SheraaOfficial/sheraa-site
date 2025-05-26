
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SophisticatedCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  glowEffect?: boolean;
}

export const SophisticatedCard: React.FC<SophisticatedCardProps> = ({
  children,
  className = '',
  hover = true,
  gradient = false,
  glowEffect = false
}) => {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl transition-all duration-500",
        gradient 
          ? "bg-gradient-to-br from-white/90 to-gray-50/50 dark:from-sheraa-dark/90 dark:to-black/50" 
          : "bg-white/80 dark:bg-sheraa-dark/80",
        "backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50",
        hover && "hover:shadow-2xl hover:border-sheraa-primary/30",
        glowEffect && "shadow-xl",
        className
      )}
      whileHover={hover ? { 
        scale: 1.02, 
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Gradient overlay */}
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-sheraa-primary/5 via-transparent to-sheraa-teal/5 pointer-events-none" />
      )}
      
      {/* Glow effect */}
      {glowEffect && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-sheraa-primary/10 to-sheraa-teal/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
