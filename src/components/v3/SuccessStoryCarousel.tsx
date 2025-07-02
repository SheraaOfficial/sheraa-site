import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ChevronLeft, ChevronRight, Users, TrendingUp, Award, Globe } from "lucide-react";

interface SuccessStory {
  id: string;
  founder: string;
  company: string;
  industry: string;
  thumbnail: string;
  videoUrl: string;
  tagline: string;
  description: string;
  metrics: {
    icon: React.ComponentType<any>;
    label: string;
    value: string;
  }[];
  achievements: string[];
}

const successStories: SuccessStory[] = [
  {
    id: "sarah-edtech",
    founder: "Sarah Al-Mansouri",
    company: "EduFlow",
    industry: "EdTech",
    thumbnail: "/placeholder.svg",
    videoUrl: "#",
    tagline: "From teacher to AED 2M funding",
    description: "How Sheraa's S3 program helped me validate my EdTech idea and secure Series A funding in 8 months",
    metrics: [
      { icon: TrendingUp, label: "Funding raised", value: "AED 2.1M" },
      { icon: Users, label: "Current team size", value: "12 employees" },
      { icon: Award, label: "Time in program", value: "6 months" }
    ],
    achievements: ["Series A funding secured", "12-person team built", "3 UAE school partnerships"]
  },
  {
    id: "ahmed-fintech",
    founder: "Ahmed Hassan",
    company: "PayForward",
    industry: "FinTech",
    thumbnail: "/placeholder.svg",
    videoUrl: "#",
    tagline: "Zero to 10K users in 4 months",
    description: "The mentorship and investor connections at Sheraa accelerated our growth beyond expectations",
    metrics: [
      { icon: Users, label: "User growth", value: "0 to 10,000" },
      { icon: TrendingUp, label: "Monthly revenue", value: "AED 50K" },
      { icon: Globe, label: "Investor meetings", value: "15 secured" }
    ],
    achievements: ["10K+ active users", "AED 50K monthly revenue", "Seed round in progress"]
  },
  {
    id: "priya-sustainability",
    founder: "Priya Sharma",
    company: "GreenTech Solutions",
    industry: "Sustainability",
    thumbnail: "/placeholder.svg",
    videoUrl: "#",
    tagline: "Government contract worth AED 500K",
    description: "Sheraa's network opened doors I never thought possible for a first-time entrepreneur",
    metrics: [
      { icon: Award, label: "Contract value", value: "AED 500K" },
      { icon: Globe, label: "Market expansion", value: "3 emirates" },
      { icon: Users, label: "Team growth", value: "5 to 18 people" }
    ],
    achievements: ["Government partnership secured", "3 emirate expansion", "18-person team"]
  }
];

const SuccessStoryCarousel = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const story = successStories[currentStory];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A0826D]/10 border border-[#A0826D]/20 mb-6">
            <Award className="w-5 h-5 text-[#A0826D]" />
            <span className="text-sm font-medium text-[#A0826D]">Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Real Founders, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how entrepreneurs like you built successful businesses with Sheraa's support
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStory}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden border-0 shadow-xl">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Video Section */}
                      <div className="relative aspect-video md:aspect-square bg-gray-900">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#A0826D]/20 to-transparent" />
                        
                        {/* Video Thumbnail */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setShowVideo(true)}
                            className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                          >
                            <Play className="w-8 h-8 text-[#A0826D] ml-1" />
                          </motion.button>
                        </div>

                        {/* Founder Info Overlay */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white">
                            <h3 className="font-bold text-lg">{story.founder}</h3>
                            <p className="text-sm opacity-90">Founder, {story.company}</p>
                            <Badge variant="secondary" className="mt-2 bg-white/20 text-white">
                              {story.industry}
                            </Badge>
                          </div>
                        </div>

                        {/* Tagline */}
                        <div className="absolute top-4 left-4 right-4">
                          <div className="bg-[#A0826D] text-white px-4 py-2 rounded-lg text-center font-semibold">
                            {story.tagline}
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 flex flex-col justify-between">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-3">
                              {story.company}
                            </h4>
                            <p className="text-gray-600 text-lg leading-relaxed">
                              "{story.description}"
                            </p>
                          </div>

                          {/* Metrics */}
                          <div className="grid grid-cols-1 gap-4">
                            {story.metrics.map((metric, index) => (
                              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="w-10 h-10 bg-[#A0826D]/20 rounded-full flex items-center justify-center">
                                  <metric.icon className="w-5 h-5 text-[#A0826D]" />
                                </div>
                                <div>
                                  <div className="font-bold text-gray-900">{metric.value}</div>
                                  <div className="text-sm text-gray-600">{metric.label}</div>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Achievements */}
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                            <ul className="space-y-1">
                              {story.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                  <div className="w-1.5 h-1.5 bg-[#A0826D] rounded-full" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevStory}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 border-gray-200 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextStory}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 border-gray-200 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Story Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentStory ? "bg-[#A0826D]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12">
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-[#A0826D] text-[#A0826D] hover:bg-[#A0826D] hover:text-white px-8 py-3"
            >
              <a href="/community/startups">
                View All Success Stories
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoryCarousel;