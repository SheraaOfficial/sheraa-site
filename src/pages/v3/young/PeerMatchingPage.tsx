import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import PeerMatchingSystem from "@/components/v3/young/PeerMatchingSystem";
import YoungEntrepreneurNavigation from "@/components/v3/young/YoungEntrepreneurNavigation";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, TrendingUp, MessageCircle } from "lucide-react";

const PeerMatchingPage: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Active Founders"
    },
    {
      icon: Heart,
      value: "89%",
      label: "Match Success Rate"
    },
    {
      icon: TrendingUp,
      value: "150+",
      label: "Teams Formed"
    },
    {
      icon: MessageCircle,
      value: "2.3K",
      label: "Daily Messages"
    }
  ];

  return (
    <MainLayout>
      <YoungEntrepreneurNavigation />
      <section className="py-16 young-particle-bg bg-gradient-to-br from-white via-pink-50/30 to-purple-50/30 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header Stats */}
          <div className="text-center mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-4 text-center">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Matching System */}
          <PeerMatchingSystem />
        </div>
      </section>
    </MainLayout>
  );
};

export default PeerMatchingPage;