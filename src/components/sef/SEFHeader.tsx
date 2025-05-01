
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SEFHeaderProps {
  isInView: boolean;
  hasRevealed: boolean;
}

export function SEFHeader({ isInView, hasRevealed }: SEFHeaderProps) {
  return (
    <>
      {/* Animated badge with reveal effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="inline-block bg-[#FED700]/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#FED700]/20"
      >
        <span className="text-[#FED700] text-sm md:text-base font-medium">
          THE REGION'S LARGEST ENTREPRENEURSHIP FESTIVAL
        </span>
      </motion.div>
      
      {/* Fun reveal gimmick for the heading */}
      <div className="overflow-hidden mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={hasRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ 
            type: "spring", 
            stiffness: 50, 
            damping: 12,
            delay: 0.1
          }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
        >
          <span className={cn(
            "inline-block",
            hasRevealed ? "bg-gradient-to-r from-white via-[#FED700] to-white bg-clip-text text-transparent" : "text-white"
          )}>
            SHARJAH ENTREPRENEURSHIP
          </span>
          <br />
          <span className={cn(
            "inline-block mt-2",
            hasRevealed ? "bg-gradient-to-r from-white via-[#FED700] to-white bg-clip-text text-transparent" : "text-white"
          )}>
            FESTIVAL 2026
          </span>
        </motion.h2>
      </div>
    </>
  );
}
