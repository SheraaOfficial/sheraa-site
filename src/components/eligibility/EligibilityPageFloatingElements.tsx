
import React from "react";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

export const EligibilityPageFloatingElements: React.FC = () => {
  return (
    <motion.div
      className="fixed bottom-8 right-8 flex flex-col gap-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 bg-gradient-to-br from-sheraa-primary to-sheraa-teal rounded-full shadow-lg flex items-center justify-center cursor-pointer backdrop-blur-sm"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Target className="w-5 h-5 text-white" />
      </motion.div>
    </motion.div>
  );
};
