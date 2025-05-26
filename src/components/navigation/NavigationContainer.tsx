
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NavigationItem } from './types';
import { NavigationLogo } from './NavigationLogo';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileMenuButton } from './MobileMenuButton';
import { MobileNavigation } from './MobileNavigation';
import { FloatingBackground } from './FloatingBackground';
import { navigationItems } from './navigationData';

export const NavigationContainer: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isPathActive = (path: string, subItems?: NavigationItem['subItems']) => {
    if (location.pathname === path) return true;
    if (subItems) {
      return subItems.some(item => location.pathname === item.path);
    }
    return false;
  };

  const handleNavClick = (item: NavigationItem) => {
    if (item.subItems && item.subItems.length > 0) {
      if (activeDropdown === item.name) {
        setActiveDropdown(null);
      } else {
        setActiveDropdown(item.name);
      }
    } else {
      setActiveDropdown(null);
      setIsOpen(false);
    }
  };

  return (
    <>
      <FloatingBackground />

      <motion.nav 
        className={cn(
          "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500",
          "max-w-6xl w-full mx-auto px-4"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className={cn(
            "relative overflow-hidden transition-all duration-500",
            scrolled 
              ? "bg-white/20 backdrop-blur-3xl border border-white/30 shadow-2xl rounded-3xl" 
              : "bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl rounded-2xl"
          )}
          style={{
            background: scrolled 
              ? 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)'
              : 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
          }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between h-16 px-6">
            <NavigationLogo />

            <DesktopNavigation
              navigationItems={navigationItems}
              isPathActive={isPathActive}
              activeDropdown={activeDropdown}
              onNavClick={handleNavClick}
              onDropdownClose={() => setActiveDropdown(null)}
            />

            <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>

          <MobileNavigation
            isOpen={isOpen}
            items={[...navigationItems, { name: 'SEF', path: '/events/sef-landing', icon: navigationItems[0].icon, special: true }]}
            isPathActive={isPathActive}
            onItemClick={handleNavClick}
            onClose={() => setIsOpen(false)}
          />
        </motion.div>
      </motion.nav>
      
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </>
  );
};
