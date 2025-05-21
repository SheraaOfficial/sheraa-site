
import React from "react";
import { motion } from "framer-motion";

export const SectionLoading: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8">
      <motion.div
        className="w-12 h-12 border-4 border-sheraa-primary/30 border-t-sheraa-primary rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.p 
        className="text-sm text-gray-500 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Loading amazing content...
      </motion.p>
    </div>
  );
};
