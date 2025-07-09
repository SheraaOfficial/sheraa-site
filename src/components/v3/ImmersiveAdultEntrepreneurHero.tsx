import React, { useState } from "react";
import { motion } from "framer-motion";
import { ImmersiveParallaxSystem } from "@/components/v3/effects/ImmersiveParallaxSystem";
import { CinematicEntrance } from "@/components/v3/effects/CinematicEntrance";
import { ScrollStorytellingFramework } from "@/components/v3/effects/ScrollStorytellingFramework";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { RetroGrid } from "@/components/ui/retro-grid";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Trophy, DollarSign } from "lucide-react";

const ImmersiveAdultEntrepreneurHero: React.FC = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  const parallaxLayers = {
    background: {
      speed: -200,
      elements: (
        <div className="absolute inset-0">
          <RetroGrid className="opacity-10" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#A0826D]/20 to-[#8A6F5B]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-[#8A6F5B]/15 to-[#A0826D]/10 rounded-full blur-2xl" />
        </div>
      )
    },
    midground: {
      speed: -100,
      elements: (
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#A0826D]/10 rounded-full animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-[#A0826D]/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      )
    },
    foreground: {
      speed: -50,
      elements: (
        <div className="container mx-auto px-4 py-20 min-h-screen flex items-center">
          <div className="w-full max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="text-gray-900">Turn Your Startup Idea Into </span>
                <span className="text-[#A0826D]">$37M+ Success</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Join 200+ founders who raised funding through Sheraa's proven system. 
                <span className="font-semibold"> No equity required. No lengthy applications.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton asChild size="lg" className="bg-[#A0826D] hover:bg-[#8A6F5B]">
                  <Link to="/v3/program-match" className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Find Your Program
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </GradientButton>
              </div>
            </motion.div>

            {/* Professional Benefits Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {[
                { icon: DollarSign, title: "AED 35K Funding", color: "from-green-500 to-emerald-600" },
                { icon: Users, title: "Expert Mentors", color: "from-blue-500 to-indigo-600" },
                { icon: Trophy, title: "Proven Success", color: "from-purple-500 to-violet-600" },
                { icon: Target, title: "Market Access", color: "from-orange-500 to-red-500" }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/50 text-center shadow-lg"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-sm text-gray-800">{card.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      )
    }
  };

  const storyChapters = [
    {
      id: 'hero',
      title: 'Your Success Story',
      triggerPoint: 0,
      content: <div className="h-screen" />
    },
    {
      id: 'journey',
      title: 'Your Professional Journey',
      triggerPoint: 0.25,
      content: (
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#A0826D]">
            From Idea to Investment-Ready
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the proven path that has helped 200+ entrepreneurs secure funding and scale their ventures.
          </p>
        </div>
      )
    }
  ];

  return (
    <>
      {!showMainContent && (
        <CinematicEntrance
          persona="adult"
          onComplete={() => setShowMainContent(true)}
        />
      )}
      
      {showMainContent && (
        <ScrollStorytellingFramework
          chapters={storyChapters}
          persona="adult"
        >
          <ImmersiveParallaxSystem
            layers={parallaxLayers}
            persona="adult"
            viewport="desktop"
            className="min-h-screen"
          />
        </ScrollStorytellingFramework>
      )}
    </>
  );
};

export default ImmersiveAdultEntrepreneurHero;