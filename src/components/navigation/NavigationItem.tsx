
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavigationItem as NavItemType } from './types';
import { SEFButton } from './SEFButton';

interface NavigationItemProps {
  item: NavItemType;
  index: number;
  isActive: boolean;
  onDropdownClose: () => void;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  index,
  isActive,
  onDropdownClose
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const Icon = item.icon;

  const handleMouseEnter = () => {
    if (item.subItems) {
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleClick = () => {
    if (!item.subItems) {
      onDropdownClose();
    }
  };

  // Special handling for SEF button
  if (item.special) {
    return <SEFButton path={item.path} />;
  }

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.subItems ? (
        <button
          className={cn(
            "flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group",
            isActive || isDropdownOpen
              ? "text-sheraa-primary bg-sheraa-primary/10" 
              : "text-gray-700 dark:text-gray-300 hover:text-sheraa-primary hover:bg-sheraa-primary/5"
          )}
        >
          {Icon && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Icon className="w-4 h-4" />
            </motion.div>
          )}
          <span>{item.name}</span>
          <ChevronDown className={cn(
            "w-4 h-4 transition-transform duration-200",
            isDropdownOpen && "rotate-180"
          )} />
        </button>
      ) : (
        <Link
          to={item.path}
          onClick={handleClick}
          className={cn(
            "flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group",
            isActive
              ? "text-sheraa-primary bg-sheraa-primary/10" 
              : "text-gray-700 dark:text-gray-300 hover:text-sheraa-primary hover:bg-sheraa-primary/5"
          )}
        >
          {Icon && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Icon className="w-4 h-4" />
            </motion.div>
          )}
          <span>{item.name}</span>
        </Link>
      )}

      {/* Dropdown Menu */}
      <AnimatePresence>
        {item.subItems && isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-[100] overflow-hidden backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
          >
            <div className="p-2">
              {item.subItems.map((subItem, subIndex) => (
                <motion.div
                  key={subItem.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: subIndex * 0.05 }}
                >
                  <Link
                    to={subItem.path}
                    onClick={onDropdownClose}
                    className="block px-3 py-2 rounded-lg text-sm hover:bg-sheraa-primary/10 hover:text-sheraa-primary transition-colors duration-200 group"
                  >
                    <div className="font-medium mb-1">{subItem.name}</div>
                    {subItem.description && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-sheraa-primary/70">
                        {subItem.description}
                      </div>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
