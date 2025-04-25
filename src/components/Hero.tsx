
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSailboat from "./AnimatedSailboat";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white to-sheraa-light">
      <ParticleBackground />
      
      <AnimatedSailboat />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-block bg-sheraa-secondary/10 px-6 py-2 rounded-full text-sheraa-secondary text-sm font-medium mb-6"
          >
            Creating the Next Wave of Entrepreneurs
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            <span className="block text-sheraa-dark mb-4">
              Transform Your Vision
            </span>
            <span className="block bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
              Into Reality
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 mb-10 leading-relaxed"
          >
            Sharjah's official hub for aspiring founders and established ventures. 
            We empower changemakers to build impactful businesses and shape the future 
            through comprehensive support, expert mentorship, and a vibrant ecosystem.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-6"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-sheraa-primary hover:bg-sheraa-primary/90 transform transition-all group px-8"
            >
              <Link to="/programs" className="flex items-center gap-2">
                Launch Your Startup
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-light transform transition-all px-8"
            >
              <Link to="/community/join">Join Our Community</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex items-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>180+ Startups Supported</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>$248M+ Revenue Generated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>1,900+ Jobs Created</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-20 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl transform animate-pulse" />
        <div className="absolute -left-48 bottom-0 w-96 h-96 bg-sheraa-secondary/5 rounded-full blur-3xl transform animate-pulse delay-700" />
      </div>
    </div>
  );
};

export default Hero;
