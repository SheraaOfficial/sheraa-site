
export interface Question {
  id: string;
  text: string;
  type: "radio" | "checkbox" | "multi-select";
  options?: {
    id: string;
    label: string;
    persona?: string;
  }[];
  dependsOn?: {
    questionId: string;
    answerId: string;
  };
}

export interface ProgramRecommendation {
  id: string;
  title: string;
  description: string;
  link: string;
  criteria: {
    [key: string]: string[] | boolean;
  };
}

export const eligibilityQuestions: Question[] = [
  {
    id: "persona",
    text: "Which of the following best describes you?",
    type: "radio",
    options: [
      { id: "student", label: "Student or recent graduate with a business idea", persona: "student" },
      { id: "founder", label: "Founder of an early-stage startup", persona: "founder" },
      { id: "established", label: "Leader of an established business seeking growth", persona: "sme" },
      { id: "global", label: "Innovator with a solution to global/local challenges", persona: "global" }
    ]
  },
  // Student path questions
  {
    id: "studentStage",
    text: "What stage is your idea at?",
    type: "radio",
    dependsOn: { questionId: "persona", answerId: "student" },
    options: [
      { id: "concept", label: "Just a concept, not yet developed" },
      { id: "prototype", label: "Working on a prototype/MVP" },
      { id: "validated", label: "MVP with some user validation" }
    ]
  },
  {
    id: "studentUniversity",
    text: "Are you currently enrolled in a university in the UAE?",
    type: "radio",
    dependsOn: { questionId: "persona", answerId: "student" },
    options: [
      { id: "yes", label: "Yes" },
      { id: "no", label: "No" }
    ]
  },
  {
    id: "studentField",
    text: "Which field is your idea in?",
    type: "radio",
    dependsOn: { questionId: "persona", answerId: "student" },
    options: [
      { id: "tech", label: "Technology" },
      { id: "sustainability", label: "Sustainability" },
      { id: "creative", label: "Creative Industries" },
      { id: "education", label: "Education" },
      { id: "other", label: "Other" }
    ]
  },
  {
    id: "studentGoals",
    text: "What are your primary goals with this idea?",
    type: "checkbox",
    dependsOn: { questionId: "persona", answerId: "student" },
    options: [
      { id: "learn", label: "Learn entrepreneurship skills" },
      { id: "launch", label: "Launch a real business" },
      { id: "impact", label: "Create social impact" },
      { id: "compete", label: "Win competitions" }
    ]
  },
  // Founder path questions
  {
    id: "founderStage",
    text: "What stage is your startup at?",
    type: "radio",
    dependsOn: { questionId: "persona", answerId: "founder" },
    options: [
      { id: "ideaStage", label: "Idea stage, no product yet" },
      { id: "mvp", label: "MVP built, seeking product-market fit" },
      { id: "revenue", label: "Generating revenue, looking to scale" }
    ]
  },
  {
    id: "founderFunding",
    text: "What is your current funding situation?",
    type: "radio",
    dependsOn: { questionId: "persona", answerId: "founder" },
    options: [
      { id: "bootstrap", label: "Self-funded/Bootstrapped" },
      { id: "seed", label: "Pre-seed/Seed funding raised" },
      { id: "series", label: "Series A or beyond" }
    ]
  },
  {
    id: "founderTech",
    text: "Is your business model tech-enabled?",
    type: "radio",
    dependsOn: { questionId: "persona", answerId: "founder" },
    options: [
      { id: "yes", label: "Yes" },
      { id: "no", label: "No" }
    ]
  },
  {
    id: "founderLocation",
    text: "Are you willing to operate in Sharjah/UAE?",
    type: "radio",
    dependsOn: { questionId: "persona", answerId: "founder" },
    options: [
      { id: "yes", label: "Yes" },
      { id: "no", label: "No" }
    ]
  },
  {
    id: "founderSector",
    text: "Which sector does your startup operate in?",
    type: "radio",
    dependsOn: { questionId: "persona", answerId: "founder" },
    options: [
      { id: "sustainability", label: "Sustainability/CleanTech" },
      { id: "edtech", label: "EdTech" },
      { id: "creative", label: "Creative Industries" },
      { id: "manufacturing", label: "Advanced Manufacturing/CPG" },
      { id: "fintech", label: "FinTech" },
      { id: "healthtech", label: "HealthTech" },
      { id: "other", label: "Other" }
    ]
  },
  {
    id: "founderTeam",
    text: "Tell us about your team",
    type: "radio",
    dependsOn: { questionId: "persona", answerId: "founder" },
    options: [
      { id: "solo", label: "Solo founder" },
      { id: "cofounder", label: "2-3 founders" },
      { id: "team", label: "Full team with employees" }
    ]
  },
  // SME path questions
  {
    id: "smeSize",
    text: "How many employees does your business have?",
    type: "radio",
    dependsOn: { questionId: "persona", answerId: "sme" },
    options: [
      { id: "micro", label: "1-9 employees" },
      { id: "small", label: "10-49 employees" },
      { id: "medium", label: "50-249 employees" },
      { id: "large", label: "250+ employees" }
    ]
  },
  {
    id: "smeAge",
    text: "How long has your business been operating?",
    type: "radio",
    dependsOn: { questionId: "persona", answerId: "sme" },
    options: [
      { id: "new", label: "Less than 2 years" },
      { id: "established", label: "2-5 years" },
      { id: "mature", label: "More than 5 years" }
    ]
  },
  {
    id: "smeSector",
    text: "Which sector does your business operate in?",
    type: "radio",
    dependsOn: { questionId: "persona", answerId: "sme" },
    options: [
      { id: "manufacturing", label: "Manufacturing/CPG" },
      { id: "creative", label: "Creative Industries" },
      { id: "sustainability", label: "Sustainability" },
      { id: "edtech", label: "EdTech" },
      { id: "retail", label: "Retail/E-commerce" },
      { id: "services", label: "Professional Services" },
      { id: "other", label: "Other" }
    ]
  },
  {
    id: "smeNeeds",
    text: "What are your current business needs?",
    type: "checkbox",
    dependsOn: { questionId: "persona", answerId: "sme" },
    options: [
      { id: "funding", label: "Access to finance" },
      { id: "market", label: "Market expansion" },
      { id: "innovation", label: "Innovation support" },
      { id: "talent", label: "Talent acquisition" },
      { id: "digitalization", label: "Digital transformation" }
    ]
  },
  // Global innovator path questions
  {
    id: "globalSector",
    text: "Which sector does your solution address?",
    type: "radio",
    dependsOn: { questionId: "persona", answerId: "global" },
    options: [
      { id: "agritech", label: "AgriTech/Food Security" },
      { id: "sustainability", label: "Sustainability/Waste Management" },
      { id: "creative", label: "Creative Industries" },
      { id: "edtech", label: "EdTech" },
      { id: "fintech", label: "FinTech" },
      { id: "healthtech", label: "HealthTech" },
      { id: "other", label: "Other" }
    ]
  },
  {
    id: "globalMarket",
    text: "Have you validated your solution in any market?",
    type: "radio",
    dependsOn: { questionId: "persona", answerId: "global" },
    options: [
      { id: "yes", label: "Yes, in one or more markets" },
      { id: "limited", label: "Limited validation so far" },
      { id: "no", label: "No validation yet" }
    ]
  },
  {
    id: "globalExpansion",
    text: "Are you interested in expanding to Sharjah/UAE?",
    type: "radio",
    dependsOn: { questionId: "persona", answerId: "global" },
    options: [
      { id: "yes", label: "Yes, that's a priority market" },
      { id: "maybe", label: "Open to it, but not a priority" },
      { id: "no", label: "Not at this time" }
    ]
  },
  {
    id: "globalInnovation",
    text: "What makes your solution innovative?",
    type: "checkbox",
    dependsOn: { questionId: "persona", answerId: "global" },
    options: [
      { id: "tech", label: "Advanced technology" },
      { id: "business", label: "Novel business model" },
      { id: "impact", label: "Social/environmental impact" },
      { id: "accessibility", label: "Increased accessibility" },
      { id: "cost", label: "Cost reduction" }
    ]
  },
];

export const programRecommendations: ProgramRecommendation[] = [
  {
    id: "startup-dojo",
    title: "Startup Dojo",
    description: "An 8-week summer incubation program focused on transforming student ideas into viable entrepreneurial solutions through hands-on training and mentorship.",
    link: "/programs/startup-dojo",
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
    link: "/programs/startup-dojo-plus",
    criteria: {
      persona: ["student"],
      studentStage: ["validated"],
      studentUniversity: ["yes"]
    }
  },
  {
    id: "student-membership",
    title: "Student Entrepreneur Membership",
    description: "Access to Sheraa's co-working spaces, mentorship sessions, and community events tailored for student entrepreneurs and recent graduates.",
    link: "/community/join",
    criteria: {
      persona: ["student"],
      studentUniversity: ["no"]
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
    id: "early-stage-program",
    title: "Early-Stage Startup Program",
    description: "A program designed to help founders at the idea stage validate their concepts and build their first MVP with expert guidance and resources.",
    link: "/programs/grow-smart",
    criteria: {
      persona: ["founder"],
      founderStage: ["ideaStage"],
      founderLocation: ["yes"]
    }
  },
  {
    id: "access-sharjah",
    title: "Access Sharjah Challenge",
    description: "A global competition inviting growth-stage startups to address real-world challenges faced by leading entities in Sharjah, with POC grants and direct market access.",
    link: "/programs/access-sharjah-challenge",
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
      smeSector: ["manufacturing", "creative", "sustainability", "edtech", "retail", "services", "other"]
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

// Benefits for each program to display in the results
export const programBenefits: { [key: string]: string[] } = {
  "startup-dojo": [
    "8-week intensive entrepreneurial training",
    "Mentorship from industry experts",
    "Networking with peers and ecosystem players",
    "Pathway to further Sheraa programs",
    "Top teams may receive grants and business licenses"
  ],
  "startup-dojo-plus": [
    "Focused accelerator for promising ideas",
    "Bespoke mentorship and guidance",
    "Funding opportunities for top teams",
    "Fast-track to S3 Incubator consideration",
    "Showcase opportunities to partners and investors"
  ],
  "student-membership": [
    "Access to co-working spaces",
    "Networking with student entrepreneurs",
    "Specialized workshops and events",
    "Mentorship from industry experts",
    "Potential for summer program consideration"
  ],
  "s3-incubator": [
    "$30,000 equity-free pre-seed funding",
    "6-month customized growth program",
    "Expert mentorship and operational support",
    "Free 1-year Sharjah business license",
    "Access to 30+ experienced mentors and Entrepreneurs-in-Residence"
  ],
  "early-stage-program": [
    "Idea validation framework and support",
    "MVP development guidance",
    "Market research and customer discovery tools",
    "Networking with potential co-founders",
    "Path to S3 Incubator application"
  ],
  "access-sharjah": [
    "Equity-free POC grants (up to AED 250,000)",
    "Direct access to major industry clients",
    "Validation and credibility in the UAE market",
    "Support with licensing and setup in Sharjah",
    "Visibility at major regional tech events"
  ],
  "sme-support": [
    "Access to finance through preferential terms",
    "Market access and export development support",
    "Innovation and technology adoption assistance",
    "Capacity building and expert mentorship",
    "Integration into Sheraa's ecosystem network"
  ],
  "community-membership": [
    "Free co-working space access at Sheraa hubs",
    "Community platform access for networking",
    "Investor and partner introductions",
    "Expert mentor network access",
    "Subsidized free zone incorporation options"
  ]
};
