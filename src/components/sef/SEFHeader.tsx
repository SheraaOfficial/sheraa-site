
import React from "react";
import { Link } from "react-router-dom";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";

type SEFHeaderProps = {
  isInView: boolean;
  hasRevealed: boolean;
};

export const SEFHeader: React.FC<SEFHeaderProps> = ({ isInView, hasRevealed }) => {
  return (
    <div className="space-y-8">
      <div className={`inline-flex items-center py-2 px-4 bg-white text-[#8B5CF6] rounded-full transition-all duration-500 shadow-lg ${isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
        <span className="text-sm font-bold tracking-wide">
          SHARJAH ENTREPRENEURSHIP FESTIVAL
        </span>
      </div>
      
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-all duration-700 delay-100 drop-shadow-lg ${isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
        THE REGION'S LARGEST ENTREPRENEURSHIP FESTIVAL RETURNS JANUARY 2026
      </h2>
      
      <p className={`text-lg text-white/90 transition-all duration-700 delay-200 drop-shadow-md ${isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
        To the 14,000+ attendees, 300+ global speakers, and every entrepreneur, innovator, and explorer 
        who made SEF 2025 a record-breaking success—Thank You. Your passion, ideas, and energy turned 
        SEF'25 into a festival of firsts.
      </p>
      
      <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
        <GradientButton asChild variant="shimmer" size="lg" className="group shadow-lg hover:shadow-xl">
          <Link to="/events/sef/register" className="flex items-center gap-2 font-bold">
            Register for SEF'26
          </Link>
        </GradientButton>
        
        <Button asChild size="lg" variant="outline" className="bg-white/20 text-white border-white hover:bg-white/30 backdrop-blur-sm">
          <Link to="/events/sef/agenda">Explore SEF'25 agenda</Link>
        </Button>
      </div>
    </div>
  );
};
