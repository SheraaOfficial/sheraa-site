
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Award, Book } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const SEFSection = () => {
  const isMobile = useIsMobile();

  const stats = [
    { value: "14,000+", label: "Attendees", icon: Users },
    { value: "780+", label: "Speakers", icon: Award },
    { value: "250+", label: "Activities", icon: Book },
    { value: "130+", label: "Investor Meetings", icon: MapPin }
  ];

  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-gradient-to-br from-[#1A1F2C] via-[#2D1A2C] to-[#3D1A2C]">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 mix-blend-overlay" />
      
      {/* Background gradient blobs */}
      <motion.div 
        className="absolute top-10 right-10 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-fuchsia-500/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block bg-gradient-to-r from-[#D946EF]/20 to-purple-600/20 px-4 py-1 rounded-full text-[#D946EF] text-sm font-medium mb-5 border border-[#D946EF]/20">
              THE REGION'S PREMIER ENTREPRENEURSHIP FESTIVAL
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-5 bg-gradient-to-r from-white via-purple-100 to-fuchsia-100 bg-clip-text text-transparent">
              Sharjah Entrepreneurship Festival 2026
            </h2>
            
            <p className="text-gray-300 mb-6">
              Experience two electrifying days of innovation and meaningful connections at SRTI Park, Sharjah.
            </p>

            {/* Stats - Condensed into one row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex flex-col items-center text-center p-2"
                >
                  <stat.icon className="w-5 h-5 text-[#D946EF] mb-2" />
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                className="bg-[#D946EF] hover:bg-[#D946EF]/90"
              >
                <Link to="/events/sef">Learn More</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-[#D946EF] text-[#D946EF] hover:bg-[#D946EF]/10"
              >
                <Link to="/events/sef/register">Get Your Pass</Link>
              </Button>
            </div>
          </motion.div>

          {/* Event Details Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 overflow-hidden relative"
          >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full blur-xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500 to-fuchsia-500 rounded-full blur-xl" />
            </div>

            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#D946EF] to-purple-400 bg-clip-text text-transparent relative z-10">
              Event Details
            </h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <Calendar className="w-5 h-5 text-[#D946EF]" />
                <div>
                  <div className="text-sm text-gray-400">Date</div>
                  <div className="font-medium text-white">January 31 - February 1, 2026</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-[#D946EF]" />
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="font-medium text-white">SRTI Park, Sharjah</div>
                </div>
              </div>

              {/* Last updated timestamp */}
              <div className="text-xs text-gray-500 mt-4">
                Last updated: April 28, 2025
              </div>
            </div>
            
            <Button 
              asChild 
              className="w-full mt-8 bg-gradient-to-r from-[#D946EF] to-purple-600 hover:opacity-90 relative z-10"
            >
              <Link to="/events/sef/register">Register Now</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SEFSection;
