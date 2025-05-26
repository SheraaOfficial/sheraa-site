
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
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
  const Icon = item.icon;
  const isSEF = item.special;

  return (
    <div className="relative group">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Link
          to={item.path}
          className={cn(
            "flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 relative overflow-hidden",
            isActive
              ? "text-white shadow-lg"
              : "text-gray-700 hover:text-sheraa-primary",
            isSEF && "bg-gradient-to-r from-sheraa-sef-primary/10 to-sheraa-sef-secondary/10"
          )}
        >
          {/* Enhanced active background */}
          {isActive && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-sheraa-primary to-sheraa-teal"
              layoutId="activeBackground"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          
          {/* Enhanced hover effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-sheraa-primary/10 to-sheraa-teal/10 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          
          <motion.div
            className={cn(
              "relative z-10 transition-all duration-300",
              isSEF && "text-sheraa-sef-primary"
            )}
            whileHover={{ scale: 1.1, rotate: isSEF ? 360 : 0 }}
            transition={{ duration: isSEF ? 0.6 : 0.2 }}
          >
            <Icon className="h-5 w-5" />
          </motion.div>
          
          <span
            className={cn(
              "relative z-10 transition-all duration-300",
              isSEF && "font-bold bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-secondary bg-clip-text text-transparent"
            )}
          >
            {item.name}
          </span>
          
          {item.subItems && (
            <ChevronDown className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:rotate-180" />
          )}
          
          {isSEF && (
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <Sparkles className="h-4 w-4" />
            </motion.div>
          )}
        </Link>
      </motion.div>

      {/* Enhanced Dropdown */}
      <AnimatePresence>
        {item.subItems && activeDropdown === item.name && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white/98 backdrop-blur-3xl border border-gray-200/60 shadow-2xl rounded-2xl overflow-hidden min-w-80 z-[9999]"
            style={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)"
            }}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
          >
            <div className="p-2">
              {item.subItems.map((subItem, subIndex) => (
                <motion.div
                  key={subItem.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: subIndex * 0.05 }}
                >
                  <Link
                    to={subItem.path}
                    className="block p-4 rounded-xl hover:bg-gradient-to-r hover:from-sheraa-primary/10 hover:to-sheraa-teal/10 transition-all duration-300 group"
                  >
                    <div className="font-medium text-gray-900 group-hover:text-sheraa-primary transition-colors">
                      {subItem.name}
                    </div>
                    {subItem.description && (
                      <div className="text-sm text-gray-500 mt-1">
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
