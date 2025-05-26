
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight, Sparkles } from 'lucide-react';

interface StickyJobCTAProps {
  href: string;
  text: string;
  subtext?: string;
}

export const StickyJobCTA: React.FC<StickyJobCTAProps> = ({ href, text, subtext }) => {
  return (
    <motion.div
      className="fixed bottom-6 left-6 z-[9999]"
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 3, duration: 0.6, ease: "easeOut" }}
    >
      <Link to={href}>
        <motion.div
          className="group relative bg-gradient-to-r from-sheraa-primary to-sheraa-teal text-white rounded-full shadow-2xl overflow-hidden cursor-pointer min-w-[220px]"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 25px 50px rgba(0, 51, 102, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated sparkles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-70"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${20 + i * 20}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.7,
                }}
              />
            ))}
          </div>
          
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Content */}
          <div className="relative z-10 p-5">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Briefcase className="w-5 h-5" />
              </motion.div>
              
              <div className="flex-1">
                <div className="font-bold text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  {text}
                </div>
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
            className="absolute inset-0 bg-white/5 rounded-full"
            animate={{ scale: [1, 1.05, 1], opacity: [0, 0.3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};
