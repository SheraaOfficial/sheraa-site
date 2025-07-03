
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Sparkles } from "@/components/ui/sparkles";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Rocket, Users, Trophy, Lightbulb, Heart, Star, Zap, Coffee, BookOpen, Smartphone } from "lucide-react";

const EnhancedYoungEntrepreneurHero = () => {
  const [mounted, setMounted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showMainHero, setShowMainHero] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  useEffect(() => {
    setMounted(true);
    
    const timer = setTimeout(() => {
      setShowWelcome(false);
      setTimeout(() => setShowMainHero(true), 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const bentoCards = [
    {
      icon: Rocket,
      title: "That 3AM Idea?",
      subtitle: "Let's make it your empire",
      color: "young-gradient-dopamine",
      size: "large"
    },
    {
      icon: Heart,
      title: "No Suits Required",
      subtitle: "Just pure passion",
      color: "young-gradient-energy",
      size: "small"
    },
    {
      icon: Coffee,
      title: "Student Budget?",
      subtitle: "We got you covered",
      color: "young-gradient-success",
      size: "medium"
    },
    {
      icon: Users,
      title: "Find Your Tribe",
      subtitle: "Connect with fellow dreamers",
      color: "young-gradient-dreamy",
      size: "medium"
    },
    {
      icon: Trophy,
      title: "AED 50K Prizes",
      subtitle: "Your ideas = Real money",
      color: "young-gradient-energy",
      size: "large"
    },
    {
      icon: BookOpen,
      title: "From Classroom to CEO",
      subtitle: "Skip the boring stuff",
      color: "young-gradient-dopamine",
      size: "small"
    }
  ];

  const socialProof = [
    { emoji: "🎓", text: "500+ Student Founders", highlight: true },
    { emoji: "💰", text: "AED 2M+ Raised by Gen Z", highlight: false },
    { emoji: "🌍", text: "25+ Countries Represented", highlight: false },
    { emoji: "🔥", text: "Trending in UAE Universities", highlight: true }
  ];

  const WelcomeStage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showWelcome ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 z-50 young-gradient-animated flex items-center justify-center"
    >
      <div className="text-center text-white">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <div className="text-6xl md:text-8xl mb-4">🚀</div>
        </motion.div>
        
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.03}
          staggerFrom="center"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 21,
            delay: 1,
          }}
          containerClassName="text-3xl md:text-5xl font-black mb-4"
        >
          Your moment is NOW! ✨
        </VerticalCutReveal>
        
        <VerticalCutReveal
          splitBy="words"
          staggerDuration={0.1}
          staggerFrom="first"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 21,
            delay: 2,
          }}
          containerClassName="text-lg md:text-xl opacity-90"
        >
          Stop scrolling. Start building.
        </VerticalCutReveal>
      </div>
    </motion.div>
  );

  const BentoGrid = () => (
    <div className="grid grid-cols-6 grid-rows-4 gap-4 max-w-4xl mx-auto h-80 mb-8">
      {bentoCards.map((card, index) => {
        const gridClasses = {
          large: index === 0 ? "col-span-3 row-span-2" : index === 4 ? "col-span-3 row-span-2" : "",
          medium: "col-span-2 row-span-2",
          small: "col-span-1 row-span-2"
        };

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.1, type: "spring" }}
            whileHover={{ 
              scale: 1.05,
              rotate: Math.random() * 4 - 2,
              transition: { duration: 0.2 }
            }}
            className={`${gridClasses[card.size]} young-bento-card p-4 flex flex-col justify-center items-center text-center cursor-pointer group`}
          >
            <div className={`w-12 h-12 ${card.color} rounded-full flex items-center justify-center mb-3 group-hover:animate-micro-bounce`}>
              <card.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-sm md:text-base text-gray-800 mb-1">{card.title}</h3>
            <p className="text-xs md:text-sm text-gray-600">{card.subtitle}</p>
          </motion.div>
        );
      })}
    </div>
  );

  const MainHeroContent = () => (
    <motion.div 
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: showMainHero ? 1 : 0, y: showMainHero ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 relative z-10 min-h-screen flex items-center"
    >
      <div className="w-full max-w-6xl mx-auto text-center space-y-8">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-6 relative z-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 young-glass-card text-sm font-medium text-gray-700 mb-4">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span>Trending at UAE Universities</span>
            <Star className="w-4 h-4 text-yellow-500" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9]">
            <span className="young-gradient-text">
              That Random 3AM Idea?
            </span>
            <br />
            <span className="text-gray-800">
              Let's Make It Your Empire
            </span>
            <span className="block text-4xl md:text-5xl mt-2">👑</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stop overthinking. Start building. Join 500+ student entrepreneurs who turned their dorm room dreams into real businesses.
            <br />
            <span className="text-base text-gray-500 font-medium">
              (Your parents will finally understand what you're doing with your life 😉)
            </span>
          </p>
        </motion.div>

        {/* Bento Grid Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-20"
        >
          <BentoGrid />
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 relative z-20"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="animate-bounce-in"
          >
            <GradientButton 
              asChild 
              size="lg" 
              className="young-gradient-dopamine text-white px-8 py-6 h-16 text-lg font-bold min-w-[260px] rounded-3xl shadow-xl border-0 hover:shadow-2xl transition-all duration-300"
            >
              <Link to="/v3/young/idea-validator" className="flex items-center gap-3">
                <Smartphone className="w-5 h-5" />
                Validate My Idea (3 min)
                <ArrowRight className="w-5 h-5" />
              </Link>
            </GradientButton>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="animate-bounce-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Button 
              asChild 
              size="lg" 
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-6 h-16 text-lg font-semibold min-w-[260px] rounded-3xl bg-white/80 backdrop-blur-sm shadow-lg"
            >
              <Link to="/v3/young/founders" className="flex items-center gap-3">
                <Play className="w-4 h-4" />
                Watch Success Stories
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="pt-8 relative z-20"
        >
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {socialProof.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 ${
                  item.highlight 
                    ? 'young-glass-card text-gray-800 font-semibold' 
                    : 'bg-white/40 text-gray-600 hover:bg-white/60'
                }`}
              >
                <span className="text-lg">{item.emoji}</span>
                <span>{item.text}</span>
                {item.highlight && <Zap className="w-4 h-4 text-yellow-500" />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen overflow-hidden young-particle-bg bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 pt-20">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <Sparkles className="opacity-30">
          <div className="w-full h-full" />
        </Sparkles>
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
