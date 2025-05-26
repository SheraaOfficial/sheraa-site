import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useScrollNavigation } from './useScrollNavigation';
import { sophisticatedNavigationItems } from './sophisticatedNavigationData';
import { SophisticatedLogo } from './SophisticatedLogo';
import { DesktopNavigation } from './DesktopNavigation';
import { SophisticatedMobileMenu } from './SophisticatedMobileMenu';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { NavigationItem } from './types';

// Convert sophisticated navigation items to standard navigation items
const convertToNavigationItems = (): NavigationItem[] => {
  return sophisticatedNavigationItems.map(item => ({
    name: item.name,
    path: item.path,
    icon: item.icon, // No casting needed since types now match
    subItems: item.subItems?.map(subItem => ({
      name: subItem.name,
      path: subItem.path,
      description: subItem.description
    })),
    special: item.special
  }));
};

export const SophisticatedNavigationContainer: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isScrolled } = useScrollNavigation();
  const navigationItems = convertToNavigationItems();

  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isPathActive = (path: string, subItems?: NavigationItem['subItems']): boolean => {
    if (location.pathname === path) return true;
    if (subItems) {
      return subItems.some(subItem => location.pathname.startsWith(subItem.path));
    }
    return location.pathname.startsWith(path) && path !== '/';
  };

  const handleNavClick = (item: NavigationItem) => {
    if (item.subItems && item.subItems.length > 0) {
      setActiveDropdown(prev => prev === item.name ? null : item.name);
    }
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 transition-all duration-300 z-[9999] ${
          isScrolled 
            ? 'bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-xl shadow-lg border-b border-white/20' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <SophisticatedLogo />
            
            <DesktopNavigation 
              navigationItems={navigationItems}
              isPathActive={isPathActive}
              activeDropdown={activeDropdown}
              onNavClick={handleNavClick}
              onDropdownClose={handleDropdownClose}
            />
            
            <div className="flex items-center gap-4">
              <ThemeToggle />
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
                aria-label="Toggle mobile menu"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <motion.span
                      className="block h-0.5 w-6 bg-gray-700 dark:bg-gray-200 rounded"
                      animate={{
                        rotate: isMobileMenuOpen ? 45 : 0,
                        y: isMobileMenuOpen ? 2 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.span
                      className="block h-0.5 w-6 bg-gray-700 dark:bg-gray-200 rounded mt-1"
                      animate={{
                        opacity: isMobileMenuOpen ? 0 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.span
                      className="block h-0.5 w-6 bg-gray-700 dark:bg-gray-200 rounded mt-1"
                      animate={{
                        rotate: isMobileMenuOpen ? -45 : 0,
                        y: isMobileMenuOpen ? -2 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <SophisticatedMobileMenu
            navigationItems={navigationItems}
            isPathActive={isPathActive}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
