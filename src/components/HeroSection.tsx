
import React, { useEffect, useState } from "react";
import { RetroGrid } from "@/components/ui/retro-grid";
import { FloatingHero } from "@/components/hero/FloatingHero";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export function HeroSection() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-inherit"
    >
      {/* Enhanced background elements */}
      <RetroGrid fadeDirection="bottom" fadeSize="lg" className="opacity-60" />
      
      <div 
        className="absolute inset-0 -z-10 size-full"
        style={{
          background: isDarkMode 
            ? `radial-gradient(125% 125% at 50% 10%, transparent 40%, var(--background) 100%), 
               linear-gradient(180deg, rgba(77, 26, 127, 0.15) 0%, rgba(142, 45, 226, 0.05) 100%)`
            : `radial-gradient(125% 125% at 50% 10%, transparent 40%, var(--background) 100%), 
               linear-gradient(180deg, rgba(235, 225, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)`
        }} 
      />
      
      {/* Animated particles for immersive effect */}
      <div className="absolute inset-0 -z-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${isDarkMode ? 'bg-white' : 'bg-sheraa-primary'}`}
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              opacity: [Math.random() * 0.3 + 0.1, Math.random() * 0.5 + 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Immersive glow effects */}
      <div 
        className="absolute left-[10%] top-[20%] w-64 h-64 rounded-full blur-[80px]" 
        style={{ 
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(120, 58, 180, 0.2) 0%, rgba(29, 7, 58, 0.05) 70%)' 
            : 'radial-gradient(circle, rgba(190, 173, 250, 0.3) 0%, rgba(233, 226, 255, 0.05) 70%)',
          transform: `translateY(${scrollPosition * 0.2}px)` 
        }}
      />
      
      <div 
        className="absolute right-[15%] bottom-[20%] w-80 h-80 rounded-full blur-[90px]" 
        style={{ 
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(79, 26, 204, 0.15) 0%, rgba(16, 6, 54, 0.05) 70%)' 
            : 'radial-gradient(circle, rgba(216, 204, 255, 0.25) 0%, rgba(245, 242, 255, 0.05) 70%)',
          transform: `translateY(${-scrollPosition * 0.1}px)` 
        }}
      />
      
      {/* Main hero content */}
      <FloatingHero />
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2" 
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.8, 0.4, 0.8]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop" 
        }}
      >
        <div className="w-6 h-10 border-2 border-sheraa-primary/30 dark:border-sheraa-primary/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-1.5 bg-sheraa-primary rounded-full mt-2" 
            animate={{ 
              y: [0, 12, 0] 
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop" 
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
