
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

interface SEFButtonProps {
  path: string;
}

export const SEFButton: React.FC<SEFButtonProps> = ({ path }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }} 
      whileTap={{ scale: 0.98 }} 
      className="relative"
    >
      <Link 
        to={path} 
        className="relative group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-400/30"
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
        
        {/* Icon */}
        <Calendar className="w-4 h-4" />
        
        {/* Text */}
        <span className="text-sm font-bold tracking-wide">
          SEF
        </span>
        
        {/* Arrow with animation */}
        <motion.div
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.div>
      </Link>
    </motion.div>
  );
};
