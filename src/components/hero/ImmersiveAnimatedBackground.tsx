import React from 'react';
import { motion } from 'framer-motion';

export const ImmersiveAnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-background via-sheraa-light/20 to-sheraa-primary/10 dark:from-sheraa-dark dark:via-sheraa-dark/80 dark:to-sheraa-primary/20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, hsl(var(--sheraa-primary) / 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, hsl(var(--sheraa-secondary) / 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 80%, hsl(var(--sheraa-teal) / 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 60% 20%, hsl(var(--sheraa-primary) / 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating shapes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-sheraa-primary/10 to-sheraa-secondary/5 blur-xl"
          style={{
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Animated particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-sheraa-primary/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Dynamic gradient waves */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--sheraa-primary) / 0.05) 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Interactive overlay for scroll effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
    </div>
  );
};