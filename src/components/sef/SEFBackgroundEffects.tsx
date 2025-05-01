
import React from "react";
import { Particles } from "@/components/ui/particles";
import { Glow } from "@/components/ui/glow-effect";
import { BorderBeam } from "@/components/ui/border-beam";

export const SEFBackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Background with particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] opacity-90 z-0 overflow-hidden">
        <Particles
          className="absolute inset-0"
          quantity={75}
          staticity={30}
          color="#ffffff"
          ease={50}
        />
      </div>
      
      {/* Glow effect */}
      <Glow variant="center" className="z-10" />
      
      {/* Top border beam */}
      <BorderBeam 
        className="z-20" 
        colorFrom="#ffffff" 
        colorTo="#D6BCFA"
        size={300}
        duration={10}
      />
    </>
  );
};
