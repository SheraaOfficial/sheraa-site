import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import IdeaValidatorGame from "@/components/v3/young/IdeaValidatorGame";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Brain, Trophy, Share2 } from "lucide-react";

const IdeaValidatorPage: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: "Discover Your Entrepreneur Type",
      description: "Get personalized insights into your strengths and startup style"
    },
    {
      icon: Brain,
      title: "Validate Your Ideas",
      description: "Learn if your concept has real market potential"
    },
    {
      icon: Trophy,
      title: "Get Custom Roadmap",
      description: "Receive a 4-week action plan tailored to your results"
    },
    {
      icon: Share2,
      title: "Share & Connect",
      description: "Share results with friends and find like-minded founders"
    }
  ];

  return (
    <MainLayout>
      <section className="py-16 young-particle-bg bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-6 young-gradient-text">
              🎯 The Idea Validator Challenge
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Take our gamified 5-question quiz to discover your entrepreneurial superpower 
              and get a personalized roadmap to startup success!
            </p>
            
            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 young-dopamine-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 young-gradient-dopamine rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <IdeaValidatorGame />
        </div>
      </section>
    </MainLayout>
  );
};

export default IdeaValidatorPage;