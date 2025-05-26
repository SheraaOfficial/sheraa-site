
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { SophisticatedNavigationItem } from './sophisticatedNavigationData';

interface SophisticatedNavigationContainerProps {
  children: React.ReactNode;
}

export const SophisticatedNavigationContainer: React.FC<SophisticatedNavigationContainerProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[9999] transition-all duration-500",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-4 mt-4">
        <motion.div
          className={cn(
            "relative overflow-hidden transition-all duration-500 mx-auto max-w-7xl",
            scrolled
              ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl rounded-2xl py-3"
              : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/30 dark:border-gray-700/30 shadow-xl rounded-xl py-4"
          )}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Enhanced gradient background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-sheraa-primary/5 via-transparent to-sheraa-teal/5 pointer-events-none" />
          
          <div className="flex items-center justify-between px-6 md:px-8 relative z-10">
            {children}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
