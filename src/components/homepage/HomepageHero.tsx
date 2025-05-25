
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroContent } from "./hero/HeroContent";
import { ProofPoints } from "./hero/ProofPoints";
import { HeroVisual } from "./hero/HeroVisual";
import { FloatingBackground } from "./hero/FloatingBackground";
import { ScrollIndicator } from "./hero/ScrollIndicator";

const HomepageHero = () => {
  const [mounted, setMounted] = useState(false);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-sheraa-light/30 to-sheraa-light/50 dark:from-sheraa-dark dark:via-sheraa-dark/80 dark:to-black">
      <FloatingBackground />
      
      {/* Main content */}
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto relative z-10 min-h-screen flex items-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8">
            <HeroContent />
            <ProofPoints />
          </div>
          
          {mounted && <HeroVisual />}
        </div>
      </motion.div>
      
      <ScrollIndicator />
    </section>
  );
};

export default HomepageHero;
