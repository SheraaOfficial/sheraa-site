
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle, Play, Star, Globe, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const floatingWords = [
  "Innovate", "Create", "Scale", "Transform", "Disrupt", "Build", "Launch", "Grow"
];

const stats = [
  { number: "180+", label: "Startups Funded", icon: Rocket },
  { number: "$248M", label: "Revenue Generated", icon: Globe },
  { number: "1,900+", label: "Jobs Created", icon: Star }
];

export const SophisticatedHero: React.FC = () => {
  const { scrollY } = useScroll();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % floatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 dark:from-sheraa-dark dark:to-black flex items-center">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-sheraa-primary/20 to-sheraa-teal/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-sheraa-orange/15 to-sheraa-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Interactive particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-sheraa-primary to-sheraa-teal rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) * (0.01 + i * 0.001),
              y: (mousePosition.y - window.innerHeight / 2) * (0.01 + i * 0.001),
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              x: { duration: 0.3 },
              y: { duration: 0.3 },
              opacity: { duration: 3, repeat: Infinity },
              scale: { duration: 2, repeat: Infinity },
            }}
          />
        ))}
        
        {/* Geometric patterns */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-32 h-32 border-2 border-sheraa-primary/20 rotate-45"
          animate={{ rotate: [45, 135, 45] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-sheraa-teal/30"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity },
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 dark:bg-sheraa-dark/90 rounded-full border border-sheraa-primary/20 shadow-lg backdrop-blur-sm group hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5 text-sheraa-primary" />
                </motion.div>
                <span className="text-sm font-semibold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                  Sharjah's Premier Innovation Hub
                </span>
                <ArrowRight className="w-4 h-4 text-sheraa-primary group-hover:translate-x-1 transition-transform" />
              </motion.div>

              {/* Main Title */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 1 }}
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <motion.span 
                      className="block text-gray-900 dark:text-white mb-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      Transform Ideas Into
                    </motion.span>
                    
                    <div className="relative h-24 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentWordIndex}
                          className="absolute inset-0 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent font-extrabold"
                          initial={{ y: 100, opacity: 0, rotateX: -90 }}
                          animate={{ y: 0, opacity: 1, rotateX: 0 }}
                          exit={{ y: -100, opacity: 0, rotateX: 90 }}
                          transition={{ duration: 0.8, ease: "easeOutCubic" }}
                        >
                          {floatingWords[currentWordIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                    
                    <motion.span 
                      className="block text-gray-900 dark:text-white"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      Successful Ventures
                    </motion.span>
                  </h1>
                </motion.div>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
                >
                  Join Sharjah's most dynamic entrepreneurship ecosystem. From first spark to global impact, 
                  we provide the funding, mentorship, and connections you need.
                </motion.p>
              </div>

              {/* Value Props */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="grid md:grid-cols-3 gap-4"
              >
                {[
                  "Equity-free funding",
                  "Expert mentorship", 
                  "Global market access"
                ].map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white/60 dark:bg-sheraa-dark/60 rounded-xl border border-gray-200/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + (index * 0.1), duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <CheckCircle className="w-5 h-5 text-sheraa-primary flex-shrink-0" />
                    <span className="font-medium text-gray-800 dark:text-gray-200">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild size="lg" className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal hover:from-sheraa-primary/90 hover:to-sheraa-teal/90 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                    <Link to="/programs" className="flex items-center gap-2">
                      <span className="relative z-10">Start Your Journey</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    <Link to="/community/startups" className="flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Success Stories
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOutCubic" }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Central logo with sophisticated effects */}
                <motion.div
                  className="relative bg-gradient-to-br from-white/90 to-gray-100/50 dark:from-sheraa-dark/90 dark:to-black/50 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-gray-200/50"
                  animate={{ 
                    rotateY: [0, 5, 0],
                    rotateX: [0, 2, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.img
                    src="/lovable-uploads/sheraa-logo.png"
                    alt="Sheraa"
                    className="w-32 h-auto mx-auto drop-shadow-2xl"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  {/* Orbiting elements */}
                  {[0, 1, 2].map((i) => {
                    const angle = (i / 3) * Math.PI * 2;
                    const radius = 120;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const icons = [Star, Globe, Rocket];
                    const Icon = icons[i];
                    
                    return (
                      <motion.div
                        key={i}
                        className="absolute w-16 h-16 rounded-2xl bg-gradient-to-br from-white/90 to-gray-100/50 shadow-xl flex items-center justify-center backdrop-blur-sm border border-gray-200/50"
                        style={{ 
                          left: `calc(50% + ${x}px)`, 
                          top: `calc(50% + ${y}px)`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                          scale: { duration: 3, repeat: Infinity, delay: i * 0.5 }
                        }}
                        whileHover={{ scale: 1.2, z: 10 }}
                      >
                        <Icon className="w-8 h-8 text-sheraa-primary" />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 pt-20 mt-20 border-t border-gray-200/50 dark:border-gray-700/50"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 + (index * 0.1), duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-sheraa-primary/10 to-sheraa-teal/10 mb-4 group-hover:from-sheraa-primary/20 group-hover:to-sheraa-teal/20 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-sheraa-primary" />
                  </motion.div>
                  
                  <motion.div 
                    className="text-4xl font-bold text-sheraa-primary mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.4 + (index * 0.1), duration: 0.5, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Sophisticated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.7, 0.3, 0.7]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
          <div className="w-6 h-12 border-2 border-sheraa-primary/40 rounded-full flex justify-center p-2">
            <motion.div 
              className="w-1.5 h-3 bg-gradient-to-b from-sheraa-primary to-sheraa-teal rounded-full" 
              animate={{ y: [0, 16, 0] }}
              transition={{ 
                duration: 3,
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
