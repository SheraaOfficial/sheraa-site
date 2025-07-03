
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import SimplifiedYoungFounderSpotlight from "@/components/v3/young/SimplifiedYoungFounderSpotlight";
import YoungEntrepreneurNavigation from "@/components/v3/young/YoungEntrepreneurNavigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Heart, Users, TrendingUp } from "lucide-react";

const FoundersPage: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Young Founders Featured"
    },
    {
      icon: TrendingUp,
      value: "AED 2M+",
      label: "Combined Revenue"
    },
    {
      icon: Heart,
      value: "100K+",
      label: "Total Likes"
    },
    {
      icon: Play,
      value: "500K+",
      label: "Video Views"
    }
  ];

  return (
    <MainLayout>
      <YoungEntrepreneurNavigation />
      <section className="py-16 bg-black text-white min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-black mb-4 young-gradient-text">
              🌟 Young Founder Spotlight
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get inspired by real stories from young entrepreneurs building the future from Sharjah. 
              Swipe through their journeys and see what's possible!
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-0">
                  <CardContent className="p-4 text-center">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-sm text-gray-400 mb-8">
              Use arrow keys ↑↓ or swipe to navigate • Tap to pause/play
            </div>
          </div>

          {/* Video Feed */}
          <div className="flex justify-center">
            <SimplifiedYoungFounderSpotlight />
          </div>

          {/* Submit Story CTA */}
          <div className="mt-12 text-center">
            <Card className="bg-white/10 backdrop-blur-sm border-0 max-w-md mx-auto">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Share Your Story</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Are you building something amazing? We'd love to feature your journey!
                </p>
                <Button className="young-gradient-dopamine text-white font-bold w-full">
                  Submit Your Story
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FoundersPage;
