
import React from "react";
import { motion } from "framer-motion";

const metrics = [
  { number: "180+", label: "Startups Supported", description: "Companies we've helped grow" },
  { number: "$248M+", label: "Revenue Generated", description: "Total revenue by our startups" },
  { number: "$171M+", label: "Capital Raised", description: "Investment secured" },
  { number: "1,900+", label: "Jobs Created", description: "Employment opportunities" },
  { number: "52%", label: "Women-Led Startups", description: "Diverse leadership" },
  { number: "71%", label: "Survival Rate", description: "Long-term success rate" }
];

export const ImpactMetricsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-sheraa-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Real Impact, Real Results
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Numbers that matter. See how we're building the future of entrepreneurship in Sharjah.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {metric.number}
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
