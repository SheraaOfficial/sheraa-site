import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Sparkles } from "@/components/ui/sparkles";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Rocket, Users, Trophy, Lightbulb, Star } from "lucide-react";

const YoungEntrepreneurHero = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  return (
    <section className="relative min-h-screen overflow-hidden young-particle-bg bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 pt-20">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <Sparkles className="opacity-40">
          <div className="w-full h-full" />
        </Sparkles>
        <div className="absolute -top-40 -right-40 w-96 h-96 young-gradient-dopamine rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 young-gradient-energy rounded-full blur-3xl opacity-15" />
        <div className="absolute -bottom-40 right-1/4 w-72 h-72 young-gradient-success rounded-full blur-3xl opacity-10" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-10 min-h-screen flex items-center"
      >
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
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

          {/* Engagement Hooks - Interactive Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
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
            className="pt-8"
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
    </section>
  );
};

export default YoungEntrepreneurHero;