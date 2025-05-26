
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
        className="relative"
      >
        {/* Only show logo in dark theme since it's white and invisible in light theme */}
        {theme === 'dark' && (
          <img 
            src="/lovable-uploads/sheraa-logo.png" 
            alt="Sheraa Logo" 
            className="h-8 md:h-10 w-auto object-contain"
          />
        )}
        
        {/* Text fallback for light theme */}
        {theme === 'light' && (
          <motion.div
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Sheraa
          </motion.div>
        )}
        
        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-sheraa-primary/20 to-sheraa-teal/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: 'scale(1.2)' }}
        />
      </motion.div>
    </Link>
  );
};
