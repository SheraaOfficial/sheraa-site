
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import BackgroundEffects from './legacy/BackgroundEffects';
import SectionHeader from './legacy/SectionHeader';
import ImpactStats from './legacy/ImpactStats';
import JourneyThroughTime from './legacy/JourneyThroughTime';
import SpeakerHallOfFame from './legacy/SpeakerHallOfFame';
import InspirationalQuotes from './legacy/InspirationalQuotes';
import BoldStatement from './legacy/BoldStatement';

const SEFLegacySection: React.FC = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-10% 0px"
  });
  
  const isStatsInView = useInView(statsRef, { 
    once: true, 
    margin: "-10% 0px" 
  });

  return (
    <section 
      ref={sectionRef} 
      className={`relative py-24 md:py-32 overflow-hidden ${theme === 'dark' ? 'bg-zinc-900' : 'bg-gray-50'}`}
      id="sef-legacy"
    >
      {/* Enhanced background elements with stars effect */}
      <BackgroundEffects />
      
      {/* Section container */}
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Section header */}
        <SectionHeader isInView={isInView} />

        {/* Animated SEF Numbers */}
        <div ref={statsRef}>
          <ImpactStats isInView={isStatsInView} />
        </div>
        
        {/* JOURNEY THROUGH TIME */}
        <JourneyThroughTime />
        
        {/* Hall of Fame section */}
        <SpeakerHallOfFame />
        
        {/* Inspirational quotes section */}
        <InspirationalQuotes />
        
        {/* Bold statement */}
        <BoldStatement />
      </div>
    </section>
  );
};

export default SEFLegacySection;
