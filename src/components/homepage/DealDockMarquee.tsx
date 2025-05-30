
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Handshake, Award, Zap } from "lucide-react";

const DealDockMarquee = () => {
  const updates = [
    {
      icon: <Zap className="w-4 h-4" />,
      text: "🚀 Deal Dock LIVE: Connecting Startups with Top VCs & Angels",
      highlight: true,
    },
    {
      icon: <Calendar className="w-4 h-4" />,
      text: "Today's Highlights: Fireside Chat with Sonia Weymuller (VentureSouq)",
    },
    {
      icon: <Users className="w-4 h-4" />,
      text: "1:1 Startup x Investor Connect Sessions Now Open",
    },
    {
      icon: <Handshake className="w-4 h-4" />,
      text: "MoU Signing: Sheraa x Continuous VC Partnership",
      highlight: true,
    },
    {
      icon: <Award className="w-4 h-4" />,
      text: "Featured VCs: Wamda Capital, Oraseya Capital, Beco Capital, Shorooq Partners",
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "Live Now: Investor Meetings & Portfolio Reviews",
    },
    {
      icon: <Users className="w-4 h-4" />,
      text: "30+ Startups Pitching to Regional Investment Leaders",
    },
    {
      icon: <Zap className="w-4 h-4" />,
      text: "Next Session: Group Photo with Vice-Chairperson & CEO",
      highlight: true,
    },
  ];

  return (
    <div className="relative bg-gradient-to-r from-purple-800 via-blue-700 to-purple-800 border-y border-purple-500/30 py-4 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-pulse opacity-30" />
      
      {/* Marquee content */}
      <div className="flex whitespace-nowrap animate-marquee">
        {[...updates, ...updates].map((update, index) => (
          <motion.div
            key={index}
            className={`inline-flex items-center gap-3 px-8 ${
              update.highlight 
                ? "text-white font-semibold" 
                : "text-white/90"
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className={`${
              update.highlight 
                ? "text-yellow-400 animate-pulse" 
                : "text-blue-300"
            }`}>
              {update.icon}
            </div>
            <span className="text-sm md:text-base">
              {update.text}
            </span>
            <span className="mx-2 text-white/40">•</span>
          </motion.div>
        ))}
      </div>
      
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-purple-800 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-purple-800 to-transparent pointer-events-none" />
    </div>
  );
};

export default DealDockMarquee;
