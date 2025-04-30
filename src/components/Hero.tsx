
import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import { AnimatedGradient } from "./ui/animated-gradient-with-svg";
import { TextShimmer } from "./ui/text-shimmer";
import RotatingWordsWithIcons from "./hero/RotatingWordsWithIcons";

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = useMemo(() => ["Innovate", "Create", "Scale", "Transform", "Grow"], []);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleIndex(prev => prev === titles.length - 1 ? 0 : prev + 1);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleIndex, titles]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sheraa-light to-[#f0f5fb] dark:from-sheraa-dark dark:to-black text-foreground py-16 md:py-24">
      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 right-20 w-32 h-32 bg-sheraa-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-orange/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-sheraa-teal/5 rounded-full blur-[100px]" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-sheraa-primary/20 to-transparent" />
      <div className="absolute left-1/2 top-3/4 -translate-x-1/2 w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-sheraa-orange/20 to-transparent" />
      
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
              <span className="text-sm font-medium">Creating the Next Wave of Entrepreneurs</span>
              <ArrowRight className="h-3 w-3" />
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
                <span className="block text-sheraa-dark dark:text-white mb-2">
                  Dream to
                </span>
                <div className="h-[1.2em] relative">
                  <RotatingWordsWithIcons 
                    words={titles} 
                    activeIndex={titleIndex} 
                  />
                </div>
              </h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-xl"
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
              <GradientButton asChild size="xl" className="group relative overflow-hidden">
                <Link to="/programs" className="flex items-center gap-2">
                  <span className="relative z-10">Launch Your Startup</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <AnimatedGradient 
                    colors={['rgba(0, 51, 102, 0.8)', 'rgba(0, 128, 128, 0.9)']} 
                    blur="medium" 
                    className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </GradientButton>
              
              <GradientButton asChild variant="outline" size="xl" className="border-2">
                <Link to="/community/join" className="flex items-center gap-2">
                  Join Our Community
                  <Star className="w-4 h-4 text-sheraa-orange" />
                </Link>
              </GradientButton>
            </motion.div>
          </motion.div>
          
          {/* Hero visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Main circular graphic */}
              <div className="absolute inset-0 rounded-full border-2 border-sheraa-primary/20 animate-spin-slow" />
              <div className="absolute inset-[10%] rounded-full border-2 border-sheraa-orange/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
              <div className="absolute inset-[20%] rounded-full border-2 border-sheraa-teal/20 animate-spin-slow" style={{ animationDuration: '20s' }} />
              
              {/* Center element */}
              <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-white/80 to-sheraa-light/50 dark:from-sheraa-dark/80 dark:to-black/50 backdrop-blur-sm flex items-center justify-center shadow-xl">
                <TextShimmer className="font-bold text-3xl">Sheraa</TextShimmer>
              </div>
              
              {/* Orbiting elements */}
              {[0, 1, 2, 3, 4].map((i) => {
                const angle = (i / 5) * Math.PI * 2;
                const x = Math.cos(angle) * 45 + 50;
                const y = Math.sin(angle) * 45 + 50;
                return (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 rounded-full bg-white dark:bg-sheraa-dark/90 shadow-lg flex items-center justify-center"
                    style={{ 
                      left: `${x}%`, 
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      boxShadow: '0 8px 32px rgba(0, 51, 102, 0.1)'
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
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="rgb(241, 245, 249)" 
            fillOpacity="1" 
            d="M0,96L60,85.3C120,75,240,53,360,64C480,75,600,117,720,122.7C840,128,960,96,1080,80C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            className="dark:fill-sheraa-dark"
          ></path>
        </svg>
      </div>
    </section>
  );
};

const getIconForOrbit = (index: number) => {
  switch(index) {
    case 0:
      return <Star className="w-6 h-6 text-sheraa-orange" />;
    case 1:
      return <Sparkles className="w-6 h-6 text-sheraa-primary" />;
    case 2:
      return <ArrowRight className="w-6 h-6 text-sheraa-teal" />;
    case 3:
      return <ArrowRight className="w-6 h-6 text-sheraa-coral" />;
    default:
      return <Star className="w-6 h-6 text-sheraa-orange" />;
  }
};

export default Hero;
