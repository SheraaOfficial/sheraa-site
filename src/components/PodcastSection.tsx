
import React from "react";
import { Button } from "@/components/ui/button";
import { Headphones, Play } from "lucide-react";
import { motion } from "framer-motion";

const PodcastSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-sheraa-dark via-[#2D1A2C] to-[#1A1F2C]">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 left-0">
              <span className="inline-block bg-gradient-to-r from-[#D946EF]/20 to-purple-600/20 px-4 py-1 rounded-full text-[#D946EF] text-sm font-medium border border-[#D946EF]/20 backdrop-blur-sm">
                NEW EPISODE
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-fuchsia-100 bg-clip-text text-transparent">
              "Yalsat Nwakhtha" Podcast
            </h2>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 space-y-6">
              <div className="flex items-center gap-3 text-[#D946EF]">
                <Headphones className="w-5 h-5" />
                <span className="font-medium">Episode 1: H.E. Sheikha Lubna bint Khalid Al Qasimi</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Join us with the UAE's first female minister, a leader who has inspired generations with her efforts to break barriers and bring about change.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-white font-medium">In this episode:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D946EF]">•</span>
                    How is a journey that makes a difference built?
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D946EF]">•</span>
                    Is courage something leaders are born with, or is it gained through experience?
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D946EF]">•</span>
                    Which book inspired Sheikha Lubna?
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-300 italic">
                "An open invitation for the youth to become changemakers and partners in building a brighter and more inspiring future."
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-[#D946EF] hover:bg-[#D946EF]/90 transition-colors"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Listen Now
                </Button>
                <Button 
                  variant="outline"
                  className="border-[#D946EF] text-[#D946EF] hover:bg-[#D946EF]/10"
                >
                  Subscribe to Podcast
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D946EF]/20 via-purple-600/10 to-transparent rounded-2xl backdrop-blur-sm" />
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img 
                src="/podcast-cover.jpg" 
                alt="Yalsat Nwakhtha Podcast with H.E. Sheikha Lubna" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
