
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';
import { NavigationItem } from './types';
import { cn } from '@/lib/utils';

interface SophisticatedNavItemProps {
  item: NavigationItem;
  isActive: boolean;
}

export const SophisticatedNavItem: React.FC<SophisticatedNavItemProps> = ({
  item,
  isActive
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasDropdown = item.subItems && item.subItems.length > 0;
  const Icon = item.icon;

  if (item.special) {
    return (
      <Link to={item.path}>
        <motion.div
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {Icon && <Icon className="w-4 h-4" />}
          <span>{item.name}</span>
          <Star className="w-3 h-3 animate-pulse" />
        </motion.div>
      </Link>
    );
  }

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {hasDropdown ? (
        <div
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
            isActive || isHovered
              ? 'text-sheraa-primary bg-sheraa-primary/10'
              : 'text-gray-700 dark:text-gray-200 hover:text-sheraa-primary hover:bg-sheraa-primary/5'
          )}
        >
          {Icon && <Icon className="w-4 h-4" />}
          <span>{item.name}</span>
          <motion.div
            animate={{ rotate: isHovered ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </div>
      ) : (
        <Link
          to={item.path}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
            isActive
              ? 'text-sheraa-primary bg-sheraa-primary/10'
              : 'text-gray-700 dark:text-gray-200 hover:text-sheraa-primary hover:bg-sheraa-primary/5'
          )}
        >
          {Icon && <Icon className="w-4 h-4" />}
          <span>{item.name}</span>
        </Link>
      )}

      {/* Dropdown Menu */}
      <AnimatePresence>
        {hasDropdown && isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-sheraa-dark border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden z-[9999]"
          >
            <div className="p-2">
              {item.subItems?.map((subItem) => (
                <Link
                  key={subItem.path}
                  to={subItem.path}
                  className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                >
                  <div className="font-medium text-gray-900 dark:text-white group-hover:text-sheraa-primary transition-colors">
                    {subItem.name}
                  </div>
                  {subItem.description && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {subItem.description}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
