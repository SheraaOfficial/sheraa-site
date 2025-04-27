
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { ArrowRight, Target, Rocket, Globe, Stars, Sparkles, Award } from "lucide-react";
import MarqueeUpdates from "./MarqueeUpdates";
import AnimatedSailboat from "./AnimatedSailboat";

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

  const impactIcons = [
    { icon: Award, text: "180+ Startups Supported", color: "text-[#00C897]" },
    { icon: Rocket, text: "$248M+ Revenue Generated", color: "text-[#0066FF]" },
    { icon: Globe, text: "1,900+ Jobs Created", color: "text-[#D946EF]" }
  ];

  const bgShapes = [
    { 
      delay: 0, 
      duration: 10, 
      className: "absolute top-20 left-[20%] w-64 h-64 rounded-full bg-[#9b87f5]/10 blur-3xl" 
    },
    { 
      delay: 2, 
      duration: 8, 
      className: "absolute bottom-40 right-[10%] w-80 h-80 rounded-full bg-[#D946EF]/10 blur-3xl" 
    },
    { 
      delay: 4, 
      duration: 12, 
      className: "absolute top-[30%] right-[30%] w-40 h-40 rounded-full bg-[#00C897]/10 blur-2xl" 
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex-1 flex items-center overflow-hidden bg-gradient-to-br from-[#0A0D14] via-[#111827] to-[#1F2937]">
        <ParticleBackground />
        <AnimatedSailboat />
        
        {bgShapes.map((shape, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 0.8, 
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut"
            }}
            className={shape.className}
          />
        ))}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              variants={itemVariants} 
              className="relative inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-[#9b87f5]/20 to-[#D946EF]/20 px-6 py-2 rounded-full text-white text-sm font-medium">
                Creating the Next Wave of Entrepreneurs
              </div>
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#9b87f5]"
              />
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-[#D946EF]"
              />
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              <span className="block text-white mb-4">
                Transform <span className="text-[#9b87f5]">Your Vision</span>
              </span>
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="block bg-gradient-to-r from-[#D946EF] via-[#9b87f5] to-[#00C897] bg-clip-text text-transparent bg-300%"
              >
                Into Reality
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={itemVariants} 
              className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Sharjah's official hub for aspiring founders and established ventures. 
              We empower changemakers to build impactful businesses and shape the future.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-[#9b87f5] to-[#D946EF] hover:from-[#8B76E4] hover:to-[#C835DE] shadow-xl transform transition-all group px-8 py-7 text-lg rounded-xl"
              >
                <Link to="/programs" className="flex items-center gap-2">
                  Launch Your Startup
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 transform transition-all px-8 py-7 text-lg rounded-xl backdrop-blur-sm"
              >
                <Link to="/community/join" className="flex items-center gap-2">
                  Join Our Community
                  <Sparkles className="w-5 h-5 text-[#9b87f5]" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 backdrop-blur-xl bg-black/30 border-t border-white/10"
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactIcons.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all">
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <span className="font-medium text-lg text-white/90">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <MarqueeUpdates />
    </div>
  );
};

export default Hero;
