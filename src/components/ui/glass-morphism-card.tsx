import React, { ReactNode, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassMorphismCardProps {
  children: ReactNode;
  variant?: 'default' | 'premium' | 'interactive' | 'floating';
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  tiltEffect?: boolean;
  className?: string;
  index?: number;
  onClick?: () => void;
}

export const GlassMorphismCard: React.FC<GlassMorphismCardProps> = ({
  children,
  variant = 'default',
  blur = 'md',
  glow = false,
  tiltEffect = true,
  className,
  index = 0,
  onClick
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position tracking for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animations
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transform values for 3D rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEffect || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = (e.clientX - rect.left - width / 2) / width;
    const mouseY = (e.clientY - rect.top - height / 2) / height;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  };

  const variantClasses = {
    default: cn(
      "bg-white/10 dark:bg-white/5",
      "border border-white/20 dark:border-white/10",
      "shadow-xl dark:shadow-2xl"
    ),
    premium: cn(
      "bg-gradient-to-br from-white/15 via-white/10 to-white/5",
      "dark:from-white/10 dark:via-white/5 dark:to-white/2",
      "border border-white/30 dark:border-white/15",
      "shadow-2xl dark:shadow-3xl",
      "relative overflow-hidden"
    ),
    interactive: cn(
      "bg-white/12 dark:bg-white/6",
      "border border-white/25 dark:border-white/12",
      "shadow-lg dark:shadow-xl",
      "cursor-pointer hover:bg-white/15 dark:hover:bg-white/8",
      "transition-all duration-300"
    ),
    floating: cn(
      "bg-white/8 dark:bg-white/4",
      "border border-white/15 dark:border-white/8",
      "shadow-2xl dark:shadow-3xl",
      "hover:shadow-3xl dark:hover:shadow-4xl"
    )
  };

  const glowEffect = glow ? "shadow-2xl shadow-primary/20 dark:shadow-primary/30" : "";

  return (
    <motion.div
      ref={ref}
      className={cn(
        "rounded-2xl relative transform-gpu perspective-1000",
        blurClasses[blur],
        variantClasses[variant],
        glowEffect,
        tiltEffect && "preserve-3d",
        className
      )}
      style={tiltEffect ? {
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      } : {}}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={!tiltEffect ? { 
        y: -8, 
        scale: 1.02,
        transition: { type: "spring", damping: 25, stiffness: 300 }
      } : {}}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Premium variant gradient border effect */}
      {variant === 'premium' && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      )}
      
      {/* Glass morphism overlay effects */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Hover glow effect */}
      {isHovered && variant === 'interactive' && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Content with 3D transform */}
      <div 
        className="relative z-10"
        style={tiltEffect ? {
          transform: "translateZ(50px)"
        } : {}}
      >
        {children}
      </div>

      {/* Floating particles for floating variant */}
      {variant === 'floating' && isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: '100%',
                opacity: 0
              }}
              animate={{
                y: '-20%',
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Shimmer effect for premium variant */}
      {variant === 'premium' && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '200% 200%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}
    </motion.div>
  );
};

export const GlassMorphismCardHeader: React.FC<{ 
  children: ReactNode; 
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("p-6 pb-4", className)}>
      {children}
    </div>
  );
};

export const GlassMorphismCardContent: React.FC<{ 
  children: ReactNode; 
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("px-6 pb-6", className)}>
      {children}
    </div>
  );
};

export const GlassMorphismCardFooter: React.FC<{ 
  children: ReactNode; 
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("px-6 py-4 border-t border-white/10 dark:border-white/5", className)}>
      {children}
    </div>
  );
};