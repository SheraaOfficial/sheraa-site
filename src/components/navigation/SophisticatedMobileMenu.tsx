
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NavigationItem } from './types';
import { ExperienceThemeSwitcher } from './ExperienceThemeSwitcher';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { AuthButtons } from './AuthButtons';

interface SophisticatedMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
  isPathActive: (path: string, subItems?: NavigationItem['subItems']) => boolean;
}

export const SophisticatedMobileMenu: React.FC<SophisticatedMobileMenuProps> = ({
  isOpen,
  onClose,
  navigationItems,
  isPathActive
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="lg:hidden bg-white dark:bg-sheraa-dark backdrop-blur-xl border-t border-gray-200 dark:border-gray-700 shadow-xl"
      id="mobile-menu"
    >
      <div className="container mx-auto px-4 py-6">
        <nav className="space-y-4">
          {navigationItems.map((item) => (
            <div key={item.name} className="space-y-2">
              {item.special ? (
                <Link
                  to={item.path}
                  onClick={onClose}
                  className="block px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-bold text-lg shadow-lg text-center"
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className="block text-lg font-medium text-gray-900 dark:text-white hover:text-sheraa-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <div className="ml-4 space-y-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={onClose}
                          className="block text-gray-600 dark:text-gray-400 hover:text-sheraa-primary transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>
        
        {/* Fixed order for mobile: Experience Theme → Auth Buttons → Theme Toggle → Language */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
          <ExperienceThemeSwitcher />
          <div className="flex flex-col space-y-3">
            <AuthButtons />
            <div className="flex items-center justify-between">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
