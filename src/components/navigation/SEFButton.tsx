
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface SEFButtonProps {
  path: string;
}

export const SEFButton: React.FC<SEFButtonProps> = ({ path }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Link
        to={path}
        className="relative ml-3 px-5 py-2.5 bg-gradient-to-r from-sheraa-sef-primary via-purple-600 to-sheraa-sef-secondary text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-sheraa-sef-primary/80 to-sheraa-sef-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Sparkle effects */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-xs"
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${20 + i * 20}%`,
                top: `${10 + Math.sin(i) * 30}%`,
              }}
            >
              ✨
            </motion.div>
          ))}
        </div>
        
        <span className="relative flex items-center space-x-2 z-10">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Star className="w-4 h-4" />
          </motion.div>
          <span>SEF</span>
          <motion.span
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🎪
          </motion.span>
        </span>
      </Link>
    </motion.div>
  );
};
