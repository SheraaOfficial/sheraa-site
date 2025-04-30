
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

// Define all questions for the eligibility flow
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
      { id: "other", label: "Other" }
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
];
