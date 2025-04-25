
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative pt-16 pb-32 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              <span className="block text-sheraa-dark">Empowering</span>
              <span className="block text-sheraa-primary">Entrepreneurs in Sharjah</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Sheraa is a launchpad for aspiring entrepreneurs who want to build innovative startup ventures. We provide a foundation of knowledge, access to investors, and a vibrant community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white px-6 py-4 rounded-md text-base sm:text-lg font-medium">
                Explore Our Programs
              </Button>
              <Button variant="outline" className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-light px-6 py-4 rounded-md text-base sm:text-lg font-medium">
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decoration */}
        <div className="hidden lg:block absolute right-0 top-1/4 transform -translate-y-1/2">
          <div className="w-72 h-72 rounded-full bg-sheraa-accent opacity-70"></div>
        </div>
        <div className="hidden lg:block absolute right-24 bottom-1/3 transform -translate-y-1/2">
          <div className="w-40 h-40 rounded-full bg-sheraa-secondary opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
