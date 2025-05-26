
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SophisticatedNavigationItem } from './sophisticatedNavigationData';

interface SophisticatedNavItemProps {
  item: SophisticatedNavigationItem;
  index: number;
  isActive: boolean;
  activeDropdown: string | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const SophisticatedNavItem: React.FC<SophisticatedNavItemProps> = ({
  item,
  index,
  isActive,
  activeDropdown,
  onMouseEnter,
  onMouseLeave
}) => {
  const navigate = useNavigate();
  const Icon = item.icon;
  const isDropdownOpen = activeDropdown === item.name;

  const handleClick = () => {
    if (!item.subItems || item.subItems.length === 0) {
      navigate(item.path);
    }
  };

  return (
    <div 
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className={cn(
          "relative px-3 md:px-4 py-2 md:py-3 rounded-xl md:rounded-2xl transition-all duration-300 cursor-pointer",
          "hover:bg-white/30 dark:hover:bg-white/20 backdrop-blur-sm border border-transparent",
          "flex items-center gap-2 font-medium text-sm md:text-base",
          isActive && "bg-white/40 dark:bg-white/30 border-white/40 shadow-lg",
          item.special && "bg-gradient-to-r from-sheraa-sef-primary/30 to-sheraa-sef-secondary/20 border-sheraa-sef-primary/40"
        )}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleClick}
      >
        <Icon className={cn(
          "w-4 h-4 md:w-5 md:h-5",
          item.special 
            ? "text-sheraa-sef-primary dark:text-sheraa-sef-primary" 
            : "text-gray-800 dark:text-white"
        )} />
        <span className={cn(
          "text-xs md:text-sm font-semibold",
          item.special 
            ? "bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-secondary bg-clip-text text-transparent"
            : "text-gray-800 dark:text-white"
        )}>
          {item.name}
        </span>
        
        {item.subItems && item.subItems.length > 0 && (
          <motion.div
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-gray-700 dark:text-gray-300" />
          </motion.div>
        )}
        
        {item.special && (
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-secondary rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Enhanced Dropdown Menu with higher z-index */}
      <AnimatePresence>
        {isDropdownOpen && item.subItems && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 min-w-[280px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/50 py-2 z-[99999]"
            style={{ zIndex: 99999 }}
          >
            {item.subItems.map((subItem, subIndex) => (
              <Link
                key={subItem.path}
                to={subItem.path}
                className="block px-4 py-3 hover:bg-sheraa-primary/10 dark:hover:bg-sheraa-primary/20 transition-colors group"
              >
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: subIndex * 0.05 }}
                  className="space-y-1"
                >
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-sheraa-primary transition-colors">
                    {subItem.name}
                  </div>
                  {subItem.description && (
                    <div className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                      {subItem.description}
                    </div>
                  )}
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
