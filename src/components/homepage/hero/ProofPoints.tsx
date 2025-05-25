
import React from "react";
import { motion } from "framer-motion";

export const ProofPoints: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="grid grid-cols-3 gap-4 pt-8 border-t border-sheraa-primary/20"
    >
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-sheraa-primary">180+</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Startups Supported</div>
      </div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-sheraa-orange">$248M+</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Revenue Generated</div>
      </div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-sheraa-teal">71%</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Survival Rate</div>
      </div>
    </motion.div>
  );
};
