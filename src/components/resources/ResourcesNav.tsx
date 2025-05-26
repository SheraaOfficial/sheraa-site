
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const ResourcesNav = () => {
  const location = useLocation();
  
  const navigationItems = [
    { name: 'Overview', path: '/resources' },
    { name: 'Guides & Toolkits', path: '/resources/guides' },
    { name: 'Advisory', path: '/resources/advisory' },
    { name: 'Articles', path: '/resources/articles' },
    { name: 'Impact Reports', path: '/resources/impact-reports' },
  ];
  
  return (
    <div className="sticky top-0 z-30 w-full bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <nav className="flex items-center space-x-1">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-4 text-sm font-medium relative transition-colors hover:text-sheraa-primary",
                  isActive ? "text-sheraa-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-sheraa-primary"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
