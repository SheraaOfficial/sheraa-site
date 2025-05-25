
import React from "react";
import { motion } from "framer-motion";

export const ScrollIndicator: React.FC = () => {
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20" 
      animate={{ 
        y: [0, 10, 0],
        opacity: [0.7, 0.3, 0.7]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="w-6 h-10 border-2 border-sheraa-primary/40 dark:border-sheraa-primary/60 rounded-full flex justify-center backdrop-blur-sm">
        <motion.div 
          className="w-1.5 h-1.5 bg-sheraa-primary rounded-full mt-2" 
          animate={{ 
            y: [0, 14, 0] 
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};
