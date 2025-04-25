
import React from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, Megaphone } from "lucide-react";

const MarqueeUpdates = () => {
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
      icon: <Calendar className="w-4 h-4" />,
      text: "Tech Founders Meetup - Every Thursday at 6 PM",
    },
  ];

  return (
    <div className="bg-sheraa-primary/5 border-y border-sheraa-primary/10 sticky top-[72px] z-30 overflow-hidden py-2">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...updates, ...updates].map((update, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 text-sheraa-primary px-8"
          >
            {update.icon}
            <span className="text-sm font-medium">{update.text}</span>
            <span className="mx-4 text-sheraa-primary/30">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeUpdates;
