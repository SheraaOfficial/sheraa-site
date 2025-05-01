
import React, { useEffect, useRef, useState } from "react";
import { useInView, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { BeamsBackground } from "./ui/beams-background";
import { SEFHeader } from "./sef/SEFHeader";
import { SEFDescription } from "./sef/SEFDescription";
import { SEFStats } from "./sef/SEFStats";
import { SEFEventCard } from "./sef/SEFEventCard";

const SEFSection = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px 0px" });
  const [hasRevealed, setHasRevealed] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Subtle parallax effect that's efficient on mobile
  const bgPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["0%", "20%"]
  );
  
  useEffect(() => {
    if (isInView && !hasRevealed) {
      const timer = setTimeout(() => {
        setHasRevealed(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasRevealed]);
  
  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      id="sef-section"
    >
      {/* Use BeamsBackground for background */}
      <BeamsBackground intensity="strong">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001A33]/90 to-[#1A1F2C]/95" />
      </BeamsBackground>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content Section - Takes more space on desktop */}
          <div className="lg:col-span-7 text-white">
            <SEFHeader isInView={isInView} hasRevealed={hasRevealed} />
            <SEFDescription isInView={isInView} />
            <SEFStats hasRevealed={hasRevealed} />
          </div>
          
          {/* Event Details Card - Side section */}
          <div className="lg:col-span-5">
            <SEFEventCard hasRevealed={hasRevealed} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEFSection;
