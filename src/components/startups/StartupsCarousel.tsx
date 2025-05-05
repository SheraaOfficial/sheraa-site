
import React, { useState, useCallback } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import StartupCard from "./StartupCard";
import MobilePagination from "./MobilePagination";
import { featuredStartups } from "./startupsData";
import { useIsMobile } from "@/hooks/useDeviceDetection";

interface StartupsCarouselProps {
  onSlideChange?: (index: number) => void;
}

const StartupsCarousel: React.FC<StartupsCarouselProps> = ({ onSlideChange }) => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleSlideChange = useCallback((index: number) => {
    setActiveIndex(index);
    if (onSlideChange) {
      onSlideChange(index);
    }
  }, [onSlideChange]);
  
  return (
    <div className="mb-10 md:mb-14 max-w-full">
      <Carousel 
        opts={{
          align: "start",
          loop: true,
          dragFree: true
        }}
        className="w-full"
        onSelect={(api) => {
          if (api) {
            handleSlideChange(api.selectedScrollSnap());
          }
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {featuredStartups.map((startup, index) => (
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
        
        <div className="hidden md:block">
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </div>
      </Carousel>
      
      {/* Mobile pagination indicators */}
      {isMobile && (
        <MobilePagination 
          activeIndex={activeIndex} 
          itemCount={featuredStartups.length} 
        />
      )}
    </div>
  );
};

export default StartupsCarousel;
