
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Sparkles, Users, Award, TrendingUp, Rocket, Globe } from "lucide-react";

const words = ["Innovate", "Scale", "Transform", "Disrupt", "Create"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    y: 30, 
    opacity: 0,
    scale: 0.95
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const wordVariants = {
  enter: {
    y: 60,
    opacity: 0,
    rotateX: -90,
    scale: 0.8
  },
  center: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: {
    y: -60,
    opacity: 0,
    rotateX: 90,
    scale: 0.8,
    transition: {
      duration: 0.6,
      ease: [0.55, 0.085, 0.68, 0.53]
    }
  }
};

export const SophisticatedHeroAnimation: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const floatingIcons = [
    { icon: Users, delay: 0, x: 15, y: 20 },
    { icon: Award, delay: 0.5, x: 75, y: 15 },
    { icon: TrendingUp, delay: 1, x: 25, y: 70 },
    { icon: Rocket, delay: 1.5, x: 80, y: 75 },
  ];

  return (
    <motion.div 
      style={{ y, opacity }}
      className="container mx-auto relative z-10 min-h-screen flex items-center"
    >
      {/* Floating background icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              className="absolute text-sheraa-primary/20 dark:text-sheraa-primary/10"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.2, 0.4, 0.2],
                scale: [0.8, 1.2, 0.8],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <IconComponent className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-8 text-center lg:text-left relative z-10"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border border-sheraa-primary/20 shadow-lg group hover:shadow-xl transition-all duration-300"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-sheraa-orange" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Creating the Next Wave of Entrepreneurs
            </span>
            <ArrowRight className="w-3 h-3 text-sheraa-primary group-hover:translate-x-1 transition-transform" />
          </motion.div>

          {/* Main heading with sophisticated word animation */}
          <div className="space-y-4">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <motion.span 
                  className="block bg-gradient-to-r from-sheraa-dark via-sheraa-primary to-sheraa-teal dark:from-white dark:via-sheraa-primary dark:to-sheraa-teal bg-clip-text text-transparent mb-2"
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Dream to
                </motion.span>
                
                <div className="h-[1.2em] relative perspective-1000">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWordIndex}
                      className="absolute inset-0 bg-gradient-to-r from-sheraa-orange via-sheraa-primary to-sheraa-teal bg-clip-text text-transparent origin-center"
                      variants={wordVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      style={{ 
                        transformStyle: "preserve-3d",
                        backgroundSize: "200% 200%"
                      }}
                    >
                      {words[currentWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </h1>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed"
            >
              Sharjah's official hub for aspiring founders and established ventures. 
              We empower <span className="font-semibold text-sheraa-primary">changemakers</span> to build 
              impactful businesses and shape the future through collaboration, innovation, and a 
              <span className="font-semibold text-sheraa-primary"> founder-first ethos</span>.
            </motion.p>
          </div>

          {/* Action buttons with enhanced animations */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 51, 102, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <GradientButton 
                asChild 
                size="xl" 
                className="group relative overflow-hidden bg-sheraa-primary hover:bg-sheraa-primary/90 shadow-2xl transition-all duration-300"
              >
                <Link to="/programs" className="flex items-center gap-2">
                  <span className="relative z-10">Launch Your Startup</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </Link>
              </GradientButton>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild 
                size="xl" 
                variant="outline" 
                className="border-2 border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10 dark:border-sheraa-primary/50 dark:hover:bg-sheraa-primary/20 backdrop-blur-sm group"
              >
                <Link to="/community/join" className="flex items-center gap-2">
                  Join Our Community
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-4 h-4 text-sheraa-orange" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats preview with staggered animation */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 pt-8 border-t border-sheraa-primary/20"
          >
            {[
              { number: "180+", label: "Startups Supported", color: "sheraa-primary" },
              { number: "$248M+", label: "Revenue Generated", color: "sheraa-orange" },
              { number: "1,900+", label: "Jobs Created", color: "sheraa-teal" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: 1.5 + (index * 0.2), 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <motion.div 
                  className={`text-2xl md:text-3xl font-bold text-${stat.color}`}
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1.7 + (index * 0.2) }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Enhanced visual element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOutCubic" }}
          className="hidden lg:flex justify-center items-center relative"
        >
          <div className="relative w-full max-w-lg aspect-square">
            {/* Complex rotating rings */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-sheraa-primary/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-[5%] rounded-full border-2 border-sheraa-orange/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-[10%] rounded-full border border-sheraa-teal/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Center logo with sophisticated effects */}
            <motion.div 
              className="absolute inset-[25%] rounded-full bg-gradient-to-br from-white/90 via-sheraa-light/50 to-white/70 dark:from-sheraa-dark/90 dark:via-sheraa-primary/20 dark:to-sheraa-dark/70 border border-sheraa-primary/10 dark:border-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl"
              animate={{ 
                rotateY: [0, 5, 0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="font-bold text-4xl bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Sheraa
              </motion.div>
            </motion.div>
            
            {/* Orbiting elements with enhanced animations */}
            {[
              { icon: Star, color: "sheraa-orange", angle: 0 },
              { icon: Rocket, color: "sheraa-primary", angle: 120 },
              { icon: Globe, color: "sheraa-teal", angle: 240 },
            ].map((item, i) => {
              const angle = (item.angle * Math.PI) / 180;
              const radius = 45;
              const x = Math.cos(angle) * radius + 50;
              const y = Math.sin(angle) * radius + 50;
              const IconComponent = item.icon;
              
              return (
                <motion.div
                  key={i}
                  className="absolute w-16 h-16 rounded-2xl bg-white/90 dark:bg-sheraa-dark/90 border border-sheraa-primary/20 dark:border-white/20 shadow-xl flex items-center justify-center backdrop-blur-sm"
                  style={{ 
                    left: `${x}%`, 
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ 
                    scale: 1, 
                    rotate: 0,
                    y: [0, -12, 0],
                  }}
                  transition={{ 
                    delay: 1 + (i * 0.3), 
                    type: "spring",
                    stiffness: 100,
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: "0 15px 30px rgba(0, 51, 102, 0.3)"
                  }}
                >
                  <IconComponent className={`w-8 h-8 text-${item.color}`} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
