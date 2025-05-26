
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { ArrowRight, Play, Users, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const MultilingualHeroContent: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="space-y-8 text-center lg:text-left">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 rounded-full shadow-lg">
        <div className="w-2 h-2 bg-sheraa-primary rounded-full animate-pulse"></div>
        <span className="text-sm font-semibold text-sheraa-primary">{t('hero.badge')}</span>
      </div>

      {/* Main Heading */}
      <div className="space-y-4">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight ${language === 'ar' ? 'font-arabic' : ''}`}>
          <span className="block text-sheraa-dark dark:text-white mb-2">{t('hero.title.line1')}</span>
          <span className="block bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-orange bg-clip-text text-transparent">
            {t('hero.title.line2')}
          </span>
        </h1>
        
        <p className={`text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-2xl leading-relaxed ${language === 'ar' ? 'font-arabic text-right lg:text-right' : ''}`}>
          {t('hero.description')}
        </p>
      </div>

      {/* Action Buttons */}
      <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${language === 'ar' ? 'lg:justify-end' : ''}`}>
        <GradientButton asChild size="xl" className="group">
          <Link to="/programs" className="flex items-center gap-3">
            {language === 'ar' && <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />}
            <span>{t('hero.cta.primary')}</span>
            {language === 'en' && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
          </Link>
        </GradientButton>
        
        <Button asChild size="xl" variant="outline" className="border-2 border-sheraa-primary/40 text-sheraa-primary hover:bg-sheraa-primary/10 group">
          <Link to="/community/join" className="flex items-center gap-3">
            <Play className="w-5 h-5" />
            <span>{t('hero.cta.secondary')}</span>
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 pt-8 border-t border-sheraa-primary/20">
        {[
          { icon: Users, number: "180+", labelKey: "hero.stats.startups" },
          { icon: TrendingUp, number: "$248M+", labelKey: "hero.stats.revenue" },
          { icon: Award, number: "1,900+", labelKey: "hero.stats.jobs" }
        ].map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="text-center group hover:scale-105 transition-transform cursor-pointer">
              <IconComponent className="w-8 h-8 text-sheraa-primary mx-auto mb-2 group-hover:text-sheraa-orange transition-colors" />
              <div className="text-2xl md:text-3xl font-black text-sheraa-primary mb-1">{stat.number}</div>
              <div className={`text-sm font-medium text-gray-600 dark:text-gray-400 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t(stat.labelKey)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
