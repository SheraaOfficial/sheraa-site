
import React from "react";
import { Users, Building, Coins, Briefcase, Award, Sparkles, BookOpen, Network } from "lucide-react";

export const getImpactFeatures = (isMobile: boolean) => [
  {
    title: "180+",
    description: "Startups Supported",
    value: 180,
    subtext: "Since 2016",
    icon: Users,
  },
  {
    title: "$248M+",
    description: "Revenue Generated",
    value: 248,
    subtext: "By Startups",
    icon: Coins,
  },
  {
    title: "$171M+",
    description: "Capital Raised",
    value: 171,
    subtext: "By Startups",
    icon: Building,
  },
  {
    title: "1,900+",
    description: "Jobs Created",
    value: 1900,
    subtext: "Economic Impact",
    icon: Briefcase,
  },
  {
    title: "52%",
    description: "Women-Led Startups",
    value: 52,
    subtext: "Diverse Founders",
    icon: Award,
  },
  {
    title: "18,000+",
    description: "Youth Upskilled",
    value: 18000,
    subtext: "Future Innovators",
    icon: BookOpen,
  },
  {
    title: "140+",
    description: "Ecosystem Partners",
    value: 140,
    subtext: "Collaborative Network",
    icon: Network,
  },
  {
    title: "71%",
    description: "Startup Survival Rate",
    value: 71,
    subtext: "Industry-Leading",
    icon: Sparkles,
  },
].slice(0, isMobile ? 4 : 8);
