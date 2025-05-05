
import React, { memo, useState, useEffect, lazy, Suspense } from "react";
import { HeroContent } from "./HeroContent";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";
import { useIsMobile } from "@/hooks/useDeviceDetection";

// Lazy load the FloatingImages component which is visually complex
const FloatingImages = lazy(() => 
  import("./FloatingImages").then(module => ({ default: module.FloatingImages }))
);

export const FloatingHero = memo(function FloatingHero() {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const devicePerformance = useDevicePerformance();
  const isMobile = useIsMobile();
  
  // Only run client-side calculations after initial render
  useEffect(() => {
    setIsClient(true);
    
    // Delay showing floating images slightly for better perceived performance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, isMobile ? 600 : 300);
    
    return () => clearTimeout(timer);
  }, [isMobile]);
  
  // Reduce visual complexity for low-performance devices
  const shouldShowImages = (devicePerformance !== 'low' || !isClient) && isVisible;
  
  return (
    <div className="w-full h-full container mx-auto flex justify-center items-center relative">
      <div className="relative z-30">
        <HeroContent />
      </div>
      
      {/* Only render the floating images on capable devices */}
      {shouldShowImages && (
        <div className="absolute inset-0 w-full h-full">
          <Suspense fallback={null}>
            <FloatingImages />
          </Suspense>
        </div>
      )}
    </div>
  );
});

