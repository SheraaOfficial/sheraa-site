
import React from "react";
import { FloatingImages } from "./FloatingImages";
import { HeroContent } from "./HeroContent";
import { useIsMobile } from "@/hooks/use-mobile";

function FloatingHero() {
  const isMobile = useIsMobile();
  
  return (
    <section className="w-full min-h-[90vh] md:min-h-[85vh] overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative px-4 sm:px-0">
      {/* Only render floating images if not on mobile */}
      {!isMobile && <FloatingImages />}
      <HeroContent />
    </section>
  );
}

export { FloatingHero };
