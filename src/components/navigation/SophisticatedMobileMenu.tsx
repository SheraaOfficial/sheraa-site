
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { NavigationItem } from './types';
import { Calendar, ArrowRight } from 'lucide-react';

interface SophisticatedMobileMenuProps {
  navigationItems: NavigationItem[];
  isPathActive: (path: string, subItems?: NavigationItem['subItems']) => boolean;
  onClose: () => void;
}

export const SophisticatedMobileMenu: React.FC<SophisticatedMobileMenuProps> = ({
  navigationItems,
  isPathActive,
  onClose
}) => {
  const navigate = useNavigate();

  const handleItemClick = (item: NavigationItem) => {
    navigate(item.path);
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9998] lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* Menu */}
      <motion.div
        className="absolute top-20 left-4 right-4 bg-white/95 dark:bg-sheraa-dark/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden"
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <div className="py-4">
          {navigationItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => handleItemClick(item)}
              className={`w-full text-left px-6 py-4 text-lg font-medium transition-all duration-200 flex items-center gap-3 relative overflow-hidden ${
                item.special
                  ? 'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-white border-y border-orange-500/30'
                  : isPathActive(item.path, item.subItems)
                  ? 'text-sheraa-primary bg-sheraa-primary/10'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-sheraa-primary/10 hover:text-sheraa-primary'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ x: 4 }}
              style={item.special ? {
                background: 'linear-gradient(135deg, #f97316, #ef4444)',
              } : {}}
            >
              <div className="flex items-center gap-3 relative z-10">
                {item.special ? (
                  <Calendar className="w-5 h-5 text-white" />
                ) : (
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                )}
                <span className={`${item.special ? 'font-bold text-white' : ''}`}>
                  {item.name}
                </span>
                {item.special && (
                  <ArrowRight className="w-4 h-4 text-white ml-auto" />
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
