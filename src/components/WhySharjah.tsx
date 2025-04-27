
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WhySharjah = () => {
  const advantages = [
    {
      title: "Strategic Location",
      description: "Gateway to MENA markets with world-class connectivity",
      iconPath: "M12 21L12 13M12 13V5M12 13H5M12 13H19",
    },
    {
      title: "Cultural Heritage",
      description: "Rich traditions meeting modern innovation",
      iconPath: "M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
    },
    {
      title: "Innovation Hub",
      description: "Home to leading universities and research centers",
      iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    },
    {
      title: "Quality of Life",
      description: "Modern amenities with traditional values",
      iconPath: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 9v6M12 9l4.5 2.5",
    },
    {
      title: "Business Support",
      description: "Entrepreneur-friendly policies and incentives",
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      title: "Global Network",
      description: "Connect with international opportunities",
      iconPath: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Arabic calligraphy-inspired background pattern */}
      <div className="absolute inset-0 bg-[url('/arabesque.svg')] opacity-5" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-sheraa-primary/10 px-4 py-1 rounded-full text-sheraa-primary text-sm font-medium mb-6">
              Why Choose Sharjah
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              Where Heritage Meets
              <span className="block text-sheraa-primary mt-2">Innovation</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-12">
              Discover why Sharjah is the ideal destination for entrepreneurs and startups. 
              From its strategic location to its rich cultural heritage, Sharjah offers a unique 
              environment where traditional values and modern innovation create unlimited possibilities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <svg 
                      className="w-6 h-6 text-sheraa-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d={advantage.iconPath}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Button 
              asChild 
              className="mt-12 bg-sheraa-primary hover:bg-sheraa-primary/90"
            >
              <Link to="/about/why-sharjah">Learn More About Sharjah</Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-6xl font-black text-sheraa-primary mb-4">#3</div>
                <p className="text-xl font-medium mb-2">
                  In MENA's Top Startup Ecosystems
                </p>
                <p className="text-gray-600">
                  According to Startup Genome Report 2024
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-sheraa-secondary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sheraa-primary/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySharjah;
