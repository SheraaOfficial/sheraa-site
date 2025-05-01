
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ParallaxSection } from "./parallax";
import { useIsMobile } from "@/hooks/use-mobile";
import SEFContent from "./sef/SEFContent";
import { BeamsBackground } from "./ui/beams-background";

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
        <BeamsBackground intensity="strong">
          <div className="relative z-10 overflow-hidden border border-indigo-500/20 rounded-3xl">
            <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
              <SEFContent isInView={isInView} hasRevealed={hasRevealed} />
            </div>
          </div>
        </BeamsBackground>
      </section>
    </ParallaxSection>
  );
};

export default SEFSection;
