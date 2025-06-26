
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Rocket, Globe, Star } from "lucide-react";
import { TextShimmer } from "../ui/text-shimmer";

const EnhancedHero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Innovate", "Create", "Scale", "Transform", "Grow"];
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex(prev => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-sheraa-light/10 to-sheraa-teal/5 dark:from-sheraa-dark dark:to-black">
      {/* Subtle Pattern Animation Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated geometric patterns */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-sheraa-primary/10 rotate-45"
          animate={{ 
            rotate: [45, 135, 45],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-sheraa-teal/10"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity },
            opacity: { duration: 6, repeat: Infinity }
          }}
        />

        {/* Subtle floating particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-sheraa-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-sheraa-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-orange/3 rounded-full blur-3xl" />
      </div>
      
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto relative z-10 min-h-screen flex items-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Removed "Sharjah's #1" tag as requested */}
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
                  Transform Ideas Into
                </span>
                <div className="h-[1.2em] relative">
                  <motion.span
                    key={titleIndex}
                    className="absolute inset-0 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent font-extrabold"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {titles[titleIndex]}
                  </motion.span>
                </div>
                <span className="block text-sheraa-dark dark:text-white">
                  Successful Ventures
                </span>
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
              <Button asChild size="xl" className="bg-sheraa-primary hover:bg-sheraa-primary/90 group">
                <Link to="/programs" className="flex items-center gap-2">
                  <span>Launch Your Startup</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              
              {/* Find My Program Button - Excel Integration */}
              <Button asChild variant="outline" size="xl" className="border-2 border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary/10">
                <Link to="/eligibility" className="flex items-center gap-2">
                  Find My Program
                  <Star className="w-4 h-4 text-sheraa-orange" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Enhanced hero visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-full border-2 border-sheraa-primary/20 animate-spin-slow" />
              <div className="absolute inset-[10%] rounded-full border-2 border-sheraa-orange/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
              
              <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-white/80 to-sheraa-light/50 dark:from-sheraa-dark/80 dark:to-black/50 backdrop-blur-sm flex items-center justify-center shadow-xl">
                <TextShimmer className="font-bold text-3xl text-sheraa-primary">Sheraa</TextShimmer>
              </div>
              
              {[0, 1, 2].map((i) => {
                const angle = (i / 3) * Math.PI * 2;
                const x = Math.cos(angle) * 45 + 50;
                const y = Math.sin(angle) * 45 + 50;
                const icons = [Star, Rocket, Globe];
                const Icon = icons[i];
                return (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 rounded-full bg-white dark:bg-sheraa-dark/90 shadow-lg flex items-center justify-center"
                    style={{ 
                      left: `${x}%`, 
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + (i * 0.1), type: "spring" }}
                  >
                    <Icon className="w-6 h-6 text-sheraa-primary" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedHero;
