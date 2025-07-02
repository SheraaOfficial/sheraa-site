import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import ProgramMatchingQuiz from "@/components/v3/ProgramMatchingQuiz";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, TrendingUp, Award } from "lucide-react";

const ProgramMatchPage: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: "Personalized Recommendations",
      description: "Get matched with programs that fit your specific stage and goals"
    },
    {
      icon: Users,
      title: "Proven Success Rate",
      description: "95% of matched founders report high satisfaction with their program"
    },
    {
      icon: TrendingUp,
      title: "Faster Progress",
      description: "Right-fit programs accelerate your startup journey by 3x"
    },
    {
      icon: Award,
      title: "No Wrong Choice",
      description: "All Sheraa programs maintain 70%+ success rates"
    }
  ];

  return (
    <MainLayout>
      <section className="py-16 bg-gradient-to-br from-[#F5F2ED] to-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Find Your Perfect Program Match
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Answer 3 quick questions to discover which Sheraa program is designed 
              specifically for your startup stage, challenges, and funding goals.
            </p>
            
            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#A0826D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-[#A0826D]" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <ProgramMatchingQuiz />
        </div>
      </section>
    </MainLayout>
  );
};

export default ProgramMatchPage;