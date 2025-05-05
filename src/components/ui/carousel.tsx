
import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Type definitions
type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
  onSelect?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

// Create context for carousel
const CarouselContext = React.createContext<CarouselContextProps | null>(null)

// Hook to access carousel context
function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

// Utility function for handling carousel selection
export const useCarouselSelection = (
  api: CarouselApi, 
  setCanScrollPrev: React.Dispatch<React.SetStateAction<boolean>>,
  setCanScrollNext: React.Dispatch<React.SetStateAction<boolean>>,
  onSelect?: (api: CarouselApi) => void
) => {
  return React.useCallback((api: CarouselApi) => {
    if (!api) {
      return
    }

    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
    
    // Call onSelect callback if provided
    if (onSelect) {
      onSelect(api);
    }
  }, [api, onSelect, setCanScrollPrev, setCanScrollNext]);
};

// Utility function for carousel keyboard navigation
export const useCarouselKeyboardNavigation = (
  scrollPrev: () => void,
  scrollNext: () => void
) => {
  return React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  );
};

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
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    // Use utility hooks
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleSelect = useCarouselSelection(api, setCanScrollPrev, setCanScrollNext, onSelect)
    const handleKeyDown = useCarouselKeyboardNavigation(scrollPrev, scrollNext)

    // Effect to expose API if needed
    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    // Effect to handle selection and setup listeners
    React.useEffect(() => {
      if (!api) {
        return
      }

      handleSelect(api)
      api.on("reInit", handleSelect)
      api.on("select", handleSelect)

      return () => {
        api?.off("select", handleSelect)
      }
    }, [api, handleSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
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
    )
  }
)
Carousel.displayName = "Carousel"

// Helper function to get orientation class name
export const getOrientationClass = (orientation: "horizontal" | "vertical", isItem = false) => {
  if (isItem) {
    return orientation === "horizontal" ? "pl-4" : "pt-4"
  }
  return orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col"
}

// Carousel Content component
const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

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
  )
})
CarouselContent.displayName = "CarouselContent"

// Carousel Item component
const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

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
  )
})
CarouselItem.displayName = "CarouselItem"

// Helper function for positioning navigation buttons
export const getNavigationButtonPosition = (
  orientation: "horizontal" | "vertical",
  isNext = false
) => {
  if (orientation === "horizontal") {
    return isNext 
      ? "-right-12 top-1/2 -translate-y-1/2" 
      : "-left-12 top-1/2 -translate-y-1/2"
  }
  return isNext 
    ? "-bottom-12 left-1/2 -translate-x-1/2 rotate-90" 
    : "-top-12 left-1/2 -translate-x-1/2 rotate-90"
}

// Carousel Previous button component
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        getNavigationButtonPosition(orientation),
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

// Carousel Next button component
const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        getNavigationButtonPosition(orientation, true),
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
