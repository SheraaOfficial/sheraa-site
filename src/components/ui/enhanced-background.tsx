
import React from 'react';
import { motion } from 'framer-motion';

export const EnhancedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated mesh gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(0, 51, 102, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 128, 128, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255, 102, 0, 0.05) 0%, transparent 50%)
          `
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border border-sheraa-primary/20 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-sheraa-teal/10 rounded-full"
        animate={{
          y: [0, -50, 0],
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};
