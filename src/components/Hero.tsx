
import React, { useState, useEffect, useMemo, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles, Rocket, Globe } from "lucide-react";
import { TextShimmer } from "./ui/text-shimmer";
import { useTheme } from "@/contexts/ThemeContext";

// Lazy-load components that aren't needed immediately
const AnimatedGradient = lazy(() => import("./ui/animated-gradient-with-svg").then(mod => ({ default: mod.AnimatedGradient })));
const RotatingWordsWithIcons = lazy(() => import("./hero/RotatingWordsWithIcons"));

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = useMemo(() => ["Innovate", "Create", "Scale", "Transform", "Grow"], []);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  
  useEffect(() => {
    setMounted(true);
    const timeoutId = setTimeout(() => {
      setTitleIndex(prev => prev === titles.length - 1 ? 0 : prev + 1);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleIndex, titles]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sheraa-light to-[#f0f5fb] dark:from-sheraa-dark dark:to-black text-foreground py-16 md:py-24">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 right-20 w-32 h-32 bg-sheraa-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-orange/5 rounded-full blur-3xl" />
        {isDarkTheme && (
          <>
            <div className="absolute top-40 left-40 w-48 h-48 bg-sheraa-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-40 right-30 w-56 h-56 bg-sheraa-teal/5 rounded-full blur-3xl" />
          </>
        )}
      </div>
      
      {/* Main content */}
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/10 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-sheraa-orange" />
              <span className="text-sm font-medium dark:text-white">Creating the Next Wave of Entrepreneurs</span>
              <ArrowRight className="h-3 w-3 dark:text-white" />
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
                <span className="block text-sheraa-dark dark:text-white mb-2">
                  Dream to
                </span>
                <div className="h-[1.2em] relative">
                  <Suspense fallback={<div className="h-[1.2em] dark:text-white">Innovate</div>}>
                    {mounted && <RotatingWordsWithIcons words={titles} activeIndex={titleIndex} />}
                  </Suspense>
                </div>
              </h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-xl dark:text-gray-300"
              >
                Sharjah's official hub for aspiring founders and established ventures. 
                We empower changemakers to build impactful businesses and shape the future.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <GradientButton asChild size="xl" className="group relative overflow-hidden bg-sheraa-primary hover:bg-sheraa-primary/90">
                <Link to="/programs" className="flex items-center gap-2">
                  <span className="relative z-10">Launch Your Startup</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <Suspense fallback={<div className="absolute inset-0 bg-sheraa-primary"></div>}>
                    {mounted && (
                      <AnimatedGradient 
                        colors={['rgba(0, 51, 102, 0.8)', 'rgba(0, 128, 128, 0.9)']} 
                        blur="medium" 
                        className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                  </Suspense>
                </Link>
              </GradientButton>
              
              <GradientButton asChild variant="outline" size="xl" className="border-2 border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary/10">
                <Link to="/community/join" className="flex items-center gap-2">
                  Join Our Community
                  <Star className="w-4 h-4 text-sheraa-orange" />
                </Link>
              </GradientButton>
            </motion.div>
          </motion.div>
          
          {/* Enhanced hero visual element */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 rounded-full border-2 border-sheraa-primary/20 animate-spin-slow" />
                <div className="absolute inset-[10%] rounded-full border-2 border-sheraa-orange/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
                
                <div className={`absolute inset-[30%] rounded-full ${isDarkTheme ? 'bg-gradient-to-br from-sheraa-dark/80 to-black/50 border border-white/10' : 'bg-gradient-to-br from-white/80 to-sheraa-light/50'} backdrop-blur-sm flex items-center justify-center shadow-xl`}>
                  <TextShimmer className="font-bold text-3xl text-sheraa-primary">Sheraa</TextShimmer>
                </div>
                
                {/* Simplified orbiting elements with dark mode support */}
                {[0, 1, 2].map((i) => {
                  const angle = (i / 3) * Math.PI * 2;
                  const x = Math.cos(angle) * 45 + 50;
                  const y = Math.sin(angle) * 45 + 50;
                  return (
                    <motion.div
                      key={i}
                      className={`absolute w-12 h-12 rounded-full ${isDarkTheme ? 'bg-sheraa-dark/90 border border-white/10' : 'bg-white'} shadow-lg flex items-center justify-center`}
                      style={{ 
                        left: `${x}%`, 
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6 + (i * 0.1), type: "spring" }}
                    >
                      {getIconForOrbit(i)}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const getIconForOrbit = (index: number) => {
  switch(index) {
    case 0:
      return <Star className="w-6 h-6 text-sheraa-orange" />;
    case 1:
      return <Rocket className="w-6 h-6 text-sheraa-primary" />;
    case 2:
      return <Globe className="w-6 h-6 text-sheraa-teal" />;
    default:
      return <Star className="w-6 h-6 text-sheraa-orange" />;
  }
};

export default Hero;
