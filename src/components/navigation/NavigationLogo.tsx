
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NavigationLogo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 group relative z-10">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <img 
          src="/lovable-uploads/sheraa-logo.png" 
          alt="Sheraa" 
          className="h-10 w-auto drop-shadow-lg"
        />
      </motion.div>
      <motion.div 
        className="absolute -inset-2 bg-gradient-to-r from-sheraa-primary/20 to-sheraa-teal/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </Link>
  );
};
