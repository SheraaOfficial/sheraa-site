
import React from "react";
import { Link } from "react-router-dom";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles } from "@/components/ui/sparkles";

type SEFHeaderProps = {
  isInView: boolean;
  hasRevealed: boolean;
};

export const SEFHeader: React.FC<SEFHeaderProps> = ({ isInView, hasRevealed }) => {
  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="inline-flex items-center py-2.5 px-5 bg-white/90 text-[#8B5CF6] rounded-full shadow-xl"
      >
        <Sparkles className="relative mr-1" colors={["#8B5CF6", "#D6BCFA"]} count={5}>
          <span className="text-sm font-bold tracking-wide">
            SHARJAH ENTREPRENEURSHIP FESTIVAL
          </span>
        </Sparkles>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          duration: 0.7, 
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="text-3xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">THE REGION'S LARGEST</span><br/>
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#E5DEFF] via-white to-[#D6BCFA]">
          ENTREPRENEURSHIP FESTIVAL
        </span>
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          duration: 0.7, 
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="text-lg text-white/90 drop-shadow-md max-w-2xl"
      >
        To the 14,000+ attendees, 300+ global speakers, and every entrepreneur, innovator, and explorer 
        who made SEF 2025 a record-breaking success—Thank You. Your passion, ideas, and energy turned 
        SEF'25 into a festival of firsts.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          duration: 0.7, 
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="flex flex-wrap gap-5"
      >
        <GradientButton 
          asChild 
          variant="shimmer" 
          size="lg" 
          className="group shadow-xl hover:shadow-[0_5px_30px_rgba(155,135,245,0.4)] font-bold"
        >
          <Link to="/events/sef/register" className="flex items-center gap-2">
            Register for SEF'26
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </GradientButton>
        
        <Button 
          asChild 
          size="lg" 
          variant="outline" 
          className="bg-white/15 text-white border-white/40 hover:bg-white/25 
            backdrop-blur-xl hover:border-white/60 transition-all duration-300"
        >
          <Link to="/events/sef/agenda">Explore SEF'25 agenda</Link>
        </Button>
      </motion.div>
    </div>
  );
};
