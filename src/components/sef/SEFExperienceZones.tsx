
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Award, Users, BookOpen, Mic, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

type ExperienceZone = {
  name: string;
  description: string;
  icon: React.ElementType;
};

type SEFExperienceZonesProps = {
  hasRevealed: boolean;
  isInView: boolean;
};

export const SEFExperienceZones: React.FC<SEFExperienceZonesProps> = ({ hasRevealed, isInView }) => {
  const experienceZones: ExperienceZone[] = [{
    name: "STARTUP TOWN",
    description: "Building the Future Together",
    icon: Star
  }, {
    name: "MADE IN SHARJAH",
    description: "Honoring Local Talent",
    icon: Award
  }, {
    name: "INVESTORS LOUNGE",
    description: "Connect with Capital",
    icon: Users
  }, {
    name: "SEF ACADEMY",
    description: "Learning at Every Level",
    icon: BookOpen
  }, {
    name: "PITCH COMPETITION",
    description: "Showcase Your Ideas",
    icon: Mic
  }, {
    name: "IMPACT ZONE",
    description: "Where Inspiration Meets Purpose",
    icon: Sparkles
  }];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-8">
      <motion.h3 
        className="text-xl font-bold mb-5 text-white drop-shadow-glow"
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        SEF'26 Experience
      </motion.h3>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={hasRevealed ? "visible" : "hidden"}
      >
        {experienceZones.map((zone, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{ 
              duration: 0.7,
              type: "spring",
              stiffness: 50
            }}
          >
            <Card 
              className="border-white/30 hover:border-white/60 backdrop-blur-xl bg-white/20 hover:bg-white/30 
                text-white transition-all duration-300 group hover:shadow-lg transform hover:-translate-y-1 
                overflow-hidden"
            >
              {/* Top sheen effect */}
              <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                translate-y-0 group-hover:translate-y-10 transition-transform duration-700 ease-in-out"></div>
                
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2.5 rounded-full group-hover:bg-white/40 group-hover:scale-110 
                    transition-all duration-300 shadow-inner">
                    <zone.icon className="w-4 h-4 text-white" />
                  </div>
                  <CardTitle className="text-sm sm:text-base">{zone.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-4 pb-4 pt-0">
                <p className="text-xs text-white/80">{zone.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
