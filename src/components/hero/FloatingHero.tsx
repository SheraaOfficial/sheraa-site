
import React from "react";
import { FloatingImages } from "./FloatingImages";
import { HeroContent } from "./HeroContent";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

function FloatingHero() {
  const isMobile = useIsMobile();
  
  return (
    <motion.section 
      className="w-full min-h-[90vh] md:min-h-[85vh] overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative px-4 sm:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ position: "relative" }}
    >
      {/* Only render floating images if not on mobile */}
      {!isMobile && <FloatingImages />}
      <HeroContent />
    </motion.section>
  );
}

export { FloatingHero };
