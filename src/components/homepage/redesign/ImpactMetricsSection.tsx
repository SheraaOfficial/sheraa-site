
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { number: "180+", label: "Startups Supported", description: "Companies we've helped grow", color: "from-blue-500 to-blue-600" },
  { number: "$248M+", label: "Revenue Generated", description: "Total revenue by our startups", color: "from-green-500 to-green-600" },
  { number: "$171M+", label: "Capital Raised", description: "Investment secured", color: "from-purple-500 to-purple-600" },
  { number: "1,900+", label: "Jobs Created", description: "Employment opportunities", color: "from-orange-500 to-orange-600" },
  { number: "52%", label: "Women-Led Startups", description: "Diverse leadership", color: "from-pink-500 to-pink-600" },
  { number: "71%", label: "Survival Rate", description: "Long-term success rate", color: "from-sheraa-primary to-sheraa-teal" }
];

export const ImpactMetricsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-sheraa-dark relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real Impact, Real Results
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Numbers that tell our story. See how we're building the future of entrepreneurship in Sharjah.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
              transition={{ 
                delay: index * 0.1 + 0.6, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="relative mb-4"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="relative p-6 bg-white dark:bg-sheraa-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ 
                      delay: index * 0.1 + 0.8, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {metric.number}
                  </motion.div>
                  <motion.div 
                    className="text-sm font-semibold text-gray-900 dark:text-white mb-1"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 + 1, duration: 0.5 }}
                  >
                    {metric.label}
                  </motion.div>
                  <motion.div 
                    className="text-xs text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 + 1.2, duration: 0.5 }}
                  >
                    {metric.description}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.p 
            className="text-gray-600 dark:text-gray-300 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            This proven track record offers credibility and assurance to potential founders, partners, and investors.
          </motion.p>
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 bg-sheraa-primary/10 text-sheraa-primary rounded-lg hover:bg-sheraa-primary/20 transition-colors duration-300 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read Our Latest Impact Report
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
