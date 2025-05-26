
import { 
  Building, 
  GraduationCap, 
  Briefcase, 
  Users, 
  TrendingUp, 
  Globe, 
  Lightbulb, 
  Target 
} from 'lucide-react';

export interface BoardMember {
  name: string;
  title: string;
  organization: string;
  sector: string;
  icon: any;
  expertise: string[];
}

export const boardMembers: BoardMember[] = [
  {
    name: "Dr. Ahmed Al-Rashid",
    title: "Director of Innovation",
    organization: "Sharjah Research, Technology & Innovation Park",
    sector: "Government",
    icon: Building,
    expertise: ["Technology Transfer", "Research Commercialization", "Innovation Policy"]
  },
  {
    name: "Prof. Sarah Mitchell",
    title: "Dean of Business",
    organization: "American University of Sharjah",
    sector: "Academia",
    icon: GraduationCap,
    expertise: ["Entrepreneurship Education", "Business Strategy", "Academic-Industry Partnerships"]
  },
  {
    name: "Omar Al-Zaabi",
    title: "Managing Partner",
    organization: "Gulf Venture Capital",
    sector: "Investment",
    icon: TrendingUp,
    expertise: ["Venture Capital", "Startup Scaling", "Financial Strategy"]
  },
  {
    name: "Fatima Al-Qasimi",
    title: "Head of Corporate Strategy",
    organization: "Crescent Enterprises",
    sector: "Corporate",
    icon: Briefcase,
    expertise: ["Corporate Innovation", "Strategic Partnerships", "Market Expansion"]
  },
  {
    name: "Dr. Hassan Ali",
    title: "Innovation Consultant",
    organization: "Independent",
    sector: "Entrepreneurship",
    icon: Lightbulb,
    expertise: ["Startup Mentoring", "Business Model Innovation", "Technology Entrepreneurship"]
  },
  {
    name: "Rania Khalil",
    title: "Regional Director",
    organization: "Emirates Development Bank",
    sector: "Government",
    icon: Building,
    expertise: ["SME Financing", "Economic Development", "Policy Implementation"]
  }
];

export const sectorColors: Record<string, string> = {
  "Government": "bg-blue-100 text-blue-800 border-blue-200",
  "Academia": "bg-green-100 text-green-800 border-green-200",
  "Investment": "bg-purple-100 text-purple-800 border-purple-200",
  "Corporate": "bg-orange-100 text-orange-800 border-orange-200",
  "Entrepreneurship": "bg-pink-100 text-pink-800 border-pink-200"
};
