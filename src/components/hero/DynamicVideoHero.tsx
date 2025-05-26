
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
  Sparkles
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
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: `linear-gradient(45deg, rgba(0, 51, 102, 0.2), rgba(0, 128, 128, 0.1))`
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: `linear-gradient(135deg, rgba(255, 102, 0, 0.15), rgba(0, 51, 102, 0.1))`
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.6, 0.2],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating entrepreneurship elements */}
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
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8],
                rotate: [0, 360],
                y: [0, -20, 0],
              }}
              transition={{
                opacity: { duration: 4, repeat: Infinity, delay: element.delay },
                scale: { duration: 3, repeat: Infinity, delay: element.delay },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                y: { duration: 6, repeat: Infinity, delay: element.delay * 0.5 },
              }}
            >
              <Icon className="w-8 h-8 text-sheraa-primary/60" />
            </motion.div>
          );
        })}

        {/* Geometric patterns */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-32 h-32 border-2 border-sheraa-primary/20 rotate-45"
          animate={{ 
            rotate: [45, 225, 45],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-sheraa-teal/30 rounded-full"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            borderRadius: ["50%", "20%", "50%"]
          }}
          transition={{ 
            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity },
            borderRadius: { duration: 8, repeat: Infinity }
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-12">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 1, type: "spring" }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/90 dark:bg-sheraa-dark/90 rounded-full border border-sheraa-primary/20 shadow-2xl backdrop-blur-sm group hover:shadow-sheraa-primary/20 transition-all duration-500"
            >
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <Sparkles className="w-6 h-6 text-sheraa-primary" />
              </motion.div>
              <span className="text-lg font-bold bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
                Sharjah Entrepreneurship Center
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 text-sheraa-primary" />
              </motion.div>
            </motion.div>

            {/* Main Dynamic Title */}
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
                  
                  {/* Dynamic Word Animation */}
                  <div className="relative h-32 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentWordIndex}
                        className="absolute inset-0 flex items-center justify-center gap-6"
                        initial={{ 
                          opacity: 0, 
                          scale: 0.5, 
                          rotateY: -90,
                          z: -100
                        }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1, 
                          rotateY: 0,
                          z: 0
                        }}
                        exit={{ 
                          opacity: 0, 
                          scale: 0.5, 
                          rotateY: 90,
                          z: -100
                        }}
                        transition={{ 
                          duration: 0.8, 
                          ease: "easeOutCubic",
                          type: "spring",
                          bounce: 0.3
                        }}
                      >
                        <motion.div
                          className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20"
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            rotate: { duration: 3, ease: "linear" },
                            scale: { duration: 2, repeat: Infinity }
                          }}
                        >
                          <CurrentIcon className="w-10 h-10 text-white" />
                        </motion.div>
                        
                        <span 
                          className={`bg-gradient-to-r ${currentWord.color} bg-clip-text text-transparent font-extrabold tracking-tight`}
                        >
                          {currentWord.word}
                        </span>
                        
                        <motion.div
                          className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20"
                          animate={{
                            rotate: [360, 0],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            rotate: { duration: 3, ease: "linear" },
                            scale: { duration: 2, repeat: Infinity, delay: 0.5 }
                          }}
                        >
                          <CurrentIcon className="w-10 h-10 text-white" />
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.h1>
              </motion.div>

              {/* Subtitle with typewriter effect */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
              >
                Where bold <motion.span 
                  className="font-semibold text-sheraa-primary"
                  animate={{ color: ["#003366", "#008080", "#003366"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ideas
                </motion.span> transform into{" "}
                <motion.span 
                  className="font-semibold text-sheraa-orange"
                  animate={{ color: ["#FF6600", "#003366", "#FF6600"] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  successful
                </motion.span>{" "}
                ventures that shape the future of Sharjah and beyond
              </motion.p>
            </div>

            {/* Animated Statistics */}
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
                      bounce: 0.4
                    }}
                    whileHover={{ scale: 1.1, y: -10 }}
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-sheraa-primary/20 to-sheraa-teal/20 mb-4 group-hover:from-sheraa-primary/30 group-hover:to-sheraa-teal/30 transition-all duration-300"
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      <Icon className="w-10 h-10 text-sheraa-primary" />
                    </motion.div>
                    
                    <motion.div 
                      className="text-4xl md:text-5xl font-bold text-sheraa-primary mb-2"
                      animate={{
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium text-lg">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Button asChild size="lg" className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal hover:from-sheraa-primary/90 hover:to-sheraa-teal/90 text-white px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-sheraa-primary/25 transition-all duration-500 relative overflow-hidden">
                  <Link to="/programs" className="flex items-center gap-3">
                    <span className="relative z-10">Start Your Journey</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="relative z-10"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="outline" size="lg" className="border-2 border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10 dark:border-sheraa-primary/50 dark:hover:bg-sheraa-primary/20 px-12 py-6 text-xl font-semibold backdrop-blur-sm">
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

      {/* Play/Pause Control */}
      <motion.button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border border-sheraa-primary/20 shadow-lg flex items-center justify-center group hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        {isPlaying ? (
          <div className="w-4 h-4 bg-sheraa-primary rounded-sm" />
        ) : (
          <div className="w-0 h-0 border-l-[8px] border-l-sheraa-primary border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
        )}
      </motion.button>

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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="flex flex-col items-center space-y-3">
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
