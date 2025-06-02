
export interface SuccessStory {
  id: string;
  startup: string;
  founder: string;
  sector: string;
  program: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: {
    revenue: string;
    funding: string;
    jobs: number;
    users: string;
  };
  timeline: {
    year: number;
    milestone: string;
    description: string;
  }[];
  quote: string;
  image: string;
  featured: boolean;
}

export const successStories: SuccessStory[] = [
  {
    id: "1",
    startup: "Green Future Project",
    founder: "Ahmed Al Mansouri",
    sector: "Sustainability",
    program: "Access Sharjah Challenge",
    challenge: "Traditional waste management systems in the UAE were inefficient, with only 20% recycling rates and high environmental impact.",
    solution: "Developed an AI-powered waste sorting and recycling platform that increased efficiency by 300% and reduced processing costs by 45%.",
    impact: "Transformed waste management across 5 emirates, creating a circular economy model that other GCC countries are now adopting.",
    metrics: {
      revenue: "$2.5M ARR",
      funding: "$4M raised",
      jobs: 45,
      users: "200+ corporate clients"
    },
    timeline: [
      {
        year: 2022,
        milestone: "Program Entry",
        description: "Joined Access Sharjah Challenge with MVP"
      },
      {
        year: 2022,
        milestone: "First POC",
        description: "Successful pilot with BEEAH Group"
      },
      {
        year: 2023,
        milestone: "Market Expansion",
        description: "Expanded to Abu Dhabi and Dubai"
      },
      {
        year: 2024,
        milestone: "Series A",
        description: "Raised $2.5M led by CE-Ventures"
      }
    ],
    quote: "Sheraa didn't just give us funding - they opened doors to the entire ecosystem. Our partnership with BEEAH through ASC became the foundation of our success.",
    image: "/placeholder.svg",
    featured: true
  },
  {
    id: "2",
    startup: "Arabee",
    founder: "Fatima Al Zahra",
    sector: "EdTech",
    program: "S3 Incubator",
    challenge: "Arabic language learning platforms were outdated and ineffective, with low engagement rates and poor learning outcomes.",
    solution: "Created an AI-powered gamified platform that adapts to individual learning styles, increasing engagement by 400% and learning outcomes by 250%.",
    impact: "Revolutionized Arabic language education across MENA, helping preserve cultural heritage while making learning accessible to global audiences.",
    metrics: {
      revenue: "$1.8M ARR",
      funding: "$3.2M raised",
      jobs: 32,
      users: "100,000+ learners"
    },
    timeline: [
      {
        year: 2023,
        milestone: "S3 Entry",
        description: "Joined S3 Incubator with early prototype"
      },
      {
        year: 2023,
        milestone: "Product Launch",
        description: "Launched beta version with 1,000 users"
      },
      {
        year: 2024,
        milestone: "Regional Expansion",
        description: "Expanded to 8 MENA countries"
      },
      {
        year: 2024,
        milestone: "International Recognition",
        description: "UNESCO Learning Innovation Award"
      }
    ],
    quote: "The equity-free funding and mentorship from S3 allowed us to focus purely on product development and user growth. We couldn't have scaled this fast without Sheraa's support.",
    image: "/placeholder.svg",
    featured: true
  }
];

export const getFeaturedSuccessStories = () => 
  successStories.filter(story => story.featured);

export const getSuccessStoriesByProgram = (program: string) =>
  successStories.filter(story => story.program === program);
