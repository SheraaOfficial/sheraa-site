
import React from 'react';
import { EnhancedMultilingualHeroContent } from '../homepage/hero/EnhancedMultilingualHeroContent';
import { ImmersiveAnimatedBackground } from './ImmersiveAnimatedBackground';

export const ImmersiveHero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <ImmersiveAnimatedBackground />
      
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
