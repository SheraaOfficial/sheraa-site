
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Sparkles, Rocket, Users, TrendingUp, Award, Globe, Zap } from "lucide-react";

const UltimateHero = () => {
  const [mounted, setMounted] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  const metrics = [
    { icon: Users, value: "180+", label: "Startups Launched", color: "text-blue-500" },
    { icon: TrendingUp, value: "$248M+", label: "Revenue Generated", color: "text-green-500" },
    { icon: Award, value: "1,900+", label: "Jobs Created", color: "text-purple-500" },
    { icon: Globe, value: "71%", label: "Success Rate", color: "text-orange-500" }
  ];

  const inspirationalWords = [
    "Dreams", "Ideas", "Visions", "Concepts", "Innovations"
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const wordInterval = setInterval(() => {
      setCurrentWordIndex(prev => (prev + 1) % inspirationalWords.length);
    }, 2500);

    const metricInterval = setInterval(() => {
      setCurrentMetric(prev => (prev + 1) % metrics.length);
    }, 3000);

    return () => {
      clearInterval(wordInterval);
      clearInterval(metricInterval);
    };
  }, []);

  const floatingElements = [
    { icon: Rocket, x: "10%", y: "20%", delay: 0 },
    { icon: Star, x: "85%", y: "15%", delay: 0.5 },
    { icon: Zap, x: "15%", y: "75%", delay: 1 },
    { icon: Globe, x: "80%", y: "70%", delay: 1.5 }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-black pt-20">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-sheraa-primary/20 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-sheraa-secondary/20 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
      </div>

      {/* Floating Elements */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {floatingElements.map((element, index) => (
            <motion.div
              key={index}
              className="absolute text-sheraa-primary/30"
              style={{ left: element.x, top: element.y }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.3, 0.7, 0.3],
                scale: [0.8, 1.2, 0.8],
                y: [-10, 10, -10],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4,
                delay: element.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <element.icon className="w-8 h-8 md:w-12 md:h-12" />
            </motion.div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-10 min-h-screen flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            {/* Hero Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-sheraa-primary/20 shadow-xl"
            >
              <Sparkles className="w-5 h-5 text-sheraa-primary animate-pulse" />
              <span className="text-sm md:text-base font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                🚀 Sharjah&apos;s #1 Startup Accelerator - Where Dreams Become Billion-Dollar Companies
              </span>
              <ArrowRight className="w-4 h-4 text-sheraa-primary" />
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-gray-900 dark:text-white mb-2">
                  Turn Your
                </span>
                <div className="relative h-[1.1em] overflow-hidden">
                  {mounted && (
                    <motion.span
                      key={currentWordIndex}
                      className="absolute inset-0 bg-gradient-to-r from-sheraa-primary via-blue-600 to-purple-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 100, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: -100, rotateX: 90 }}
                      transition={{ duration: 0.7, ease: "easeOutCubic" }}
                    >
                      {inspirationalWords[currentWordIndex]}
                    </motion.span>
                  )}
                </div>
                <span className="block text-gray-900 dark:text-white">
                  Into Reality
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium"
              >
                Join the <span className="font-bold text-sheraa-primary">fastest-growing startup ecosystem</span> in the Middle East. 
                From idea validation to global scaling - we&apos;re your complete success partner.
              </motion.p>
            </div>

            {/* Dynamic Metrics Display */}
            {mounted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex justify-center mb-8"
              >
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                  <motion.div
                    key={currentMetric}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`p-3 rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-600 shadow-lg`}>
                      {(() => {
                        const CurrentIcon = metrics[currentMetric].icon;
                        return <CurrentIcon className={`w-8 h-8 ${metrics[currentMetric].color}`} />;
                      })()}
                    </div>
                    <div className="text-left">
                      <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
                        {metrics[currentMetric].value}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 font-medium">
                        {metrics[currentMetric].label}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <GradientButton 
                  asChild 
                  size="xl" 
                  className="group relative overflow-hidden bg-gradient-to-r from-sheraa-primary to-blue-600 hover:from-sheraa-primary/90 hover:to-blue-500 shadow-2xl hover:shadow-sheraa-primary/25 px-8 py-4 text-lg font-bold"
                >
                  <Link to="/programs" className="flex items-center gap-3">
                    <span className="relative z-10">🚀 Start Your Success Journey</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6 relative z-10" />
                    </motion.div>
                  </Link>
                </GradientButton>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  size="xl" 
                  variant="outline" 
                  className="border-2 border-sheraa-primary/50 text-sheraa-primary hover:bg-sheraa-primary/10 dark:border-sheraa-primary/70 dark:hover:bg-sheraa-primary/20 backdrop-blur-sm px-8 py-4 text-lg font-bold"
                >
                  <Link to="/community/startups" className="flex items-center gap-3">
                    💫 See Success Stories
                    <Star className="w-5 h-5 text-yellow-500" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="pt-8 border-t border-gray-200/50 dark:border-gray-700/50 max-w-4xl mx-auto"
            >
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4 font-medium">
                Join founders who&apos;ve already transformed their lives:
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-4 py-2 rounded-full font-medium">
                  📈 Ahmed raised $2M in Series A
                </span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-4 py-2 rounded-full font-medium">
                  🌍 Sarah&apos;s startup went global
                </span>
                <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 px-4 py-2 rounded-full font-medium">
                  🏆 Mohammed won Startup of the Year
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ 
            y: [0, 12, 0],
            opacity: [0.7, 0.3, 0.7]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Discover More</span>
            <div className="w-6 h-10 border-2 border-sheraa-primary/40 dark:border-sheraa-primary/60 rounded-full flex justify-center backdrop-blur-sm">
              <motion.div 
                className="w-1.5 h-1.5 bg-sheraa-primary rounded-full mt-2" 
                animate={{ 
                  y: [0, 20, 0] 
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UltimateHero;
