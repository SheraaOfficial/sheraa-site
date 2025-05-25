
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import StartupsShowcase from "../../StartupsShowcase";

export const InnovationShowcaseSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-sheraa-light/30 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-teal/10 border border-sheraa-teal/20 mb-6">
            <Star className="w-5 h-5 text-sheraa-teal" />
            <span className="text-sm font-medium text-sheraa-teal">Innovation in Action</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
            Meet Tomorrow's Changemakers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            From AI revolutionizing healthcare to sustainable solutions tackling climate change - 
            our 180+ portfolio companies are building the future, today.
          </p>
          
          <StartupsShowcase />
        </motion.div>
      </div>
    </section>
  );
};
