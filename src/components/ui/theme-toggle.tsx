
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
      className="fixed top-4 right-4 z-[100] p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:bg-white/90 dark:hover:bg-gray-800/90 transition-colors duration-200"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? 
          <Sun className="text-yellow-400 h-5 w-5" /> : 
          <Moon className="text-gray-700 h-5 w-5" />
        }
      </motion.div>
    </motion.button>
  );
};
