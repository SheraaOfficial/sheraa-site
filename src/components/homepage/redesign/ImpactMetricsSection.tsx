
import React from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, Award, Target, Briefcase, Globe, Percent } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const impactMetrics = [
  { icon: Users, number: "180+", labelKey: "impact.startups", color: "text-sheraa-primary" },
  { icon: TrendingUp, number: "$248M+", labelKey: "impact.revenue", color: "text-sheraa-orange" },
  { icon: Award, number: "$171M+", labelKey: "impact.funding", color: "text-sheraa-teal" },
  { icon: Briefcase, number: "1,900+", labelKey: "impact.jobs", color: "text-sheraa-primary" },
  { icon: Target, number: "52%", labelKey: "impact.women", color: "text-sheraa-secondary" },
  { icon: Globe, number: "18,000+", labelKey: "impact.youth", color: "text-sheraa-orange" },
  { icon: Users, number: "140+", labelKey: "impact.partners", color: "text-sheraa-teal" },
  { icon: Percent, number: "71%", labelKey: "impact.survival", color: "text-sheraa-primary" },
];

export const ImpactMetricsSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sheraa-light/30 dark:from-sheraa-dark dark:to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center mb-16 ${language === 'ar' ? 'font-arabic' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sheraa-dark dark:text-white mb-6">
            {t('impact.title')}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t('impact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {impactMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer bg-white/50 dark:bg-sheraa-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-sheraa-primary/10"
              >
                <IconComponent className={`w-12 h-12 mx-auto mb-4 ${metric.color} group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                  {metric.number}
                </div>
                <div className={`text-sm font-medium text-gray-600 dark:text-gray-400 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {t(metric.labelKey)}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
