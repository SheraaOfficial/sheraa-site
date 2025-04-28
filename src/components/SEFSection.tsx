import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Award, Book } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Particles } from "@/components/ui/particles";
import { BeamsBackground } from "@/components/ui/beams-background";
const SEFSection = () => {
  const isMobile = useIsMobile();
  const stats = [{
    value: "14,000+",
    label: "Attendees",
    icon: Users
  }, {
    value: "780+",
    label: "Speakers",
    icon: Award
  }, {
    value: "250+",
    label: "Activities",
    icon: Book
  }, {
    value: "130+",
    label: "Investor Meetings",
    icon: MapPin
  }];
  return <section className="py-12 md:py-20 relative overflow-hidden bg-[#1A1F2C]">
      <BeamsBackground intensity="subtle" />
      <Particles className="absolute inset-0" quantity={100} color="#FED700" ease={80} staticity={30} size={0.6} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-0 px-[100px] my-[41px] mx-[39px]">
          {/* Content Section */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true,
          margin: "-100px"
        }} className="relative z-10 my-0 mx-0 py-0 px-0">
            <div className="inline-block bg-[#FED700]/20 px-4 py-1 rounded-full text-[#FED700] text-sm font-medium mb-5 border border-[#FED700]/20">THE REGION'S LARGEST ENTREPRENEURSHIP FESTIVAL</div>
            
            <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-white via-[#FED700]/90 to-[#FED700]/70 bg-clip-text text-transparent mx-0 md:text-7xl">SHARJAH          ENTREPRENEURSHIP          FESTIVAL 2026</h2>
            
            <p className="text-gray-300 mb-6">
              Experience two electrifying days of innovation and meaningful connections at SRTI Park, Sharjah.
            </p>

            {/* Stats - Condensed into one row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              {stats.map((stat, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} viewport={{
              once: true,
              margin: "-100px"
            }} className="flex flex-col items-center text-center p-2 px-[141px] py-0 my-0">
                  <stat.icon className="w-5 h-5 text-[#FED700] mb-2" />
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>)}
            </div>

            
          </motion.div>

          {/* Event Details Card */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} viewport={{
          once: true,
          margin: "-100px"
        }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 overflow-hidden relative">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 my-0 mx-0 px-0">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#FED700] to-[#FED700]/50 rounded-full blur-xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#FED700] to-[#FED700]/50 rounded-full blur-xl" />
            </div>

            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#FED700] to-[#FED700]/70 bg-clip-text text-transparent relative z-10">
              Event Details
            </h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <Calendar className="w-5 h-5 text-[#FED700]" />
                <div>
                  <div className="text-sm text-gray-400">Date</div>
                  <div className="font-medium text-white">January 31 - February 1, 2026</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-[#FED700]" />
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
            
            <Button asChild className="w-full mt-8 bg-gradient-to-r from-[#FED700] to-[#FED700]/80 hover:opacity-90 relative z-10 text-black">
              <Link to="/events/sef/register">Register Now</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default SEFSection;