
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-2.5 rounded-full shadow-lg"
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, rgba(155,135,245,0.2), rgba(249,115,22,0.2))' 
          : 'linear-gradient(135deg, rgba(155,135,245,0.1), rgba(249,115,22,0.1))',
        backdropFilter: 'blur(10px)',
        border: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.6)'
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {theme === 'dark' ? (
        <Sun className="text-yellow-300 h-5 w-5" />
      ) : (
        <Moon className="text-indigo-900 h-5 w-5" />
      )}
    </motion.button>
  );
};
