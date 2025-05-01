
import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import { useInView } from "framer-motion";
import { BeamsBackground } from "./ui/beams-background";
import { SEFHeader } from "./sef/SEFHeader";

// Lazy load components that aren't immediately visible
const SEFDescription = lazy(() => import("./sef/SEFDescription").then(mod => ({ default: mod.SEFDescription })));

// Fix imports for named exports to work with lazy loading
const SEFStats = lazy(() => import("./sef/SEFStats").then(mod => ({ default: mod.SEFStats })));
const SEFEventCard = lazy(() => import("./sef/SEFEventCard").then(mod => ({ default: mod.SEFEventCard })));

// Simple loading fallback
const LoadingFallback = () => <div className="h-24 w-full animate-pulse bg-gray-800/30 rounded-lg"></div>;

const SEFSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px 0px" });
  const [hasRevealed, setHasRevealed] = useState(false);
  
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
            
            {isInView && (
              <Suspense fallback={<LoadingFallback />}>
                <SEFDescription isInView={isInView} />
              </Suspense>
            )}
            
            {isInView && hasRevealed && (
              <Suspense fallback={<LoadingFallback />}>
                <SEFStats hasRevealed={hasRevealed} />
              </Suspense>
            )}
          </div>
          
          {/* Event Details Card - Side section */}
          <div className="lg:col-span-5">
            {isInView && (
              <Suspense fallback={<LoadingFallback />}>
                <SEFEventCard hasRevealed={hasRevealed} />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEFSection;
