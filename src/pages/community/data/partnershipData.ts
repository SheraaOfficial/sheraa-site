
import { UserCheck, Briefcase, Building, Heart, Lightbulb } from 'lucide-react';
import { PartnershipType } from '../types/partnership';

export const partnershipTypes: PartnershipType[] = [
  {
    id: "corporate",
    title: "Corporate Partners",
    icon: Building,
    description: "Collaborate with Sheraa to drive innovation within your organization, access a pipeline of startups, and contribute to Sharjah's entrepreneurship ecosystem.",
    benefits: [
      "Access to curated startup pipeline in key sectors",
      "Customized innovation challenges & hackathons",
      "Integration with Sheraa's Centers of Excellence",
      "Branding & visibility at major events like SEF",
      "Employee engagement opportunities as mentors",
      "First look at emerging technologies & solutions"
    ],
    examples: "BEEAH, Air Arabia, Alef Group, Crescent Enterprises"
  },
  {
    id: "government",
    title: "Government & Public Sector",
    icon: Briefcase,
    description: "Align entrepreneurship initiatives with national priorities, co-develop challenges, and support policy development for innovation in Sharjah.",
    benefits: [
      "Strategic alignment with national innovation agendas",
      "Co-development of sector-specific challenges",
      "Access to talent & innovative solutions",
      "Policy feedback from the startup ecosystem",
      "Economic development & diversification support",
      "Smart city & sustainable development initiatives"
    ],
    examples: "Ministry of Climate Change, Sharjah Media City, SRTIP"
  },
  {
    id: "investors",
    title: "Investors",
    icon: Heart,
    description: "Gain access to vetted deal flow, co-invest alongside Sheraa partners, and connect with the region's most promising startups.",
    benefits: [
      "Curated access to qualified deal flow",
      "Early visibility into promising ventures",
      "Participation in pitch events & demo days",
      "Co-investment opportunities",
      "Participation as judges & mentors",
      "Portfolio company support services"
    ],
    examples: "CE-Ventures, Sandooq Al Watan"
  },
  {
    id: "mentors",
    title: "Mentors & Experts",
    icon: UserCheck,
    description: "Share your knowledge and experience by joining our advisor network, leading workshops, or providing pro-bono consultations.",
    benefits: [
      "Connection to innovative startups",
      "Industry & sector insights",
      "Network expansion opportunities",
      "Community recognition & visibility",
      "Personal & professional development",
      "Integration into Sheraa events"
    ],
    examples: "Industry experts, Successful entrepreneurs, Professionals"
  },
  {
    id: "academic",
    title: "Academic Institutions",
    icon: Lightbulb,
    description: "Partner on youth programs, research collaborations, and talent pipelines to nurture the next generation of innovators.",
    benefits: [
      "Student entrepreneurship programs",
      "Practical startup experience opportunities",
      "Research & commercialization pathways",
      "Innovation lab collaborations",
      "Industry connection for students & faculty",
      "Curriculum development insights"
    ],
    examples: "American University of Sharjah, University of Sharjah"
  }
];
