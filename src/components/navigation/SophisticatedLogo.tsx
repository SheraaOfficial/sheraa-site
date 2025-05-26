
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

export const SophisticatedLogo: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="relative flex items-center gap-3"
      >
        {/* Updated Logo with theme-based colors */}
        <motion.div
          className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
          animate={{ 
            filter: [
              "drop-shadow(0 4px 20px rgba(0, 51, 102, 0.3))",
              "drop-shadow(0 6px 30px rgba(0, 128, 128, 0.4))",
              "drop-shadow(0 4px 20px rgba(0, 51, 102, 0.3))",
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Use uploaded logo with theme-appropriate colors */}
          <img 
            src="/lovable-uploads/5ab0dc9b-b752-42ff-ab16-a2c51a0ee68e.png" 
            alt="Sheraa Logo" 
            className={`w-full h-full object-contain transition-all duration-300 ${
              theme === 'dark' 
                ? 'filter brightness-0 invert' // Makes it white in dark theme
                : '' // Keeps original blue in light theme
            }`}
          />
        </motion.div>
        
        {/* SHERAA Text with better visibility for light theme */}
        <motion.div
          className={`text-2xl md:text-3xl font-black tracking-wide ${
            theme === 'light' 
              ? 'text-sheraa-primary' 
              : 'bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          SHERAA
        </motion.div>
        
        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-sheraa-primary/20 to-sheraa-teal/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: 'scale(1.2)' }}
        />
      </motion.div>
    </Link>
  );
};
