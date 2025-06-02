
export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  program: string;
  image: string;
  quote: string;
  rating: number;
  videoUrl?: string;
  achievements: string[];
  year: number;
  type: 'founder' | 'mentor' | 'partner' | 'investor';
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ahmed Al Mansouri",
    title: "CEO & Founder",
    company: "Green Future Project",
    program: "Access Sharjah Challenge",
    image: "/placeholder.svg",
    quote: "Sheraa didn't just provide funding - they gave us access to a network that transformed our business. The mentorship from industry experts helped us navigate challenges we never anticipated.",
    rating: 5,
    achievements: [
      "Raised $2.5M in Series A funding",
      "Expanded to 5 GCC countries",
      "Reduced carbon emissions by 40% for clients",
      "Featured by CNN as 'Green Tech Pioneer'"
    ],
    year: 2023,
    type: "founder"
  },
  {
    id: "2",
    name: "Fatima Al Zahra",
    title: "Co-Founder & CTO",
    company: "Arabee",
    program: "S3 Incubator",
    image: "/placeholder.svg",
    quote: "The S3 program was a game-changer. In 6 months, we went from a prototype to serving 100,000+ users across the MENA region. The equity-free model allowed us to maintain control while getting world-class support.",
    rating: 5,
    videoUrl: "https://youtube.com/watch?v=demo",
    achievements: [
      "100,000+ active users",
      "Present in 8 countries",
      "Winner - UNESCO Learning Innovation Award",
      "Featured in Forbes 30 Under 30"
    ],
    year: 2024,
    type: "founder"
  },
  {
    id: "3",
    name: "Dr. Sarah Chen",
    title: "Senior Innovation Advisor",
    company: "Crescent Enterprises",
    program: "Mentor Network",
    image: "/placeholder.svg",
    quote: "Being part of Sheraa's mentor network has been incredibly rewarding. The quality of startups and their dedication to solving real problems is inspiring. I've learned as much from them as I've taught.",
    rating: 5,
    achievements: [
      "Mentored 15+ startups",
      "2 successful exits",
      "Industry expertise in FinTech",
      "Former Goldman Sachs VP"
    ],
    year: 2023,
    type: "mentor"
  },
  {
    id: "4",
    name: "Omar Khalil",
    title: "Founder & CEO",
    company: "KRISPR",
    program: "Startup Dojo+",
    image: "/placeholder.svg",
    quote: "Starting as a university student with just an idea, Sheraa's youth programs gave me the foundation to build a real business. From Startup Dojo to S3, they supported us at every stage.",
    rating: 5,
    achievements: [
      "8 patents filed",
      "30% yield improvement technology",
      "Partnership with UAE Ministry of Agriculture",
      "Raised $3M seed funding"
    ],
    year: 2024,
    type: "founder"
  },
  {
    id: "5",
    name: "Layla Hassan",
    title: "Managing Director",
    company: "CE-Ventures",
    program: "Investment Partner",
    image: "/placeholder.svg",
    quote: "Sheraa has consistently sourced high-quality deal flow for us. Their rigorous vetting process and founder development programs ensure we're investing in startups with strong fundamentals.",
    rating: 5,
    achievements: [
      "$50M+ invested through Sheraa",
      "12 portfolio companies",
      "3 successful exits",
      "Average 4x return"
    ],
    year: 2023,
    type: "investor"
  }
];

export const getTestimonialsByType = (type: Testimonial['type']) => 
  testimonials.filter(t => t.type === type);

export const getFeaturedTestimonials = () => 
  testimonials.filter(t => t.rating === 5).slice(0, 3);
