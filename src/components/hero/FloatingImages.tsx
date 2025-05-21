
import React from "react";
import { motion } from "framer-motion";

interface FloatingImage {
  src: string;
  alt: string;
  className: string;
  initialX: number;
  initialY: number;
  delayMultiplier?: number;
}

// Define images to float around the hero section
const floatingImages: FloatingImage[] = [
  {
    src: "/images/heroes/entrepreneur-1.png",
    alt: "Entrepreneur with laptop",
    className: "w-36 md:w-52 absolute top-[5%] right-[10%] rounded-lg shadow-xl rotate-3",
    initialX: 100,
    initialY: -50,
  },
  {
    src: "/images/heroes/startup-team.png",
    alt: "Startup team collaborating",
    className: "w-40 md:w-64 absolute bottom-[15%] left-[5%] rounded-lg shadow-xl -rotate-6",
    initialX: -100,
    initialY: 50,
    delayMultiplier: 0.3,
  },
  {
    src: "/images/heroes/graph-stats.png",
    alt: "Growth statistics",
    className: "w-32 md:w-48 absolute top-[30%] left-[15%] rounded-lg shadow-md rotate-6",
    initialX: -50,
    initialY: -30,
    delayMultiplier: 0.6,
  },
  {
    src: "/images/heroes/innovation-lab.png",
    alt: "Innovation lab",
    className: "w-36 md:w-56 absolute bottom-[25%] right-[12%] rounded-lg shadow-xl -rotate-3",
    initialX: 80,
    initialY: 40,
    delayMultiplier: 0.9,
  },
];

export const FloatingImages: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden pointer-events-none">
      {floatingImages.map((image, index) => (
        <motion.div
          key={index}
          className={image.className}
          initial={{ 
            opacity: 0, 
            x: image.initialX, 
            y: image.initialY,
            scale: 0.8,
          }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            y: 0,
            scale: 1,
          }}
          transition={{ 
            duration: 1.2, 
            delay: (image.delayMultiplier || 0.1) * index,
            ease: "easeOut"
          }}
        >
          <motion.img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto rounded-lg"
            animate={{ 
              y: [0, -10, 0], 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 6 + index,
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};
