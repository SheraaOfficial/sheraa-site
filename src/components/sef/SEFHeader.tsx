
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SEFHeaderProps {
  isInView: boolean;
  hasRevealed: boolean;
}

const SEFHeader: React.FC<SEFHeaderProps> = ({ isInView, hasRevealed }) => {
  return (
    <div className="space-y-6">
      {/* Animated badge with reveal effect */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 50, damping: 12 }}
        className="inline-block backdrop-blur-sm py-2 rounded-full mb-6 border border-indigo-400/30 px-6 bg-gradient-to-r from-indigo-900/90 via-purple-900/90 to-indigo-900/90"
      >
        <span className="text-indigo-300 text-sm md:text-base font-medium tracking-wide">
          SHARJAH ENTREPRENEURSHIP FESTIVAL
        </span>
      </motion.div>
      
      {/* Festival title with gradient effect */}
      <div className="overflow-hidden mb-6">
        <motion.h2 
          initial={{ opacity: 0, y: 100 }}
          animate={hasRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 50, damping: 12, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
        >
          <span 
            className={cn(
              "inline-block relative",
              hasRevealed ? "bg-gradient-to-r from-white via-indigo-300 to-white bg-clip-text text-transparent" : "text-white"
            )} 
            style={{ textShadow: hasRevealed ? "0 10px 20px rgba(129, 140, 248, 0.3)" : "none" }}
          >
            WHERE INNOVATION
            <br />MEETS OPPORTUNITY
          </span>
        </motion.h2>
      </div>
    </div>
  );
};

export default SEFHeader;
