
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const VisionQuoteSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-sheraa-light/30 to-blue-50/30 dark:from-sheraa-dark/50 dark:to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sheraa-teal/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-sheraa-primary/10 rounded-full mb-8"
          >
            <Quote className="w-10 h-10 text-sheraa-primary" />
          </motion.div>

          {/* Quote Text */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-sheraa-dark dark:text-white mb-8 leading-relaxed"
          >
            "At Sheraa, we are deeply inspired by Sharjah's unique ability to blend collective 
            strength and unity with individual expression and creativity. This synergy fuels our 
            mission to cultivate a world-class entrepreneurship ecosystem."
          </motion.blockquote>

          {/* Attribution */}
          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-lg font-semibold text-sheraa-primary"
          >
            — H.E. Sheikha Bodour Bint Sultan Al Qasimi
            <span className="block text-base font-normal text-gray-600 dark:text-gray-400 mt-2">
              Chairperson, Sheraa
            </span>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  );
};
