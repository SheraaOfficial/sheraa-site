import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Rocket, Globe } from "lucide-react";
import MarqueeUpdates from "./MarqueeUpdates";
import AnimatedSailboat from "./AnimatedSailboat";
import { useIsMobile } from "@/hooks/use-mobile";
import { AnimatedBackground } from "./ui/animated-background";
import { TextShimmer } from "./ui/text-shimmer";

const Hero = () => {
  const isMobile = useIsMobile();
  
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

  const impactIcons = [
    { icon: Target, text: "180+ Startups Supported", color: "text-green-500" },
    { icon: Rocket, text: "$248M+ Revenue Generated", color: "text-blue-500" },
    { icon: Globe, text: "1,900+ Jobs Created", color: "text-purple-500" }
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      <AnimatedBackground className="flex-1 flex items-center overflow-hidden">
        <AnimatedSailboat />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="inline-block bg-sheraa-secondary/10 px-6 py-2 rounded-full text-sheraa-secondary text-sm font-medium mb-6">
              Creating the Next Wave of Entrepreneurs
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              <span className="block text-sheraa-dark mb-4">
                Transform Your Vision
              </span>
              <TextShimmer>
                Into Reality
              </TextShimmer>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Sharjah's official hub for aspiring founders and established ventures. 
              We empower changemakers to build impactful businesses and shape the future.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 justify-center">
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
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-white/30 border-t border-white/20">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactIcons.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-center gap-3 text-sheraa-dark/80"
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedBackground>
      <MarqueeUpdates />
    </div>
  );
};

export default Hero;
