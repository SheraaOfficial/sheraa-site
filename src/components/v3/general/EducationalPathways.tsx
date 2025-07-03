
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Trophy, Gear, Users, Clock, ArrowRight } from "lucide-react";

const EducationalPathways: React.FC = () => {
  const pathways = [
    {
      id: 1,
      title: "What is Entrepreneurship?",
      icon: Lightbulb,
      description: "Start from basics - understand what entrepreneurship really means",
      content: "Interactive explainer, myths vs reality, different types of entrepreneurs",
      time: "15 minutes",
      color: "#F59E0B",
      bgColor: "#FEF3C7",
    },
    {
      id: 2,
      title: "Explore Success Stories",
      icon: Trophy,
      description: "Get inspired by real founders who started just like you",
      content: "Video interviews, journey timelines, lessons learned",
      time: "30 minutes",
      color: "#A0826D",
      bgColor: "#F3F0ED",
    },
    {
      id: 3,
      title: "Test Your Idea",
      icon: Gear,
      description: "Have a business idea? See if it has potential",
      content: "Idea validation quiz, market research basics, feedback tools",
      time: "20 minutes",
      color: "#059669",
      bgColor: "#D1FAE5",
    },
    {
      id: 4,
      title: "Join the Community",
      icon: Users,
      description: "Connect with like-minded people and start networking",
      content: "Community forums, local events, mentorship matching",
      time: "Ongoing",
      color: "#DC2626",
      bgColor: "#FEE2E2",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-[#374151] mb-4"
          >
            Choose Your Learning Adventure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Pick the path that matches your curiosity level. Each journey is designed 
            to build your confidence step by step.
          </motion.p>
        </div>

        {/* Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((pathway, index) => (
            <motion.div
              key={pathway.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Header with Icon */}
                <CardHeader className="pb-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: pathway.bgColor }}
                  >
                    <pathway.icon
                      className="w-8 h-8"
                      style={{ color: pathway.color }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#374151] group-hover:text-[#A0826D] transition-colors">
                    {pathway.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pathway.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Content Description */}
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                    {pathway.content}
                  </p>

                  {/* Time Estimate */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-[#A0826D]">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{pathway.time}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-[#A0826D] hover:bg-[#A0826D]/90 text-white group-hover:shadow-lg transition-all duration-300"
                    size="sm"
                  >
                    {pathway.id === 1 && "Learn the Basics"}
                    {pathway.id === 2 && "Meet Entrepreneurs"}
                    {pathway.id === 3 && "Validate Ideas"}
                    {pathway.id === 4 && "Connect Now"}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#A0826D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Not sure where to start? Take our quick assessment to get personalized recommendations.
          </p>
          <Button
            variant="outline"
            className="border-[#A0826D] text-[#A0826D] hover:bg-[#A0826D]/10"
          >
            Take Assessment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationalPathways;
