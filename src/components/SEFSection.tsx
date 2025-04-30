
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Award, Book, ArrowRight } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { BeamsBackground } from "./ui/beams-background";

const SEFSection = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px 0px" });
  const [hasRevealed, setHasRevealed] = useState(false);
  
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
  
  useEffect(() => {
    if (isInView && !hasRevealed) {
      const timer = setTimeout(() => {
        setHasRevealed(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasRevealed]);

  const stats = [
    { value: "14,000+", label: "Attendees", icon: Users },
    { value: "780+", label: "Speakers", icon: Award },
    { value: "250+", label: "Activities", icon: Book },
    { value: "130+", label: "Investor Meetings", icon: MapPin }
  ];
  
  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      id="sef-section"
    >
      {/* Use BeamsBackground instead of a static image */}
      <BeamsBackground intensity="strong">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001A33]/90 to-[#1A1F2C]/95" />
      </BeamsBackground>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content Section - Takes more space on desktop */}
          <div className="lg:col-span-7 text-white">
            {/* Animated badge with reveal effect */}
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
            
            {/* Fun reveal gimmick for the heading */}
            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                animate={hasRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 50, 
                  damping: 12,
                  delay: 0.1
                }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
              >
                <span className={cn(
                  "inline-block",
                  hasRevealed ? "bg-gradient-to-r from-white via-[#FED700] to-white bg-clip-text text-transparent" : "text-white"
                )}>
                  SHARJAH ENTREPRENEURSHIP
                </span>
                <br />
                <span className={cn(
                  "inline-block mt-2",
                  hasRevealed ? "bg-gradient-to-r from-white via-[#FED700] to-white bg-clip-text text-transparent" : "text-white"
                )}>
                  FESTIVAL 2026
                </span>
              </motion.h2>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-lg mb-8 max-w-2xl"
            >
              Experience two electrifying days of innovation, inspiration, and meaningful connections 
              at SRTI Park, Sharjah. Join thousands of entrepreneurs, investors, and innovators from across 
              the globe.
            </motion.p>

            {/* Stats - Animated reveal */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={hasRevealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <stat.icon className="w-5 h-5 text-[#FED700] mb-2" />
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
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
              animate={hasRevealed ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
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
      </div>
    </section>
  );
};

export default SEFSection;
