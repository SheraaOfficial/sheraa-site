
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Handshake, Building2, Globe } from "lucide-react";

export const CommunityPartnersSection: React.FC = () => {
  const partnerships = [
    {
      icon: Building2,
      title: "Corporate Partners",
      description: "Industry leaders providing mentorship and market access",
      count: "50+ Partners",
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-600"
    },
    {
      icon: Globe,
      title: "Government Entities",
      description: "Strategic partnerships with UAE government bodies",
      count: "15+ Entities",
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-600"
    },
    {
      icon: Users,
      title: "Investor Network",
      description: "VCs, angels, and investment funds backing our startups",
      count: "40+ Investors",
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-600"
    },
    {
      icon: Handshake,
      title: "Ecosystem Partners",
      description: "Regional and global innovation hubs and accelerators",
      count: "30+ Partners",
      color: "from-orange-500/20 to-orange-600/20",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-sheraa-light/30 to-white dark:from-sheraa-dark/50 dark:to-sheraa-dark/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
            Powered by Community, Strengthened by Partnership
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Sheraa connects you to a vibrant network of founders, mentors, investors, 
            corporate leaders, and government entities, all dedicated to fostering innovation in Sharjah.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partnerships.map((partnership, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="group"
            >
              <div className="relative bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm rounded-3xl p-8 border border-sheraa-primary/10 hover:border-sheraa-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${partnership.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-sheraa-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <partnership.icon className={`w-8 h-8 ${partnership.iconColor}`} />
                  </div>
                  
                  <div className="text-sm font-bold text-sheraa-primary mb-2">
                    {partnership.count}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {partnership.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400">
                    {partnership.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
              <Link to="/community/join" className="flex items-center gap-2">
                Explore Membership
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
              <Link to="/community/partnerships" className="flex items-center gap-2">
                Partnership Opportunities
                <Handshake className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
