
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Glow } from "./ui/glow";
import { RetroGrid } from "./ui/retro-grid";
import { BorderBeam } from "./ui/border-beam";
import { ParallaxSection } from "./parallax";
import { useIsMobile } from "@/hooks/use-mobile";
import SEFContent from "./sef/SEFContent";

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
    <ParallaxSection 
      direction="up" 
      scrollMultiplier={0.2} 
      spring={true} 
      stiffness={50} 
      damping={15} 
      className="relative py-16 md:py-32 overflow-hidden"
    >
      <section 
        ref={sectionRef} 
        className="relative overflow-hidden rounded-3xl mx-4 md:mx-12 lg:mx-24" 
        id="sef-section"
      >
        {/* Decorative elements */}
        <RetroGrid fadeDirection="bottom" fadeSize="lg" className="z-0 opacity-30" />
        <Glow variant="top" className="opacity-30" />
        
        {/* Shimmering border effect */}
        <div className="relative z-10 bg-gradient-to-b from-violet-950/90 via-violet-900/90 to-violet-950/90 rounded-3xl overflow-hidden border border-white/10">
          <BorderBeam 
            colorFrom="#FED700" 
            colorTo="#9061F9"
            size={300}
            duration={20}
            className="opacity-60"
          />
          
          <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
            <SEFContent isInView={isInView} hasRevealed={hasRevealed} />
          </div>
        </div>
      </section>
    </ParallaxSection>
  );
};

export default SEFSection;
