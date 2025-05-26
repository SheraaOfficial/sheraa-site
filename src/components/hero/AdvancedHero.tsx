
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Sparkles, 
  Star, 
  Rocket, 
  Globe,
  Zap,
  TrendingUp,
  Users,
  Award,
  Lightbulb,
  LogIn,
  UserPlus
} from "lucide-react";

const morphingShapes = [
  "M50,10 L90,50 L50,90 L10,50 Z", // Diamond
  "M50,5 C80,5 95,20 95,50 C95,80 80,95 50,95 C20,95 5,80 5,50 C5,20 20,5 50,5 Z", // Circle
  "M20,20 L80,20 L80,80 L20,80 Z", // Square
  "M50,10 L80,40 L65,80 L35,80 L20,40 Z", // Pentagon
];

const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 6 + 2,
  duration: Math.random() * 25 + 20,
  delay: Math.random() * 10,
}));

const iconOrbiters = [
  { icon: Star, angle: 0, radius: 180, color: "text-yellow-400" },
  { icon: Rocket, angle: 72, radius: 160, color: "text-blue-400" },
  { icon: Globe, angle: 144, radius: 200, color: "text-green-400" },
  { icon: Zap, angle: 216, radius: 170, color: "text-purple-400" },
  { icon: Lightbulb, angle: 288, radius: 190, color: "text-orange-400" },
];

export const AdvancedHero: React.FC = () => {
  const [shapeIndex, setShapeIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Innovate", "Create", "Scale", "Transform", "Grow"];
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const shapeInterval = setInterval(() => {
      setShapeIndex((prev) => (prev + 1) % morphingShapes.length);
    }, 4000);
    
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => {
      clearInterval(shapeInterval);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
      {/* Cinematic Background Grid */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 2px, transparent 2px),
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 50px 50px, 50px 50px',
          }}
          animate={{
            x: [0, 100],
            y: [0, 100],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 0.8, 0],
              scale: [0.3, 1.2, 0.3],
              rotate: [0, 360],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Dynamic Morphing Shapes */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="600" height="600" className="opacity-8">
          <motion.path
            d={morphingShapes[shapeIndex]}
            fill="url(#cinematicGradient)"
            initial={false}
            animate={{ d: morphingShapes[shapeIndex] }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="cinematicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Cinematic Badge */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.3, 1],
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity },
              }}
            >
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <span className="text-white font-bold text-lg">Creating the Next Wave of Entrepreneurs</span>
            <ArrowRight className="w-5 h-5 text-cyan-400" />
          </motion.div>

          {/* Cinematic Main Title */}
          <div className="mb-12">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-9xl font-black leading-tight mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.2 }}
            >
              <motion.div
                className="block text-white mb-6"
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                Dream to
              </motion.div>
              
              {/* Cinematic Rotating Word */}
              <div className="relative h-32 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={wordIndex}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ 
                      opacity: 0, 
                      rotateX: 90,
                      scale: 0.5,
                      z: -100
                    }}
                    animate={{ 
                      opacity: 1, 
                      rotateX: 0,
                      scale: 1,
                      z: 0
                    }}
                    exit={{ 
                      opacity: 0, 
                      rotateX: -90,
                      scale: 0.5,
                      z: 100
                    }}
                    transition={{ 
                      duration: 1, 
                      ease: "easeOutCubic",
                    }}
                  >
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-black tracking-tight">
                      {words[wordIndex]}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.h1>

            {/* Cinematic Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Sharjah's official hub for aspiring founders and established ventures. 
              We empower <motion.span 
                className="text-cyan-400 font-bold"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(34, 211, 238, 0.5)",
                    "0 0 40px rgba(34, 211, 238, 0.8)",
                    "0 0 20px rgba(34, 211, 238, 0.5)",
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                changemakers
              </motion.span> to build impactful businesses and shape the future.
            </motion.p>
          </div>

          {/* Enhanced CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="xl" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-12 py-8 text-xl font-bold shadow-2xl relative overflow-hidden group">
                <Link to="/programs" className="flex items-center gap-3">
                  <span className="relative z-10">Launch Your Startup</span>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="outline" size="xl" className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-12 py-8 text-xl font-bold backdrop-blur-sm">
                <Link to="/community/join" className="flex items-center gap-3">
                  Join Our Community
                  <Star className="w-6 h-6" />
                </Link>
              </Button>
            </motion.div>
            
            {/* Enhanced Login/Signup CTAs */}
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="secondary" size="lg" className="bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-6 text-lg font-semibold">
                  <Link to="/auth/login" className="flex items-center gap-2">
                    <LogIn className="w-5 h-5" />
                    Login
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold">
                  <Link to="/auth/signup" className="flex items-center gap-2">
                    <UserPlus className="w-5 h-5" />
                    Sign Up
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Cinematic Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
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
                    className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-xl mb-4 border border-white/20"
                    animate={{
                      boxShadow: [
                        "0 0 30px rgba(34, 211, 238, 0.3)",
                        "0 0 50px rgba(34, 211, 238, 0.6)",
                        "0 0 30px rgba(34, 211, 238, 0.3)",
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.8
                    }}
                  >
                    <Icon className="w-10 h-10 text-cyan-400" />
                  </motion.div>
                  
                  <motion.div 
                    className="text-4xl md:text-5xl font-black text-white mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 text-lg font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center"
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
        <div className="flex flex-col items-center space-y-4">
          <span className="text-gray-300 text-lg font-medium">Scroll to explore</span>
          <div className="w-8 h-16 border-2 border-cyan-400/50 rounded-full flex justify-center p-3">
            <motion.div 
              className="w-2 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" 
              animate={{ y: [0, 24, 0] }}
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
