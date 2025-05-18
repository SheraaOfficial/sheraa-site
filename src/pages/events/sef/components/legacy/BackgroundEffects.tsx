
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-[50%] -left-[10%] w-[80%] h-[80%] rounded-full bg-purple-400/5 dark:bg-purple-400/10 blur-3xl"></div>
      <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-3xl"></div>
      
      {/* Stars background */}
      {Array.from({length: 50}).map((_, i) => (
        <motion.div 
          key={i} 
          className="absolute w-[2px] h-[2px] bg-white/30 rounded-full" 
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.3
          }} 
          animate={{
            opacity: [null, Math.random() * 0.7 + 0.3, Math.random() * 0.5 + 0.3],
            scale: [null, Math.random() * 0.5 + 1, Math.random() * 0.5 + 0.5]
          }} 
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse"
          }} 
        />
      ))}
    </div>
  );
};

export default BackgroundEffects;
