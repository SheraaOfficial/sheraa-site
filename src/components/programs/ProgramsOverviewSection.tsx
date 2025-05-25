
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Rocket, Globe, Building2 } from "lucide-react";

const whyChooseSheraa = [
  {
    icon: Users,
    title: "Founder-Focused",
    description: "We prioritize your needs, offering equity-free support in many programs and flexible engagement models."
  },
  {
    icon: Globe,
    title: "Ecosystem Access", 
    description: "Gain unparalleled access to mentors, investors, corporate partners, government entities, and a vibrant community of peers."
  },
  {
    icon: Rocket,
    title: "Stage-Specific Support",
    description: "Whether you're exploring an idea or ready to scale globally, we have a program tailored for your stage."
  },
  {
    icon: Building2,
    title: "Sharjah Advantage",
    description: "Leverage Sharjah's strategic location, business-friendly environment, and thriving innovation clusters."
  }
];

export const ProgramsOverviewSection: React.FC = () => {
  return (
    <section id="programs-overview" className="py-24 bg-gray-50 dark:bg-sheraa-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-sheraa-dark dark:text-white">Why Choose </span>
            <span className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Sheraa Programs?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sheraa offers a comprehensive pathway for entrepreneurs, providing tailored support from 
            ideation to global scaling with the resources, connections, and funding opportunities needed 
            to build successful and impactful ventures.
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
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group bg-white dark:bg-sheraa-dark border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sheraa-primary to-sheraa-teal flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-sheraa-dark dark:text-white mb-4">
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
      </div>
    </section>
  );
};
