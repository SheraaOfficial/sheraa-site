
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
        className="inline-block backdrop-blur-sm py-2 rounded-full mb-6 border border-[#FED700]/20 px-6 bg-gradient-to-r from-violet-950 via-violet-900 to-violet-950"
      >
        <span className="text-[#FED700] text-sm md:text-base font-medium tracking-wide">
          THE REGION'S LARGEST ENTREPRENEURSHIP FESTIVAL
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
              hasRevealed ? "bg-gradient-to-r from-white via-[#FED700] to-white bg-clip-text text-transparent" : "text-white"
            )} 
            style={{ textShadow: hasRevealed ? "0 10px 20px rgba(254, 215, 0, 0.2)" : "none" }}
          >
            SHARJAH ENTREPRENEURSHIP
            <br />FESTIVAL 2026
          </span>
        </motion.h2>
      </div>
    </div>
  );
};

export default SEFHeader;
