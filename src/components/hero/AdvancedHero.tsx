
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
  Lightbulb
} from "lucide-react";

const morphingShapes = [
  "M50,10 L90,50 L50,90 L10,50 Z", // Diamond
  "M50,5 C80,5 95,20 95,50 C95,80 80,95 50,95 C20,95 5,80 5,50 C5,20 20,5 50,5 Z", // Circle
  "M20,20 L80,20 L80,80 L20,80 Z", // Square
  "M50,10 L80,40 L65,80 L35,80 L20,40 Z", // Pentagon
];

const floatingParticles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 8 + 4,
  duration: Math.random() * 20 + 15,
  delay: Math.random() * 5,
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
    }, 3000);
    
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => {
      clearInterval(shapeInterval);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            x: [0, 50],
            y: [0, 50],
          }}
          transition={{
            duration: 20,
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
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
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
        <svg width="400" height="400" className="opacity-10">
          <motion.path
            d={morphingShapes[shapeIndex]}
            fill="url(#gradient)"
            initial={false}
            animate={{ d: morphingShapes[shapeIndex] }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
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
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                </motion.div>
                <span className="text-white font-semibold">Creating the Next Wave of Entrepreneurs</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </motion.div>

              {/* Main Title with Letter Animation */}
              <div className="space-y-6">
                <motion.h1 
                  className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <motion.div
                    className="block text-white mb-4"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    Dream to
                  </motion.div>
                  
                  {/* Animated Rotating Word */}
                  <div className="relative h-24 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={wordIndex}
                        className="absolute inset-0 flex items-center"
                        initial={{ 
                          opacity: 0, 
                          rotateX: 90,
                          scale: 0.8,
                        }}
                        animate={{ 
                          opacity: 1, 
                          rotateX: 0,
                          scale: 1,
                        }}
                        exit={{ 
                          opacity: 0, 
                          rotateX: -90,
                          scale: 0.8,
                        }}
                        transition={{ 
                          duration: 0.8, 
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

                {/* Subtitle with Typewriter Effect */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed"
                >
                  Sharjah's official hub for aspiring founders and established ventures. 
                  We empower <motion.span 
                    className="text-cyan-400 font-semibold"
                    animate={{ 
                      textShadow: [
                        "0 0 10px rgba(34, 211, 238, 0.5)",
                        "0 0 20px rgba(34, 211, 238, 0.8)",
                        "0 0 10px rgba(34, 211, 238, 0.5)",
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    changemakers
                  </motion.span> to build impactful businesses and shape the future.
                </motion.p>
              </div>

              {/* Stats with Pulse Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="grid grid-cols-3 gap-6"
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
                        delay: 1.7 + (index * 0.1), 
                        duration: 0.5,
                        type: "spring",
                        bounce: 0.4
                      }}
                    >
                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-3"
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(34, 211, 238, 0.3)",
                            "0 0 30px rgba(34, 211, 238, 0.6)",
                            "0 0 20px rgba(34, 211, 238, 0.3)",
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      >
                        <Icon className="w-8 h-8 text-cyan-400" />
                      </motion.div>
                      
                      <motion.div 
                        className="text-3xl font-bold text-white mb-1"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-6 text-lg font-semibold shadow-2xl relative overflow-hidden group">
                    <Link to="/programs" className="flex items-center gap-2">
                      <span className="relative z-10">Launch Your Startup</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="relative z-10"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: ["100%", "-100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild variant="outline" size="lg" className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                    <Link to="/community/join" className="flex items-center gap-2">
                      Join Our Community
                      <Star className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-96 h-96">
                {/* Central Hub */}
                <motion.div
                  className="absolute inset-1/4 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl"
                  animate={{
                    boxShadow: [
                      "0 0 50px rgba(34, 211, 238, 0.3)",
                      "0 0 80px rgba(34, 211, 238, 0.6)",
                      "0 0 50px rgba(34, 211, 238, 0.3)",
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <motion.img
                    src="/lovable-uploads/sheraa-logo.png"
                    alt="Sheraa"
                    className="w-24 h-auto filter brightness-0 invert"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{ 
                      scale: { duration: 3, repeat: Infinity },
                      rotate: { duration: 6, repeat: Infinity }
                    }}
                  />
                </motion.div>

                {/* Orbiting Icons */}
                {iconOrbiters.map((orbiter, index) => {
                  const Icon = orbiter.icon;
                  const angle = (orbiter.angle * Math.PI) / 180;
                  const x = Math.cos(angle) * orbiter.radius;
                  const y = Math.sin(angle) * orbiter.radius;
                  
                  return (
                    <motion.div
                      key={index}
                      className="absolute w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { 
                          duration: 3, 
                          repeat: Infinity, 
                          delay: index * 0.4,
                          ease: "easeInOut"
                        }
                      }}
                      whileHover={{ scale: 1.3, z: 10 }}
                    >
                      <Icon className={`w-8 h-8 ${orbiter.color}`} />
                    </motion.div>
                  );
                })}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                  {iconOrbiters.map((_, index) => {
                    const nextIndex = (index + 1) % iconOrbiters.length;
                    const angle1 = (iconOrbiters[index].angle * Math.PI) / 180;
                    const angle2 = (iconOrbiters[nextIndex].angle * Math.PI) / 180;
                    const x1 = Math.cos(angle1) * iconOrbiters[index].radius + 192;
                    const y1 = Math.sin(angle1) * iconOrbiters[index].radius + 192;
                    const x2 = Math.cos(angle2) * iconOrbiters[nextIndex].radius + 192;
                    const y2 = Math.sin(angle2) * iconOrbiters[nextIndex].radius + 192;
                    
                    return (
                      <motion.line
                        key={index}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="rgba(34, 211, 238, 0.3)"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                          pathLength: [0, 1, 0],
                          opacity: [0, 0.6, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    );
                  })}
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
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
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <div className="w-6 h-12 border-2 border-cyan-400/50 rounded-full flex justify-center p-2">
            <motion.div 
              className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" 
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
