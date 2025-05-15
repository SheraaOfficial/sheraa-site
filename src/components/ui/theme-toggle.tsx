
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-full shadow-lg ${className}`}
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, rgba(155,135,245,0.9), rgba(249,115,22,0.8))' 
          : 'linear-gradient(135deg, rgba(249,115,22,0.3), rgba(155,135,245,0.5))',
        backdropFilter: 'blur(10px)',
        border: theme === 'dark' ? '2px solid rgba(255,255,255,0.4)' : '2px solid rgba(0,0,0,0.3)'
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="text-yellow-300 h-5 w-5 drop-shadow-glow" />
      ) : (
        <Moon className="text-indigo-900 h-5 w-5 drop-shadow" />
      )}
    </motion.button>
  );
};
