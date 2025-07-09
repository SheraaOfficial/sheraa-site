import React from 'react';
import { ModernVideoSlider } from '../modern/ModernVideoSlider';
import { AdvancedParallaxSystem } from './AdvancedParallaxSystem';
import { ElasticScrollPhysics } from './ElasticScrollPhysics';
import { BrutalistGlassmorphism } from '../modern/BrutalistGlassmorphism';
import { KineticTypography } from '../modern/KineticTypography';
import { MagneticCursor } from '../modern/MagneticCursor';
import { allSliderContent } from '../content/personaSliderContent';

interface EnhancedHeroSystemProps {
  persona: 'young' | 'adult' | 'stakeholder' | 'general';
}

export const EnhancedHeroSystem: React.FC<EnhancedHeroSystemProps> = ({ persona }) => {
  const slides = allSliderContent[persona];

  return (
    <ElasticScrollPhysics elasticity={0.8} enabled>
      <ModernVideoSlider slides={slides} autoPlayInterval={7000} showVideo />
    </ElasticScrollPhysics>
  );
};