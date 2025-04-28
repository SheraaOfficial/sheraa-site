
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const SEFSection = () => {
  const isMobile = useIsMobile();

  const stats = [
    { value: "14,000+", label: "Attendees", icon: Users },
    { value: "780+", label: "Speakers", icon: Award },
    { value: "250+", label: "Activities", icon: Calendar },
    { value: "130+", label: "Investor Meetings", icon: MapPin }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-[#1A1F2C] to-[#2D1A2C]">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 mix-blend-overlay" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-gradient-to-r from-[#D946EF]/20 to-purple-600/20 px-4 py-1 rounded-full text-[#D946EF] text-sm font-medium mb-6 border border-[#D946EF]/20">
              THE REGION'S LARGEST ENTREPRENEURSHIP FESTIVAL
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-fuchsia-100 bg-clip-text text-transparent">
              Sharjah Entrepreneurship Festival 2026
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Experience two transformative days of global innovation and meaningful connections at SRTI Park, Sharjah.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                >
                  <stat.icon className="w-5 h-5 text-[#D946EF] mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
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
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#D946EF] to-purple-400 bg-clip-text text-transparent">
              Event Details
            </h3>
            
            <div className="space-y-6">
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
            </div>
            
            <Button 
              asChild 
              className="w-full mt-8 bg-gradient-to-r from-[#D946EF] to-purple-600 hover:opacity-90"
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
