
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Layout, Mic } from "lucide-react";
import { motion } from "framer-motion";

type SEFStat = {
  value: string;
  label: string;
  icon: React.ElementType;
};

type SEFStatsProps = {
  hasRevealed: boolean;
};

export const SEFStats: React.FC<SEFStatsProps> = ({ hasRevealed }) => {
  const stats: SEFStat[] = [{
    value: "14,000+",
    label: "Attendees",
    icon: Users
  }, {
    value: "300+",
    label: "Global Speakers",
    icon: Mic
  }, {
    value: "250+",
    label: "Activities",
    icon: Calendar
  }, {
    value: "10+",
    label: "Zones",
    icon: Layout
  }];

  return (
    <div>
      <h3 className="text-xl font-bold mb-6 text-white drop-shadow-glow">What to expect at SEF'26</h3>
      <motion.div 
        className="grid grid-cols-2 gap-4"
        initial={!hasRevealed ? { opacity: 0, y: 20 } : {}}
        animate={hasRevealed ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={hasRevealed ? { opacity: 1, scale: 1 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1 + 0.3, 
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            <Card 
              className="border-white/30 backdrop-blur-xl bg-white/20 hover:bg-white/30 transition-all duration-500
              transform hover:scale-105 hover:shadow-lg text-white overflow-hidden group"
            >
              <div className="absolute -inset-x-2/3 -inset-y-1/2 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] blur-3xl" />
              </div>
              <CardContent className="p-4 z-10 relative">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white/20 p-2 rounded-full mb-2.5 transition-colors group-hover:bg-white/40">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/80 mt-1">{stat.label}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
