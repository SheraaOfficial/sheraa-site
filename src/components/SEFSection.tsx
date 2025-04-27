
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Star, ChartBar, Layers, Award } from "lucide-react";
import { motion } from "framer-motion";

const SEFSection = () => {
  const sefFacts = [
    { 
      icon: Layers, 
      label: "Startups Showcasing", 
      value: "780+", 
      color: "text-[#9b87f5]",
      delay: 0.1
    },
    { 
      icon: Award, 
      label: "Dynamic Activities", 
      value: "350+", 
      color: "text-[#D946EF]",
      delay: 0.2
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
              viewport={{ once: true }}
            >
              <div className="inline-block bg-[#D946EF]/10 px-4 py-1 rounded-full text-[#D946EF] text-sm font-medium mb-4">
                Annual Flagship Event
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent">
                Sharjah Entrepreneurship Festival
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Experience two transformative days of inspiration, knowledge sharing, and meaningful connections.
              </p>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
              >
                {sefFacts.map((fact, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-[#9b87f5]/20 flex flex-col items-center text-center"
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
                      className={`text-4xl font-black mb-2 ${fact.color}`}
                    >
                      {fact.value}
                    </motion.div>
                    <p className="text-gray-600 font-medium">{fact.label}</p>
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
