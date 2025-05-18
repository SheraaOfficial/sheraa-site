
import React from 'react';
import { motion } from 'framer-motion';

const BoldStatement: React.FC = () => {
  return (
    <div className="mt-36 text-center">
      <motion.div 
        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter" 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
          Think Different
        </span>
      </motion.div>
    </div>
  );
};

export default BoldStatement;
