
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PerfumeSubmenuProps {
  activeItem?: string;
}

export const PerfumeSubmenu: React.FC<PerfumeSubmenuProps> = ({ activeItem }) => {
  const location = useLocation();
  const pathname = location.pathname;
  
  const menuItems = [
    { id: 'home', label: "Sharjah's Signature", path: '/perfume' },
    { id: 'about', label: 'About', path: '/perfume/about' },
    { id: 'gallery', label: 'Gallery', path: '/perfume/gallery' },
    { id: 'pricing', label: 'Pricing', path: '/perfume/pricing' },
    { id: 'buy', label: 'Buy Now', path: '/perfume/buy' },
  ];
  
  const getActiveItem = () => {
    if (activeItem) return activeItem;
    if (pathname === '/perfume') return 'home';
    
    const pathSegment = pathname.split('/')[2];
    return pathSegment || 'home';
  };
  
  const currentActiveItem = getActiveItem();

  return (
    <div className="relative mb-8">
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-8">
        {menuItems.map((item) => {
          const isActive = currentActiveItem === item.id;
          
          return (
            <Link
              key={item.id}
              to={item.path}
              className={cn(
                "relative px-4 py-2 text-sm sm:text-base rounded-full transition-colors",
                isActive 
                  ? "text-amber-900 dark:text-amber-200 font-medium" 
                  : "text-gray-700 hover:text-amber-800 dark:text-gray-300 dark:hover:text-amber-300"
              )}
            >
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="activeMenuHighlight"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 dark:bg-amber-400"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
