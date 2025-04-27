
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Target } from "lucide-react";

const CommunitySection = () => {
  const features = [
    {
      icon: Users,
      title: "Networking Opportunities",
      description: "Connect with other founders, mentors, and investors."
    },
    {
      icon: Calendar,
      title: "Exclusive Events",
      description: "Access to workshops, talks, and community gatherings."
    },
    {
      icon: Target,
      title: "Resource Access",
      description: "Get support, advice, and resources for your startup."
    }
  ];

  const partnershipItems = [
    "Corporate Innovation Programs",
    "Community Sponsorships",
    "Co-hosted Events & Workshops"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-block bg-sheraa-primary/10 px-4 py-1 rounded-full text-sheraa-primary text-sm font-medium mb-6">
              Community
            </div>
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg text-gray-600 mb-8">
              Connect with fellow entrepreneurs, industry experts, and investors in Sheraa's vibrant community. Access exclusive events, networking opportunities, and resources to help your startup grow.
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <feature.icon className="h-6 w-6 text-sheraa-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="bg-sheraa-primary hover:bg-sheraa-primary/90">
              <Link to="/community/join">Become a Member</Link>
            </Button>
          </div>
          
          <div className="bg-sheraa-light p-8 rounded-2xl">
            <div className="inline-block bg-sheraa-secondary/10 px-4 py-1 rounded-full text-sheraa-secondary text-sm font-medium mb-6">
              Partnerships
            </div>
            <h3 className="text-2xl font-bold mb-4">Partnership Opportunities</h3>
            <p className="text-gray-600 mb-8">
              Sheraa collaborates with organizations that share our vision of fostering innovation and entrepreneurship in the region.
            </p>
            
            <div className="space-y-4 mb-8">
              {partnershipItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="h-8 w-8 rounded-full bg-sheraa-secondary/10 flex items-center justify-center text-sheraa-secondary font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild variant="outline" className="w-full border-sheraa-secondary text-sheraa-secondary hover:bg-sheraa-secondary/10">
              <Link to="/community/partnerships">Explore Partnerships</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
