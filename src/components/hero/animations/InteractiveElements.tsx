
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface InteractiveElementsProps {
  animationStage: string;
}

export const InteractiveElements: React.FC<InteractiveElementsProps> = ({
  animationStage
}) => {
  return (
    <>
      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={animationStage === 'action' ? { opacity: 1 } : {}}
        transition={{ delay: 4.5, duration: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center space-y-4">
          <span className="text-gray-300 text-lg font-medium">Discover Your Journey</span>
          <motion.div 
            className="w-8 h-16 border-2 border-cyan-400/50 rounded-full flex justify-center p-3 backdrop-blur-sm bg-white/5"
            animate={{ 
              borderColor: ["rgba(34, 211, 238, 0.5)", "rgba(34, 211, 238, 1)", "rgba(34, 211, 238, 0.5)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              animate={{ 
                y: [0, 24, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronDown className="w-4 h-4 text-cyan-400" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Success Story Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { text: "💰 $500K raised", x: "15%", y: "20%", delay: 5 },
          { text: "🚀 Global expansion", x: "80%", y: "30%", delay: 5.5 },
          { text: "👥 50 jobs created", x: "10%", y: "70%", delay: 6 },
          { text: "🏆 Award winner", x: "85%", y: "75%", delay: 6.5 }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-white/70 text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={animationStage === 'action' ? { 
              opacity: [0, 1, 1, 0], 
              scale: [0, 1, 1, 0],
              y: [20, 0, 0, -20]
            } : {}}
            transition={{
              duration: 4,
              delay: item.delay,
              repeat: Infinity,
              repeatDelay: 8
            }}
          >
            {item.text}
          </motion.div>
        ))}
      </div>
    </>
  );
};
