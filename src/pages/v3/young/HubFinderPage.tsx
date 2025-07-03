import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import UniversityHubFinder from "@/components/v3/young/UniversityHubFinder";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Calendar, Trophy } from "lucide-react";

const HubFinderPage: React.FC = () => {
  const benefits = [
    {
      icon: MapPin,
      title: "Campus Communities",
      description: "Connect with entrepreneurial students right at your university"
    },
    {
      icon: Users,
      title: "Local Networking",
      description: "Meet founders in person and build stronger relationships"
    },
    {
      icon: Calendar,
      title: "Exclusive Events",
      description: "Access workshops, competitions, and talks happening on campus"
    },
    {
      icon: Trophy,
      title: "University Success",
      description: "Be part of your campus's startup success stories and achievements"
    }
  ];

  return (
    <MainLayout>
      <section className="py-16 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Benefits Grid */}
          <div className="mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* University Hub Finder */}
          <UniversityHubFinder />
        </div>
      </section>
    </MainLayout>
  );
};

export default HubFinderPage;