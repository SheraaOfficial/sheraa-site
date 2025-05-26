
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Sparkles, Users, Award, TrendingUp, Rocket, Globe, Zap } from "lucide-react";

const words = ["Innovate", "Scale", "Transform", "Disrupt", "Create"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    y: 60, 
    opacity: 0,
    scale: 0.8,
    rotateX: -15
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 1.2,
      ease: [0.165, 0.84, 0.44, 1],
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const wordVariants = {
  enter: {
    y: 100,
    opacity: 0,
    rotateX: -90,
    scale: 0.5,
    filter: "blur(10px)"
  },
  center: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.23, 1, 0.32, 1],
      type: "spring",
      stiffness: 80,
      damping: 12
    }
  },
  exit: {
    y: -100,
    opacity: 0,
    rotateX: 90,
    scale: 0.5,
    filter: "blur(10px)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1]
    }
  }
};

export const SophisticatedHeroAnimation: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.2]);
  
  const springX = useSpring(0, { stiffness: 300, damping: 30 });
  const springY = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      
      springX.set(x * 20);
      springY.set(y * 20);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [springX, springY]);

  const floatingElements = [
    { icon: Users, delay: 0, color: "sheraa-primary", size: 24 },
    { icon: Award, delay: 0.3, color: "sheraa-orange", size: 28 },
    { icon: TrendingUp, delay: 0.6, color: "sheraa-teal", size: 22 },
    { icon: Rocket, delay: 0.9, color: "sheraa-primary", size: 26 },
    { icon: Zap, delay: 1.2, color: "sheraa-orange", size: 20 },
    { icon: Globe, delay: 1.5, color: "sheraa-teal", size: 24 },
  ];

  return (
    <motion.div 
      style={{ y, opacity }}
      className="container mx-auto relative z-10 min-h-screen flex items-center perspective-1000"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-sheraa-primary/20 to-sheraa-teal/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-sheraa-orange/15 to-sheraa-primary/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Interactive floating elements */}
        {floatingElements.map((item, index) => {
          const IconComponent = item.icon;
          const angle = (index / floatingElements.length) * Math.PI * 2;
          const radius = 200 + Math.sin(index) * 50;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <motion.div
              key={index}
              className={`absolute text-${item.color}/30 dark:text-${item.color}/20`}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ 
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.3, 0.8],
                rotate: [0, 360],
                x: springX,
                y: springY,
              }}
              transition={{
                duration: 12 + index,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut",
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                x: { type: "spring", stiffness: 300, damping: 30 },
                y: { type: "spring", stiffness: 300, damping: 30 },
              }}
            >
              <IconComponent size={item.size} />
            </motion.div>
          );
        })}

        {/* Particle system */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-sheraa-primary to-sheraa-teal rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-10 text-center lg:text-left relative z-10"
        >
          {/* Enhanced Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/95 dark:bg-sheraa-dark/95 backdrop-blur-xl border border-sheraa-primary/30 shadow-2xl group hover:shadow-sheraa-primary/25 transition-all duration-500"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity },
              }}
            >
              <Sparkles className="w-5 h-5 text-sheraa-orange" />
            </motion.div>
            <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent animate-pulse">
              Creating the Next Wave of Entrepreneurs
            </span>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4 text-sheraa-primary group-hover:translate-x-2 transition-transform" />
            </motion.div>
          </motion.div>

          {/* Revolutionary Main Heading */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9]">
                <motion.span 
                  className="block bg-gradient-to-r from-sheraa-dark via-sheraa-primary to-sheraa-teal dark:from-white dark:via-sheraa-primary dark:to-sheraa-teal bg-clip-text text-transparent mb-4"
                  initial={{ 
                    backgroundPosition: "0% 50%",
                    filter: "blur(10px)",
                    scale: 0.8 
                  }}
                  animate={{ 
                    backgroundPosition: "200% 50%",
                    filter: "blur(0px)",
                    scale: 1
                  }}
                  transition={{ 
                    backgroundPosition: { duration: 8, repeat: Infinity, repeatType: "reverse" },
                    filter: { duration: 1.5, ease: "easeOut" },
                    scale: { duration: 1.5, ease: "easeOut" }
                  }}
                  style={{ backgroundSize: "400% 400%" }}
                >
                  Dream to
                </motion.span>
                
                <div className="h-[1.4em] relative perspective-1000 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWordIndex}
                      className="absolute inset-0 bg-gradient-to-r from-sheraa-orange via-sheraa-primary to-sheraa-teal bg-clip-text text-transparent origin-center font-black"
                      variants={wordVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      style={{ 
                        transformStyle: "preserve-3d",
                        backgroundSize: "300% 300%"
                      }}
                    >
                      <motion.span
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="bg-gradient-to-r from-sheraa-orange via-sheraa-primary to-sheraa-teal bg-clip-text text-transparent"
                        style={{ backgroundSize: "300% 300%" }}
                      >
                        {words[currentWordIndex]}
                      </motion.span>
                    </motion.span>
                  </AnimatePresence>
                </div>
              </h1>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 max-w-3xl leading-relaxed font-medium"
            >
              Sharjah's official hub for aspiring founders and established ventures. 
              We empower <motion.span 
                className="font-bold text-sheraa-primary"
                whileHover={{ scale: 1.1, color: "#ff6b35" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                changemakers
              </motion.span> to build 
              impactful businesses and shape the future through collaboration, innovation, and a 
              <motion.span 
                className="font-bold text-sheraa-primary"
                whileHover={{ scale: 1.1, color: "#2dd4bf" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                founder-first ethos
              </motion.span>.
            </motion.p>
          </div>

          {/* Enhanced Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{ 
                scale: 1.08,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 51, 102, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <GradientButton 
                asChild 
                size="xl" 
                className="relative overflow-hidden bg-sheraa-primary hover:bg-sheraa-primary/90 shadow-2xl transition-all duration-500 px-10 py-6 text-lg font-bold"
              >
                <Link to="/programs" className="flex items-center gap-3">
                  <span className="relative z-10">Launch Your Startup</span>
                  <motion.div
                    animate={{ 
                      x: [0, 8, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                  
                  {/* Enhanced shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    initial={{ x: "-200%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                </Link>
              </GradientButton>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild 
                size="xl" 
                variant="outline" 
                className="border-2 border-sheraa-primary/40 text-sheraa-primary hover:bg-sheraa-primary/15 dark:border-sheraa-primary/60 dark:hover:bg-sheraa-primary/25 backdrop-blur-sm group px-10 py-6 text-lg font-semibold"
              >
                <Link to="/community/join" className="flex items-center gap-3">
                  Join Our Community
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <Star className="w-5 h-5 text-sheraa-orange" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats Preview */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-12 border-t border-sheraa-primary/20"
          >
            {[
              { number: "180+", label: "Startups Supported", color: "sheraa-primary", icon: Rocket },
              { number: "$248M+", label: "Revenue Generated", color: "sheraa-orange", icon: TrendingUp },
              { number: "1,900+", label: "Jobs Created", color: "sheraa-teal", icon: Users }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index}
                  className="text-center group cursor-pointer"
                  initial={{ scale: 0, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 2 + (index * 0.15), 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 150,
                    damping: 12
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -10,
                    rotateY: 10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <motion.div
                    className="mb-3"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    <IconComponent className={`w-8 h-8 text-${stat.color} mx-auto`} />
                  </motion.div>
                  
                  <motion.div 
                    className={`text-3xl md:text-4xl font-black text-${stat.color} mb-1`}
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 2.2 + (index * 0.15) }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
        
        {/* Revolutionary Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotateY: -25 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOutCubic" }}
          className="hidden lg:flex justify-center items-center relative"
        >
          <div className="relative w-full max-w-2xl aspect-square">
            {/* Complex rotating system */}
            {[...Array(4)].map((_, i) => (
              <motion.div 
                key={i}
                className={`absolute inset-[${i * 8}%] rounded-full border-2 border-sheraa-primary/20`}
                animate={{ rotate: 360 * (i % 2 === 0 ? 1 : -1) }}
                transition={{ 
                  duration: 20 + i * 5, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{
                  borderImage: `linear-gradient(45deg, rgba(var(--sheraa-primary), 0.3), rgba(var(--sheraa-teal), 0.2), rgba(var(--sheraa-orange), 0.3)) 1`
                }}
              />
            ))}
            
            {/* Central masterpiece */}
            <motion.div 
              className="absolute inset-[30%] rounded-full bg-gradient-to-br from-white/95 via-sheraa-light/60 to-white/80 dark:from-sheraa-dark/95 dark:via-sheraa-primary/30 dark:to-sheraa-dark/80 border-2 border-sheraa-primary/20 dark:border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl"
              animate={{ 
                rotateY: [0, 15, 0, -15, 0],
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 25px 50px rgba(0, 51, 102, 0.3)",
                  "0 35px 70px rgba(0, 51, 102, 0.4)",
                  "0 25px 50px rgba(0, 51, 102, 0.3)"
                ]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <motion.div
                className="font-black text-5xl bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-orange bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "200% 50%", "0% 50%"],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  backgroundPosition: { duration: 6, repeat: Infinity },
                  scale: { duration: 4, repeat: Infinity }
                }}
                style={{ backgroundSize: "300% 300%" }}
              >
                Sheraa
              </motion.div>
            </motion.div>
            
            {/* Advanced orbiting elements */}
            {[
              { icon: Star, color: "sheraa-orange", angle: 0, radius: 45 },
              { icon: Rocket, color: "sheraa-primary", angle: 72, radius: 50 },
              { icon: Globe, color: "sheraa-teal", angle: 144, radius: 47 },
              { icon: Zap, color: "sheraa-orange", angle: 216, radius: 52 },
              { icon: Award, color: "sheraa-primary", angle: 288, radius: 48 },
            ].map((item, i) => {
              const angle = (item.angle * Math.PI) / 180;
              const x = Math.cos(angle) * item.radius + 50;
              const y = Math.sin(angle) * item.radius + 50;
              const IconComponent = item.icon;
              
              return (
                <motion.div
                  key={i}
                  className="absolute w-20 h-20 rounded-3xl bg-white/95 dark:bg-sheraa-dark/95 border-2 border-sheraa-primary/30 dark:border-white/30 shadow-2xl flex items-center justify-center backdrop-blur-xl"
                  style={{ 
                    left: `${x}%`, 
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ scale: 0, rotate: -360, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    rotate: 0,
                    opacity: 1,
                    y: [0, -15, 0],
                    rotateY: [0, 180, 360],
                  }}
                  transition={{ 
                    delay: 1.5 + (i * 0.2), 
                    type: "spring",
                    stiffness: 120,
                    damping: 15,
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3
                    },
                    rotateY: {
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.5
                    }
                  }}
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: 360,
                    boxShadow: "0 20px 40px rgba(0, 51, 102, 0.4)",
                    z: 50
                  }}
                >
                  <IconComponent className={`w-10 h-10 text-${item.color}`} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
