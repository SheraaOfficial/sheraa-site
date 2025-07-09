import React, { useState } from "react";
import { motion } from "framer-motion";
import { ImmersiveParallaxSystem } from "@/components/v3/effects/ImmersiveParallaxSystem";
import { CinematicEntrance } from "@/components/v3/effects/CinematicEntrance";
import { ScrollStorytellingFramework } from "@/components/v3/effects/ScrollStorytellingFramework";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Sparkles } from "@/components/ui/sparkles";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, Star, Lightbulb, Heart } from "lucide-react";

const ImmersiveGeneralHero: React.FC = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  const parallaxLayers = {
    background: {
      speed: -200,
      elements: (
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-sheraa-primary/20 to-sheraa-teal/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-sheraa-teal/15 to-sheraa-secondary/10 rounded-full blur-2xl" />
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-sheraa-light/20 to-sheraa-primary/10 rounded-full blur-3xl" />
        </div>
      )
    },
    midground: {
      speed: -100,
      elements: (
        <div className="absolute inset-0">
          <Sparkles className="opacity-20">
            <div className="w-full h-full" />
          </Sparkles>
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
                <span className="bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-secondary bg-clip-text text-transparent">
                  Welcome to Innovation.
                </span>
                <br />
                <span className="text-gray-800">Discover Your Path Forward.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Whether you're a student with a bold idea, an entrepreneur ready to scale, 
                or a partner looking to drive innovation - Sheraa is where potential meets opportunity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton asChild size="lg" className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal">
                  <Link to="/v3" className="flex items-center gap-2">
                    <Compass className="w-5 h-5" />
                    Find Your Path
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </GradientButton>
              </div>
            </motion.div>

            {/* Universal Value Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {[
                { icon: Lightbulb, title: "Innovation Hub", color: "from-sheraa-primary to-sheraa-teal" },
                { icon: Star, title: "World-Class Support", color: "from-sheraa-teal to-sheraa-secondary" },
                { icon: Heart, title: "Community First", color: "from-sheraa-secondary to-sheraa-accent" },
                { icon: Compass, title: "Guided Journey", color: "from-sheraa-accent to-sheraa-primary" }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-sheraa-light/50 text-center shadow-lg"
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
      title: 'Your Journey Begins',
      triggerPoint: 0,
      content: <div className="h-screen" />
    },
    {
      id: 'journey',
      title: 'Endless Possibilities',
      triggerPoint: 0.25,
      content: (
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
            Where Dreams Take Flight
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of innovators who have found their home in Sharjah's vibrant entrepreneurial ecosystem. 
            Your story of success starts here.
          </p>
        </div>
      )
    }
  ];

  return (
    <>
      {!showMainContent && (
        <CinematicEntrance
          persona="general"
          onComplete={() => setShowMainContent(true)}
        />
      )}
      
      {showMainContent && (
        <ScrollStorytellingFramework
          chapters={storyChapters}
          persona="general"
        >
          <ImmersiveParallaxSystem
            layers={parallaxLayers}
            persona="general"
            viewport="desktop"
            className="min-h-screen"
          />
        </ScrollStorytellingFramework>
      )}
    </>
  );
};

export default ImmersiveGeneralHero;