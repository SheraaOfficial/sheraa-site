
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Megaphone, Award, Star, Users } from "lucide-react";

const MarqueeUpdates = () => {
  const updates = [
    {
      icon: <Calendar className="w-4 h-4" />,
      text: "🚀 S3 Incubator Demo Day - May 15th | 12 promising startups pitching to investors & ecosystem partners",
      urgent: true
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "🎯 Access Sharjah Challenge 2025: POC contracts worth AED 250K+ available for global startups",
      urgent: true
    },
    {
      icon: <Megaphone className="w-4 h-4" />,
      text: "💡 Startup Dojo Summer Program: 8-week intensive incubation for university students",
      urgent: false
    },
    {
      icon: <Award className="w-4 h-4" />,
      text: "🏆 52% of Sheraa startups are women-led - Breaking barriers together in entrepreneurship",
      urgent: false
    },
    {
      icon: <Star className="w-4 h-4" />,
      text: "🤝 140+ ecosystem partners supporting Sharjah's innovation journey and startup growth",
      urgent: false
    },
    {
      icon: <Users className="w-4 h-4" />,
      text: "📈 Sharjah climbs to 7th place in MENA startup ecosystem rankings - Rising innovation hub",
      urgent: false
    },
    {
      icon: <Calendar className="w-4 h-4" />,
      text: "🌟 SEF 2026 planning underway - The region's premier entrepreneurship festival returns",
      urgent: false
    },
    {
      icon: <Award className="w-4 h-4" />,
      text: "💼 18,000+ youth upskilled through Sheraa's entrepreneurship programs and initiatives",
      urgent: false
    },
    {
      icon: <Star className="w-4 h-4" />,
      text: "📊 71% startup survival rate - Well above global average through founder-first support",
      urgent: false
    },
    {
      icon: <Megaphone className="w-4 h-4" />,
      text: "🌍 180+ startups supported | $248M+ revenue generated | 1,900+ jobs created in ecosystem",
      urgent: false
    },
  ];

  return (
    <div className="bg-gradient-to-r from-sheraa-dark via-sheraa-primary to-sheraa-dark border-y border-white/10 py-4 w-full relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
      
      <div className="flex whitespace-nowrap animate-marquee">
        {[...updates, ...updates].map((update, index) => (
          <motion.div
            key={index}
            className={`inline-flex items-center gap-3 px-8 relative ${
              update.urgent ? 'text-yellow-300' : 'text-white/90'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <div className={`p-1 rounded-full ${update.urgent ? 'bg-yellow-300/20' : 'bg-white/10'}`}>
              {update.icon}
            </div>
            <span className={`text-sm font-medium ${update.urgent ? 'font-semibold' : ''}`}>
              {update.text}
            </span>
            <span className="mx-4 text-white/30">•</span>
            {update.urgent && (
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeUpdates;
