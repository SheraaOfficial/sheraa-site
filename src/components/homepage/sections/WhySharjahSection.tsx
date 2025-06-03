
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Globe, Award, Users, Zap, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const WhySharjahSection: React.FC = () => {
  const advantages = [
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Gateway to MENA markets with world-class connectivity",
      highlight: "Bridge to 2B+ people"
    },
    {
      icon: Globe,
      title: "Cultural Heritage",
      description: "Rich traditions meeting modern innovation",
      highlight: "UNESCO World Heritage"
    },
    {
      icon: Award,
      title: "Innovation Hub",
      description: "Home to leading universities and research centers",
      highlight: "#3 MENA Ecosystem"
    },
    {
      icon: Users,
      title: "Quality of Life",
      description: "Modern amenities with traditional values",
      highlight: "Safe & Welcoming"
    },
    {
      icon: Zap,
      title: "Business Support",
      description: "Entrepreneur-friendly policies and incentives",
      highlight: "Government Backing"
    },
    {
      icon: Building,
      title: "Global Network",
      description: "Connect with international opportunities",
      highlight: "45+ Countries"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-sheraa-light/20 via-white to-blue-50/30 dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-sheraa-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20 mb-6">
            <MapPin className="w-5 h-5 text-sheraa-primary" />
            <span className="text-sm font-medium text-sheraa-primary">Where Heritage Meets Innovation</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent">
            Why Sharjah?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover why Sharjah is the ideal destination for entrepreneurs and startups. 
            From its strategic location to its rich cultural heritage, Sharjah offers a unique 
            environment where traditional values and modern innovation create unlimited possibilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <div className="relative bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm rounded-3xl p-8 border border-sheraa-primary/10 hover:border-sheraa-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sheraa-primary to-sheraa-teal rounded-t-3xl" />
                
                <div className="w-16 h-16 rounded-2xl bg-sheraa-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-8 h-8 text-sheraa-primary" />
                </div>
                
                <div className="text-sm font-bold text-sheraa-primary mb-2">
                  {advantage.highlight}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ranking highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-sheraa-primary/5 via-white to-sheraa-teal/5 dark:from-sheraa-primary/10 dark:via-sheraa-dark/50 dark:to-sheraa-teal/10 rounded-2xl p-8 border border-sheraa-primary/10 backdrop-blur-sm mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.span 
                className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-sheraa-primary to-sheraa-teal"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                #3
              </motion.span>
              <div className="text-left">
                <div className="text-2xl font-bold text-sheraa-dark dark:text-white">
                  MENA's Top Startup
                </div>
                <div className="text-2xl font-bold text-sheraa-dark dark:text-white">
                  Ecosystem
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Startup Genome Report 2024
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Join a thriving ecosystem where innovation meets opportunity, 
              backed by government support and a vibrant entrepreneurial community.
            </p>
          </div>
          
          <Button asChild size="lg" className="group bg-sheraa-primary hover:bg-sheraa-primary/90 shadow-xl hover:shadow-sheraa-primary/25 transition-all duration-300">
            <Link to="/about" className="flex items-center gap-2">
              Learn More About Sharjah
              <MapPin className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
