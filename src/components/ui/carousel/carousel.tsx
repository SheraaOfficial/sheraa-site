
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { CarouselContext } from "./carousel-context";
import { CarouselProps } from "./carousel-types";
import { useCarouselSelection, useCarouselKeyboardNavigation } from "./carousel-utils";

// Main Carousel component
const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      onSelect,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    // Use utility hooks
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleSelect = useCarouselSelection(
      api, 
      setCanScrollPrev, 
      setCanScrollNext, 
      onSelect
    );
    
    const handleKeyDown = useCarouselKeyboardNavigation(scrollPrev, scrollNext);

    // Effect to expose API if needed
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    // Effect to handle selection and setup listeners
    React.useEffect(() => {
      if (!api) {
        return;
      }

      handleSelect(api);
      api.on("reInit", handleSelect);
      api.on("select", handleSelect);

      return () => {
        api.off("select", handleSelect);
        api.off("reInit", handleSelect);
      };
    }, [api, handleSelect]);

    // Create a ref for our React component
    const reactCarouselRef = React.useRef<HTMLDivElement>(null);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef: reactCarouselRef,
          api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          onSelect,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

export { Carousel };
