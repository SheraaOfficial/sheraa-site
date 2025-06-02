
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, Award, TrendingUp, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AdvancedMotion, StaggerContainer, StaggerChild, FloatingElement } from '@/components/ui/advanced-motion';
import { ModernButton } from '@/components/ui/modern-button';
import { cn } from '@/lib/utils';

export const EnhancedMultilingualHeroContent: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className={cn(
      "space-y-8",
      language === 'ar' ? "text-center lg:text-right" : "text-center lg:text-left"
    )}>
      {/* Floating Badge */}
      <AdvancedMotion variant="fadeInScale" delay={0.2}>
        <FloatingElement intensity="light">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-effect rounded-full shadow-lg">
            <div className="w-2 h-2 bg-sheraa-primary rounded-full animate-pulse"></div>
            <Sparkles className="w-4 h-4 text-sheraa-orange" />
            <span className="text-sm font-semibold text-sheraa-primary">
              {t('hero.badge')}
            </span>
          </div>
        </FloatingElement>
      </AdvancedMotion>

      {/* Enhanced Main Heading */}
      <StaggerContainer className="space-y-4">
        <StaggerChild>
          <h1 className={cn(
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight",
            language === 'ar' ? 'font-arabic' : ''
          )}>
            <span className="block text-sheraa-dark dark:text-white mb-2">
              {t('hero.title.line1')}
            </span>
            <span className="block text-shimmer">
              {t('hero.title.line2')}
            </span>
          </h1>
        </StaggerChild>
        
        <StaggerChild>
          <AdvancedMotion variant="fadeInUp" delay={0.4}>
            <p className={cn(
              "text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-2xl leading-relaxed",
              language === 'ar' ? 'font-arabic lg:text-right' : ''
            )}>
              {t('hero.description')}
            </p>
          </AdvancedMotion>
        </StaggerChild>
      </StaggerContainer>

      {/* Enhanced Action Buttons */}
      <AdvancedMotion variant="fadeInUp" delay={0.6}>
        <div className={cn(
          "flex flex-col sm:flex-row gap-4 justify-center",
          language === 'ar' ? 'lg:justify-end' : 'lg:justify-start'
        )}>
          <ModernButton 
            asChild 
            variant="primary" 
            size="xl" 
            glow
            className="group"
          >
            <Link to="/programs" className="flex items-center gap-3">
              {language === 'ar' && (
                <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
              )}
              <span>{t('hero.cta.primary')}</span>
              {language === 'en' && (
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              )}
            </Link>
          </ModernButton>
          
          <ModernButton 
            asChild 
            variant="glass" 
            size="xl"
            className="group"
          >
            <Link to="/community/join" className="flex items-center gap-3">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>{t('hero.cta.secondary')}</span>
            </Link>
          </ModernButton>
        </div>
      </AdvancedMotion>

      {/* Enhanced Stats */}
      <AdvancedMotion variant="fadeInUp" delay={0.8}>
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-sheraa-primary/20">
          {[
            { icon: Users, number: "180+", labelKey: "hero.stats.startups" },
            { icon: TrendingUp, number: "$248M+", labelKey: "hero.stats.revenue" },
            { icon: Award, number: "1,900+", labelKey: "hero.stats.jobs" }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <FloatingElement 
                key={index} 
                intensity="light"
                className="text-center group cursor-pointer"
              >
                <AdvancedMotion 
                  variant="glowPulse" 
                  delay={index * 0.1}
                  className="transform group-hover:scale-110 transition-transform"
                >
                  <IconComponent className="w-8 h-8 text-sheraa-primary mx-auto mb-2 group-hover:text-sheraa-orange transition-colors" />
                  <div className="text-2xl md:text-3xl font-black text-shimmer mb-1">
                    {stat.number}
                  </div>
                  <div className={cn(
                    "text-sm font-medium text-gray-600 dark:text-gray-400",
                    language === 'ar' ? 'font-arabic' : ''
                  )}>
                    {t(stat.labelKey)}
                  </div>
                </AdvancedMotion>
              </FloatingElement>
            );
          })}
        </div>
      </AdvancedMotion>
    </div>
  );
};
