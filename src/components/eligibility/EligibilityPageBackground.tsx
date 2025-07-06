
import React from "react";
import { motion } from "framer-motion";

export const EligibilityPageBackground: React.FC = () => {
  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: [0, 0.8, 0],
      scale: [0.5, 1.2, 0.5],
      y: [0, -100, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut" as const
        }
    }
  };

  return (
    <div className="absolute inset-0">
      {/* Main gradient overlays with motion */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-sheraa-primary/20 to-sheraa-teal/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-sheraa-orange/20 to-sheraa-primary/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -15, 0],
          y: [0, 15, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Floating particles with motion variants */}
      {Array.from({ length: 30 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-sheraa-primary/20 dark:bg-sheraa-teal/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          variants={particleVariants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: Math.random() * 4,
            duration: Math.random() * 3 + 2,
          }}
        />
      ))}
    </div>
  );
};
