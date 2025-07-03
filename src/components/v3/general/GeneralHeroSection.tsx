
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Lightbulb, Users, TrendingUp, Star } from "lucide-react";

const GeneralHeroSection: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const floatingElements = [
    { icon: Lightbulb, color: "#F59E0B", delay: 0 },
    { icon: Users, color: "#A0826D", delay: 0.5 },
    { icon: TrendingUp, color: "#059669", delay: 1 },
    { icon: Star, color: "#DC2626", delay: 1.5 },
  ];

  const testimonialBubbles = [
    { text: "Started with zero experience!", author: "Sarah M.", position: { top: "20%", left: "10%" } },
    { text: "Amazing community support", author: "Ahmed K.", position: { top: "60%", right: "15%" } },
    { text: "Learned so much in 3 months", author: "Fatima A.", position: { bottom: "30%", left: "5%" } },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FEFBF7] to-[#A0826D]/10 py-20 lg:py-28">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top: `${20 + index * 15}%`,
              left: `${10 + index * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center opacity-20"
              style={{ backgroundColor: element.color }}
            >
              <element.icon className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Testimonial Bubbles */}
      {testimonialBubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={bubble.position}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 + index * 0.3, duration: 0.5 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-[#A0826D]/20 max-w-48">
            <p className="text-sm text-gray-700 mb-2">"{bubble.text}"</p>
            <p className="text-xs text-[#A0826D] font-medium">- {bubble.author}</p>
          </div>
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#374151] leading-tight">
              Discover the
              <span className="text-[#A0826D] block sm:inline"> Entrepreneur Within You</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore Sharjah's thriving startup ecosystem and find your path to innovation. 
              No experience required - just curiosity and ambition.
            </p>
            
            <p className="text-lg text-gray-500 flex items-center justify-center gap-2">
              <Users className="w-5 h-5 text-[#A0826D]" />
              Join 5,000+ community members learning, connecting, and growing together
            </p>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex items-center justify-center gap-4 text-[#A0826D]"
          >
            <div className="w-8 h-1 bg-[#A0826D] rounded-full"></div>
            <span className="text-sm font-medium">Your journey starts here</span>
            <div className="w-8 h-1 bg-[#A0826D]/30 rounded-full"></div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-[#A0826D] hover:bg-[#A0826D]/90 text-white px-8 py-4 text-lg font-semibold"
            >
              Start Exploring
              <TrendingUp className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-[#A0826D] text-[#A0826D] hover:bg-[#A0826D]/10 px-8 py-4 text-lg"
              onClick={() => setShowVideoModal(true)}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Success Stories
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Video Modal - Simple implementation for now */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Success Stories</h3>
              <Button
                variant="ghost"
                onClick={() => setShowVideoModal(false)}
                className="text-gray-500"
              >
                ✕
              </Button>
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Video player will be integrated here</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GeneralHeroSection;
