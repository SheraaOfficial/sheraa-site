
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Globe, DollarSign, Briefcase, UserCheck, Target } from "lucide-react";

const metrics = [
  { icon: Building2, value: "180+", label: "Startups Supported", color: "text-sheraa-primary" },
  { icon: DollarSign, value: "$248M+", label: "Revenue Generated", color: "text-green-600" },
  { icon: TrendingUp, value: "$171M+", label: "Capital Raised", color: "text-blue-600" },
  { icon: Briefcase, value: "1,900+", label: "Jobs Created", color: "text-purple-600" },
  { icon: UserCheck, value: "52%", label: "Women-Led Startups", color: "text-pink-600" },
  { icon: Users, value: "18,000+", label: "Youth Upskilled", color: "text-orange-600" },
  { icon: Globe, value: "140+", label: "Ecosystem Partners", color: "text-sheraa-teal" },
  { icon: Target, value: "71%", label: "Startup Survival Rate", color: "text-sheraa-primary" },
];

export const ImpactMetricsSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-sheraa-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-sheraa-dark dark:text-white">Impact That </span>
            <span className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Speaks Volumes
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We measure our success by the success of our founders and the growth of 
            Sharjah's innovation ecosystem. Our commitment translates into tangible results.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-sheraa-dark p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <metric.icon className={`w-12 h-12 ${metric.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
              <div className="text-3xl md:text-4xl font-bold text-sheraa-dark dark:text-white mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
