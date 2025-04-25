
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WhySharjah = () => {
  const advantages = [
    {
      title: "Strategic Location",
      description: "Access to markets across the MENA region with excellent connectivity."
    },
    {
      title: "Business-Friendly Environment",
      description: "Supportive regulations, tax benefits, and ease of setting up."
    },
    {
      title: "Innovation Ecosystem",
      description: "Universities, research centers, and innovation hubs."
    },
    {
      title: "Quality of Life",
      description: "Safe environment, cultural richness, and excellent infrastructure."
    },
    {
      title: "Government Support",
      description: "Initiatives and subsidies to support entrepreneurs and startups."
    },
    {
      title: "Cost Advantages",
      description: "Competitive costs for business setup and operations."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Sharjah?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Sharjah offers a unique environment for entrepreneurs and startups to thrive. From its strategic location to its focus on innovation and culture, discover why Sharjah is the ideal place to grow your business.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <svg className="h-6 w-6 text-sheraa-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button asChild className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                <Link to="/about/why-sharjah">Learn More About Sharjah</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            {/* This would typically be an image of Sharjah skyline or business district */}
            <div className="bg-sheraa-light rounded-lg p-12 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-sheraa-primary mb-4">#3</div>
                <p className="text-xl font-medium mb-2">In MENA's Top Startup Ecosystems</p>
                <p className="text-gray-600">According to Startup Genome Report 2024</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-sheraa-secondary/20 rounded-full blur-md"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sheraa-primary/20 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySharjah;
