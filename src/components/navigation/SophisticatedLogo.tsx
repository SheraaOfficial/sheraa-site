
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
        {/* Emblem */}
        <motion.div
          className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-sheraa-primary to-sheraa-teal flex items-center justify-center shadow-lg"
          animate={{ 
            boxShadow: [
              "0 4px 20px rgba(0, 51, 102, 0.3)",
              "0 6px 30px rgba(0, 128, 128, 0.4)",
              "0 4px 20px rgba(0, 51, 102, 0.3)",
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Inner geometric pattern */}
          <div className="w-6 h-6 md:w-7 md:h-7 relative">
            <motion.div
              className="absolute inset-0 border-2 border-white/80 rounded-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-1 border border-white/60 rounded-md"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
          
          {/* Corner accent */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-sheraa-orange rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        
        {/* SHERAA Text */}
        <motion.div
          className="text-2xl md:text-3xl font-black tracking-wide bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent"
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
