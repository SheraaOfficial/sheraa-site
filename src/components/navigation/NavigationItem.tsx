
import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NavigationItem as NavItemType, NavigationSubItem } from './types';

interface NavigationItemProps {
  item: NavItemType;
  index: number;
  isActive: boolean;
  activeDropdown: string | null;
  onItemClick: (item: NavItemType) => void;
  onDropdownClose: () => void;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  index,
  isActive,
  activeDropdown,
  onItemClick,
  onDropdownClose
}) => {
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isDropdownOpen = activeDropdown === item.name;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onDropdownClose();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen, onDropdownClose]);

  const handleSubItemClick = (subItem: NavigationSubItem) => {
    navigate(subItem.path);
    onDropdownClose();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => onItemClick(item)}
        className={`
          relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1
          ${isActive 
            ? 'text-sheraa-primary bg-white/20 shadow-lg' 
            : 'text-gray-700 dark:text-gray-200 hover:text-sheraa-primary hover:bg-white/10'
          }
        `}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index }}
      >
        <span>{item.name}</span>
        {item.subItems && item.subItems.length > 0 && (
          <motion.div
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        )}
      </motion.button>

      <AnimatePresence>
        {isDropdownOpen && item.subItems && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 min-w-[220px] bg-white/95 dark:bg-sheraa-dark/95 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden z-[9999]"
          >
            <div className="py-2">
              {item.subItems.map((subItem, subIndex) => (
                <motion.button
                  key={subItem.name}
                  onClick={() => handleSubItemClick(subItem)}
                  className="w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-sheraa-primary/10 hover:text-sheraa-primary transition-all duration-200 flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * subIndex }}
                  whileHover={{ x: 4 }}
                >
                  {subItem.icon && <subItem.icon className="w-4 h-4 flex-shrink-0" />}
                  <div>
                    <div className="font-medium">{subItem.name}</div>
                    {subItem.description && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {subItem.description}
                      </div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
