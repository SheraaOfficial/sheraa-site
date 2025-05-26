
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavigationItem } from './types';

interface MobileNavigationProps {
  isOpen: boolean;
  items: NavigationItem[];
  isPathActive: (path: string, subItems?: NavigationItem['subItems']) => boolean;
  onItemClick: (item: NavigationItem) => void;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  items,
  isPathActive,
  onItemClick,
  onClose
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="lg:hidden border-t border-white/20 bg-white/10 backdrop-blur-xl rounded-b-2xl"
        >
          <div className="py-6 space-y-3 px-6">
            {items.map((item, index) => {
              const isActive = isPathActive(item.path, item.subItems);
              const Icon = item.icon;
              
              return (
                <motion.div 
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <button
                    onClick={() => onItemClick(item)}
                    className={cn(
                      "w-full flex items-center justify-between px-5 py-4 rounded-xl text-sm font-medium transition-all duration-300 group",
                      isActive 
                        ? "text-white bg-gradient-to-r from-sheraa-primary to-sheraa-teal shadow-lg" 
                        : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-sheraa-primary/80 hover:to-sheraa-teal/80",
                      item.special && !isActive && "bg-gradient-to-r from-sheraa-sef-primary/20 to-sheraa-sef-secondary/20 border border-sheraa-sef-primary/30"
                    )}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className={cn(
                          "w-5 h-5",
                          item.special && !isActive && "text-sheraa-sef-primary"
                        )} />
                      </motion.div>
                      <span className={item.special && !isActive ? "font-bold bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-secondary bg-clip-text text-transparent" : ""}>
                        {item.name}
                      </span>
                      {item.special && (
                        <motion.span
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          ✨
                        </motion.span>
                      )}
                    </div>
                    {item.subItems && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  
                  {/* Mobile Sub Items */}
                  {item.subItems && isActive && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="ml-6 mt-2 space-y-1"
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <motion.div
                          key={subItem.path}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: subIndex * 0.1 }}
                        >
                          <Link
                            to={subItem.path}
                            onClick={onClose}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-sheraa-primary transition-colors duration-200 rounded-lg hover:bg-white/10"
                          >
                            {subItem.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
