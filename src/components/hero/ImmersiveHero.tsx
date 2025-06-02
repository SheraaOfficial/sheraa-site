
import React from 'react';
import { EnhancedMultilingualHeroContent } from '../homepage/hero/EnhancedMultilingualHeroContent';
import { GradientBackground } from '@/components/ui/advanced-motion';

export const ImmersiveHero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <GradientBackground variant="primary" className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(13,148,136,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(20,184,166,0.1),transparent_70%)]" />
      </GradientBackground>
      
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7 space-y-8">
            <EnhancedMultilingualHeroContent />
          </div>
          
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              <div className="absolute inset-0 rounded-full border border-sheraa-primary/20 animate-spin-slow" />
              <div className="absolute inset-[10%] rounded-full border border-sheraa-teal/30 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }} />
              <div className="absolute inset-[30%] glass-effect rounded-full flex items-center justify-center">
                <div className="text-3xl font-black text-shimmer">شراع</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
