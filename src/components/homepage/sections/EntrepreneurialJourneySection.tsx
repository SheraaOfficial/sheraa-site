
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Target, Users, Globe, Lightbulb } from "lucide-react";
import ProgramsOverview from "../../ProgramsOverview";

export const EntrepreneurialJourneySection: React.FC = () => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-primary/10 border border-sheraa-primary/20 mb-6">
            <Rocket className="w-5 h-5 text-sheraa-primary" />
            <span className="text-sm font-medium text-sheraa-primary">Your Journey Starts Here</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
            Programs Tailored for Growth
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            From validating your initial idea to scaling globally, we meet you exactly where you are 
            and help you reach where you want to be.
          </p>
          
          <ProgramsOverview />
        </motion.div>

        {/* The Sheraa Advantage */}
        <motion.div 
          className="relative bg-gradient-to-br from-sheraa-primary/5 via-white to-sheraa-teal/5 dark:from-sheraa-primary/10 dark:via-sheraa-dark/50 dark:to-sheraa-teal/10 rounded-3xl p-12 border border-sheraa-primary/10 backdrop-blur-sm overflow-hidden mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sheraa-orange/10 to-transparent rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Why Choose Sheraa?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're not just another accelerator - we're your long-term growth partner with proven results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Founder-First",
                description: "Equity-free programs with revenue-sharing models that keep you in control",
                stat: "$30K funding"
              },
              {
                icon: Users,
                title: "Deep Network",
                description: "140+ partners including government, corporates, and 30+ expert mentors",
                stat: "140+ partners"
              },
              {
                icon: Globe,
                title: "Sharjah Gateway",
                description: "Strategic location connecting MENA, Asia, and global markets",
                stat: "3 continents"
              },
              {
                icon: Lightbulb,
                title: "Sector Focus",
                description: "Deep expertise in Sustainability, EdTech, Creative Industries, and DeepTech",
                stat: "4 specialties"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="group text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-sheraa-dark/80 border border-sheraa-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-sheraa-primary" />
                </div>
                <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">{item.description}</p>
                <span className="text-xs font-bold text-sheraa-orange bg-sheraa-orange/10 px-3 py-1 rounded-full">
                  {item.stat}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
