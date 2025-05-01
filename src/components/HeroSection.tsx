
import React from "react";
import { RetroGrid } from "@/components/ui/retro-grid";
import { FloatingHero } from "@/components/hero/FloatingHero";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
      <RetroGrid fadeDirection="bottom" fadeSize="lg" />
      <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--background)_100%)]" />
      
      <FloatingHero />
    </section>
  );
}
