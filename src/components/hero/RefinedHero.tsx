
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Sparkles, 
  Star, 
  Rocket, 
  Users,
  TrendingUp,
  Globe,
  LogIn,
  UserPlus
} from "lucide-react";

const morphingShapes = [
  "M50,10 L90,50 L50,90 L10,50 Z", // Diamond
  "M50,5 C80,5 95,20 95,50 C95,80 80,95 50,95 C20,95 5,80 5,50 C5,20 20,5 50,5 Z", // Circle
  "M20,20 L80,20 L80,80 L20,80 Z", // Square
  "M50,10 L80,40 L65,80 L35,80 L20,40 Z", // Pentagon
];

const rotatingWords = ["Innovate", "Create", "Scale", "Transform", "Grow"];

export const RefinedHero: React.FC = () => {
  const [shapeIndex, setShapeIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const shapeInterval = setInterval(() => {
      setShapeIndex((prev) => (prev + 1) % morphingShapes.length);
    }, 4000);
    
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => {
      clearInterval(shapeInterval);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950 flex items-center justify-center pt-20 md:pt-24">
      {/* Enhanced Cinematic Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0,51,102,0.15) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(0,128,128,0.1) 2px, transparent 2px),
              linear-gradient(rgba(255,102,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,51,102,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px, 80px 80px, 40px 40px, 60px 60px',
          }}
          animate={{
            x: [0, 100],
            y: [0, 100],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `linear-gradient(135deg, ${
                i % 3 === 0 ? '#003366' : i % 3 === 1 ? '#008080' : '#FF6600'
              }, ${
                i % 3 === 0 ? '#0066CC' : i % 3 === 1 ? '#00CCCC' : '#FF9933'
              })`,
              width: Math.random() * 8 + 3,
              height: Math.random() * 8 + 3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 0.9, 0],
              scale: [0.3, 1.4, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              delay: Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Enhanced Dynamic Morphing Shape */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="800" height="800" className="opacity-10 dark:opacity-5">
          <motion.path
            d={morphingShapes[shapeIndex]}
            fill="url(#enhancedGradient)"
            initial={false}
            animate={{ d: morphingShapes[shapeIndex] }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="enhancedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#003366" stopOpacity="0.4" />
              <stop offset="33%" stopColor="#008080" stopOpacity="0.3" />
              <stop offset="66%" stopColor="#0066CC" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FF6600" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-white/20 to-blue-50/30 dark:from-white/10 dark:to-blue-950/30 backdrop-blur-xl border border-sheraa-primary/30 dark:border-sheraa-primary/40 mb-6 md:mb-8 shadow-xl"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.3, 1],
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity },
              }}
            >
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-sheraa-orange" />
            </motion.div>
            <span className="text-gray-800 dark:text-white font-bold text-base md:text-lg">Creating the Next Wave of Entrepreneurs</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-sheraa-orange" />
          </motion.div>

          {/* Enhanced Main Title */}
          <div className="mb-8 md:mb-12">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6 md:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.2 }}
            >
              <motion.div
                className="block text-gray-900 dark:text-white mb-2 md:mb-4"
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                Dream to
              </motion.div>
              
              {/* Enhanced Rotating Word */}
              <div className="relative h-16 md:h-20 lg:h-24 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={wordIndex}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ 
                      opacity: 0, 
                      rotateX: 90,
                      scale: 0.5,
                    }}
                    animate={{ 
                      opacity: 1, 
                      rotateX: 0,
                      scale: 1,
                    }}
                    exit={{ 
                      opacity: 0, 
                      rotateX: -90,
                      scale: 0.5,
                    }}
                    transition={{ 
                      duration: 1, 
                      ease: "easeOut",
                    }}
                  >
                    <span className="bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-orange bg-clip-text text-transparent font-black tracking-tight">
                      {rotatingWords[wordIndex]}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.h1>

            {/* Enhanced Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed mb-8 md:mb-12 px-4"
            >
              Sharjah's official hub for aspiring founders and established ventures. 
              We empower <motion.span 
                className="text-sheraa-primary dark:text-sheraa-teal font-bold"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(0, 51, 102, 0.5)",
                    "0 0 40px rgba(0, 128, 128, 0.8)",
                    "0 0 20px rgba(0, 51, 102, 0.5)",
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                changemakers
              </motion.span> to build impactful businesses and shape the future.
            </motion.p>
          </div>

          {/* Enhanced Single Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex flex-col items-center gap-6 md:gap-8 mb-12 md:mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <GradientButton asChild size="xl" className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal hover:from-sheraa-primary hover:to-sheraa-teal text-white px-12 md:px-16 py-6 md:py-8 text-xl md:text-2xl font-bold shadow-2xl relative overflow-hidden group">
                <Link to="/programs" className="flex items-center gap-3 md:gap-4">
                  <span className="relative z-10">Launch Your Startup</span>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </Link>
              </GradientButton>
            </motion.div>
            
            {/* Enhanced Secondary Actions Row */}
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="secondary" size="lg" className="bg-white/20 dark:bg-white/10 text-gray-800 dark:text-white border border-gray-300/30 dark:border-white/30 hover:bg-white/30 dark:hover:bg-white/20 backdrop-blur-sm px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-medium">
                  <Link to="/auth/login" className="flex items-center gap-2">
                    <LogIn className="w-4 h-4 md:w-5 md:h-5" />
                    Login
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="outline" size="lg" className="border-2 border-sheraa-primary/50 dark:border-sheraa-teal/50 text-sheraa-primary dark:text-sheraa-teal hover:bg-sheraa-primary/10 dark:hover:bg-sheraa-teal/10 backdrop-blur-sm px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-medium">
                  <Link to="/auth/signup" className="flex items-center gap-2">
                    <UserPlus className="w-4 h-4 md:w-5 md:h-5" />
                    Sign Up
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
          >
            {[
              { number: "180+", label: "Startups", icon: Rocket },
              { number: "$248M", label: "Revenue", icon: TrendingUp },
              { number: "1,900+", label: "Jobs", icon: Users }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 2.7 + (index * 0.2), 
                    duration: 0.8,
                    type: "spring",
                    bounce: 0.4
                  }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/20 to-blue-50/30 dark:from-white/10 dark:to-blue-950/30 backdrop-blur-xl mb-3 md:mb-4 border border-sheraa-primary/20 dark:border-sheraa-teal/20"
                    animate={{
                      boxShadow: [
                        "0 0 30px rgba(0, 51, 102, 0.3)",
                        "0 0 50px rgba(0, 128, 128, 0.6)",
                        "0 0 30px rgba(0, 51, 102, 0.3)",
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.8
                    }}
                  >
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-sheraa-primary dark:text-sheraa-teal" />
                  </motion.div>
                  
                  <motion.div 
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-400 text-base md:text-lg font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 text-center"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.8, 0.3, 0.8]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex flex-col items-center space-y-3 md:space-y-4">
          <span className="text-gray-600 dark:text-gray-300 text-base md:text-lg font-medium">Scroll to explore</span>
          <div className="w-6 h-12 md:w-8 md:h-16 border-2 border-sheraa-primary/50 dark:border-sheraa-teal/50 rounded-full flex justify-center p-2 md:p-3">
            <motion.div 
              className="w-1.5 h-3 md:w-2 md:h-4 bg-gradient-to-b from-sheraa-primary to-sheraa-teal rounded-full" 
              animate={{ y: [0, 20, 0] }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
