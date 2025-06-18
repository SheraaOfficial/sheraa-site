
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, DollarSign, TrendingUp, Users, Award, Target, 
  GraduationCap, Globe, ArrowUpRight, ArrowDownRight 
} from 'lucide-react';
import { ImpactMetric } from '@/types/impact';

const iconMap = {
  Building2,
  DollarSign, 
  TrendingUp,
  Users,
  Award,
  Target,
  GraduationCap,
  Globe
};

interface MetricCardProps {
  metric: ImpactMetric;
  index?: number;
  showChange?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const MetricCard: React.FC<MetricCardProps> = ({ 
  metric, 
  index = 0, 
  showChange = true,
  size = 'md' 
}) => {
  const IconComponent = iconMap[metric.icon as keyof typeof iconMap] || Building2;
  
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-10 h-10'
  };

  const valueSizes = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group"
    >
      <Card className="h-full bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:shadow-xl transition-all duration-300">
        <CardContent className={sizeClasses[size]}>
          <div className={`w-12 h-12 rounded-2xl ${metric.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
            <IconComponent className={`${iconSizes[size]} ${metric.color.split(' ')[0]}`} />
          </div>
          
          <div className={`${valueSizes[size]} font-bold text-gray-900 dark:text-white mb-2`}>
            {metric.value}
          </div>
          
          <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">
            {metric.label}
          </h3>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
            {metric.description}
          </p>
          
          {showChange && metric.change && (
            <Badge 
              variant="outline" 
              className={`${
                metric.trend === 'up' 
                  ? 'text-green-600 border-green-200 bg-green-50 dark:bg-green-900/20' 
                  : metric.trend === 'down'
                  ? 'text-red-600 border-red-200 bg-red-50 dark:bg-red-900/20'
                  : 'text-gray-600 border-gray-200 bg-gray-50 dark:bg-gray-900/20'
              }`}
            >
              {metric.trend === 'up' ? (
                <ArrowUpRight className="w-3 h-3 mr-1" />
              ) : metric.trend === 'down' ? (
                <ArrowDownRight className="w-3 h-3 mr-1" />
              ) : null}
              {metric.change}
            </Badge>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
