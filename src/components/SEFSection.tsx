import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion, useInView } from "framer-motion";
import { BeamsBackground } from "./ui/beams-background";
import { SEFHeader } from "./sef/SEFHeader";
import { ParallaxSection } from "./parallax";
import { useIsMobile } from "@/hooks/use-mobile";

// Lazy load components that aren't immediately visible
const SEFDescription = lazy(() => import("./sef/SEFDescription").then(mod => ({
  default: mod.SEFDescription
})));

// Fix imports for named exports to work with lazy loading
const SEFStats = lazy(() => import("./sef/SEFStats").then(mod => ({
  default: mod.SEFStats
})));
const SEFEventCard = lazy(() => import("./sef/SEFEventCard").then(mod => ({
  default: mod.SEFEventCard
})));

// Simple loading fallback
const LoadingFallback = () => <div className="h-24 w-full animate-pulse bg-gray-800/30 rounded-lg"></div>;
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
  return <ParallaxSection direction="up" scrollMultiplier={0.2} spring={true} stiffness={50} damping={15} className="relative py-16 md:py-32 overflow-hidden">
      <section ref={sectionRef} className="relative overflow-hidden" id="sef-section">
        {/* Enhanced background with overlay gradient */}
        <BeamsBackground intensity={isMobile ? "medium" : "strong"}>
          
          
          {/* Add decorative elements */}
          
        </BeamsBackground>
        
        {/* Main content container with enhanced spacing */}
        
      </section>
    </ParallaxSection>;
};
export default SEFSection;