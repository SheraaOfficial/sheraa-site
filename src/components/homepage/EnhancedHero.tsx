
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Sparkles, Rocket, Globe, Users, Award, TrendingUp } from "lucide-react";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { useTheme } from "next-themes";
import { RetroGrid } from "@/components/ui/retro-grid";

const EnhancedHero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Innovate", "Create", "Scale", "Transform", "Grow"];
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTitleIndex(prev => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const floatingIcons = [
    { icon: Users, color: "text-sheraa-primary", delay: 0 },
    { icon: Award, color: "text-sheraa-orange", delay: 0.2 },
    { icon: TrendingUp, color: "text-sheraa-teal", delay: 0.4 },
    { icon: Rocket, color: "text-sheraa-primary", delay: 0.6 },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-sheraa-light/30 to-sheraa-light/50 dark:from-sheraa-dark dark:via-sheraa-dark/80 dark:to-black">
      {/* Enhanced background with RetroGrid */}
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
      
      {/* Main content */}
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto relative z-10 min-h-screen flex items-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border border-sheraa-primary/20 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-sheraa-orange animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                Creating the Next Wave of Entrepreneurs
              </span>
              <ArrowRight className="h-3 w-3 text-sheraa-primary" />
            </motion.div>

            {/* Main heading */}
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="block bg-gradient-to-r from-sheraa-dark via-sheraa-primary to-sheraa-teal dark:from-white dark:via-sheraa-primary dark:to-sheraa-teal bg-clip-text text-transparent mb-2">
                  Dream to
                </span>
                <div className="h-[1.2em] relative">
                  {mounted && (
                    <motion.span
                      key={titleIndex}
                      className="absolute inset-0 bg-gradient-to-r from-sheraa-orange via-sheraa-primary to-sheraa-teal bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: -50, rotateX: 90 }}
                      transition={{ duration: 0.6, ease: "easeOutCubic" }}
                    >
                      {titles[titleIndex]}
                    </motion.span>
                  )}
                </div>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed"
              >
                Sharjah's official hub for aspiring founders and established ventures. 
                We empower <span className="font-semibold text-sheraa-primary">changemakers</span> to build 
                impactful businesses and shape the future.
              </motion.p>
            </div>

            {/* Action buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <GradientButton 
                asChild 
                size="xl" 
                className="group relative overflow-hidden bg-sheraa-primary hover:bg-sheraa-primary/90 shadow-2xl hover:shadow-sheraa-primary/25 transition-all duration-300"
              >
                <Link to="/programs" className="flex items-center gap-2">
                  <span className="relative z-10">Launch Your Startup</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </Link>
              </GradientButton>
              
              <Button 
                asChild 
                size="xl" 
                variant="outline" 
                className="border-2 border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10 dark:border-sheraa-primary/50 dark:hover:bg-sheraa-primary/20 backdrop-blur-sm"
              >
                <Link to="/community/join" className="flex items-center gap-2">
                  Join Our Community
                  <Star className="w-4 h-4 text-sheraa-orange" />
                </Link>
              </Button>
            </motion.div>

            {/* Stats preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-sheraa-primary/20"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-sheraa-primary">180+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Startups Supported</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-sheraa-orange">$248M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-sheraa-teal">1,900+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Jobs Created</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced visual element */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:flex justify-center items-center relative"
            >
              <div className="relative w-full max-w-lg aspect-square">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full border-2 border-sheraa-primary/30 animate-spin-slow" />
                <div className="absolute inset-[5%] rounded-full border-2 border-sheraa-orange/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }} />
                <div className="absolute inset-[10%] rounded-full border border-sheraa-teal/20 animate-spin-slow" style={{ animationDuration: '25s' }} />
                
                {/* Center element */}
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
          )}
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20" 
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.7, 0.3, 0.7]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-sheraa-primary/40 dark:border-sheraa-primary/60 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div 
            className="w-1.5 h-1.5 bg-sheraa-primary rounded-full mt-2" 
            animate={{ 
              y: [0, 14, 0] 
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedHero;
