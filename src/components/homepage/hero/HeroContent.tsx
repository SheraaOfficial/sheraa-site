
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Sparkles } from "lucide-react";

export const HeroContent: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8 text-center lg:text-left"
    >
      {/* Brand Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border border-sheraa-primary/20 shadow-lg"
      >
        <Sparkles className="w-4 h-4 text-sheraa-orange animate-pulse" />
        <span className="text-sm font-semibold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
          Sharjah Entrepreneurship Center
        </span>
      </motion.div>

      {/* Main Headline */}
      <div className="space-y-4">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="block bg-gradient-to-r from-sheraa-dark via-sheraa-primary to-sheraa-teal dark:from-white dark:via-sheraa-primary dark:to-sheraa-teal bg-clip-text text-transparent mb-2">
            Creating the Next Wave of
          </span>
          <span className="bg-gradient-to-r from-sheraa-orange via-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
            Entrepreneurs
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed"
        >
          Sharjah's official hub for aspiring founders and established ventures. We empower changemakers to build 
          impactful businesses and shape the future through collaboration, innovation, and a 
          <span className="font-semibold text-sheraa-primary"> founder-first ethos</span>.
        </motion.p>
      </div>

      {/* Primary CTAs */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
      >
        <GradientButton 
          asChild 
          size="xl" 
          className="group relative overflow-hidden bg-sheraa-primary hover:bg-sheraa-primary/90 shadow-2xl hover:shadow-sheraa-primary/25 transition-all duration-300"
        >
          <Link to="/programs" className="flex items-center gap-2">
            <span className="relative z-10">Launch Your Startup</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
          </Link>
        </GradientButton>
        
        <Button 
          asChild 
          size="xl" 
          variant="outline" 
          className="border-2 border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10 dark:border-sheraa-primary/50 dark:hover:bg-sheraa-primary/20 backdrop-blur-sm"
        >
          <Link to="/community/join" className="flex items-center gap-2">
            Join Our Community
            <Star className="w-4 h-4 text-sheraa-orange" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};
