
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, LucideIcon } from 'lucide-react';

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration?: string;
  icon?: LucideIcon;
  details?: string[];
}

interface ProcessStepsProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  variant?: 'horizontal' | 'vertical';
  showConnectors?: boolean;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({
  title,
  subtitle,
  steps,
  variant = 'vertical',
  showConnectors = true
}) => {
  return (
    <section className="py-16 bg-gray-50">
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

        <div className={`max-w-6xl mx-auto ${
          variant === 'horizontal' ? 'grid md:grid-cols-3 lg:grid-cols-4 gap-6' : ''
        }`}>
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            
            if (variant === 'horizontal') {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-sheraa-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {IconComponent ? <IconComponent className="w-8 h-8" /> : step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  {step.duration && (
                    <Badge variant="outline" className="mb-3">{step.duration}</Badge>
                  )}
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center mb-12 last:mb-0"
              >
                <div className="w-16 h-16 bg-sheraa-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-8 flex-shrink-0">
                  {IconComponent ? <IconComponent className="w-8 h-8" /> : step.step}
                </div>
                <Card className="flex-1 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      {step.duration && (
                        <Badge variant="outline">{step.duration}</Badge>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    {step.details && step.details.length > 0 && (
                      <ul className="space-y-1">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-sheraa-primary rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
                {showConnectors && index < steps.length - 1 && (
                  <ArrowRight className="w-8 h-8 text-sheraa-primary ml-4" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
