
export interface ProgramRecommendation {
  id: string;
  title: string;
  description: string;
  link: string;
  criteria: {
    [key: string]: string[] | boolean;
  };
}

// Define program recommendations based on criteria
export const programRecommendations: ProgramRecommendation[] = [
  {
    id: "startup-dojo",
    title: "Startup Dojo",
    description: "An 8-week summer incubation program focused on transforming student ideas into viable entrepreneurial solutions through hands-on training and mentorship.",
    link: "/programs/start-young",
    criteria: {
      persona: ["student"],
      studentStage: ["concept", "prototype"],
      studentUniversity: ["yes"]
    }
  },
  {
    id: "startup-dojo-plus",
    title: "Startup Dojo+",
    description: "An intensive accelerator program for top-performing teams emerging from Startup Dojo, offering bespoke attention to help validate and build concepts further.",
    link: "/programs/start-young",
    criteria: {
      persona: ["student"],
      studentStage: ["validated"],
      studentUniversity: ["yes"]
    }
  },
  {
    id: "s3-incubator",
    title: "S3 Incubator",
    description: "Sharjah Startup Studio provides equity-free funding and support to help tech-enabled startups achieve product-market fit and scale effectively over six months.",
    link: "/programs/s3-incubator",
    criteria: {
      persona: ["founder"],
      founderStage: ["mvp", "revenue"],
      founderTech: ["yes"],
      founderLocation: ["yes"]
    }
  },
  {
    id: "access-sharjah",
    title: "Access Sharjah Challenge",
    description: "A global competition inviting growth-stage startups to address real-world challenges faced by leading entities in Sharjah, with POC grants and direct market access.",
    link: "/programs/access-sharjah",
    criteria: {
      persona: ["global"],
      globalMarket: ["yes", "limited"],
      globalExpansion: ["yes", "maybe"]
    }
  },
  {
    id: "sme-support",
    title: "SME Support",
    description: "Tailored resources and connections for established Small and Medium Enterprises seeking growth and innovation support within Sharjah.",
    link: "/programs/sme-support",
    criteria: {
      persona: ["sme"],
      smeSize: ["micro", "small", "medium"],
      smeSector: ["manufacturing", "creative", "sustainability", "edtech", "other"]
    }
  },
  {
    id: "community-membership",
    title: "Sheraa Community Membership",
    description: "Access essential resources, co-working spaces, and our vibrant network to support your entrepreneurial journey on flexible terms.",
    link: "/community/join",
    criteria: {
      persona: ["founder", "sme", "global"],
      founderLocation: ["yes", undefined],
      globalExpansion: ["yes", "maybe", undefined]
    }
  }
];
