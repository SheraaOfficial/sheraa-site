
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Users, Globe, Trophy, ArrowRight, Sparkles } from "lucide-react";

export const SEFHighlightSection: React.FC = () => {
  const stats = [
    { number: "14,000+", label: "Attendees", icon: Users },
    { number: "300+", label: "Global Speakers", icon: Globe },
    { number: "250+", label: "Activities", icon: Calendar },
    { number: "45+", label: "Countries", icon: Trophy }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-sheraa-sef-primary/5 to-sheraa-sef-accent/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-sef-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-sef-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-sef-primary/20 to-sheraa-sef-accent/20 border border-sheraa-sef-primary/30 mb-6">
            <Sparkles className="w-5 h-5 text-sheraa-sef-primary animate-pulse" />
            <span className="text-sm font-bold bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent">
              The Region's Largest Entrepreneurship Festival
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-sef-primary via-sheraa-sef-accent to-sheraa-sef-primary bg-clip-text text-transparent leading-tight">
            SEF: Where We Belong
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the energy of the Sharjah Entrepreneurship Festival, bringing together thousands 
            of entrepreneurs, investors, creators, and leaders from around the globe for inspiration, 
            connection, and growth.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="text-center group"
            >
              <div className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm rounded-3xl p-8 border border-sheraa-sef-primary/20 hover:border-sheraa-sef-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-sheraa-sef-primary/20 to-sheraa-sef-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-sheraa-sef-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-sheraa-sef-primary/5 via-white to-sheraa-sef-accent/5 dark:from-sheraa-sef-primary/10 dark:via-sheraa-dark/50 dark:to-sheraa-sef-accent/10 rounded-3xl p-8 border border-sheraa-sef-primary/20 backdrop-blur-sm mb-8">
            <div className="text-lg font-medium text-sheraa-sef-primary mb-2">Save the Date</div>
            <div className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent">
              January 31 - February 1, 2026
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Sharjah Research, Technology, and Innovation Park (SRTIP)
            </div>
          </div>
          
          <Button asChild size="lg" className="group bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent hover:from-sheraa-sef-primary/90 hover:to-sheraa-sef-accent/90 text-white shadow-2xl hover:shadow-sheraa-sef-primary/25 transition-all duration-300">
            <Link to="/events/sef-landing" className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 animate-pulse" />
              Learn More About SEF
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
