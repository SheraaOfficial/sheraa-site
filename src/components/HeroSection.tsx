
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { RetroGrid } from "@/components/ui/retro-grid";
import { Check, ChevronRight } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { Sparkles } from "@/components/ui/sparkles";

const transitionVariants = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  },
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
      <RetroGrid fadeDirection="bottom" fadeSize="lg" />
      <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--background)_100%)]" />
      <div className="container mx-auto px-4 py-24 sm:px-6 relative z-10">
        <AnimatedGroup 
          variants={transitionVariants}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={transitionVariants.item} className="inline-block bg-sheraa-primary/15 px-4 py-1 rounded-full text-sheraa-primary text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles>Sharjah Entrepreneurship Center</Sparkles>
          </motion.div>
          
          <motion.h1
            variants={transitionVariants.item}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-sheraa-dark"
          >
            Creating the Next Wave of Entrepreneurs
          </motion.h1>
          
          <motion.p 
            variants={transitionVariants.item}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Sharjah's official hub for aspiring founders and established ventures. We empower changemakers to build impactful businesses and shape the future.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div variants={transitionVariants.item}>
              <GradientButton asChild>
                <Link to="/programs">Launch Your Startup</Link>
              </GradientButton>
            </motion.div>
            
            <motion.div variants={transitionVariants.item}>
              <Button variant="outline" asChild>
                <Link to="/community">Join Our Community</Link>
              </Button>
            </motion.div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}
