
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Users, Calendar, Award } from 'lucide-react';

const SEFLegacySection: React.FC = () => {
  const legacyStats = [
    { icon: Calendar, number: "8", label: "Years of Innovation", description: "Since 2016" },
    { icon: Users, number: "100K+", label: "Lives Impacted", description: "Through programs & events" },
    { icon: Trophy, number: "500+", label: "Success Stories", description: "Startups launched" },
    { icon: Award, number: "50+", label: "Countries", description: "Global participation" }
  ];

  return (
    <section className="py-20 bg-white dark:bg-sheraa-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent">
            The Legacy of SEF
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            For nearly a decade, the Sharjah Entrepreneurship Festival has been the catalyst for 
            innovation, bringing together the brightest minds and boldest ideas from across the globe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {legacyStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center border-sheraa-sef-primary/20 hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-sheraa-sef-primary/20 to-sheraa-sef-accent/20 flex items-center justify-center mb-6">
                    <stat.icon className="w-8 h-8 text-sheraa-sef-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-800 dark:text-white font-semibold mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEFLegacySection;
