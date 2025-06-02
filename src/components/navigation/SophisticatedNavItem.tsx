
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { NavigationItem } from './types';
import { SEFButton } from './SEFButton';

interface SophisticatedNavItemProps {
  item: NavigationItem;
  isActive?: boolean;
}

export const SophisticatedNavItem: React.FC<SophisticatedNavItemProps> = ({ 
  item, 
  isActive = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isCurrentPage = location.pathname === item.path;
  const hasSubItems = item.subItems && item.subItems.length > 0;

  // Special handling for SEF button
  if (item.special) {
    return <SEFButton path={item.path} />;
  }

  if (!hasSubItems) {
    return (
      <Link
        to={item.path}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
          isCurrentPage || isActive
            ? 'text-sheraa-primary bg-sheraa-primary/10'
            : 'text-gray-700 dark:text-gray-300 hover:text-sheraa-primary hover:bg-sheraa-primary/5'
        }`}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
          isCurrentPage || isActive
            ? 'text-sheraa-primary bg-sheraa-primary/10'
            : 'text-gray-700 dark:text-gray-300 hover:text-sheraa-primary hover:bg-sheraa-primary/5'
        }`}
      >
        {item.name}
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-[40000] backdrop-blur-sm"
          >
            {item.subItems?.map((subItem) => (
              <Link
                key={subItem.name}
                to={subItem.path}
                className="flex flex-col px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors"
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {subItem.name}
                </span>
                {subItem.description && (
                  <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {subItem.description}
                  </span>
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
