
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star, Rocket, Globe, TrendingUp, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { TextRevealAnimations } from "./animations/TextRevealAnimations";
import { BackgroundEffects } from "./animations/BackgroundEffects";
import { InteractiveElements } from "./animations/InteractiveElements";
import { useHeroAnimations } from "./hooks/useHeroAnimations";
import { useSuccessMetrics } from "./hooks/useSuccessMetrics";

const inspirationalWords = [
  { word: "Breakthrough", icon: Rocket, color: "from-blue-500 to-purple-600" },
  { word: "Revolution", icon: Star, color: "from-purple-500 to-pink-600" },
  { word: "Impact", icon: TrendingUp, color: "from-green-500 to-blue-500" },
  { word: "Success", icon: Award, color: "from-orange-500 to-red-500" },
  { word: "Future", icon: Globe, color: "from-cyan-500 to-blue-600" }
];

export const CinematicHero: React.FC = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { isVisible, animationStage } = useHeroAnimations();
  const { metrics, startCountUp } = useSuccessMetrics();

  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % inspirationalWords.length);
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

  useEffect(() => {
    if (animationStage === 'action') {
      startCountUp();
    }
  }, [animationStage, startCountUp]);

  const currentWord = inspirationalWords[currentWordIndex];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
      <BackgroundEffects mousePosition={mousePosition} animationStage={animationStage} />
      
      <motion.div style={{ y, opacity }} className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Stage 1: Arrival - Cinematic Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-orange-400/30 mb-8 group hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-300"
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
              <Sparkles className="w-6 h-6 text-orange-400" />
            </motion.div>
            <span className="text-white font-bold text-lg">🔥 Where Arab Innovation Meets Global Ambition</span>
            <ArrowRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform" />
          </motion.div>

          {/* Stage 2: Recognition - Emotional Headlines */}
          <div className="mb-12">
            <TextRevealAnimations
              isVisible={isVisible}
              animationStage={animationStage}
              mainHeadline="Your Breakthrough Moment Starts Here"
              subHeadline="From Bold Idea to Global Impact"
            />
            
            {/* Dynamic Rotating Word */}
            <div className="relative h-24 mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWordIndex}
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
                    duration: 0.8, 
                    ease: "easeOutCubic",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <currentWord.icon className="w-12 h-12 text-cyan-400" />
                    <span className={`text-6xl md:text-8xl font-black bg-gradient-to-r ${currentWord.color} bg-clip-text text-transparent`}>
                      {currentWord.word}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Emotional Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={animationStage === 'recognition' ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Every game-changing startup started with someone just like you - 
              passionate, driven, and ready to solve real problems. 
              <motion.span 
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
                Sheraa is where that potential becomes unstoppable success.
              </motion.span>
            </motion.p>
          </div>

          {/* Stage 3: Inspiration - Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={animationStage === 'inspiration' ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.5, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
          >
            {[
              { metric: metrics.startups, label: "Founders Like You", icon: Users, color: "text-blue-400" },
              { metric: metrics.revenue, label: "Revenue Generated", icon: TrendingUp, color: "text-green-400" },
              { metric: metrics.jobs, label: "Dreams Realized", icon: Award, color: "text-purple-400" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={animationStage === 'inspiration' ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    delay: 2.7 + (index * 0.2), 
                    duration: 0.8,
                    type: "spring",
                    bounce: 0.4
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-xl mb-4 border border-white/20 group-hover:border-white/40"
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
                    <Icon className={`w-10 h-10 ${stat.color}`} />
                  </motion.div>
                  
                  <motion.div 
                    className="text-4xl md:text-5xl font-black text-white mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.metric}
                  </motion.div>
                  <div className="text-gray-400 text-lg font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stage 4: Action - Magnetic CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={animationStage === 'action' ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 3.5, duration: 1 }}
            className="flex flex-col lg:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Button asChild size="xl" className="relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-12 py-8 text-xl font-bold shadow-2xl border-0 rounded-2xl">
                <Link to="/programs" className="flex items-center gap-3">
                  <span className="relative z-10">Start Your Success Story</span>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="outline" size="xl" className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-12 py-8 text-xl font-bold backdrop-blur-sm rounded-2xl">
                <Link to="/community/startups" className="flex items-center gap-3">
                  See Success Stories
                  <Star className="w-6 h-6" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Proof Ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationStage === 'action' ? { opacity: 1 } : {}}
            transition={{ delay: 4, duration: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-lg mb-4">Join founders who've already made it:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>📈 Mohammed raised $500K last month</span>
              <span>🚀 Sarah's startup just went global</span>
              <span>💡 Ahmed's idea became a $2M company</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <InteractiveElements animationStage={animationStage} />
    </section>
  );
};
