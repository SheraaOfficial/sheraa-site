
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { NavigationItem as NavItemType } from './types';

interface NavigationItemProps {
  item: NavItemType;
  index: number;
  isActive: boolean;
  onDropdownClose: () => void;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  isActive,
  onDropdownClose
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasDropdown = item.subItems && item.subItems.length > 0;

  const handleMouseEnter = () => {
    if (hasDropdown) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hasDropdown ? (
        <div
          className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
            isActive || isHovered
              ? 'text-sheraa-primary bg-sheraa-primary/10'
              : 'text-gray-700 dark:text-gray-200 hover:text-sheraa-primary hover:bg-sheraa-primary/5'
          }`}
        >
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
          className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            isActive
              ? 'text-sheraa-primary bg-sheraa-primary/10'
              : 'text-gray-700 dark:text-gray-200 hover:text-sheraa-primary hover:bg-sheraa-primary/5'
          }`}
        >
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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="p-2">
              {item.subItems?.map((subItem) => (
                <Link
                  key={subItem.path}
                  to={subItem.path}
                  onClick={onDropdownClose}
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
