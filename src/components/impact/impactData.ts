
import {
  IconCloud,
  IconCurrencyDollar,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import React from "react";

export interface ImpactFeature {
  title: string;
  description: string;
  subtext: string;
  value: string;
  icon: React.ReactNode;
}

export const getImpactFeatures = (isMobile: boolean): ImpactFeature[] => [
  {
    title: "Startups",
    description: isMobile ? "Supported" : "Building impactful ventures across sectors",
    subtext: "52% women-led",
    value: "180+",
    icon: <IconTerminal2 className="w-6 h-6" />,
  },
  {
    title: "Revenue",
    description: isMobile ? "Generated" : "By our portfolio companies",
    subtext: "71% survival rate",
    value: "$248M+",
    icon: <IconCurrencyDollar className="w-6 h-6" />,
  },
  {
    title: "Jobs",
    description: isMobile ? "Created" : "Contributing to economic growth",
    subtext: "Regional impact",
    value: "1900+",
    icon: <IconRouteAltLeft className="w-6 h-6" />,
  },
  {
    title: "Partners",
    description: isMobile ? "Connected" : "Strong network of collaborators",
    subtext: "18k+ youth trained",
    value: "140+",
    icon: <IconCloud className="w-6 h-6" />,
  },
];
