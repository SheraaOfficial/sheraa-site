
import type { UseEmblaCarouselType } from 'embla-carousel-react';
import { type ClassValue } from 'clsx';
import React from 'react';

export type CarouselApi = UseEmblaCarouselType[1];
export type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
export type CarouselOptions = UseCarouselParameters[0];
export type CarouselPlugin = UseCarouselParameters[1];

export interface CarouselProps {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin[];
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
  onSelect?: (api: CarouselApi) => void;
}

export interface PrevNextButtonProps {
  orientation?: "horizontal" | "vertical";
  carouselRef?: React.RefObject<HTMLElement>;
  className?: ClassValue;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export interface CarouselIconProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export interface CarouselAPIProvided {
  carouselRef: React.RefObject<HTMLDivElement>;
  api: CarouselApi | undefined;
  opts?: CarouselOptions;
  orientation?: "horizontal" | "vertical";
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onSelect?: (api: CarouselApi) => void;
}
