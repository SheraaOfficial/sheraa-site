
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Briefcase, ArrowRight, Sparkles, Palette } from 'lucide-react';

interface CTAOption {
  href: string;
  text: string;
  subtext: string;
  icon: React.ComponentType<any>;
  gradient: string;
}

const ctaOptions: CTAOption[] = [
  {
    href: "/eligibility",
    text: "Find Your Program",
    subtext: "AI-Powered Matcher",
    icon: Zap,
    gradient: "from-sheraa-primary to-sheraa-teal"
  },
  {
    href: "/perfume",
    text: "Sharjah Perfume",
    subtext: "Signature Fragrance",
    icon: Palette,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    href: "/careers",
    text: "Join Our Team",
    subtext: "Shape the Future",
    icon: Briefcase,
    gradient: "from-sheraa-orange to-sheraa-primary"
  }
];

export const CyclingStickyCornerCTA: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ctaOptions.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentCTA = ctaOptions[currentIndex];
  const IconComponent = currentCTA.icon;

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-[9999]"
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6, ease: "easeOut" }}
    >
      <Link to={currentCTA.href}>
        <motion.div
          className={`group relative bg-gradient-to-r ${currentCTA.gradient} text-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer`}
          whileHover={{ 
            scale: 1.05, 
            rotate: 1,
            boxShadow: "0 20px 40px rgba(0, 51, 102, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ boxShadow: "0 10px 30px rgba(0, 51, 102, 0.3)" }}
          layout
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Content */}
          <div className="relative z-10 p-4 min-w-[220px] max-w-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.div>
                
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm truncate">{currentCTA.text}</div>
                  <div className="text-xs text-white/80 truncate">{currentCTA.subtext}</div>
                </div>
                
                <motion.div
                  className="opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Progress indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <motion.div
              className="h-full bg-white/60"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              key={currentIndex}
            />
          </div>
          
          {/* Floating particles */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full"
              style={{
                left: `${20 + i * 25}%`,
                top: `${15 + i * 20}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </motion.div>
      </Link>
    </motion.div>
  );
};
