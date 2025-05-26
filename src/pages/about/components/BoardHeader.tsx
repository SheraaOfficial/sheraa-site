
import React from 'react';
import { motion } from 'framer-motion';

export const BoardHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
        Board of Advisors
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Our distinguished Board of Advisors comprises 17 leaders from government, industry, 
        academia, and the entrepreneurial community, ensuring our initiatives remain aligned 
        with national priorities and market needs.
      </p>
    </motion.div>
  );
};
