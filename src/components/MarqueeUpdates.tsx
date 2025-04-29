
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Clock, Megaphone, Award, Star, Users } from "lucide-react";

const MarqueeUpdates = () => {
  const { scrollYProgress } = useScroll();
  
  // This will make the marquee fade out after passing the quote section
  // Assuming the quote section is roughly 30-50% down the page
  const opacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);
  
  const updates = [
    {
      icon: <Calendar className="w-4 h-4" />,
      text: "Startup Innovation Workshop - April 30th, 2025",
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "Access Sharjah Challenge Applications Open Until May 15th",
    },
    {
      icon: <Megaphone className="w-4 h-4" />,
      text: "Join Our Entrepreneurship Bootcamp - Starting June 1st",
    },
    {
      icon: <Award className="w-4 h-4" />,
      text: "Spotlight: Candam Technologies - Waste Management Innovation",
    },
    {
      icon: <Star className="w-4 h-4" />,
      text: "S3 Incubator - New Cohort Applications Close May 10th",
    },
    {
      icon: <Users className="w-4 h-4" />,
      text: "Founder Fridays - Networking Event Every Week at 4PM",
    },
    {
      icon: <Calendar className="w-4 h-4" />,
      text: "Sharjah Entrepreneurship Festival - Early Bird Tickets Available",
    },
  ];

  return (
    <motion.div 
      className="bg-sheraa-dark/95 border-y border-white/10 py-3 fixed top-16 w-full z-20"
      style={{ opacity }}
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {[...updates, ...updates].map((update, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 text-white/90 px-8"
          >
            {update.icon}
            <span className="text-sm font-medium">{update.text}</span>
            <span className="mx-4 text-white/30">•</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MarqueeUpdates;
