
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

export const HeroContent: React.FC = () => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto text-center px-4 py-12 md:py-28"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="inline-block mb-6">
          <span className="bg-gradient-to-r from-sheraa-primary/20 to-sheraa-teal/20 dark:from-sheraa-primary/30 dark:to-sheraa-teal/30 text-sheraa-primary dark:text-sheraa-teal px-4 py-1.5 rounded-full text-sm font-medium flex items-center">
            <Star className="w-4 h-4 mr-2 text-sheraa-orange" />
            <span>Sharjah Entrepreneurship Center</span>
          </span>
        </div>
      </motion.div>

      <motion.h1 
        className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Creating the Next Wave of Entrepreneurs
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl mb-10 text-gray-700 dark:text-gray-200 leading-relaxed max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        We empower changemakers to build impactful businesses and shape the future. Our resources, mentorship, and network 
        transform bold ideas into successful, scalable startups that contribute positively to Sharjah and the UAE's diversified economy.
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <GradientButton asChild size="xl" className="group shadow-glow bg-sheraa-primary hover:bg-sheraa-primary/90">
          <Link to="/programs" className="flex items-center">
            Launch Your Startup
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </GradientButton>
        
        <Button asChild size="xl" variant="outline" className="border-sheraa-primary/30 hover:bg-sheraa-primary/10 dark:border-sheraa-primary/50 dark:hover:bg-sheraa-primary/20">
          <Link to="/community/join" className="flex items-center">
            Join Our Community
            <Star className="ml-2 w-4 h-4 text-sheraa-orange" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};
