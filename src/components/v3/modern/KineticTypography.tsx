import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';

interface KineticTypographyProps {
  text: string;
  className?: string;
  variant?: 'default' | 'velocity' | 'morphing' | 'elastic' | 'glitch';
  delay?: number;
  persona?: 'young' | 'adult' | 'stakeholder' | 'general';
}

export const KineticTypography: React.FC<KineticTypographyProps> = ({
  text,
  className = "",
  variant = 'default',
  delay = 0,
  persona = 'general'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const getPersonaGradient = () => {
    switch (persona) {
      case 'young':
        return 'linear-gradient(135deg, hsl(var(--young-lavender)), hsl(var(--young-rose-pink)), hsl(var(--young-warm-coral)))';
      case 'adult':
        return 'linear-gradient(135deg, hsl(var(--sheraa-primary)), hsl(var(--sheraa-secondary)), hsl(var(--sheraa-accent)))';
      case 'stakeholder':
        return 'linear-gradient(135deg, hsl(var(--warm-gold)), hsl(var(--mocha-500)), hsl(var(--sheraa-primary)))';
      default:
        return 'linear-gradient(135deg, hsl(var(--sheraa-primary)), hsl(var(--sheraa-teal)), hsl(var(--sheraa-secondary)))';
    }
  };

  const words = text.split(' ');

  // Velocity-based animation
  const velocityY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [100, 0, 0, -100]
  );

  const velocityScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 1.2]
  );

  const velocityRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [5, 0, -5]
  );

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const getWordVariants = () => {
    switch (variant) {
      case 'velocity':
        return {
          hidden: { 
            opacity: 0, 
            y: 100, 
            scale: 0.5,
            rotateX: 90 
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
              type: "spring" as const,
              damping: 12,
              stiffness: 200,
              mass: 0.8
            },
          },
        };

      case 'morphing':
        return {
          hidden: { 
            opacity: 0, 
            scale: 0,
            rotateY: 180,
            skewX: 45
          },
          visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            skewX: 0,
            transition: {
              type: "spring" as const,
              damping: 15,
              stiffness: 300,
              mass: 0.5
            },
          },
        };

      case 'elastic':
        return {
          hidden: { 
            opacity: 0, 
            scale: 0.3,
            y: 50,
            rotateZ: 45
          },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateZ: 0,
            transition: {
              type: "spring" as const,
              damping: 8,
              stiffness: 400,
              mass: 0.3
            },
          },
        };

      case 'glitch':
        return {
          hidden: { 
            opacity: 0, 
            x: -20,
            filter: "blur(10px)"
          },
          visible: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.6,
              ease: "easeOut" as const
            },
          },
        };

      default:
        return {
          hidden: { 
            opacity: 0, 
            y: 20,
            scale: 0.9
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.6,
              ease: "easeOut" as const
            },
          },
        };
    }
  };

  const wordVariants = getWordVariants();

  if (variant === 'velocity') {
    return (
      <motion.div
        ref={ref}
        className={`kinetic-typography ${className}`}
        style={{
          y: velocityY,
          scale: velocityScale,
          rotateZ: velocityRotate,
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-wrap justify-center gap-2"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block font-black"
              style={{
                background: getPersonaGradient(),
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'velocity-gradient 3s ease infinite'
              }}
              whileHover={{
                scale: 1.1,
                rotateZ: Math.random() * 10 - 5,
                transition: { duration: 0.2 }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`kinetic-typography ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="flex flex-wrap justify-center gap-2">
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block font-black"
            style={{
              background: getPersonaGradient(),
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 }
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              backgroundPosition: {
                duration: 4 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};