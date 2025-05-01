
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
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
      className="py-16 md:py-24 px-4 md:px-8 lg:px-12"
    >
      <section 
        ref={sectionRef} 
        className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg" 
        id="sef-section"
      >
        <div className="container mx-auto px-4 sm:px-6 py-16">
          <SEFContent isInView={isInView} hasRevealed={hasRevealed} />
        </div>
      </section>
    </ParallaxSection>
  );
};

export default SEFSection;
