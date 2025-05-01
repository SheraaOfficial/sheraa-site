
import React from "react";
import { motion } from "framer-motion";
import SEFHeader from "./SEFHeader";
import SEFDescription from "./SEFDescription";
import SEFStats from "./SEFStats";
import SEFEventCard from "./SEFEventCard";
import { cn } from "@/lib/utils";
import { GlowingStarsBackgroundCard } from "../ui/glowing-stars-card";

interface SEFContentProps {
  isInView: boolean;
  hasRevealed: boolean;
}

const SEFContent: React.FC<SEFContentProps> = ({ isInView, hasRevealed }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Left Column - Content */}
      <div className={cn(
        "lg:col-span-7 space-y-8",
        "flex flex-col items-center lg:items-start text-center lg:text-left"
      )}>
        {/* Festival badge, title and description */}
        <SEFHeader isInView={isInView} hasRevealed={hasRevealed} />
        <SEFDescription isInView={isInView} />
        
        {/* Statistics */}
        <SEFStats hasRevealed={hasRevealed} />
      </div>
      
      {/* Right Column - Event Card */}
      <div className="lg:col-span-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={hasRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="h-full flex items-center justify-center"
        >
          <SEFEventCard hasRevealed={hasRevealed} />
        </motion.div>
      </div>
    </div>
  );
};

export default SEFContent;
