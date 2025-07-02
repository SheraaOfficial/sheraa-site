
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Megaphone, Award, Star, Users, Sparkles, TrendingUp } from "lucide-react";

const HomepageMarquee = () => {
  const updates = [
    {
      icon: <Calendar className="w-4 h-4" />,
      text: "SEF 2026: The Region's Largest Entrepreneurship Festival - Jan 31 - Feb 1",
      highlight: true,
      category: "event"
    },
    {
      icon: <Award className="w-4 h-4" />,
      text: "71% Startup Survival Rate - Highest in the Region",
      highlight: true,
      category: "achievement"
    },
    {
      icon: <Users className="w-4 h-4" />,
      text: "52% Women-Led Startups - Leading Gender Diversity",
      category: "diversity"
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      text: "$171M+ Capital Raised by Our Portfolio Companies",
      highlight: true,
      category: "success"
    },
    {
      icon: <Megaphone className="w-4 h-4" />,
      text: "S3 Incubator - Equity-Free $30K Funding Available",
      category: "program"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "Access Sharjah Challenge - Global Startups Welcome",
      category: "opportunity"
    },
    {
      icon: <Star className="w-4 h-4" />,
      text: "18,000+ Youth Empowered Through Our Programs",
      category: "impact"
    },
    {
      icon: <Sparkles className="w-4 h-4" />,
      text: "140+ Ecosystem Partners - Growing Network",
      category: "community"
    },
  ];

  return (
    <div className="relative bg-gradient-to-r from-sheraa-dark via-sheraa-primary to-sheraa-dark dark:from-sheraa-dark dark:via-sheraa-primary/90 dark:to-sheraa-dark border-y border-sheraa-primary/20 py-4 overflow-hidden">
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
                ? "text-sheraa-orange animate-pulse" 
                : "text-sheraa-light"
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
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-sheraa-dark to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-sheraa-dark to-transparent pointer-events-none" />
    </div>
  );
};

export default HomepageMarquee;
