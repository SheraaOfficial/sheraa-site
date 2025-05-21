
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroContent: React.FC = () => {
  return (
    <motion.div 
      className="max-w-2xl mx-auto text-center px-4 py-12 md:py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="inline-block mb-4">
          <span className="bg-gradient-to-r from-sheraa-primary/20 to-purple-500/20 text-sheraa-primary px-4 py-1.5 rounded-full text-sm font-medium">
            Creating the Next Wave of Entrepreneurs
          </span>
        </div>
      </motion.div>

      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Sharjah's Official Hub for Aspiring Founders
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        We empower changemakers to build impactful businesses and shape the future. Our resources, mentorship, and network 
        transform bold ideas into successful, scalable startups.
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Button asChild size="xl" variant="neo" className="group">
          <Link to="/programs" className="flex items-center">
            Launch Your Startup
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        
        <Button asChild size="xl" variant="outline" className="border-sheraa-primary/30 hover:bg-sheraa-primary/10">
          <Link to="/community/join">Join Our Community</Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};
