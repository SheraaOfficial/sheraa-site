
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  isInView: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ isInView }) => {
  return (
    <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
      <motion.span 
        className="inline-block text-sm md:text-base font-semibold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        SEF THROUGH THE YEARS
      </motion.span>
      
      <motion.h2 
        className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A Legacy of Inspiration
      </motion.h2>
      
      <motion.p 
        className="text-base md:text-lg text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Since 2018, SEF has grown from a local gathering to the region's premier entrepreneurship festival, 
        welcoming over 14,000 attendees and featuring 300+ global speakers across diverse industries.
      </motion.p>
    </div>
  );
};

export default SectionHeader;
