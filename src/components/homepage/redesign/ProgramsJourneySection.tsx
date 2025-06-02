
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { AdvancedMotion, StaggerContainer, StaggerChild } from '@/components/ui/advanced-motion';
import { ModernCard, ModernCardHeader, ModernCardContent, ModernCardFooter } from '@/components/ui/modern-card';
import { ModernButton } from '@/components/ui/modern-button';
import { ArrowRight, Rocket, TrendingUp, Target, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ProgramsJourneySection: React.FC = () => {
  const { t, language } = useLanguage();

  const programs = [
    {
      icon: Rocket,
      titleKey: 'programs.start-young.title',
      descKey: 'programs.start-young.desc',
      link: '/programs/start-young',
      color: 'from-sheraa-primary to-sheraa-teal',
      bgColor: 'bg-sheraa-primary/5'
    },
    {
      icon: TrendingUp,
      titleKey: 'programs.s3.title',
      descKey: 'programs.s3.desc',
      link: '/programs/s3',
      color: 'from-sheraa-teal to-sheraa-primary',
      bgColor: 'bg-sheraa-teal/5'
    },
    {
      icon: Target,
      titleKey: 'programs.asc.title',
      descKey: 'programs.asc.desc',
      link: '/programs/asc',
      color: 'from-sheraa-orange to-sheraa-primary',
      bgColor: 'bg-sheraa-orange/5'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-sheraa-dark">
      <div className="container mx-auto px-4">
        <AdvancedMotion variant="fadeInUp" className="text-center mb-16">
          <h2 className={cn(
            "text-4xl md:text-6xl font-black mb-6 text-shimmer",
            language === 'ar' ? 'font-arabic' : ''
          )}>
            {t('programs.title')}
          </h2>
          <p className={cn(
            "text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed",
            language === 'ar' ? 'font-arabic' : ''
          )}>
            {t('programs.subtitle')}
          </p>
        </AdvancedMotion>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <StaggerChild key={index}>
                <ModernCard variant="gradient" hover className="h-full group">
                  <ModernCardHeader className={cn("text-center", program.bgColor)}>
                    <div className={cn(
                      "w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
                      program.color
                    )}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={cn(
                      "text-2xl font-bold",
                      language === 'ar' ? 'font-arabic' : ''
                    )}>
                      {t(program.titleKey)}
                    </h3>
                  </ModernCardHeader>

                  <ModernCardContent>
                    <p className={cn(
                      "text-gray-600 dark:text-gray-300 leading-relaxed",
                      language === 'ar' ? 'font-arabic text-right' : ''
                    )}>
                      {t(program.descKey)}
                    </p>
                  </ModernCardContent>

                  <ModernCardFooter>
                    <ModernButton asChild variant="secondary" className="w-full group/btn">
                      <Link to={program.link} className="flex items-center justify-center gap-2">
                        {language === 'ar' && (
                          <ArrowRight className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform rotate-180" />
                        )}
                        <span>{t('form.learn-more')}</span>
                        {language === 'en' && (
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        )}
                      </Link>
                    </ModernButton>
                  </ModernCardFooter>
                </ModernCard>
              </StaggerChild>
            );
          })}
        </StaggerContainer>

        <AdvancedMotion variant="fadeInUp" delay={0.4} className="text-center">
          <ModernButton asChild size="xl" glow>
            <Link to="/programs" className="flex items-center gap-3">
              <Building className="w-5 h-5" />
              <span>{t('nav.programs')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ModernButton>
        </AdvancedMotion>
      </div>
    </section>
  );
};
