
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Lightbulb, 
  Rocket, 
  TrendingUp, 
  Users, 
  Target,
  Zap,
  Globe,
  Award,
  Star,
  Sparkles,
  Play,
  Pause
} from "lucide-react";

const entrepreneurshipWords = [
  { word: "Innovate", icon: Lightbulb, color: "from-blue-500 to-cyan-500" },
  { word: "Create", icon: Rocket, color: "from-purple-500 to-pink-500" },
  { word: "Scale", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
  { word: "Transform", icon: Zap, color: "from-orange-500 to-red-500" },
  { word: "Disrupt", icon: Target, color: "from-indigo-500 to-purple-500" },
  { word: "Build", icon: Users, color: "from-teal-500 to-cyan-500" },
];

const floatingElements = [
  { icon: Globe, position: { x: "10%", y: "20%" }, delay: 0 },
  { icon: Award, position: { x: "85%", y: "15%" }, delay: 0.5 },
  { icon: Star, position: { x: "15%", y: "70%" }, delay: 1 },
  { icon: Rocket, position: { x: "80%", y: "75%" }, delay: 1.5 },
  { icon: Lightbulb, position: { x: "5%", y: "45%" }, delay: 2 },
  { icon: TrendingUp, position: { x: "90%", y: "45%" }, delay: 2.5 },
];

export const DynamicVideoHero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % entrepreneurshipWords.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentWord = entrepreneurshipWords[currentWordIndex];
  const CurrentIcon = currentWord.icon;

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 dark:from-sheraa-dark dark:to-black flex items-center">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced dynamic gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: `linear-gradient(45deg, rgba(0, 51, 102, 0.3), rgba(0, 128, 128, 0.2))`
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.8, 0.3],
            x: [0, 120, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: `linear-gradient(135deg, rgba(255, 102, 0, 0.2), rgba(0, 51, 102, 0.15))`
          }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.7, 0.2],
            x: [0, -100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Enhanced floating entrepreneurship elements */}
        {floatingElements.map((element, index) => {
          const Icon = element.icon;
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: element.position.x,
                top: element.position.y,
              }}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ 
                opacity: [0.4, 0.9, 0.4],
                scale: [0.8, 1.3, 0.8],
                rotate: [0, 360, 720],
                y: [0, -30, 0],
              }}
              transition={{
                opacity: { duration: 5, repeat: Infinity, delay: element.delay },
                scale: { duration: 4, repeat: Infinity, delay: element.delay },
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                y: { duration: 7, repeat: Infinity, delay: element.delay * 0.5 },
              }}
            >
              <Icon className="w-10 h-10 text-sheraa-primary/70 drop-shadow-lg" />
            </motion.div>
          );
        })}

        {/* Enhanced geometric patterns */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-40 h-40 border-2 border-sheraa-primary/30 rotate-45"
          animate={{ 
            rotate: [45, 315, 45],
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.8, 0.3],
            borderRadius: ["0%", "50%", "0%"]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-32 h-32 border-2 border-sheraa-teal/40 rounded-full"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.5, 1],
            borderRadius: ["50%", "20%", "50%"],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity },
            borderRadius: { duration: 10, repeat: Infinity },
            opacity: { duration: 8, repeat: Infinity }
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-12">
            {/* Enhanced Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 1, type: "spring" }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/95 dark:bg-sheraa-dark/95 rounded-full border border-sheraa-primary/30 shadow-2xl backdrop-blur-sm group hover:shadow-sheraa-primary/30 transition-all duration-500"
            >
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.3, 1] }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity }
                }}
              >
                <Sparkles className="w-6 h-6 text-sheraa-primary" />
              </motion.div>
              <span className="text-lg font-bold bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                Sharjah Entrepreneurship Center
              </span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 text-sheraa-primary" />
              </motion.div>
            </motion.div>

            {/* Enhanced Main Dynamic Title */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 1 }}
                >
                  <motion.span 
                    className="block text-gray-900 dark:text-white mb-6"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 1, type: "spring" }}
                  >
                    Empowering You to
                  </motion.span>
                  
                  {/* Enhanced Dynamic Word Animation */}
                  <div className="relative h-32 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentWordIndex}
                        className="absolute inset-0 flex items-center justify-center gap-8"
                        initial={{ 
                          opacity: 0, 
                          scale: 0.3, 
                          rotateY: -120,
                          z: -200
                        }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1, 
                          rotateY: 0,
                          z: 0
                        }}
                        exit={{ 
                          opacity: 0, 
                          scale: 0.3, 
                          rotateY: 120,
                          z: -200
                        }}
                        transition={{ 
                          duration: 1, 
                          ease: "easeOutCubic",
                          type: "spring",
                          bounce: 0.4
                        }}
                      >
                        <motion.div
                          className="flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm border border-white/40 shadow-2xl"
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1],
                            boxShadow: [
                              "0 10px 30px rgba(0,0,0,0.1)",
                              "0 20px 60px rgba(0,51,102,0.3)",
                              "0 10px 30px rgba(0,0,0,0.1)"
                            ]
                          }}
                          transition={{
                            rotate: { duration: 4, ease: "linear" },
                            scale: { duration: 3, repeat: Infinity },
                            boxShadow: { duration: 4, repeat: Infinity }
                          }}
                        >
                          <CurrentIcon className="w-12 h-12 text-white drop-shadow-lg" />
                        </motion.div>
                        
                        <motion.span 
                          className={`bg-gradient-to-r ${currentWord.color} bg-clip-text text-transparent font-extrabold tracking-tight drop-shadow-2xl`}
                          animate={{
                            scale: [1, 1.05, 1],
                            textShadow: [
                              "0 0 20px rgba(255,255,255,0.5)",
                              "0 0 40px rgba(0,51,102,0.8)",
                              "0 0 20px rgba(255,255,255,0.5)"
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {currentWord.word}
                        </motion.span>
                        
                        <motion.div
                          className="flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm border border-white/40 shadow-2xl"
                          animate={{
                            rotate: [360, 0],
                            scale: [1, 1.2, 1],
                            boxShadow: [
                              "0 10px 30px rgba(0,0,0,0.1)",
                              "0 20px 60px rgba(0,128,128,0.3)",
                              "0 10px 30px rgba(0,0,0,0.1)"
                            ]
                          }}
                          transition={{
                            rotate: { duration: 4, ease: "linear" },
                            scale: { duration: 3, repeat: Infinity, delay: 0.5 },
                            boxShadow: { duration: 4, repeat: Infinity, delay: 0.5 }
                          }}
                        >
                          <CurrentIcon className="w-12 h-12 text-white drop-shadow-lg" />
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.h1>
              </motion.div>

              {/* Enhanced subtitle with typewriter effect */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
              >
                Where bold <motion.span 
                  className="font-semibold text-sheraa-primary"
                  animate={{ 
                    color: ["#003366", "#008080", "#003366"],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  ideas
                </motion.span> transform into{" "}
                <motion.span 
                  className="font-semibold text-sheraa-orange"
                  animate={{ 
                    color: ["#FF6600", "#003366", "#FF6600"],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                >
                  successful
                </motion.span>{" "}
                ventures that shape the future of Sharjah and beyond
              </motion.p>
            </div>

            {/* Enhanced Animated Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="grid grid-cols-3 gap-8 max-w-4xl mx-auto py-12"
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
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 2.2 + (index * 0.2), 
                      duration: 0.8,
                      type: "spring",
                      bounce: 0.5
                    }}
                    whileHover={{ scale: 1.15, y: -15 }}
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-sheraa-primary/20 to-sheraa-teal/20 mb-4 group-hover:from-sheraa-primary/40 group-hover:to-sheraa-teal/40 transition-all duration-500 shadow-2xl"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          "0 10px 30px rgba(0,0,0,0.1)",
                          "0 20px 60px rgba(0,51,102,0.2)",
                          "0 10px 30px rgba(0,0,0,0.1)"
                        ]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: index * 0.8
                      }}
                    >
                      <Icon className="w-12 h-12 text-sheraa-primary" />
                    </motion.div>
                    
                    <motion.div 
                      className="text-4xl md:text-5xl font-bold text-sheraa-primary mb-2"
                      animate={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium text-lg">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Enhanced Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Button asChild size="lg" className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal hover:from-sheraa-primary/90 hover:to-sheraa-teal/90 text-white px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-sheraa-primary/30 transition-all duration-500 relative overflow-hidden">
                  <Link to="/programs" className="flex items-center gap-3">
                    <span className="relative z-10">Start Your Journey</span>
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
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 1 }}
                    />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="outline" size="lg" className="border-2 border-sheraa-primary/40 text-sheraa-primary hover:bg-sheraa-primary/10 dark:border-sheraa-primary/60 dark:hover:bg-sheraa-primary/20 px-12 py-6 text-xl font-semibold backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
                  <Link to="/community/startups" className="flex items-center gap-3">
                    <span>Explore Success Stories</span>
                    <Star className="w-5 h-5 text-sheraa-orange" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Play/Pause Control */}
      <motion.button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-8 right-8 w-20 h-20 rounded-full bg-white/95 dark:bg-sheraa-dark/95 backdrop-blur-sm border border-sheraa-primary/30 shadow-2xl flex items-center justify-center group hover:shadow-xl transition-all duration-500"
        whileHover={{ scale: 1.15, boxShadow: "0 20px 60px rgba(0,51,102,0.3)" }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        <motion.div
          animate={{ rotate: isPlaying ? 0 : 180 }}
          transition={{ duration: 0.3 }}
          className="text-sheraa-primary"
        >
          {isPlaying ? (
            <Pause className="w-8 h-8" />
          ) : (
            <Play className="w-8 h-8 ml-1" />
          )}
        </motion.div>
      </motion.button>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.8, 0.4, 0.8]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="flex flex-col items-center space-y-4">
          <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
          <div className="w-8 h-16 border-2 border-sheraa-primary/50 rounded-full flex justify-center p-3 bg-white/20 backdrop-blur-sm">
            <motion.div 
              className="w-2 h-4 bg-gradient-to-b from-sheraa-primary to-sheraa-teal rounded-full" 
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
