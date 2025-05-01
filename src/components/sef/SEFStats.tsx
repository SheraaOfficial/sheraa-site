
import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Book, MapPin } from "lucide-react";

interface SEFStatsProps {
  hasRevealed: boolean;
}

export function SEFStats({ hasRevealed }: SEFStatsProps) {
  const stats = [
    { value: "14,000+", label: "Attendees", icon: Users },
    { value: "780+", label: "Speakers", icon: Award },
    { value: "250+", label: "Activities", icon: Book },
    { value: "130+", label: "Investor Meetings", icon: MapPin }
  ];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={hasRevealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
          className="flex flex-col items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
        >
          <stat.icon className="w-5 h-5 text-[#FED700] mb-2" />
          <div className="text-xl font-bold text-white">{stat.value}</div>
          <div className="text-xs text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
