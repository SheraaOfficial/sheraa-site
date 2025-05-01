
import React from "react";
import { motion } from "framer-motion";
import { Users, Award, CalendarDays, HandshakeIcon } from "lucide-react";

interface SEFStatsProps {
  hasRevealed: boolean;
}

export const SEFStats: React.FC<SEFStatsProps> = ({ hasRevealed }) => {
  const stats = [
    { value: "14,000+", label: "Attendees", icon: Users },
    { value: "300+", label: "Speakers", icon: Award },
    { value: "250+", label: "Activities", icon: CalendarDays },
    { value: "320+", label: "Investor Meetings", icon: HandshakeIcon }
  ];
  
  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {stats.map((stat, index) => (
        <motion.div 
          key={index} 
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 20
          }} 
          animate={hasRevealed ? {
            opacity: 1,
            scale: 1,
            y: 0
          } : {
            opacity: 0,
            scale: 0.8,
            y: 20
          }} 
          transition={{
            duration: 0.6,
            delay: 0.3 + index * 0.15,
            ease: "easeOut"
          }} 
          whileHover={{ 
            y: -5,
            transition: { duration: 0.2 }
          }}
          className="flex flex-col items-center p-3 rounded-xl border border-indigo-500/20 
                   bg-gradient-to-b from-indigo-800/20 to-indigo-900/50 backdrop-blur-sm 
                   hover:border-indigo-400/30 hover:from-indigo-700/30 hover:to-indigo-900/60 transition-colors"
        >
          <div className="bg-indigo-500/20 rounded-full p-2.5 mb-3">
            <stat.icon className="w-5 h-5 text-indigo-300" />
          </div>
          <div className="text-xl font-bold text-white">{stat.value}</div>
          <div className="text-xs uppercase tracking-wider text-indigo-200/80 mt-1">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SEFStats;
