
import * as React from "react";
import type { CarouselApi } from "./carousel-types";

/**
 * Utility function for handling carousel selection
 */
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

/**
 * Utility function for carousel keyboard navigation
 */
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

/**
 * Helper function to get orientation class name
 */
export const getOrientationClass = (orientation: "horizontal" | "vertical", isItem = false) => {
  if (isItem) {
    return orientation === "horizontal" ? "pl-4" : "pt-4"
  }
  return orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col"
};

/**
 * Helper function for positioning navigation buttons
 */
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
};
