
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight } from 'lucide-react';

interface StickyCornerCTAProps {
  href: string;
  text: string;
  subtext?: string;
}

export const StickyCornerCTA: React.FC<StickyCornerCTAProps> = ({ href, text, subtext }) => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[9999]"
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6, ease: "easeOut" }}
    >
      <Link to={href}>
        <motion.div
          className="group relative bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white rounded-full shadow-2xl overflow-hidden cursor-pointer"
          whileHover={{ 
            scale: 1.05, 
            rotate: 2,
            boxShadow: "0 20px 40px rgba(0, 51, 102, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ boxShadow: "0 10px 30px rgba(0, 51, 102, 0.3)" }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-sheraa-orange/20 to-sheraa-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Content */}
          <div className="relative z-10 p-4 min-w-[200px]">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-5 h-5" />
              </motion.div>
              
              <div className="flex-1">
                <div className="font-bold text-sm">{text}</div>
                {subtext && (
                  <div className="text-xs text-white/80">{subtext}</div>
                )}
              </div>
              
              <motion.div
                className="opacity-70 group-hover:opacity-100 transition-opacity"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
          
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 bg-white/10 rounded-full"
            animate={{ scale: [1, 1.1, 1], opacity: [0, 0.2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};
