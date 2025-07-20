
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface SEFButtonProps {
  path: string;
}

export const SEFButton: React.FC<SEFButtonProps> = ({ path }) => {
  return (
    <Link 
      to={path} 
      className="group relative flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-400/30 hover:scale-105 text-sm overflow-hidden"
    >
      {/* Animated background glow effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Icon */}
      <Calendar className="w-4 h-4" />
      
      {/* Text with special highlighting */}
      <span className="text-sm font-black tracking-wide relative">
        SEF
      </span>

      {/* Sparkle animation */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="w-3 h-3 text-yellow-200" />
      </motion.div>
    </Link>
  );
};
