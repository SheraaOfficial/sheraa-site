import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSailboat from "./AnimatedSailboat";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-white to-sheraa-light min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-20 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl transform animate-pulse" />
        <div className="absolute -left-48 bottom-0 w-96 h-96 bg-sheraa-secondary/5 rounded-full blur-3xl transform animate-pulse delay-700" />
      </div>
      
      <AnimatedSailboat />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-block bg-sheraa-secondary/10 px-4 py-1 rounded-full text-sheraa-secondary text-sm font-medium mb-4 animate-fade-in">
            Empowering Innovation in Sharjah
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block text-sheraa-dark mb-2 animate-fade-in">Transform Your</span>
            <span className="block text-sheraa-primary animate-fade-in delay-200">Vision into Reality</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in delay-300 leading-relaxed">
            Join Sheraa's dynamic ecosystem where innovative startups thrive. We provide comprehensive support, expert mentorship, and access to a network of industry leaders to help turn your entrepreneurial dreams into successful ventures.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in delay-400">
            <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90 transform transition-all hover:scale-105">
              <Link to="/programs">Explore Our Programs</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-light transform transition-all hover:scale-105">
              <Link to="/community/join">Join Our Community</Link>
            </Button>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            <div className="relative group bg-[#D3E4FD] rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="relative p-4">
                <div className="text-3xl font-bold text-sheraa-primary mb-2">30+</div>
                <div className="text-sm text-gray-600">Global Partnerships</div>
              </div>
            </div>
            <div className="relative group bg-[#FDE1D3] rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="relative p-4">
                <div className="text-3xl font-bold text-orange-600 mb-2">12</div>
                <div className="text-sm text-gray-600">Industry Sectors</div>
              </div>
            </div>
            <div className="relative group bg-[#E5DEFF] rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="relative p-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                <div className="text-sm text-gray-600">Innovation Hubs</div>
              </div>
            </div>
            <div className="relative group bg-[#F2FCE2] rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="relative p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                <div className="text-sm text-gray-600">Corporate Partners</div>
              </div>
            </div>
            <div className="relative group bg-[#FFDEE2] rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="relative p-4">
                <div className="text-3xl font-bold text-pink-600 mb-2">5K+</div>
                <div className="text-sm text-gray-600">Community Members</div>
              </div>
            </div>
            <div className="relative group bg-[#FEF7CD] rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="relative p-4">
                <div className="text-3xl font-bold text-yellow-600 mb-2">150+</div>
                <div className="text-sm text-gray-600">Expert Mentors</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
