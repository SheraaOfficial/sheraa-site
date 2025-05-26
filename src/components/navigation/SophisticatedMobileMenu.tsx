
import React from 'react';
import { motion } from 'framer-motion';
import { NavigationItem } from './types';

interface SophisticatedMobileMenuProps {
  navigationItems?: NavigationItem[];
  isPathActive?: (path: string, subItems?: NavigationItem['subItems']) => boolean;
  onClose?: () => void;
}

export const SophisticatedMobileMenu: React.FC<SophisticatedMobileMenuProps> = () => {
  return (
    <motion.button
      className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-sheraa-primary/10 to-sheraa-teal/10 text-sheraa-primary hover:from-sheraa-primary/20 hover:to-sheraa-teal/20 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </motion.button>
  );
};
