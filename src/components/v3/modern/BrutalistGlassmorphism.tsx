import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BrutalistGlassmorphismProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'intense' | 'subtle' | 'neon' | 'holographic';
  persona?: 'young' | 'adult' | 'stakeholder' | 'general';
  hover?: boolean;
  animate?: boolean;
}

export const BrutalistGlassmorphism: React.FC<BrutalistGlassmorphismProps> = ({
  children,
  className = "",
  variant = 'default',
  persona = 'general',
  hover = true,
  animate = true
}) => {
  const getPersonaStyles = () => {
    switch (persona) {
      case 'young':
        return {
          background: 'rgba(147, 51, 234, 0.1)', // Purple base
          borderColor: 'rgba(219, 39, 119, 0.3)', // Pink accent
          glowColor: 'hsl(var(--young-lavender) / 0.4)',
          shadowColor: 'hsl(var(--young-rose-pink) / 0.2)'
        };
      case 'adult':
        return {
          background: 'rgba(99, 102, 241, 0.1)', // Blue base  
          borderColor: 'rgba(59, 130, 246, 0.3)', // Blue accent
          glowColor: 'hsl(var(--sheraa-primary) / 0.4)',
          shadowColor: 'hsl(var(--sheraa-secondary) / 0.2)'
        };
      case 'stakeholder':
        return {
          background: 'rgba(251, 191, 36, 0.1)', // Gold base
          borderColor: 'rgba(245, 158, 11, 0.3)', // Amber accent
          glowColor: 'hsl(var(--warm-gold) / 0.4)',
          shadowColor: 'hsl(var(--mocha-500) / 0.2)'
        };
      default:
        return {
          background: 'rgba(255, 255, 255, 0.1)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          glowColor: 'hsl(var(--sheraa-primary) / 0.4)',
          shadowColor: 'hsl(var(--sheraa-teal) / 0.2)'
        };
    }
  };

  const getVariantStyles = () => {
    const personaStyles = getPersonaStyles();
    
    switch (variant) {
      case 'intense':
        return {
          background: `linear-gradient(135deg, ${personaStyles.background}, rgba(255, 255, 255, 0.15))`,
          backdropFilter: 'blur(40px) saturate(200%) brightness(120%)',
          border: `2px solid ${personaStyles.borderColor}`,
          boxShadow: `0 25px 50px -12px ${personaStyles.shadowColor}, 
                      0 0 0 1px ${personaStyles.borderColor},
                      inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
        };
      
      case 'subtle':
        return {
          background: `rgba(255, 255, 255, 0.05)`,
          backdropFilter: 'blur(20px) saturate(150%)',
          border: `1px solid rgba(255, 255, 255, 0.1)`,
          boxShadow: `0 10px 30px -12px ${personaStyles.shadowColor}`,
        };
      
      case 'neon':
        return {
          background: `linear-gradient(135deg, ${personaStyles.background}, rgba(0, 0, 0, 0.1))`,
          backdropFilter: 'blur(30px) saturate(180%) contrast(120%)',
          border: `1px solid ${personaStyles.glowColor}`,
          boxShadow: `0 0 30px ${personaStyles.glowColor}, 
                      0 0 60px ${personaStyles.shadowColor},
                      inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
        };
      
      case 'holographic':
        return {
          background: `linear-gradient(45deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            ${personaStyles.background} 25%, 
            rgba(255, 255, 255, 0.05) 50%, 
            ${personaStyles.background} 75%, 
            rgba(255, 255, 255, 0.1) 100%)`,
          backdropFilter: 'blur(25px) saturate(200%) hue-rotate(10deg)',
          border: `1px solid transparent`,
          borderImage: `linear-gradient(45deg, ${personaStyles.borderColor}, transparent, ${personaStyles.glowColor}) 1`,
          boxShadow: `0 20px 40px -12px ${personaStyles.shadowColor}`,
        };
      
      default:
        return {
          background: `linear-gradient(135deg, ${personaStyles.background}, rgba(255, 255, 255, 0.08))`,
          backdropFilter: 'blur(30px) saturate(180%)',
          border: `1px solid ${personaStyles.borderColor}`,
          boxShadow: `0 20px 40px -12px ${personaStyles.shadowColor}, 
                      0 0 0 1px rgba(255, 255, 255, 0.05)`,
        };
    }
  };

  const variantStyles = getVariantStyles();
  const personaStyles = getPersonaStyles();

  const hoverAnimation = hover ? {
    whileHover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    },
    whileTap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  } : {};

  const entryAnimation = animate ? {
    initial: { 
      opacity: 0, 
      y: 30, 
      scale: 0.95,
      filter: "blur(10px)"
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: "blur(0px)"
    },
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  } : {};

  return (
    <motion.div
      className={cn(
        "brutalist-glassmorphism relative overflow-hidden rounded-3xl",
        variant === 'holographic' && "bg-gradient-holographic",
        className
      )}
      style={variantStyles}
      {...entryAnimation}
      {...hoverAnimation}
    >
      {/* Brutalist Geometric Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/20" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-white/20" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-white/20" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/20" />

      {/* Holographic Rainbow Effect */}
      {variant === 'holographic' && (
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'linear-gradient(45deg, transparent, rgba(255,0,150,0.1), transparent)',
              'linear-gradient(90deg, transparent, rgba(0,255,150,0.1), transparent)', 
              'linear-gradient(135deg, transparent, rgba(150,0,255,0.1), transparent)',
              'linear-gradient(180deg, transparent, rgba(255,150,0,0.1), transparent)',
              'linear-gradient(45deg, transparent, rgba(255,0,150,0.1), transparent)',
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}

      {/* Dynamic Light Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            `radial-gradient(circle at 20% 80%, ${personaStyles.glowColor} 0%, transparent 50%)`,
            `radial-gradient(circle at 80% 20%, ${personaStyles.glowColor} 0%, transparent 50%)`,
            `radial-gradient(circle at 40% 40%, ${personaStyles.glowColor} 0%, transparent 50%)`,
            `radial-gradient(circle at 20% 80%, ${personaStyles.glowColor} 0%, transparent 50%)`,
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />
    </motion.div>
  );
};