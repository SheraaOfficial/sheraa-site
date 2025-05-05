
import * as React from "react";
import { CarouselContextProps } from "./carousel-types";

// Create context for carousel
export const CarouselContext = React.createContext<CarouselContextProps | null>(null);

// Hook to access carousel context
export function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}
