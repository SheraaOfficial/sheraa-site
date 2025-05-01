
import React, { useEffect, useState } from "react";
import { Particles } from "@/components/ui/particles";
import { Glow } from "@/components/ui/glow-effect";
import { BorderBeam } from "@/components/ui/border-beam";
import { Sparkles } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg";

export const SEFBackgroundEffects: React.FC = () => {
  const [orbs, setOrbs] = useState<Array<{x: number, y: number, size: number, color: string, duration: number}>>([]);
  
  useEffect(() => {
    // Generate random colorful orbs
    const orbsArray = Array.from({ length: 12 }, () => ({
      x: Math.random() * 100, 
      y: Math.random() * 100,
      size: Math.random() * 300 + 100,
      color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.15)`,
      duration: Math.random() * 15 + 10
    }));
    setOrbs(orbsArray);
  }, []);
  
  return (
    <>
      {/* Background with animated gradient and particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6E59A5] to-[#1A1F2C] overflow-hidden rounded-3xl z-0">
        {/* Floating orbs */}
        {orbs.map((orb, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full blur-2xl opacity-40"
            style={{
              left: `${orb.x}%`, 
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              background: orb.color
            }}
            animate={{
              x: [0, 20, 0, -20, 0],
              y: [0, -20, 0, 20, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        <AnimatedGradient 
          colors={['#8B5CF6', '#9b87f5', '#D6BCFA']} 
          speed={8} 
          blur="medium" 
          className="opacity-20"
        />

        <Particles
          className="absolute inset-0"
          quantity={100}
          staticity={40}
          color="#ffffff"
          ease={60}
          size={0.5}
        />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
      
      {/* Glowing effect */}
      <div className="absolute inset-0 z-[2]">
        <Glow variant="center" className="z-10 opacity-70" />
      </div>
      
      {/* Sparkles in upper corners */}
      <div className="absolute top-10 left-10 z-20">
        <Sparkles colors={["#9b87f5", "#E5DEFF", "#D6BCFA", "#ffffff"]} count={8} />
      </div>
      <div className="absolute top-10 right-10 z-20">
        <Sparkles colors={["#9b87f5", "#E5DEFF", "#D6BCFA", "#ffffff"]} count={8} />
      </div>
      
      {/* Top border beam */}
      <BorderBeam 
        className="z-20" 
        colorFrom="#ffffff" 
        colorTo="#9b87f5"
        size={350}
        duration={12}
        borderWidth={2}
      />
    </>
  );
};
