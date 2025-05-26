
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavigationItem as NavigationItemType } from './types';

interface NavigationItemProps {
  item: NavigationItemType;
  index: number;
  isActive: boolean;
  activeDropdown: string | null;
  onItemClick: (item: NavigationItemType) => void;
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
  const Icon = item.icon;

  return (
    <div className="relative">
      <motion.button
        onClick={() => onItemClick(item)}
        className={cn(
          "flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden group",
          isActive
            ? "text-white bg-gradient-to-r from-sheraa-primary to-sheraa-teal shadow-lg"
            : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-sheraa-primary/80 hover:to-sheraa-teal/80"
        )}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-sheraa-primary/30 to-sheraa-teal/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <motion.div
          className="relative z-10"
          animate={{ rotate: isActive ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-4 h-4" />
        </motion.div>
        <span className="relative z-10">{item.name}</span>
        {item.subItems && (
          <motion.div
            className="relative z-10"
            animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-3 h-3" />
          </motion.div>
        )}
      </motion.button>
      
      {/* Dropdown */}
      <AnimatePresence>
        {activeDropdown === item.name && item.subItems && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full mt-3 left-0 bg-white/95 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-2xl overflow-hidden min-w-48 z-50"
          >
            {item.subItems.map((subItem, subIndex) => (
              <motion.div
                key={subItem.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: subIndex * 0.1 }}
                whileHover={{ x: 8, backgroundColor: "rgba(0,51,102,0.1)" }}
              >
                <Link
                  to={subItem.path}
                  onClick={onDropdownClose}
                  className="block px-5 py-3 text-sm text-gray-700 hover:text-sheraa-primary transition-all duration-200 border-b border-gray-100/50 last:border-b-0 relative group"
                >
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-sheraa-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {subItem.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
