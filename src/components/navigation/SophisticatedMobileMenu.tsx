
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { NavigationItem } from './types';
import { Star, Sparkles } from 'lucide-react';

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
                  ? 'bg-gradient-to-r from-sheraa-sef-primary/20 to-sheraa-sef-secondary/20 text-white border-y border-sheraa-sef-primary/30 shadow-lg'
                  : isPathActive(item.path, item.subItems)
                  ? 'text-sheraa-primary bg-sheraa-primary/10'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-sheraa-primary/10 hover:text-sheraa-primary'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ x: 4 }}
              style={item.special ? {
                background: 'linear-gradient(135deg, #9b87f5, #D6BCFA, #F97316)',
              } : {}}
            >
              {item.special && (
                <>
                  {/* Shimmer effect for SEF */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-xs"
                        initial={{
                          x: `${20 + i * 30}%`,
                          y: `${20 + i * 20}%`,
                          opacity: 0.7,
                        }}
                        animate={{
                          y: [`${20 + i * 20}%`, `${30 + i * 20}%`, `${20 + i * 20}%`],
                          opacity: [0.7, 1, 0.7],
                          scale: [0.8, 1.1, 0.8],
                        }}
                        transition={{
                          duration: 2 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3
                        }}
                      >
                        {i % 2 === 0 ? '✨' : '⭐'}
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
              
              <div className="flex items-center gap-3 relative z-10">
                {item.special ? (
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-5 h-5 fill-current text-white" />
                  </motion.div>
                ) : (
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                )}
                <span className={`${item.special ? 'font-extrabold text-white drop-shadow-sm' : ''}`}>
                  {item.name}
                </span>
                {item.special && (
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                  </motion.div>
                )}
              </div>
              
              {item.special && (
                <div className="absolute top-2 right-2">
                  <motion.span
                    className="text-xs text-white"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🎪
                  </motion.span>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
