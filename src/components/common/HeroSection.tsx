
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

export interface HeroAction {
  label: string;
  href: string;
  variant?: 'default' | 'outline' | 'secondary';
  icon?: LucideIcon;
}

interface HeroSectionProps {
  badge?: {
    text: string;
    icon?: LucideIcon;
    gradient?: string;
  };
  title: string;
  subtitle: string;
  actions: HeroAction[];
  backgroundVariant?: 'default' | 'gradient' | 'colored';
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  badge,
  title,
  subtitle,
  actions,
  backgroundVariant = 'default',
  className = ''
}) => {
  const backgroundClasses = {
    default: 'bg-gradient-to-br from-white via-sheraa-light/10 to-sheraa-teal/5',
    gradient: 'bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30',
    colored: 'bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-purple-500 text-white'
  };

  return (
    <section className={`py-20 md:py-24 ${backgroundClasses[backgroundVariant]} ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          {badge && (
            <Badge className={`mb-6 ${badge.gradient || 'bg-gradient-to-r from-sheraa-primary to-sheraa-teal'} text-white`}>
              {badge.icon && <badge.icon className="w-4 h-4 mr-2" />}
              {badge.text}
            </Badge>
          )}
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-purple-500 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className={`text-xl md:text-2xl max-w-4xl mx-auto mb-8 ${
            backgroundVariant === 'colored' ? 'text-white/90' : 'text-gray-600'
          }`}>
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {actions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Button
                  key={index}
                  asChild
                  size="lg"
                  variant={action.variant || 'default'}
                  className={`px-8 py-6 text-lg ${
                    action.variant === 'default' 
                      ? 'bg-sheraa-primary hover:bg-sheraa-primary/90' 
                      : ''
                  }`}
                >
                  <Link to={action.href}>
                    {IconComponent && <IconComponent className="w-5 h-5 mr-2" />}
                    {action.label}
                  </Link>
                </Button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
