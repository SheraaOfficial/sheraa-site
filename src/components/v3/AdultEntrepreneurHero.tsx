import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { RetroGrid } from "@/components/ui/retro-grid";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Play } from "lucide-react";

const AdultEntrepreneurHero = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const benefits = [
    "Up to AED 35,000 equity-free funding",
    "Free UAE business license (worth AED 15,000)",
    "25+ hours expert mentorship",
    "Direct investor introductions",
    "Co-working space access (3 locations)"
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F5F2ED] to-white pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <RetroGrid className="opacity-20" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#A0826D]/10 to-[#A0826D]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#A0826D]/8 to-[#A0826D]/3 rounded-full blur-3xl" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-10 min-h-screen flex items-center"
      >
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] text-gray-900">
              Turn Your Startup Idea Into{" "}
              <span className="text-[#A0826D]">$37M+ Success</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join 200+ founders who raised funding through Sheraa's proven system. 
              <span className="font-semibold"> No equity required. No lengthy applications.</span>
            </p>
          </motion.div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-3 max-w-2xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3 text-left justify-center md:justify-start"
              >
                <CheckCircle className="w-5 h-5 text-[#A0826D] flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <GradientButton 
                asChild 
                size="lg" 
                className="bg-[#A0826D] hover:bg-[#8A6F5B] text-white px-8 py-4 text-lg font-bold min-w-[200px]"
              >
                <Link to="/v3/program-match" className="flex items-center gap-3">
                  Find Your Program
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </GradientButton>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#A0826D] text-[#A0826D] hover:bg-[#A0826D]/10 px-8 py-4 text-lg font-medium min-w-[200px]"
              >
                <Link to="/v3/success-stories" className="flex items-center gap-3">
                  <Play className="w-4 h-4" />
                  Watch Founder Stories
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="pt-8 border-t border-gray-200 max-w-2xl mx-auto"
          >
            <p className="text-sm text-gray-500 font-medium">
              Government-backed • 95% satisfaction • 170+ nationalities supported
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AdultEntrepreneurHero;