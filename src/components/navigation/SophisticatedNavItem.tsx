
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
          "relative px-4 py-3 rounded-2xl transition-all duration-300 cursor-pointer",
          "hover:bg-white/20 backdrop-blur-sm border border-transparent",
          "flex items-center gap-2 text-white font-medium",
          isActive && "bg-white/25 border-white/30 shadow-lg",
          item.special && "bg-gradient-to-r from-purple-500/20 to-orange-500/20 border-purple-400/30"
        )}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleClick}
      >
        <Icon className={cn(
          "w-5 h-5",
          item.special ? "text-purple-300" : "text-white"
        )} />
        <span className={cn(
          "text-sm font-semibold",
          item.special && "bg-gradient-to-r from-purple-300 to-orange-300 bg-clip-text text-transparent"
        )}>
          {item.name}
        </span>
        
        {item.subItems && item.subItems.length > 0 && (
          <motion.div
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4 text-white/70" />
          </motion.div>
        )}
        
        {item.special && (
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isDropdownOpen && item.subItems && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 min-w-[280px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 py-2 z-50"
          >
            {item.subItems.map((subItem, subIndex) => (
              <Link
                key={subItem.path}
                to={subItem.path}
                className="block px-4 py-3 hover:bg-sheraa-primary/10 transition-colors group"
              >
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: subIndex * 0.05 }}
                  className="space-y-1"
                >
                  <div className="text-sm font-semibold text-gray-900 group-hover:text-sheraa-primary transition-colors">
                    {subItem.name}
                  </div>
                  {subItem.description && (
                    <div className="text-xs text-gray-600 group-hover:text-gray-700">
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
