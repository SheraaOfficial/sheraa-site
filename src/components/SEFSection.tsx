
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Award, Book, ArrowRight } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const SEFSection = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px 0px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Subtle parallax effect that's efficient on mobile
  const bgPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["0%", "20%"]
  );
  
  const stats = [
    { value: "14,000+", label: "Attendees", icon: Users },
    { value: "780+", label: "Speakers", icon: Award },
    { value: "250+", label: "Activities", icon: Book },
    { value: "130+", label: "Investor Meetings", icon: MapPin }
  ];
  
  const backgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2400&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: isMobile ? "scroll" : "fixed",
    y: isMobile ? 0 : bgPositionY
  };
  
  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      id="sef-section"
    >
      {/* Background with efficient parallax */}
      <motion.div 
        className="absolute inset-0 z-0 bg-[#1A1F2C]/90"
        style={backgroundStyle}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C]/80 to-[#1A1F2C]/98" />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content Section - Takes more space on desktop */}
          <div className="lg:col-span-7 text-white">
            {/* Optimized badge with reduced animation complexity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-[#FED700]/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#FED700]/20"
            >
              <span className="text-[#FED700] text-sm md:text-base font-medium">
                THE REGION'S LARGEST ENTREPRENEURSHIP FESTIVAL
              </span>
            </motion.div>
            
            {/* Heading with improved shimmer effect - disabled on mobile */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
            >
              <span className={isMobile ? "text-white" : "bg-gradient-to-r from-white via-[#FED700] to-white bg-clip-text text-transparent"}>
                SHARJAH ENTREPRENEURSHIP FESTIVAL 2026
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-lg mb-8"
            >
              Experience two electrifying days of innovation and meaningful connections at SRTI Park, Sharjah.
            </motion.p>

            {/* Stats - Simple row with optimized animations */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                >
                  <stat.icon className="w-5 h-5 text-[#FED700] mb-2" />
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
            
            {/* CTA Button - Mobile friendly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" variant="outline" className="border-[#FED700] text-[#FED700] hover:bg-[#FED700]/10 group">
                <Link to="/events/sef/register" className="flex items-center gap-2">
                  <span>REGISTER YOUR INTEREST</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Event Details Card - Side section */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-[#FED700]/30 to-transparent p-6 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white">Event Details</h3>
              </div>
              
              {/* Card Content */}
              <div className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#FED700]/10 rounded-full p-2">
                    <Calendar className="w-6 h-6 text-[#FED700]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Date</div>
                    <div className="font-medium text-white text-lg">January 31 - February 1, 2026</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#FED700]/10 rounded-full p-2">
                    <MapPin className="w-6 h-6 text-[#FED700]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Location</div>
                    <div className="font-medium text-white text-lg">SRTI Park, Sharjah</div>
                  </div>
                </div>
                
                {/* Multiple CTAs for increased flexibility */}
                <div className="pt-4">
                  <Button asChild className="w-full mb-3 bg-[#FED700] hover:bg-[#FED700]/80 text-black">
                    <Link to="/events/sef/register" className="flex items-center justify-center gap-2">
                      <span>REGISTER YOUR INTEREST</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-white/5">
                    <Link to="/events/sef/agenda">View Full Agenda</Link>
                  </Button>
                </div>
                
                {/* Last updated timestamp */}
                <div className="text-xs text-gray-500">
                  Last updated: April 28, 2025
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Simple decorative elements - lightweight for mobile */}
        <div className="hidden md:block absolute top-16 left-16 w-24 h-24 rounded-full bg-[#FED700]/10 blur-xl" />
        <div className="hidden md:block absolute bottom-16 right-16 w-32 h-32 rounded-full bg-[#FED700]/5 blur-xl" />
      </div>
    </section>
  );
};

export default SEFSection;
