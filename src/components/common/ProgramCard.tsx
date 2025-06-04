
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

export interface ProgramCardProps {
  title: string;
  subtitle?: string;
  description: string;
  icon: LucideIcon;
  duration?: string;
  stage?: string;
  highlights?: string[];
  href: string;
  variant?: 'default' | 'featured' | 'compact';
  gradient?: string;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  subtitle,
  description,
  icon: Icon,
  duration,
  stage,
  highlights = [],
  href,
  variant = 'default',
  gradient = 'from-sheraa-primary to-sheraa-teal'
}) => {
  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group"
      >
        <Card className="h-full hover:shadow-lg transition-all group-hover:border-sheraa-primary/30">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${gradient} flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg group-hover:text-sheraa-primary transition-colors">
                  {title}
                </h3>
                {subtitle && (
                  <p className="text-sm text-gray-600">{subtitle}</p>
                )}
              </div>
            </div>
            <p className="text-gray-600 mb-4">{description}</p>
            <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-sheraa-primary group-hover:text-white transition-colors">
              <Link to={href}>
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group ${variant === 'featured' ? 'md:col-span-2' : ''}`}
    >
      <Card className={`h-full hover:shadow-xl transition-all group-hover:border-sheraa-primary/30 ${
        variant === 'featured' ? 'bg-gradient-to-br from-sheraa-primary/5 to-sheraa-teal/5' : ''
      }`}>
        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div className="flex gap-2">
              {duration && (
                <Badge variant="outline" className="text-xs">
                  {duration}
                </Badge>
              )}
              {stage && (
                <Badge className="text-xs bg-sheraa-primary/10 text-sheraa-primary">
                  {stage}
                </Badge>
              )}
            </div>
          </div>
          
          <CardTitle className="text-2xl group-hover:text-sheraa-primary transition-colors">
            {title}
          </CardTitle>
          {subtitle && (
            <p className="text-gray-600 font-medium">{subtitle}</p>
          )}
        </CardHeader>
        
        <CardContent>
          <p className="text-gray-600 mb-6">{description}</p>
          
          {highlights.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-sm">Key Benefits:</h4>
              <ul className="space-y-2">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-sheraa-primary rounded-full" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <Button asChild className={`w-full bg-gradient-to-r ${gradient} hover:shadow-lg transition-all`}>
            <Link to={href}>
              Apply Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};
