import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Sparkles } from "@/components/ui/sparkles";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { Gravity, MatterBody } from "@/components/ui/gravity";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Rocket, Users, Trophy, Lightbulb, Star } from "lucide-react";

const EnhancedYoungEntrepreneurHero = () => {
  const [mounted, setMounted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showMainHero, setShowMainHero] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  useEffect(() => {
    setMounted(true);
    
    // Show welcome for 4 seconds, then transition to main hero
    const timer = setTimeout(() => {
      setShowWelcome(false);
      setTimeout(() => setShowMainHero(true), 500);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const entrepreneurshipWords = [
    { text: "Innovation", color: "young-gradient-dopamine" },
    { text: "Startup", color: "young-gradient-energy" },
    { text: "Venture", color: "young-gradient-success" },
    { text: "Pitch", color: "young-gradient-dopamine" },
    { text: "Funding", color: "young-gradient-energy" },
    { text: "Scale", color: "young-gradient-success" },
    { text: "Disrupt", color: "young-gradient-dopamine" },
    { text: "MVP", color: "young-gradient-energy" },
    { text: "Growth", color: "young-gradient-success" },
    { text: "Impact", color: "young-gradient-dopamine" }
  ];

  const engagementHooks = [
    {
      icon: Rocket,
      title: "Interactive Idea Validator Tool",
      subtitle: "3-min quiz",
      color: "young-gradient-dopamine"
    },
    {
      icon: Trophy,
      title: "Young Entrepreneur Competition", 
      subtitle: "AED 50K prizes",
      color: "young-gradient-energy"
    },
    {
      icon: Lightbulb,
      title: "Free Innovation Workshops",
      subtitle: "Weekly events",
      color: "young-gradient-success"
    },
    {
      icon: Users,
      title: "Peer Mentorship Network",
      subtitle: "Connect with founders",
      color: "young-gradient-dopamine"
    }
  ];

  const trustIndicators = [
    { icon: "🎓", text: "University Partners: AUS & UoS" },
    { icon: "🏅", text: "500+ Student Success Stories" },
    { icon: "🌍", text: "Students from 25+ Countries" }
  ];

  // Welcome Stage Component
  const WelcomeStage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showWelcome ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 z-50 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 flex items-center justify-center"
    >
      <div className="text-center text-white">
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.05}
          staggerFrom="center"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 21,
          }}
          containerClassName="text-4xl md:text-6xl lg:text-7xl font-black mb-6"
        >
          Welcome to Your Journey! 🚀
        </VerticalCutReveal>
        
        <VerticalCutReveal
          splitBy="words"
          staggerDuration={0.1}
          staggerFrom="first"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 21,
            delay: 1.5,
          }}
          containerClassName="text-xl md:text-2xl opacity-90"
        >
          Where Crazy Ideas Become Reality
        </VerticalCutReveal>
      </div>
    </motion.div>
  );

  // Gradient Bars Background
  const GradientBarsBackground = () => {
    const numBars = 12;
    
    const calculateHeight = (index: number, total: number) => {
      const position = index / (total - 1);
      const maxHeight = 100;
      const minHeight = 30;
      const center = 0.5;
      const distanceFromCenter = Math.abs(position - center);
      const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);
      return minHeight + (maxHeight - minHeight) * heightPercentage;
    };

    return (
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
        <div className="flex h-full">
          {Array.from({ length: numBars }).map((_, index) => {
            const height = calculateHeight(index, numBars);
            return (
              <div
                key={index}
                style={{
                  flex: `1 0 calc(100% / ${numBars})`,
                  maxWidth: `calc(100% / ${numBars})`,
                  height: '100%',
                  background: 'linear-gradient(to top, hsl(var(--sheraa-primary)), transparent)',
                  transform: `scaleY(${height / 100})`,
                  transformOrigin: 'bottom',
                  transition: 'transform 0.5s ease-in-out',
                  animation: 'pulseBar 2s ease-in-out infinite alternate',
                  animationDelay: `${index * 0.1}s`,
                }}
              />
            );
          })}
        </div>
      </div>
    );
  };

  // Main Hero Content
  const MainHeroContent = () => (
    <motion.div 
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: showMainHero ? 1 : 0, y: showMainHero ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 relative z-10 min-h-screen flex items-center"
    >
      <div className="w-full max-w-4xl mx-auto text-center space-y-8">
        {/* Floating Words Physics */}
        <div className="absolute inset-0 pointer-events-none">
          <Gravity 
            gravity={{ x: 0, y: 0.3 }} 
            className="w-full h-full"
            debug={false}
            addTopWall={false}
          >
            {entrepreneurshipWords.map((word, index) => (
              <MatterBody
                key={index}
                matterBodyOptions={{ 
                  friction: 0.3, 
                  restitution: 0.4,
                  density: 0.0008
                }}
                x={`${20 + (index * 8) % 60}%`}
                y={`${10 + (index * 12) % 40}%`}
                angle={Math.random() * 20 - 10}
                bodyType="circle"
              >
                <div className={`text-sm md:text-base ${word.color} text-white rounded-full px-4 py-2 shadow-lg backdrop-blur-sm cursor-grab hover:cursor-grabbing`}>
                  {word.text}
                </div>
              </MatterBody>
            ))}
          </Gravity>
        </div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-6 relative z-20"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9]">
            <span className="young-gradient-text">
              Your Crazy Idea Could Change the World
            </span>
            <span className="block text-4xl md:text-5xl">🚀</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Join 1,000+ young innovators building the future from Sharjah
            <br />
            <span className="text-base text-gray-600 font-medium">
              (No business experience required - we'll teach you everything)
            </span>
          </p>
        </motion.div>

        {/* Engagement Hooks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto relative z-20"
        >
          {engagementHooks.map((hook, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer"
            >
              <div className={`p-4 rounded-2xl ${hook.color} young-dopamine-shadow group-hover:shadow-2xl transition-all duration-300`}>
                <div className="flex flex-col items-center text-center space-y-2 text-white">
                  <hook.icon className="w-8 h-8" />
                  <div>
                    <h3 className="font-bold text-sm leading-tight">{hook.title}</h3>
                    <p className="text-xs opacity-90">{hook.subtitle}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 relative z-20"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <GradientButton 
              asChild 
              size="lg" 
              className="young-gradient-dopamine text-white px-8 py-4 h-14 text-lg font-bold min-w-[220px] rounded-2xl shadow-2xl border-0 hover:shadow-3xl transition-all duration-300"
            >
              <Link to="/v3/young/idea-validator" className="flex items-center gap-3">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </GradientButton>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-2 border-purple-400 text-purple-600 hover:bg-purple-50 px-8 py-4 h-14 text-lg font-semibold min-w-[220px] rounded-2xl bg-white/80 backdrop-blur-sm"
            >
              <Link to="/v3/young/founders" className="flex items-center gap-3">
                <Play className="w-4 h-4" />
                Meet Young Founders
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="pt-8 relative z-20"
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200/50"
              >
                <span className="text-lg">{indicator.icon}</span>
                <span className="text-gray-700 font-medium">{indicator.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen overflow-hidden young-particle-bg bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 pt-20">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <Sparkles className="opacity-40">
          <div className="w-full h-full" />
        </Sparkles>
        <GradientBarsBackground />
        <div className="absolute -top-40 -right-40 w-96 h-96 young-gradient-dopamine rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 young-gradient-energy rounded-full blur-3xl opacity-15" />
        <div className="absolute -bottom-40 right-1/4 w-72 h-72 young-gradient-success rounded-full blur-3xl opacity-10" />
      </div>

      {/* Welcome Stage */}
      {showWelcome && <WelcomeStage />}

      {/* Main Hero Content */}
      {showMainHero && <MainHeroContent />}
    </section>
  );
};

export default EnhancedYoungEntrepreneurHero;