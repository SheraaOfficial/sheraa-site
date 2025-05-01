
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Award, Users, BookOpen, Mic } from "lucide-react";

type ExperienceZone = {
  name: string;
  description: string;
  icon: React.ElementType;
};

type SEFExperienceZonesProps = {
  hasRevealed: boolean;
  isInView: boolean;
};

export const SEFExperienceZones: React.FC<SEFExperienceZonesProps> = ({ hasRevealed, isInView }) => {
  const experienceZones: ExperienceZone[] = [{
    name: "STARTUP TOWN",
    description: "Building the Future Together",
    icon: Star
  }, {
    name: "MADE IN SHARJAH",
    description: "Honoring Local Talent",
    icon: Award
  }, {
    name: "INVESTORS LOUNGE",
    description: "Connect with Capital",
    icon: Users
  }, {
    name: "SEF ACADEMY",
    description: "Learning at Every Level",
    icon: BookOpen
  }, {
    name: "PITCH COMPETITION",
    description: "Showcase Your Ideas",
    icon: Mic
  }, {
    name: "IMPACT ZONE",
    description: "Where Inspiration Meets Purpose",
    icon: Star
  }];

  return (
    <div className="pt-8">
      <h3 className={`text-xl font-semibold mb-4 text-white transition-all duration-700 delay-400 ${isInView ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
        SEF'26 Experience
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {experienceZones.map((zone, index) => (
          <Card 
            key={index} 
            className={`border-white/30 hover:border-white backdrop-blur-md bg-white/20 hover:bg-white/30 text-white transition-all group hover:shadow-md transform hover:-translate-y-1 ${hasRevealed ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}
            style={{
              transitionDelay: `${400 + index * 75}ms`
            }}
          >
            <CardHeader className="p-4 pb-2">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-2 rounded-full">
                  <zone.icon className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-sm sm:text-base">{zone.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4 pt-0">
              <p className="text-xs text-white/80">{zone.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
