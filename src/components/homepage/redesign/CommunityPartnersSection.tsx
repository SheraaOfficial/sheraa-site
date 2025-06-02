
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { AdvancedMotion, StaggerContainer, StaggerChild, FloatingElement } from '@/components/ui/advanced-motion';
import { ModernCard, ModernCardHeader, ModernCardContent } from '@/components/ui/modern-card';
import { ModernButton } from '@/components/ui/modern-button';
import { Users, Building, Handshake, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export const CommunityPartnersSection: React.FC = () => {
  const { t, language } = useLanguage();

  const communityFeatures = [
    {
      icon: Users,
      titleKey: 'community.membership.title',
      descKey: 'community.membership.desc',
      link: '/community/membership',
      color: 'text-sheraa-primary bg-sheraa-primary/10'
    },
    {
      icon: Building,
      titleKey: 'community.startups.title', 
      descKey: 'community.startups.desc',
      link: '/community/startups',
      color: 'text-sheraa-teal bg-sheraa-teal/10'
    },
    {
      icon: Handshake,
      titleKey: 'community.partnerships.title',
      descKey: 'community.partnerships.desc', 
      link: '/community/partnerships',
      color: 'text-sheraa-orange bg-sheraa-orange/10'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-sheraa-primary/5 dark:from-sheraa-dark/50 dark:via-sheraa-dark dark:to-sheraa-dark/80">
      <div className="container mx-auto px-4">
        <AdvancedMotion variant="fadeInUp" className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-effect rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-sheraa-orange" />
            <span className={cn(
              "text-sm font-semibold text-sheraa-primary",
              language === 'ar' ? 'font-arabic' : ''
            )}>
              {t('community.title')}
            </span>
          </div>
          
          <h2 className={cn(
            "text-4xl md:text-6xl font-black mb-6 text-shimmer",
            language === 'ar' ? 'font-arabic' : ''
          )}>
            {t('community.title')}
          </h2>
          <p className={cn(
            "text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed",
            language === 'ar' ? 'font-arabic' : ''
          )}>
            {t('community.subtitle')}
          </p>
        </AdvancedMotion>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {communityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <StaggerChild key={index}>
                <FloatingElement intensity="light">
                  <ModernCard variant="glass" hover className="h-full group">
                    <ModernCardHeader className="text-center pb-4">
                      <div className={cn(
                        "w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform",
                        feature.color
                      )}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className={cn(
                        "text-2xl font-bold mb-4",
                        language === 'ar' ? 'font-arabic' : ''
                      )}>
                        {t(feature.titleKey)}
                      </h3>
                    </ModernCardHeader>

                    <ModernCardContent className="text-center">
                      <p className={cn(
                        "text-gray-600 dark:text-gray-300 leading-relaxed mb-6",
                        language === 'ar' ? 'font-arabic' : ''
                      )}>
                        {t(feature.descKey)}
                      </p>
                      
                      <ModernButton asChild variant="ghost" className="group/btn">
                        <Link to={feature.link} className="flex items-center justify-center gap-2">
                          {language === 'ar' && (
                            <ArrowRight className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform rotate-180" />
                          )}
                          <span>{t('form.learn-more')}</span>
                          {language === 'en' && (
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          )}
                        </Link>
                      </ModernButton>
                    </ModernCardContent>
                  </ModernCard>
                </FloatingElement>
              </StaggerChild>
            );
          })}
        </StaggerContainer>

        <AdvancedMotion variant="fadeInUp" delay={0.4} className="text-center">
          <ModernButton asChild size="xl" glow>
            <Link to="/community" className="flex items-center gap-3">
              <Users className="w-5 h-5" />
              <span>{t('nav.community')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ModernButton>
        </AdvancedMotion>
      </div>
    </section>
  );
};
