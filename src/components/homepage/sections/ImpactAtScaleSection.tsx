
import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import ImpactNumbers from "../../ImpactNumbers";

export const ImpactAtScaleSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-sheraa-light/20 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sheraa-primary/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-sheraa-orange/10 rounded-full blur-xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 mb-6">
            <Award className="w-5 h-5 text-sheraa-orange" />
            <span className="text-sm font-medium text-sheraa-primary">Impact That Speaks Volumes</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
            Where Potential Meets Opportunity
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Since 2016, we've built Sharjah's most dynamic entrepreneurship ecosystem. Our numbers tell the story, 
            but our founders write the future.
          </p>
          
          <ImpactNumbers />
        </motion.div>
      </div>
    </section>
  );
};
