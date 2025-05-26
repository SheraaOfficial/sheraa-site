
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const SophisticatedLogo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="relative"
      >
        <img 
          src="/lovable-uploads/sheraa-logo.png" 
          alt="Sheraa" 
          className="h-12 w-auto drop-shadow-lg" 
        />
        <motion.div
          className="absolute -inset-2 bg-gradient-to-r from-sheraa-primary/20 to-sheraa-teal/20 rounded-full blur-xl opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      
      <motion.div
        className="hidden md:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="text-xl font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
          Sheraa
        </div>
        <div className="text-xs text-gray-500 -mt-1">Entrepreneurship Center</div>
      </motion.div>
    </Link>
  );
};
