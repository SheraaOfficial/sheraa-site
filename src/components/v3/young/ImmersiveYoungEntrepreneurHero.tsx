import React, { useState } from "react";
import { motion } from "framer-motion";
import { ImmersiveParallaxSystem } from "@/components/v3/effects/ImmersiveParallaxSystem";
import { CinematicEntrance } from "@/components/v3/effects/CinematicEntrance";
import { ScrollStorytellingFramework } from "@/components/v3/effects/ScrollStorytellingFramework";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Sparkles } from "@/components/ui/sparkles";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Users, Trophy, Coffee } from "lucide-react";

const ImmersiveYoungEntrepreneurHero: React.FC = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  const parallaxLayers = {
    background: {
      speed: -200,
      elements: (
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-2xl" />
        </div>
      )
    },
    midground: {
      speed: -100,
      elements: (
        <div className="absolute inset-0">
          <Sparkles className="opacity-30">
            <div className="w-full h-full" />
          </Sparkles>
        </div>
      )
    },
    foreground: {
      speed: -50,
      elements: (
        <div className="container mx-auto px-4 py-20 min-h-screen flex items-center">
          <div className="w-full max-w-6xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  That Random 3AM Idea?
                </span>
                <br />
                <span className="text-gray-800">Let's Make It Your Empire</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Stop overthinking. Start building. Join 500+ student entrepreneurs who turned their dorm room dreams into real businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500">
                  <Link to="/v3/young/idea-validator" className="flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    Validate My Idea (3 min)
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </GradientButton>
              </div>
            </motion.div>

            {/* Gaming-style Bento Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {[
                { icon: Trophy, title: "AED 50K Prizes", color: "from-yellow-400 to-orange-500" },
                { icon: Users, title: "Find Your Tribe", color: "from-blue-400 to-purple-500" },
                { icon: Coffee, title: "Student Budget?", color: "from-green-400 to-teal-500" },
                { icon: Rocket, title: "That 3AM Idea?", color: "from-pink-400 to-red-500" }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: Math.random() * 6 - 3 }}
                  className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 text-center"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-sm">{card.title}</h3>
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
      title: 'Your Moment',
      triggerPoint: 0,
      content: <div className="h-screen" /> // Hero content handled by parallax
    },
    {
      id: 'journey',
      title: 'The Journey',
      triggerPoint: 0.25,
      content: (
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Your Entrepreneurial Journey Starts Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From that spark of an idea to building a thriving business - we're with you every step of the way.
          </p>
        </div>
      )
    }
  ];

  return (
    <>
      {!showMainContent && (
        <CinematicEntrance
          persona="young"
          onComplete={() => setShowMainContent(true)}
        />
      )}
      
      {showMainContent && (
        <ScrollStorytellingFramework
          chapters={storyChapters}
          persona="young"
        >
          <ImmersiveParallaxSystem
            layers={parallaxLayers}
            persona="young"
            viewport="desktop"
            className="min-h-screen"
          />
        </ScrollStorytellingFramework>
      )}
    </>
  );
};

export default ImmersiveYoungEntrepreneurHero;