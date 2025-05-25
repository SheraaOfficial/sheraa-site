
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Rocket, Globe, Building2, Star, Zap } from "lucide-react";

const whyChooseSheraa = [
  {
    icon: Users,
    title: "Founder-Focused",
    description: "We prioritize your needs, offering equity-free support in many programs and flexible engagement models.",
    color: "from-blue-500/20 to-blue-600/20",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: Globe,
    title: "Ecosystem Access", 
    description: "Gain unparalleled access to mentors, investors, corporate partners, government entities, and a vibrant community.",
    color: "from-green-500/20 to-green-600/20",
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400"
  },
  {
    icon: Rocket,
    title: "Stage-Specific Support",
    description: "Whether you're exploring an idea or ready to scale globally, we have a program tailored for your stage.",
    color: "from-purple-500/20 to-purple-600/20",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    icon: Building2,
    title: "Sharjah Advantage",
    description: "Leverage Sharjah's strategic location, business-friendly environment, and thriving innovation clusters.",
    color: "from-orange-500/20 to-orange-600/20",
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-400"
  }
];

export const ProgramsOverviewSection: React.FC = () => {
  return (
    <section id="programs-overview" className="py-24 bg-gradient-to-br from-gray-50/80 to-white dark:from-sheraa-dark/50 dark:to-gray-900 relative overflow-hidden">
      {/* Background Enhancement */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-sheraa-primary/10 to-sheraa-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-sheraa-teal/10 to-sheraa-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-sheraa-primary/10 text-sheraa-primary rounded-full border border-sheraa-primary/20 shadow-sm backdrop-blur-sm mb-6"
          >
            <Star className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-semibold">Why Choose Sheraa</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-sheraa-dark dark:text-white">Comprehensive Support for </span>
            <span className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Every Stage
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sheraa offers a comprehensive pathway for entrepreneurs, providing tailored support from 
            ideation to global scaling with the resources, connections, and funding opportunities needed 
            to build successful and impactful ventures in Sharjah and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseSheraa.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border-0 shadow-lg group-hover:scale-105">
                {/* Gradient background overlay */}
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${feature.color} opacity-50`} />
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${feature.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className={`w-10 h-10 ${feature.iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-sheraa-dark dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <Zap className="w-6 h-6 text-sheraa-primary" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "180+", label: "Startups Supported" },
              { number: "$248M+", label: "Revenue Generated" },
              { number: "1,900+", label: "Jobs Created" },
              { number: "71%", label: "Survival Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
