
import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion, useInView } from "framer-motion";
import { BeamsBackground } from "./ui/beams-background";
import { SEFHeader } from "./sef/SEFHeader";
import { ParallaxSection } from "./parallax";
import { useIsMobile } from "@/hooks/use-mobile";

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
        className="relative overflow-hidden"
        id="sef-section"
      >
        {/* Enhanced background with overlay gradient */}
        <BeamsBackground intensity={isMobile ? "medium" : "strong"}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#001A33]/90 via-[#001A33]/80 to-[#1A1F2C]/95" />
          
          {/* Add decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-[10%] left-[5%] w-24 h-24 rounded-full bg-[#FED700]/20 blur-xl"></div>
            <div className="absolute bottom-[20%] right-[10%] w-32 h-32 rounded-full bg-[#FED700]/10 blur-xl"></div>
            <div className="hidden md:block absolute top-[30%] right-[15%] w-16 h-16 rounded-full bg-[#FED700]/15 blur-lg"></div>
          </div>
        </BeamsBackground>
        
        {/* Main content container with enhanced spacing */}
        <div className="container mx-auto px-4 relative z-10">
          {/* Add a subtle top border decoration */}
          <motion.div 
            initial={{ width: "0%", opacity: 0 }}
            animate={isInView ? { width: "100%", opacity: 1 } : { width: "0%", opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-[#FED700]/50 to-transparent mx-auto mb-12 max-w-4xl"
          />

          {/* Enhanced grid layout with better spacing */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center lg:items-start">
            {/* Content Section - Takes more space on desktop */}
            <div className="lg:col-span-7 text-white relative">
              {/* Add subtle glow effect behind header */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FED700]/5 rounded-full blur-3xl"></div>
              
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
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={hasRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative"
                  >
                    {/* Add a decorative element behind the card */}
                    <div className="absolute -top-5 -right-5 -bottom-5 -left-5 bg-gradient-to-br from-[#FED700]/10 to-transparent rounded-xl blur-lg"></div>
                    <SEFEventCard hasRevealed={hasRevealed} />
                  </motion.div>
                </Suspense>
              )}
            </div>
          </div>
          
          {/* Add a subtle bottom border decoration */}
          <motion.div 
            initial={{ width: "0%", opacity: 0 }}
            animate={isInView ? { width: "80%", opacity: 1 } : { width: "0%", opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-[#FED700]/30 to-transparent mx-auto mt-16 max-w-3xl"
          />
        </div>
      </section>
    </ParallaxSection>
  );
};

export default SEFSection;
