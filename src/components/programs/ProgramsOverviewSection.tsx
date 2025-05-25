
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, Rocket, Building2 } from "lucide-react";

const whyChooseSheraa = [
  {
    icon: Users,
    title: "Founder-First",
    description: "Keep 100% ownership. We invest in you, not take from you.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Globe,
    title: "Global Network", 
    description: "Connect with mentors, investors, and partners worldwide.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Rocket,
    title: "Proven Results",
    description: "71% of our startups are still thriving after 5 years.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Building2,
    title: "Market Access",
    description: "Direct connections to government and corporate partners.",
    color: "from-orange-500 to-orange-600"
  }
];

export const ProgramsOverviewSection: React.FC = () => {
  return (
    <section id="programs-overview" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Why Choose Sheraa?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're different from other accelerators. Here's what makes us the right choice 
            for ambitious entrepreneurs who want to succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {whyChooseSheraa.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-sheraa-dark group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Simple stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-sheraa-dark rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Track Record That Speaks
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "180+", label: "Startups" },
              { number: "$248M", label: "Revenue" },
              { number: "1,900+", label: "Jobs" },
              { number: "71%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
