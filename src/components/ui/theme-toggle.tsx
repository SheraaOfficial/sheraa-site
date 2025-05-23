
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="fixed top-6 right-6 z-50 p-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
    >
      {theme === 'dark' ? 
        <Sun className="text-yellow-300 h-6 w-6" /> : 
        <Moon className="text-sheraa-primary h-6 w-6" />
      }
    </motion.button>
  );
};
