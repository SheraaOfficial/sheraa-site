
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sophisticatedNavigationItems } from './sophisticatedNavigationData';
import { ExperienceThemeSwitcher } from './ExperienceThemeSwitcher';

interface SophisticatedMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SophisticatedMobileMenu: React.FC<SophisticatedMobileMenuProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="lg:hidden bg-white dark:bg-sheraa-dark border-t border-gray-200 dark:border-gray-700"
      id="mobile-menu"
    >
      <div className="container mx-auto px-4 py-6">
        <nav className="space-y-4">
          {sophisticatedNavigationItems.map((item) => (
            <div key={item.name} className="space-y-2">
              <Link
                to={item.href}
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
                      to={subItem.href}
                      onClick={onClose}
                      className="block text-gray-600 dark:text-gray-400 hover:text-sheraa-primary transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <ExperienceThemeSwitcher />
        </div>
      </div>
    </motion.div>
  );
};
