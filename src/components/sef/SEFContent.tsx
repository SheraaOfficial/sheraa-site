
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";

interface SEFContentProps {
  isInView: boolean;
  hasRevealed: boolean;
}

const SEFContent: React.FC<SEFContentProps> = ({ isInView, hasRevealed }) => {
  const stats = [
    { value: "14,000+", label: "Attendees" },
    { value: "300+", label: "Speakers" },
    { value: "250+", label: "Activities" },
    { value: "45+", label: "Countries" }
  ];

  return (
    <div className="relative">
      {/* Clean, elegant background with subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-sheraa-primary/10 via-sheraa-primary/5 to-transparent rounded-3xl" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column - Content */}
        <div className="space-y-8">
          {/* Festival badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block py-2 px-4 bg-sheraa-primary/10 backdrop-blur-sm text-sheraa-primary rounded-full border border-sheraa-primary/20"
          >
            <span className="text-sm font-medium tracking-wide">
              SHARJAH ENTREPRENEURSHIP FESTIVAL
            </span>
          </motion.div>
          
          {/* Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-sheraa-dark"
          >
            Where Innovation<br />Meets Opportunity
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Join thousands of entrepreneurs, investors, and thought leaders at Sharjah's flagship
            innovation event. Two days of inspiration, connections, and opportunities to transform
            your entrepreneurial journey.
          </motion.p>
          
          {/* Stats bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={hasRevealed ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-8 pt-4"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={hasRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-2xl font-bold text-sheraa-primary">{stat.value}</span>
                <span className="text-sm text-gray-500">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white group"
            >
              <Link to="/events/sef/register" className="flex items-center gap-2">
                <span>Register for SEF</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-sheraa-primary/20 text-sheraa-primary hover:bg-sheraa-primary/5"
            >
              <Link to="/events/sef/agenda">Explore the agenda</Link>
            </Button>
          </motion.div>
        </div>
        
        {/* Right column - Event card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={hasRevealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          <div className="relative rounded-2xl bg-white shadow-lg overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-50">
              <BorderBeam 
                className="rounded-2xl" 
                size={300} 
                colorFrom="#003366" 
                colorTo="#008080"
                borderWidth={2}
                duration={20}
              />
            </div>
            
            {/* Card content */}
            <div className="relative z-10 p-6">
              <h3 className="text-xl font-bold text-sheraa-dark mb-6">SEF 2026</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-sheraa-primary/10 rounded-full p-2">
                    <Calendar className="w-5 h-5 text-sheraa-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Date</div>
                    <div className="font-medium">January 31 - February 1, 2026</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-sheraa-primary/10 rounded-full p-2">
                    <MapPin className="w-5 h-5 text-sheraa-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="font-medium">SRTI Park, Sharjah</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-sheraa-primary/10 rounded-full p-2">
                    <Users className="w-5 h-5 text-sheraa-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Expected Attendance</div>
                    <div className="font-medium">14,000+ Attendees</div>
                  </div>
                </div>
                
                <Button 
                  asChild
                  className="w-full mt-4 bg-sheraa-primary hover:bg-sheraa-primary/90 text-white"
                >
                  <Link to="/events/sef/register">Register Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SEFContent;
