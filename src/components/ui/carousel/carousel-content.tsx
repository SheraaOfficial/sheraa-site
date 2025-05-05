
import * as React from "react";
import { cn } from "@/lib/utils";
import { useCarousel } from "./carousel-context";
import { getOrientationClass } from "./carousel-utils";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          getOrientationClass(orientation),
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        getOrientationClass(orientation, true),
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

export { CarouselContent, CarouselItem };
