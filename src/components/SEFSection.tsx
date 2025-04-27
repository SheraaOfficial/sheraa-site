import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Star, ChartBar, Layers, Award, Store, Activity, Users, Infinity } from "lucide-react";
import { motion } from "framer-motion";

const SEFSection = () => {
  const sefFacts = [
    { 
      icon: Users, 
      label: "Attendees", 
      value: "14,000+", 
      color: "text-[#9b87f5]",
      delay: 0.1
    },
    { 
      icon: Award, 
      label: "Visionary Speakers", 
      value: "780+", 
      color: "text-[#D946EF]",
      delay: 0.2
    },
    { 
      icon: Store, 
      label: "Startup Showcases", 
      value: "350+", 
      color: "text-[#9b87f5]",
      delay: 0.3
    },
    { 
      icon: Activity, 
      label: "Dynamic Activities", 
      value: "250+", 
      color: "text-[#D946EF]",
      delay: 0.4
    },
    { 
      icon: Users, 
      label: "Exclusive Investor Meetings", 
      value: "130+", 
      color: "text-[#9b87f5]",
      delay: 0.5
    },
    { 
      icon: Infinity, 
      label: "Experiences", 
      value: "∞", 
      color: "text-[#D946EF]",
      delay: 0.6
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#1A1F2C] via-[#2D1A2C] to-[#3D1A2C] before:absolute before:inset-0 before:bg-gradient-to-t before:from-purple-900/30 before:via-fuchsia-900/30 before:to-transparent before:opacity-60">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 mix-blend-overlay animate-pulse-slow" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-fuchsia-900/20 to-rose-900/20 animate-pulse-slow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-gradient-to-r from-[#D946EF]/20 to-purple-600/20 px-4 py-1 rounded-full text-[#D946EF] text-sm font-medium mb-4 border border-[#D946EF]/20 backdrop-blur-sm">
                THE REGION'S LARGEST ENTREPRENEURSHIP FESTIVAL RETURNS JANUARY 2026
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-fuchsia-100 bg-clip-text text-transparent">
                Sharjah Entrepreneurship Festival
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Experience two transformative days of global innovation, knowledge sharing, and meaningful connections at SRTI Park, Sharjah.
              </p>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10"
              >
                {sefFacts.map((fact, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <fact.icon className={`w-8 h-8 ${fact.color} mb-3`} />
                    </motion.div>
                    <motion.div 
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: fact.delay, duration: 0.3 }}
                      className={`text-3xl font-black mb-2 ${fact.color}`}
                    >
                      {fact.value}
                    </motion.div>
                    <p className="text-gray-300 font-medium text-sm">{fact.label}</p>
                  </motion.div>
                ))}
              </motion.div>
              
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
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent">SEF 2026</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-[#9b87f5] mt-1" />
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Date</div>
                    <div className="font-medium text-white">January 31 - February 1, 2026</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#9b87f5] mt-1" />
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Location</div>
                    <div className="font-medium text-white">SRTI Park, Sharjah</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Star className="w-5 h-5 text-[#D946EF] mt-1" />
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Theme</div>
                    <div className="font-medium text-white">Building the Future of Entrepreneurship</div>
                  </div>
                </div>
              </div>
              
              <Button 
                asChild 
                className="w-full mt-8 bg-gradient-to-r from-[#9b87f5] to-[#D946EF] hover:opacity-90 transition-opacity"
              >
                <Link to="/events/sef/register">Register Now</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-[#1A1F2C]/80 to-[#1A1F2C] pointer-events-none" />
    </section>
  );
};

export default SEFSection;
