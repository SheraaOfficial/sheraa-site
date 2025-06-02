
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { AdvancedMotion, GradientBackground, FloatingElement } from '@/components/ui/advanced-motion';
import { ModernButton } from '@/components/ui/modern-button';
import { ArrowRight, Rocket, Users, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export const FinalCTASection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <GradientBackground variant="primary" className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.05),transparent_70%)]" />
      </GradientBackground>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <AdvancedMotion variant="fadeInUp">
            <FloatingElement intensity="light">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
                <Sparkles className="w-5 h-5 text-sheraa-orange" />
                <span className={cn(
                  "text-sm font-semibold",
                  language === 'ar' ? 'font-arabic' : ''
                )}>
                  {t('cta.title')}
                </span>
              </div>
            </FloatingElement>
          </AdvancedMotion>

          <AdvancedMotion variant="fadeInUp" delay={0.2}>
            <h2 className={cn(
              "text-4xl md:text-6xl font-black mb-8 text-white",
              language === 'ar' ? 'font-arabic' : ''
            )}>
              {t('cta.title')}
            </h2>
            <p className={cn(
              "text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto",
              language === 'ar' ? 'font-arabic' : ''
            )}>
              {t('cta.subtitle')}
            </p>
          </AdvancedMotion>

          <AdvancedMotion variant="fadeInUp" delay={0.4}>
            <div className={cn(
              "flex flex-col sm:flex-row gap-6 justify-center",
              language === 'ar' ? 'sm:flex-row-reverse' : ''
            )}>
              <ModernButton 
                asChild 
                variant="glass" 
                size="xl" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 group"
              >
                <Link to="/programs" className="flex items-center gap-3">
                  {language === 'ar' && (
                    <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
                  )}
                  <Rocket className="w-5 h-5" />
                  <span>{t('cta.button')}</span>
                  {language === 'en' && (
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  )}
                </Link>
              </ModernButton>
              
              <ModernButton 
                asChild 
                variant="glass" 
                size="xl"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 group"
              >
                <Link to="/community/join" className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  <span>{t('form.join')}</span>
                </Link>
              </ModernButton>
            </div>
          </AdvancedMotion>
        </div>
      </div>
      
      {/* Floating elements for visual enhancement */}
      <FloatingElement intensity="medium" className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl">
        <div></div>
      </FloatingElement>
      <FloatingElement intensity="light" className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-3xl">
        <div></div>
      </FloatingElement>
    </section>
  );
};
