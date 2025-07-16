
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Megaphone, Award, Star, Users } from "lucide-react";

const MarqueeUpdates = () => {
  const updates = [
    {
      icon: <Calendar className="w-4 h-4" />,
      text: "S3 Incubator Demo Day - May 15th | Watch 12 startups pitch to investors",
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "Access Sharjah Challenge 2025 Applications Open Until June 30th",
    },
    {
      icon: <Megaphone className="w-4 h-4" />,
      text: "Startup Dojo Summer Program - Applications open for university students",
    },
    {
      icon: <Award className="w-4 h-4" />,
      text: "Congratulations to Candam Technologies on their $68K pilot with BEEAH Group",
    },
    {
      icon: <Star className="w-4 h-4" />,
      text: "New S3 Cohort Starting August - Apply for $30K equity-free funding",
    },
    {
      icon: <Users className="w-4 h-4" />,
      text: "Founder Fridays Every Week at 4PM - Network with the ecosystem",
    },
    {
      icon: <Calendar className="w-4 h-4" />,
      text: "Sharjah Entrepreneurship Festival 2026 - Save the date: January 31-Feb 1",
    },
    {
      icon: <Award className="w-4 h-4" />,
      text: "52% of our supported startups are women-led - Breaking barriers together",
    },
    {
      icon: <Star className="w-4 h-4" />,
      text: "71% startup survival rate - Well above global average through quality support",
    },
  ];

  return (
    <div className="bg-sheraa-dark/95 border-y border-white/10 py-3 w-full">
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
    </div>
  );
};

export default MarqueeUpdates;
