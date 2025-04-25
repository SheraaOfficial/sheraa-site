
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ImpactNumbers = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-sheraa-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sheraa-dark">
            Making a Real Impact in Sharjah's Economy
          </h2>
          <p className="text-lg text-gray-600">
            Through our initiatives and programs, we're driving economic growth and fostering innovation in the region. Here's how we're making a difference:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-sheraa-primary mb-4 animate-count-up">500+</div>
              <h3 className="text-xl font-semibold mb-3">Startups Supported</h3>
              <p className="text-gray-600">Empowering entrepreneurs to build innovative solutions</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-sheraa-primary mb-4">$50M+</div>
              <h3 className="text-xl font-semibold mb-3">Venture Capital Raised</h3>
              <p className="text-gray-600">Successfully funded startups in our ecosystem</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-sheraa-primary mb-4">2,500+</div>
              <h3 className="text-xl font-semibold mb-3">Jobs Created</h3>
              <p className="text-gray-600">Contributing to economic growth and employment</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-sheraa-primary mb-4">100+</div>
              <h3 className="text-xl font-semibold mb-3">Community Events</h3>
              <p className="text-gray-600">Building connections and fostering collaboration</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" variant="outline" className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-light">
            <Link to="/about/impact">Learn More About Our Impact</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
