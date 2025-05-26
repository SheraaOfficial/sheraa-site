
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NavigationLogo: React.FC = () => {
  return (
    <Link to="/">
      <motion.div 
        className="flex items-center space-x-3"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-sheraa-primary to-sheraa-secondary rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">S</span>
        </div>
        <div className="hidden sm:block">
          <div className="text-xl font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
            Sheraa
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 -mt-1">
            Entrepreneurship Center
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
