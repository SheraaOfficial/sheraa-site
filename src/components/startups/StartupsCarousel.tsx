
import React, { useState, useCallback, useEffect, useMemo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import StartupCard from "./StartupCard";
import MobilePagination from "./MobilePagination";
import { featuredStartups } from "./startupsData";
import { useIsMobile } from "@/hooks/useDeviceDetection";
import { useDevicePerformance } from "@/hooks/useDevicePerformance";

interface StartupsCarouselProps {
  onSlideChange?: (index: number) => void;
}

const StartupsCarousel: React.FC<StartupsCarouselProps> = ({ onSlideChange }) => {
  const isMobile = useIsMobile();
  const devicePerformance = useDevicePerformance();
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  
  // Memoize options based on device performance
  const carouselOptions = useMemo(() => ({
    align: "start" as const,  // Fixed: Use TypeScript const assertion
    loop: true,
    dragFree: devicePerformance !== 'low',
    // Use more passive dragging for low-end devices
    dragThreshold: devicePerformance === 'low' ? 20 : 10,
  }), [devicePerformance]);
  
  // Setup API event listeners when the carousel API is available
  useEffect(() => {
    if (!api) return;
    
    // Handler for slide change
    const handleSelect = () => {
      const currentIndex = api.selectedScrollSnap();
      setActiveIndex(currentIndex);
      
      if (onSlideChange) {
        onSlideChange(currentIndex);
      }
    };
    
    // Subscribe to carousel events
    api.on('select', handleSelect);
    
    // Set initial value
    handleSelect();
    
    // Cleanup
    return () => {
      api.off('select', handleSelect);
    };
  }, [api, onSlideChange]);

  // Only display a subset of startups for low-end devices
  const displayedStartups = useMemo(() => {
    return devicePerformance === 'low' && isMobile 
      ? featuredStartups.slice(0, 6) 
      : featuredStartups;
  }, [devicePerformance, isMobile]);
  
  return (
    <div className="mb-10 md:mb-14 max-w-full">
      <Carousel 
        opts={carouselOptions}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {displayedStartups.map((startup, index) => (
            <CarouselItem 
              key={startup.id} 
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="h-full">
                <StartupCard 
                  startup={startup} 
                  index={index} 
                  isMobile={isMobile} 
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="hidden md:block" aria-hidden="true">
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </div>
      </Carousel>
      
      {/* Mobile pagination indicators */}
      {isMobile && (
        <MobilePagination 
          activeIndex={activeIndex} 
          itemCount={displayedStartups.length} 
        />
      )}
    </div>
  );
};

export default React.memo(StartupsCarousel);
