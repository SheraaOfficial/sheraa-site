import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SEFSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-sheraa-dark-DEFAULT to-sheraa-dark-lighter text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <div className="inline-block bg-sheraa-secondary px-4 py-1 rounded-full text-white text-sm font-medium mb-4">
              Annual Event
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Sharjah Entrepreneurship Festival</h2>
            <p className="text-lg text-gray-300 mb-6">
              The region's largest celebration of entrepreneurs, changemakers, and creative thinkers. SEF brings together founders, investors, and ecosystem players for two days of inspiration, learning, and connection.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2 text-sheraa-secondary">5,000+</div>
                <p className="text-gray-300">Attendees</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2 text-sheraa-secondary">100+</div>
                <p className="text-gray-300">Speakers</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2 text-sheraa-secondary">50+</div>
                <p className="text-gray-300">Sessions</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-sheraa-secondary hover:bg-sheraa-secondary/90">
                <Link to="/events/sef">Learn More</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/events/sef/register">Get Your Pass</Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-48 h-48 bg-sheraa-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-sheraa-primary/20 rounded-full blur-xl"></div>
              <div className="relative bg-gradient-to-br from-sheraa-primary/90 to-sheraa-secondary/90 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">SEF 2025</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-300 font-medium">Date</div>
                    <div className="font-medium">February 10-11, 2025</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-300 font-medium">Location</div>
                    <div className="font-medium">Sharjah Research, Technology and Innovation Park</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-300 font-medium">Theme</div>
                    <div className="font-medium">Building the Future of Entrepreneurship</div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild className="w-full bg-white text-sheraa-primary hover:bg-white/90">
                    <Link to="/events/sef/register">Register Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEFSection;
