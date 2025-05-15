
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ParallaxSection } from "./parallax";
import { useIsMobile } from "@/hooks/use-mobile";
import { SEFHeader } from "./sef/SEFHeader";
import { SEFExperienceZones } from "./sef/SEFExperienceZones";
import { SEFEventCard } from "./sef/SEFEventCard";
import { SEFStats } from "./sef/SEFStats";
import { SEFQuickLinks } from "./sef/SEFQuickLinks";
import { SEFBackgroundEffects } from "./sef/SEFBackgroundEffects";

const SEFSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-100px 0px"
  });
  const [hasRevealed, setHasRevealed] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isInView && !hasRevealed) {
      const timer = setTimeout(() => {
        setHasRevealed(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasRevealed]);

  return (
    <ParallaxSection direction="up" scrollMultiplier={0.2} className="py-16 md:py-32 px-4 md:px-8 lg:px-12 overflow-visible">
      <section 
        ref={sectionRef} 
        className="relative rounded-3xl overflow-hidden"
        id="sef-section"
      >
        <SEFBackgroundEffects />
        
        <div className="container relative mx-auto px-4 md:px-8 py-20 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <SEFHeader isInView={isInView} hasRevealed={hasRevealed} />
              
              {/* Experience Zones Cards */}
              <SEFExperienceZones hasRevealed={hasRevealed} isInView={isInView} />
            </div>
            
            {/* Right Content */}
            <div className="space-y-8">
              {/* Event Card */}
              <SEFEventCard hasRevealed={hasRevealed} />
              
              {/* Stats Grid */}
              <SEFStats hasRevealed={hasRevealed} />
              
              {/* Quick Links */}
              <SEFQuickLinks hasRevealed={hasRevealed} />
            </div>
          </div>
        </div>
      </section>
    </ParallaxSection>
  );
};

export default SEFSection;
