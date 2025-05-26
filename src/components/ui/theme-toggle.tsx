
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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative p-2 md:p-3 rounded-xl bg-white/10 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/20 shadow-lg hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0.8,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {theme === 'dark' ? 
          <Sun className="text-yellow-400 h-4 w-4 md:h-5 md:w-5" /> : 
          <Moon className="text-sheraa-primary h-4 w-4 md:h-5 md:w-5" />
        }
      </motion.div>
    </motion.button>
  );
};
