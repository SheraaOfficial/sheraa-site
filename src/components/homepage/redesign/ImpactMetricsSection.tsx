
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AdvancedMotion, StaggerContainer, StaggerChild, FloatingElement } from '@/components/ui/advanced-motion';
import { ModernCard, ModernCardContent } from '@/components/ui/modern-card';
import { Users, TrendingUp, Briefcase, Award, Heart, GraduationCap, Building, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ImpactMetricsSection: React.FC = () => {
  const { t, language } = useLanguage();

  const metrics = [
    { 
      icon: Building, 
      number: "180+", 
      labelKey: "impact.startups",
      color: "text-sheraa-primary"
    },
    { 
      icon: TrendingUp, 
      number: "$248M+", 
      labelKey: "impact.revenue",
      color: "text-sheraa-teal"
    },
    { 
      icon: TrendingUp, 
      number: "$171M+", 
      labelKey: "impact.funding",
      color: "text-sheraa-primary"
    },
    { 
      icon: Briefcase, 
      number: "1,900+", 
      labelKey: "impact.jobs",
      color: "text-sheraa-teal"
    },
    { 
      icon: Heart, 
      number: "52%", 
      labelKey: "impact.women",
      color: "text-sheraa-orange"
    },
    { 
      icon: GraduationCap, 
      number: "18,000+", 
      labelKey: "impact.youth",
      color: "text-sheraa-primary"
    },
    { 
      icon: Users, 
      number: "140+", 
      labelKey: "impact.partners",
      color: "text-sheraa-teal"
    },
    { 
      icon: Target, 
      number: "71%", 
      labelKey: "impact.survival",
      color: "text-sheraa-orange"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50/50 dark:from-sheraa-dark dark:to-sheraa-dark/80">
      <div className="container mx-auto px-4">
        <AdvancedMotion variant="fadeInUp" className="text-center mb-16">
          <h2 className={cn(
            "text-4xl md:text-6xl font-black mb-6 text-shimmer",
            language === 'ar' ? 'font-arabic' : ''
          )}>
            {t('impact.title')}
          </h2>
          <p className={cn(
            "text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed",
            language === 'ar' ? 'font-arabic' : ''
          )}>
            {t('impact.subtitle')}
          </p>
        </AdvancedMotion>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <StaggerChild key={index}>
                <FloatingElement intensity="light">
                  <ModernCard variant="glass" hover className="text-center group">
                    <ModernCardContent className="p-6 md:p-8">
                      <AdvancedMotion variant="glowPulse" delay={index * 0.1}>
                        <IconComponent className={cn(
                          "w-8 h-8 md:w-12 md:h-12 mx-auto mb-4 transition-colors group-hover:scale-110",
                          metric.color
                        )} />
                      </AdvancedMotion>
                      
                      <div className="text-2xl md:text-4xl font-black text-shimmer mb-2">
                        {metric.number}
                      </div>
                      
                      <div className={cn(
                        "text-sm md:text-base font-medium text-gray-600 dark:text-gray-400",
                        language === 'ar' ? 'font-arabic' : ''
                      )}>
                        {t(metric.labelKey)}
                      </div>
                    </ModernCardContent>
                  </ModernCard>
                </FloatingElement>
              </StaggerChild>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
