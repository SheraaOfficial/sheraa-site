
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Megaphone, Award, Star, Users } from "lucide-react";

const MarqueeUpdates = () => {
  const updates = [
    {
      icon: <Calendar className="w-4 h-4" />,
      text: "🚀 S3 Incubator Demo Day - May 15th | 12 startups pitching to investors at SRTIP",
      urgent: true
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "⏰ Access Sharjah Challenge 2025 - Last 30 days to apply | AED 250K+ contracts available",
      urgent: true
    },
    {
      icon: <Megaphone className="w-4 h-4" />,
      text: "📚 Startup Dojo Summer Program now accepting applications from UAE university students",
      urgent: false
    },
    {
      icon: <Award className="w-4 h-4" />,
      text: "🎉 Candam Technologies wins $68K BEEAH pilot | RecySmart deployed across University City",
      urgent: false
    },
    {
      icon: <Star className="w-4 h-4" />,
      text: "💰 S3 Cohort 12 launching August | $30K equity-free funding + 6-month intensive program",
      urgent: false
    },
    {
      icon: <Users className="w-4 h-4" />,
      text: "☕ Founder Fridays weekly at Sheraa HQ | Meet mentors, investors & fellow entrepreneurs",
      urgent: false
    },
    {
      icon: <Calendar className="w-4 h-4" />,
      text: "🎪 SEF 2026 announced | Jan 31-Feb 1 at SRTIP | 15,000+ expected changemakers",
      urgent: false
    },
    {
      icon: <Award className="w-4 h-4" />,
      text: "👩‍💼 52% women-led startups in our portfolio | Leading diversity in MENA entrepreneurship",
      urgent: false
    },
    {
      icon: <Star className="w-4 h-4" />,
      text: "📊 71% startup survival rate | 3x global average through Sheraa's founder-first approach",
      urgent: false
    },
    {
      icon: <Megaphone className="w-4 h-4" />,
      text: "🌍 180+ startups supported | $248M+ revenue generated | 1,900+ jobs created",
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
