
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Layout, Mic } from "lucide-react";

type SEFStat = {
  value: string;
  label: string;
  icon: React.ElementType;
};

type SEFStatsProps = {
  hasRevealed: boolean;
};

export const SEFStats: React.FC<SEFStatsProps> = ({ hasRevealed }) => {
  const stats: SEFStat[] = [{
    value: "14,000+",
    label: "Attendees",
    icon: Users
  }, {
    value: "300+",
    label: "Global Speakers",
    icon: Mic
  }, {
    value: "250+",
    label: "Activities",
    icon: Calendar
  }, {
    value: "10+",
    label: "Zones",
    icon: Layout
  }];

  return (
    <div>
      <h3 className="text-xl font-bold my-[16px] text-white">What to expect at SEF'26</h3>
      <div className={`grid grid-cols-2 gap-3 transition-all duration-1000 ${hasRevealed ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
        {stats.map((stat, index) => (
          <Card 
            key={index} 
            className={`border-white/30 backdrop-blur-md bg-white/20 hover:bg-white/30 transition-all transform hover:scale-105 hover:shadow-lg text-white ${hasRevealed ? "opacity-100 transform-none" : "opacity-0 scale-95"}`}
            style={{
              transitionDelay: `${500 + index * 100}ms`
            }}
          >
            <CardContent className="p-4">
              <div className="flex flex-col items-center text-center">
                <stat.icon className="w-6 h-6 text-white mb-2" />
                <span className="text-xl md:text-3xl font-bold">{stat.value}</span>
                <span className="text-xs text-white/80 mt-1">{stat.label}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
