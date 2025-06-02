
import { Startup } from "@/pages/community/types/startup";

export const enhancedStartupsData: Startup[] = [
  {
    id: "1",
    name: "Green Future Project",
    description: "AI-powered waste management and recycling platform transforming the circular economy across the UAE. Our technology increases recycling efficiency by 300% while reducing operational costs.",
    logo: "/placeholder.svg",
    sector: "Sustainability",
    program: "ASC",
    stage: "Growth",
    website: "https://greenfuture.ae",
    achievement: "Winner - Access Sharjah Challenge 2022",
    impact: "Reduced carbon emissions by 40% for 200+ clients",
    stats: "Raised $4M | 45 employees | 5 Emirates",
    foundedYear: 2021,
    founderStory: "Ahmed Al Mansouri, former environmental engineer at ADNOC, witnessed the waste crisis firsthand and decided to build a solution that could scale across the region.",
    technologies: ["AI", "IoT", "Blockchain", "Computer Vision"],
    achievements: [
      "Winner - Access Sharjah Challenge 2022",
      "Featured by CNN as 'Green Tech Pioneer'",
      "Partnership with UAE Ministry of Environment",
      "ISO 14001 Environmental Certification"
    ],
    metrics: {
      revenue: "$2.5M ARR",
      funding: "$4M total raised",
      employees: 45,
      customers: "200+ corporate clients",
      growth: "300% YoY"
    }
  },
  {
    id: "2",
    name: "Arabee",
    description: "Revolutionary Arabic language learning platform using AI and gamification to make education engaging and effective. Serving 100,000+ learners across 8 countries.",
    logo: "/placeholder.svg",
    sector: "EdTech",
    program: "S3",
    stage: "Scale",
    website: "https://arabee.com",
    achievement: "UNESCO Learning Innovation Award 2024",
    impact: "100,000+ Active Learners Worldwide",
    stats: "Present in 8 Countries | $3.2M Raised",
    foundedYear: 2022,
    founderStory: "Fatima Al Zahra, a linguistics PhD from AUS, created Arabee to address the lack of effective Arabic learning tools for the global diaspora.",
    technologies: ["AI/ML", "NLP", "Gamification", "Mobile-First"],
    achievements: [
      "UNESCO Learning Innovation Award 2024",
      "Forbes 30 Under 30 - Education",
      "Winner - Global EdTech Startup Awards",
      "Featured in Forbes, TechCrunch, Wired"
    ],
    metrics: {
      revenue: "$1.8M ARR",
      funding: "$3.2M total raised",
      employees: 32,
      customers: "100,000+ active users",
      growth: "400% YoY"
    }
  },
  {
    id: "3",
    name: "KRISPR",
    description: "Next-generation agricultural technology combining precision farming with AI-driven crop optimization. Improving yield by 30% while reducing water usage by 25%.",
    logo: "/placeholder.svg",
    sector: "AgriTech",
    program: "S3",
    stage: "Growth",
    website: "https://krispr.io",
    achievement: "Partnership with UAE Ministry of Agriculture",
    impact: "30% Yield Improvement Technology",
    stats: "8 Patents | $3M Seed | 25 Employees",
    foundedYear: 2023,
    founderStory: "Omar Khalil started KRISPR as a university project, combining his computer science background with his family's farming heritage.",
    technologies: ["IoT", "AI/ML", "Satellite Imaging", "Precision Agriculture"],
    achievements: [
      "8 patents filed in agricultural technology",
      "Partnership with UAE Ministry of Agriculture",
      "Winner - Global AgTech Innovation Awards",
      "Pilot projects in 3 Emirates"
    ],
    metrics: {
      revenue: "$800K ARR",
      funding: "$3M seed round",
      employees: 25,
      customers: "150+ farms",
      growth: "250% YoY"
    }
  },
  {
    id: "4",
    name: "Manhat",
    description: "Innovative water technology solutions addressing water scarcity through sustainable desalination and water recycling processes.",
    logo: "/placeholder.svg",
    sector: "WaterTech",
    program: "Dojo+",
    stage: "Seed",
    website: "https://manhat.tech",
    achievement: "Patent-pending desalination technology",
    impact: "2M Liters Water Saved Daily",
    stats: "Featured by UNESCO | 15 Employees",
    foundedYear: 2023,
    founderStory: "Dr. Mariam Rashid leverages her chemical engineering expertise to tackle the region's water challenges with breakthrough technology.",
    technologies: ["Membrane Technology", "Solar Power", "IoT", "Water Analytics"],
    achievements: [
      "Patent-pending desalination technology",
      "Featured by UNESCO Water Program",
      "Winner - UAE Water Innovation Challenge",
      "Pilot project with Sharjah Municipality"
    ],
    metrics: {
      revenue: "$200K ARR",
      funding: "$1.5M pre-seed",
      employees: 15,
      customers: "5 municipal clients",
      growth: "150% YoY"
    }
  },
  {
    id: "5",
    name: "TechMed Solutions",
    description: "Healthcare technology platform providing AI-powered diagnostic tools and telemedicine services across the MENA region.",
    logo: "/placeholder.svg",
    sector: "HealthTech",
    program: "S3",
    stage: "Growth",
    website: "https://techmed.health",
    achievement: "Partnership with 25+ hospitals",
    impact: "500,000+ Patients Served",
    stats: "$2M ARR | 3 Countries | 40 Employees",
    foundedYear: 2022,
    founderStory: "Dr. Hassan Abdullah combines 15 years of medical practice with cutting-edge AI to democratize healthcare access.",
    technologies: ["AI Diagnostics", "Telemedicine", "Cloud Computing", "Mobile Health"],
    achievements: [
      "Partnership with 25+ hospitals",
      "FDA-equivalent approval in UAE",
      "Winner - Healthcare Innovation Awards",
      "Featured in Middle East Health Magazine"
    ],
    metrics: {
      revenue: "$2M ARR",
      funding: "$5M Series A",
      employees: 40,
      customers: "500,000+ patients",
      growth: "200% YoY"
    }
  }
];

export const getStartupsByProgram = (program: string) =>
  enhancedStartupsData.filter(startup => startup.program === program);

export const getStartupsBySector = (sector: string) =>
  enhancedStartupsData.filter(startup => startup.sector === sector);

export const getFeaturedStartups = () =>
  enhancedStartupsData.slice(0, 4);
