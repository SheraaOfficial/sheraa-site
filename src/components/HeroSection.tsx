import React from "react";
import { RetroGrid } from "@/components/ui/retro-grid";
import { FloatingHero } from "@/components/hero/FloatingHero";
import { motion } from "framer-motion";
export function HeroSection() {
  return <motion.section initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.5
  }} style={{
    position: "relative"
  }} className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-inherit">
      <RetroGrid fadeDirection="bottom" fadeSize="lg" className="opacity-60" />
      <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--background)_100%)]" />
      
      <FloatingHero />
    </motion.section>;
}