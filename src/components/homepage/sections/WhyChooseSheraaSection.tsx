
import React from "react";
import { motion } from "framer-motion";
import { Zap, Globe, Users, Award, Star, Rocket, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const WhyChooseSheraaSection: React.FC = () => {
  const reasons = [
    {
      icon: Users,
      title: "Founder-First Approach",
      description: "Equity-free support with founder ownership at the core",
      highlight: "Keep 100% equity",
      color: "sheraa-primary"
    },
    {
      icon: Globe,
      title: "Global Market Access",
      description: "Bridge to MENA markets with international connections",
      highlight: "45+ countries",
      color: "sheraa-teal"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "71% survival rate with $248M+ revenue generated",
      highlight: "180+ startups",
      color: "sheraa-orange"
    },
    {
      icon: Rocket,
      title: "Sharjah Advantage",
      description: "Strategic UAE location with government backing",
      highlight: "#3 MENA ecosystem",
      color: "sheraa-primary"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-sheraa-light/20 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30 relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-orange/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20 mb-6">
            <Star className="w-5 h-5 text-sheraa-primary" />
            <span className="text-sm font-medium text-sheraa-primary">Why Founders Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
            Built for Changemakers Like You
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Whether you're a student with a spark or an entrepreneur ready to scale globally, 
            Sheraa provides the <span className="font-semibold text-sheraa-primary">ecosystem</span> where 
            potential meets opportunity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
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
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${reason.color} to-${reason.color}/60 rounded-t-3xl`} />
                
                <div className={`w-16 h-16 rounded-2xl bg-${reason.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className={`w-8 h-8 text-${reason.color}`} />
                </div>
                
                <div className={`text-sm font-bold text-${reason.color} mb-2`}>
                  {reason.highlight}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action with founder testimonial quote */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-sheraa-primary/5 via-white to-sheraa-teal/5 dark:from-sheraa-primary/10 dark:via-sheraa-dark/50 dark:to-sheraa-teal/10 rounded-2xl p-8 border border-sheraa-primary/10 backdrop-blur-sm mb-8">
            <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
              "Sheraa didn't just provide funding - they gave us the network, mentorship, and credibility to scale globally. The ecosystem here is unmatched."
            </blockquote>
            <div className="text-sm font-medium text-sheraa-primary">
              — Successful Sheraa Alumni
            </div>
          </div>
          
          <Button asChild size="lg" className="group bg-sheraa-primary hover:bg-sheraa-primary/90 shadow-xl hover:shadow-sheraa-primary/25 transition-all duration-300">
            <Link to="/programs" className="flex items-center gap-2">
              Start Your Journey
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
