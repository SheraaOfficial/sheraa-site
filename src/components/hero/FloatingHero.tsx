
import React from "react";
import { FloatingImages } from "./FloatingImages";
import { HeroContent } from "./HeroContent";

function FloatingHero() {
  return (
    <section className="w-full min-h-[90vh] overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative">
      <FloatingImages />
      <HeroContent />
    </section>
  );
}

export { FloatingHero };
