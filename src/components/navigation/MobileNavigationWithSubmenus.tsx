
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { NavigationItem } from './types';
import { cn } from '@/lib/utils';

interface MobileNavigationWithSubmenusProps {
  isOpen: boolean;
  items: NavigationItem[];
  isPathActive: (path: string, subItems?: NavigationItem['subItems']) => boolean;
  onItemClick: (item: NavigationItem) => void;
  onClose: () => void;
}

export const MobileNavigationWithSubmenus: React.FC<MobileNavigationWithSubmenusProps> = ({
  isOpen,
  items,
  isPathActive,
  onClose
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const handleItemClick = (item: NavigationItem) => {
    if (item.subItems && item.subItems.length > 0) {
      toggleExpanded(item.name);
    } else {
      onClose();
    }
  };

  const handleSubItemClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-sheraa-dark/95 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/50 shadow-xl rounded-b-2xl overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 max-h-96 overflow-y-auto">
            {items.map((item, index) => (
              <div key={item.name} className="px-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {item.special ? (
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="flex items-center gap-3 py-3 px-4 rounded-xl bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white font-bold text-lg shadow-lg my-2"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => handleItemClick(item)}
                        className={cn(
                          "flex items-center justify-between w-full py-3 text-left transition-colors duration-200",
                          isPathActive(item.path, item.subItems)
                            ? 'text-sheraa-primary font-semibold'
                            : 'text-gray-700 dark:text-gray-200 hover:text-sheraa-primary'
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="w-5 h-5" />
                          <span className="text-lg">{item.name}</span>
                        </div>
                        {item.subItems && item.subItems.length > 0 && (
                          <motion.div
                            animate={{ 
                              rotate: expandedItems.includes(item.name) ? 180 : 0 
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {item.subItems && expandedItems.includes(item.name) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-8 pb-2">
                              {item.subItems.map((subItem, subIndex) => (
                                <motion.div
                                  key={subItem.path}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 * subIndex }}
                                >
                                  <Link
                                    to={subItem.path}
                                    onClick={handleSubItemClick}
                                    className={cn(
                                      "flex items-center gap-2 py-2 text-base transition-colors duration-200",
                                      location.pathname === subItem.path
                                        ? 'text-sheraa-primary font-medium'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-sheraa-primary'
                                    )}
                                  >
                                    <ChevronRight className="w-3 h-3" />
                                    <span>{subItem.name}</span>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </motion.div>
                {index < items.length - 1 && (
                  <div className="border-b border-gray-200/30 dark:border-gray-700/30 my-1" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
