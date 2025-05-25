
import React from "react";
import { motion } from "framer-motion";
import { Users, Award, TrendingUp, Rocket } from "lucide-react";
import { RetroGrid } from "@/components/ui/retro-grid";
import { useTheme } from "@/contexts/ThemeContext";

export const FloatingBackground: React.FC = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const floatingIcons = [
    { icon: Users, color: "text-sheraa-primary", delay: 0 },
    { icon: Award, color: "text-sheraa-orange", delay: 0.2 },
    { icon: TrendingUp, color: "text-sheraa-teal", delay: 0.4 },
    { icon: Rocket, color: "text-sheraa-primary", delay: 0.6 },
  ];

  return (
    <>
      {/* Background with RetroGrid */}
      <div className="absolute inset-0">
        <RetroGrid className="opacity-30 dark:opacity-20" />
      </div>
      
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-sheraa-primary/20 to-sheraa-teal/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-sheraa-orange/20 to-sheraa-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        {isDarkTheme && (
          <>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-sheraa-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-tr from-sheraa-teal/10 to-blue-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          </>
        )}
      </div>
      
      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color}`}
            style={{
              left: `${20 + (index * 20)}%`,
              top: `${30 + (index * 15)}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.2, 0.8],
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 4,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <item.icon className="w-8 h-8 md:w-12 md:h-12" />
          </motion.div>
        ))}
      </div>
    </>
  );
};
