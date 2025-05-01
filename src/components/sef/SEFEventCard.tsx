
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight, Users } from "lucide-react";

interface SEFEventCardProps {
  hasRevealed: boolean;
}

const SEFEventCard: React.FC<SEFEventCardProps> = ({ hasRevealed }) => {
  return (
    <motion.div 
      initial={{
        opacity: 0,
        x: 30,
        y: 10
      }} 
      animate={hasRevealed ? {
        opacity: 1,
        x: 0,
        y: 0
      } : {
        opacity: 0,
        x: 30,
        y: 10
      }} 
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 20,
        delay: 0.5
      }} 
      whileHover={{
        y: -5,
        transition: { duration: 0.3 }
      }}
      className="bg-gradient-to-br from-indigo-700/30 to-indigo-900/40 backdrop-blur-md rounded-2xl border border-indigo-400/20 
               shadow-xl shadow-indigo-900/20 overflow-hidden max-w-md w-full"
    >
      {/* Top decorative pattern */}
      <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600" />
      
      {/* Card Header */}
      <div className="px-6 py-5 border-b border-indigo-500/20">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-indigo-300">2026</span> Event Details
        </h3>
      </div>
      
      {/* Card Content */}
      <div className="p-6 space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-indigo-500/20 rounded-full p-2.5">
            <Calendar className="w-6 h-6 text-indigo-300" />
          </div>
          <div>
            <div className="text-sm text-indigo-200/70 mb-1">Date</div>
            <div className="font-medium text-white text-lg">January 31 - February 1, 2026</div>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-indigo-500/20 rounded-full p-2.5">
            <MapPin className="w-6 h-6 text-indigo-300" />
          </div>
          <div>
            <div className="text-sm text-indigo-200/70 mb-1">Location</div>
            <div className="font-medium text-white text-lg">SRTI Park, Sharjah</div>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-indigo-500/20 rounded-full p-2.5">
            <Users className="w-6 h-6 text-indigo-300" />
          </div>
          <div>
            <div className="text-sm text-indigo-200/70 mb-1">Expected Attendance</div>
            <div className="font-medium text-white text-lg">14,000+ Attendees</div>
          </div>
        </div>
        
        {/* Multiple CTAs for increased flexibility */}
        <div className="pt-4 space-y-4">
          <Button 
            asChild 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
          >
            <Link to="/events/sef/register" className="flex items-center justify-center gap-2 group">
              <span>REGISTER YOUR INTEREST</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            className="w-full border-indigo-500/30 text-indigo-200 hover:bg-indigo-500/10"
          >
            <Link to="/events/sef/agenda" className="group">
              <span className="group-hover:text-indigo-300 transition-colors duration-300">View Full Agenda</span>
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="ghost" 
            className="w-full text-indigo-200/70 hover:text-indigo-100 hover:bg-indigo-500/10"
          >
            <Link to="/events/sef/faq" className="group">
              <span>Frequently Asked Questions</span>
            </Link>
          </Button>
        </div>
        
        {/* Last updated timestamp */}
        <div className="text-xs text-indigo-300/50 text-center border-t border-indigo-500/10 pt-4 mt-4">
          Last updated: April 28, 2025
        </div>
      </div>
    </motion.div>
  );
};

export default SEFEventCard;
