
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { AuthButtons } from './AuthButtons';
import { SearchButton } from './SearchButton';
import { sophisticatedNavigationItems } from './sophisticatedNavigationData';

export const UnifiedNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isPathActive = (path: string): boolean => {
    if (location.pathname === path) return true;
    return location.pathname.startsWith(path) && path !== '/';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/sheraa-logo.png" 
              alt="Sheraa" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {sophisticatedNavigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-sheraa-primary ${
                  isPathActive(item.path) 
                    ? 'text-sheraa-primary' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-2">
            <SearchButton />
            <ThemeToggle />
            <LanguageSwitcher />
            <AuthButtons />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-sheraa-primary transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
            >
              <div className="py-4 space-y-4">
                {/* Mobile Navigation Links */}
                <div className="space-y-2">
                  {sophisticatedNavigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-4 py-2 text-sm font-medium transition-colors hover:text-sheraa-primary hover:bg-gray-50 dark:hover:bg-gray-800 ${
                        isPathActive(item.path) 
                          ? 'text-sheraa-primary bg-sheraa-primary/10' 
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Actions */}
                <div className="px-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Settings</span>
                    <div className="flex items-center space-x-2">
                      <ThemeToggle />
                      <LanguageSwitcher />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="w-full">
                      <SearchButton />
                    </div>
                    <AuthButtons />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
