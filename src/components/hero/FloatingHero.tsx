
import React, { memo, useState, useEffect } from "react";
import { HeroContent } from "./HeroContent";
import { FloatingImages } from "./FloatingImages";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";

export const FloatingHero = memo(function FloatingHero() {
  const [isClient, setIsClient] = useState(false);
  const devicePerformance = useDevicePerformance();
  
  // Only run client-side calculations after initial render
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Reduce visual complexity for low-performance devices
  const shouldShowImages = devicePerformance !== 'low' || !isClient;
  
  return (
    <div className="w-full h-full container mx-auto flex justify-center items-center relative">
      <div className="relative z-30">
        <HeroContent />
      </div>
      
      {/* Only render the floating images on capable devices */}
      {shouldShowImages && (
        <div className="absolute inset-0 w-full h-full">
          <FloatingImages />
        </div>
      )}
    </div>
  );
});
