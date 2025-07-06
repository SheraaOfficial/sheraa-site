
import React from "react";
import { motion } from "framer-motion";

interface TextRevealAnimationsProps {
  isVisible: boolean;
  animationStage: string;
  mainHeadline: string;
  subHeadline: string;
}

export const TextRevealAnimations: React.FC<TextRevealAnimationsProps> = ({
  isVisible,
  animationStage,
  mainHeadline,
  subHeadline
}) => {
  const titleWords = mainHeadline.split(' ');
  const subWords = subHeadline.split(' ');

  return (
    <div className="space-y-6">
      {/* Main Headline with Magnetic Reveal */}
      <div className="overflow-hidden">
        <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-white">
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-4"
              initial={{ 
                y: 100, 
                opacity: 0,
                rotateX: -90,
                scale: 0.8
              }}
              animate={isVisible ? { 
                y: 0, 
                opacity: 1,
                rotateX: 0,
                scale: 1
              } : {}}
              transition={{
                duration: 0.8,
                delay: 0.8 + (index * 0.1),
                type: "spring",
                bounce: 0.4,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 30px rgba(255,255,255,0.5)"
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* Sub Headline with Gradient Effect */}
      <div className="overflow-hidden">
        <motion.h2 className="text-3xl md:text-5xl font-bold">
          {subWords.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
              initial={{ 
                y: 60, 
                opacity: 0,
                scale: 0.9
              }}
              animate={animationStage === 'recognition' ? { 
                y: 0, 
                opacity: 1,
                scale: 1
              } : {}}
              transition={{
                duration: 0.6,
                delay: 1.2 + (index * 0.08),
                type: "spring",
                stiffness: 120,
                damping: 12
              }}
              whileHover={{
                scale: 1.05,
                filter: "brightness(1.2)"
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
      </div>
    </div>
  );
};
