
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Calendar, Coffee, BookOpen, ArrowRight, Users, Handshake } from "lucide-react";

export const CommunityEcosystemSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-sheraa-light/30 via-white to-sheraa-light/20 dark:from-sheraa-dark/50 dark:via-sheraa-dark/30 dark:to-sheraa-dark/50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
            Powered by Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12">
            Connect with founders, access resources, attend events, and become part of Sharjah's most vibrant innovation community.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Calendar,
                title: "SEF 2026",
                description: "The region's largest entrepreneurship festival with 14,000+ attendees and 300+ speakers",
                link: "/events/sef-landing",
                badge: "Jan 31-Feb 1",
                highlight: "Register Now"
              },
              {
                icon: Coffee,
                title: "Weekly Events",
                description: "Founder Fridays, workshops, pitch sessions, and networking mixers every week",
                link: "/events/upcoming",
                badge: "Every Friday",
                highlight: "4PM at SRTIP"
              },
              {
                icon: BookOpen,
                title: "Expert Resources",
                description: "50+ templates, 30+ mentors, and continuous learning resources for your journey",
                link: "/resources",
                badge: "Free Access",
                highlight: "Always Updated"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <Link to={item.link}>
                  <div className="relative p-8 rounded-2xl bg-white/90 dark:bg-sheraa-dark/80 border border-gray-200 dark:border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-xl group-hover:-translate-y-1">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium bg-sheraa-orange/10 text-sheraa-orange rounded-full">
                        {item.badge}
                      </span>
                    </div>
                    
                    <div className="w-14 h-14 rounded-full bg-sheraa-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-7 h-7 text-sheraa-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {item.description}
                    </p>
                    
                    <div className="text-sm font-medium text-sheraa-teal bg-sheraa-teal/10 px-3 py-1 rounded-full inline-block mb-4">
                      {item.highlight}
                    </div>
                    
                    <div className="flex items-center text-sm font-medium text-sheraa-primary group-hover:text-sheraa-primary/80">
                      Learn More 
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
              <Link to="/community/join" className="flex items-center gap-2">
                Join Our Community
                <Users className="w-4 h-4" />
              </Link>
            </GradientButton>
            
            <Button asChild variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
              <Link to="/community/partnerships" className="flex items-center gap-2">
                Become a Partner
                <Handshake className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
