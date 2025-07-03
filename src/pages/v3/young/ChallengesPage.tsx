import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import ChallengeFeed from "@/components/v3/young/ChallengeFeed";
import YoungEntrepreneurNavigation from "@/components/v3/young/YoungEntrepreneurNavigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Target, Users, Clock } from "lucide-react";

const ChallengesPage: React.FC = () => {
  const howItWorks = [
    {
      step: "1",
      title: "Choose Your Challenge",
      description: "Pick from daily, weekly, or monthly challenges that match your goals",
      icon: Target
    },
    {
      step: "2", 
      title: "Complete the Mission",
      description: "Follow the clear objectives and track your progress in real-time",
      icon: Clock
    },
    {
      step: "3",
      title: "Compete & Connect",
      description: "See how you rank against peers and collaborate with other participants",
      icon: Users
    },
    {
      step: "4",
      title: "Win Amazing Prizes",
      description: "Earn points, badges, and real rewards like mentorship and funding",
      icon: Trophy
    }
  ];

  return (
    <MainLayout>
      <YoungEntrepreneurNavigation />
      <section className="py-16 young-particle-bg bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 min-h-screen">
        <div className="container mx-auto px-4">
          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 young-gradient-text">
              How Challenge Feed Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg young-dopamine-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 young-gradient-energy rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {item.step}
                    </div>
                    <item.icon className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Challenge Feed */}
          <ChallengeFeed />

          {/* Create Challenge CTA */}
          <div className="mt-12">
            <Card className="border-0 young-gradient-success text-white shadow-2xl">
              <CardContent className="p-8 text-center">
                <Trophy className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Want to Create Your Own Challenge?</h3>
                <p className="text-lg opacity-90 mb-6">
                  Have an idea for a challenge that could help other young entrepreneurs? 
                  Submit your proposal and we might feature it!
                </p>
                <Button variant="outline" className="bg-white text-green-600 hover:bg-gray-100">
                  Submit Challenge Idea
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ChallengesPage;