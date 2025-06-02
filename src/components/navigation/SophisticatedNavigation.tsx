
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { sophisticatedNavigationItems } from './sophisticatedNavigationData';
import { SophisticatedLogo } from './SophisticatedLogo';
import { SophisticatedNavItem } from './SophisticatedNavItem';
import { SophisticatedMobileMenu } from './SophisticatedMobileMenu';
import { ExperienceThemeSwitcher } from './ExperienceThemeSwitcher';
import { SearchButton } from './SearchButton';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { AuthButtons } from './AuthButtons';
import { useScrollNavigation } from './useScrollNavigation';
import { NavigationItem } from './types';

// Convert sophisticated navigation items to standard navigation items
const convertToNavigationItems = (): NavigationItem[] => {
  return sophisticatedNavigationItems.map(item => ({
    name: item.name,
    path: item.path,
    icon: item.icon,
    subItems: item.subItems?.map(subItem => ({
      name: subItem.name,
      path: subItem.path,
      description: subItem.description
    })),
    special: item.special
  }));
};

export const SophisticatedNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isScrolled, isScrollingUp } = useScrollNavigation();
  const navigationItems = convertToNavigationItems();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isPathActive = (path: string, subItems?: NavigationItem['subItems']): boolean => {
    if (location.pathname === path) return true;
    if (subItems) {
      return subItems.some(subItem => location.pathname.startsWith(subItem.path));
    }
    return location.pathname.startsWith(path) && path !== '/';
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ 
        y: isScrolled && !isScrollingUp ? -100 : 0,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10"
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <SophisticatedLogo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <SophisticatedNavItem 
                key={item.name} 
                item={item} 
                isActive={isPathActive(item.path, item.subItems)}
              />
            ))}
          </nav>

          {/* Desktop Actions - Ordered: Search → Experience Theme → Theme Toggle → Auth Buttons → Language Switcher */}
          <div className="hidden lg:flex items-center space-x-2">
            <SearchButton />
            <ExperienceThemeSwitcher />
            <ThemeToggle />
            <AuthButtons />
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <SearchButton />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-sheraa-primary transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                  className="w-6 h-0.5 bg-current transform origin-center transition-all duration-300"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="w-6 h-0.5 bg-current transform origin-center transition-all duration-300 mt-1"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                  className="w-6 h-0.5 bg-current transform origin-center transition-all duration-300 mt-1"
                />
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <SophisticatedMobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            navigationItems={navigationItems}
            isPathActive={isPathActive}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};
