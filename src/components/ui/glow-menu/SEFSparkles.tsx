
import React from "react";
import { motion } from "framer-motion";

const sefSparkleVariants = {
  initial: { 
    opacity: 0.7,
    scale: 1,
    rotate: 0
  },
  animate: {
    opacity: [0.7, 1, 0.7],
    scale: [1, 1.2, 1],
    rotate: [0, 360],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const SEFSparkles: React.FC = () => {
  return (
    <>
      <motion.div
        className="absolute -top-1 -right-1 z-20 pointer-events-none"
        variants={sefSparkleVariants}
        initial="initial"
        animate="animate"
      >
        <span className="text-xs">✨</span>
      </motion.div>
      <motion.div
        className="absolute -bottom-1 -left-1 z-20 pointer-events-none"
        variants={sefSparkleVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.7 }}
      >
        <span className="text-xs">⭐</span>
      </motion.div>
    </>
  );
};
