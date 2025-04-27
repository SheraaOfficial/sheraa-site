import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Globe, Star, Users, Award, Target, ChartBar } from "lucide-react";
import { motion } from "framer-motion";

const SEFSection = () => {
  const sefFacts = [
    { icon: Users, label: "Attendees", value: "14,000+", color: "text-[#9b87f5]" },
    { icon: Star, label: "Global Speakers", value: "300+", color: "text-[#D946EF]" },
    { icon: Target, label: "Activities", value: "250+", color: "text-[#F97316]" },
    { icon: ChartBar, label: "Countries", value: "45+", color: "text-[#06B6D4]" },
    { icon: Award, label: "Funding Pool", value: "700K AED", color: "text-[#22C55E]" },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#9b87f5]/5">
      {/* SEF pattern overlay */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block bg-[#D946EF]/10 px-4 py-1 rounded-full text-[#D946EF] text-sm font-medium mb-4">
                Annual Flagship Event
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent">
                Sharjah Entrepreneurship Festival
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                The region's largest celebration of entrepreneurs, changemakers, and creative thinkers. 
                Experience two transformative days of inspiration, knowledge sharing, and meaningful connections.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                {sefFacts.map((fact, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl p-4 shadow-lg border border-[#9b87f5]/20 flex flex-col items-center text-center"
                  >
                    <fact.icon className={`w-6 h-6 ${fact.color} mb-2`} />
                    <div className={`text-2xl font-black mb-1 ${fact.color}`}>{fact.value}</div>
                    <p className="text-sm text-gray-600">{fact.label}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild 
                  className="bg-[#9b87f5] hover:bg-[#7E69AB] transition-colors"
                >
                  <Link to="/events/sef">Learn More</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/5"
                >
                  <Link to="/events/sef/register">Get Your Pass</Link>
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#9b87f5]/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#7E69AB]">SEF 2025</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-[#9b87f5] mt-1" />
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Date</div>
                    <div className="font-medium">February 10-11, 2025</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#9b87f5] mt-1" />
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="font-medium">Sharjah Research, Technology and Innovation Park</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Star className="w-5 h-5 text-[#D946EF] mt-1" />
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Theme</div>
                    <div className="font-medium">Building the Future of Entrepreneurship</div>
                  </div>
                </div>
              </div>
              
              <Button 
                asChild 
                className="w-full mt-8 bg-[#9b87f5] hover:bg-[#7E69AB] transition-colors"
              >
                <Link to="/events/sef/register">Register Now</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
};

export default SEFSection;
