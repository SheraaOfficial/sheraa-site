
import React from "react";
import { motion } from "framer-motion";
import { Star, Rocket, Globe } from "lucide-react";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { useTheme } from "@/contexts/ThemeContext";

export const HeroVisual: React.FC = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="hidden lg:flex justify-center items-center relative"
    >
      <div className="relative w-full max-w-lg aspect-square">
        {/* Rotating rings */}
        <div className="absolute inset-0 rounded-full border-2 border-sheraa-primary/30 animate-spin-slow" />
        <div className="absolute inset-[5%] rounded-full border-2 border-sheraa-orange/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }} />
        <div className="absolute inset-[10%] rounded-full border border-sheraa-teal/20 animate-spin-slow" style={{ animationDuration: '25s' }} />
        
        {/* Center logo */}
        <div className={`absolute inset-[25%] rounded-full ${
          isDarkTheme 
            ? 'bg-gradient-to-br from-sheraa-dark/90 via-sheraa-primary/20 to-sheraa-dark/70 border border-white/10' 
            : 'bg-gradient-to-br from-white/90 via-sheraa-light/50 to-white/70 border border-sheraa-primary/10'
        } backdrop-blur-sm flex items-center justify-center shadow-2xl`}>
          <TextShimmer className="font-bold text-4xl">
            <span className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Sheraa
            </span>
          </TextShimmer>
        </div>
        
        {/* Orbiting elements */}
        {[
          { icon: Star, color: "sheraa-orange", angle: 0 },
          { icon: Rocket, color: "sheraa-primary", angle: 120 },
          { icon: Globe, color: "sheraa-teal", angle: 240 },
        ].map((item, i) => {
          const angle = (item.angle * Math.PI) / 180;
          const radius = 45;
          const x = Math.cos(angle) * radius + 50;
          const y = Math.sin(angle) * radius + 50;
          
          return (
            <motion.div
              key={i}
              className={`absolute w-16 h-16 rounded-full ${
                isDarkTheme 
                  ? 'bg-sheraa-dark/90 border border-white/20' 
                  : 'bg-white/90 border border-sheraa-primary/20'
              } shadow-xl flex items-center justify-center backdrop-blur-sm`}
              style={{ 
                left: `${x}%`, 
                top: `${y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: 1, 
                rotate: 0,
                y: [0, -8, 0],
              }}
              transition={{ 
                delay: 0.8 + (i * 0.2), 
                type: "spring",
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }
              }}
            >
              <item.icon className={`w-8 h-8 text-${item.color}`} />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
