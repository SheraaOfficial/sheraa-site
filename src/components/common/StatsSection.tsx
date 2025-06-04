
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

export interface StatItem {
  icon: LucideIcon;
  number: string;
  label: string;
  color: string;
}

interface StatsSectionProps {
  title: string;
  subtitle?: string;
  stats: StatItem[];
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'gradient' | 'minimal';
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  title,
  subtitle,
  stats,
  columns = 4,
  variant = 'default'
}) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </motion.div>

        <div className={`grid grid-cols-2 ${gridCols[columns]} gap-6`}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className={`text-center ${
                  variant === 'gradient' 
                    ? 'bg-gradient-to-br from-white via-sheraa-light/10 to-sheraa-teal/5 border border-gray-200/50' 
                    : 'border border-gray-200/50 bg-white/80'
                } backdrop-blur-sm hover:shadow-lg transition-shadow`}>
                  <CardContent className="p-6">
                    <IconComponent className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
