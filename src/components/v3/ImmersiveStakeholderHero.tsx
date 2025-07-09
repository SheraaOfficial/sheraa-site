import React, { useState } from "react";
import { motion } from "framer-motion";
import { ImmersiveParallaxSystem } from "@/components/v3/effects/ImmersiveParallaxSystem";
import { CinematicEntrance } from "@/components/v3/effects/CinematicEntrance";
import { ScrollStorytellingFramework } from "@/components/v3/effects/ScrollStorytellingFramework";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { ArrowRight, Crown, Building, Handshake, TrendingUp } from "lucide-react";

const ImmersiveStakeholderHero: React.FC = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  const parallaxLayers = {
    background: {
      speed: -200,
      elements: (
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-yellow-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-yellow-500/15 to-orange-400/10 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-amber-300/10 to-yellow-400/5 rounded-full blur-3xl" />
        </div>
      )
    },
    midground: {
      speed: -100,
      elements: (
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-amber-400/30 rotate-45 animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-12 h-12 border-2 border-yellow-500/40 rotate-12 animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-2/3 left-2/3 w-8 h-8 border border-orange-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      )
    },
    foreground: {
      speed: -50,
      elements: (
        <div className="container mx-auto px-4 py-20 min-h-screen flex items-center">
          <div className="w-full max-w-5xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Partner with Excellence.
                </span>
                <br />
                <span className="text-gray-800">Shape the Future of Innovation.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Join Sharjah's premier innovation ecosystem. Connect with world-class startups, 
                drive strategic partnerships, and amplify your impact in the region's most dynamic entrepreneurial hub.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton asChild size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-500">
                  <Link to="/v3/stakeholders/partnership-opportunities" className="flex items-center gap-2">
                    <Crown className="w-5 h-5" />
                    Explore Partnerships
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </GradientButton>
              </div>
            </motion.div>

            {/* Stakeholder Value Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {[
                { icon: Building, title: "Corporate Innovation", color: "from-amber-500 to-yellow-500" },
                { icon: Handshake, title: "Strategic Alliances", color: "from-yellow-500 to-orange-500" },
                { icon: TrendingUp, title: "Investment Access", color: "from-orange-500 to-red-500" },
                { icon: Crown, title: "Executive Network", color: "from-purple-500 to-pink-500" }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-amber-200/50 text-center shadow-lg"
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
      title: 'Partnership Excellence',
      triggerPoint: 0,
      content: <div className="h-screen" />
    },
    {
      id: 'journey',
      title: 'Strategic Impact',
      triggerPoint: 0.25,
      content: (
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
            Elevate Your Strategic Position
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access exclusive opportunities to partner with cutting-edge startups and drive innovation 
            across Sharjah's thriving entrepreneurial ecosystem.
          </p>
        </div>
      )
    }
  ];

  return (
    <>
      {!showMainContent && (
        <CinematicEntrance
          persona="stakeholder"
          onComplete={() => setShowMainContent(true)}
        />
      )}
      
      {showMainContent && (
        <ScrollStorytellingFramework
          chapters={storyChapters}
          persona="stakeholder"
        >
          <ImmersiveParallaxSystem
            layers={parallaxLayers}
            persona="stakeholder"
            viewport="desktop"
            className="min-h-screen"
          />
        </ScrollStorytellingFramework>
      )}
    </>
  );
};

export default ImmersiveStakeholderHero;