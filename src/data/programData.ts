
import { LucideIcon, Users, TrendingUp, DollarSign, Globe, Award, Rocket, Building, School } from 'lucide-react';

export interface ProgramData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  duration: string;
  stage: string;
  highlights: string[];
  href: string;
  gradient: string;
  stats: Array<{
    icon: LucideIcon;
    number: string;
    label: string;
    color: string;
  }>;
}

export const programsData: ProgramData[] = [
  {
    id: 'start-young',
    title: 'Start Young',
    subtitle: 'Student Entrepreneurship',
    description: 'Nurturing the next generation of innovators through hands-on entrepreneurship education for university students.',
    icon: School,
    duration: '8 weeks',
    stage: 'Idea Stage',
    highlights: [
      'Intensive mentorship program',
      '81% Emirati participation',
      'Fast-track to S3 Incubator',
      'AED 2M+ student funding raised'
    ],
    href: '/programs/start-young',
    gradient: 'from-blue-500 to-cyan-500',
    stats: [
      { icon: Users, number: '500+', label: 'Students Graduated', color: 'text-blue-600' },
      { icon: Award, number: '81%', label: 'Emirati Participation', color: 'text-green-600' },
      { icon: TrendingUp, number: 'AED 2M+', label: 'Student Funding Raised', color: 'text-purple-600' },
      { icon: Rocket, number: '45+', label: 'Startups Launched', color: 'text-orange-600' }
    ]
  },
  {
    id: 's3-incubator',
    title: 'S3 Incubator',
    subtitle: 'Sharjah Startup Studio',
    description: 'UAE\'s first government-backed startup studio offering equity-free funding and comprehensive support.',
    icon: Rocket,
    duration: '6 months',
    stage: 'Growth Stage',
    highlights: [
      'AED 30K equity-free funding',
      'Revenue-sharing model',
      'Expert mentorship network',
      'Market access facilitation'
    ],
    href: '/programs/s3-incubator',
    gradient: 'from-sheraa-primary to-sheraa-teal',
    stats: [
      { icon: DollarSign, number: 'AED 30K', label: 'Equity-Free Funding', color: 'text-green-600' },
      { icon: Users, number: '30+', label: 'Expert Mentors', color: 'text-blue-600' },
      { icon: Building, number: '95%', label: 'Graduation Rate', color: 'text-purple-600' },
      { icon: TrendingUp, number: '3x', label: 'Average Revenue Growth', color: 'text-orange-600' }
    ]
  },
  {
    id: 'access-sharjah',
    title: 'Access Sharjah Challenge',
    subtitle: 'Market Access Program',
    description: 'Global competition connecting startups with real-world challenges and direct market access.',
    icon: Globe,
    duration: '4 months',
    stage: 'Scale Stage',
    highlights: [
      'AED 250K POC grants',
      'Direct client access',
      'Global competition',
      'Ministry endorsements'
    ],
    href: '/programs/access-sharjah',
    gradient: 'from-green-500 to-teal-500',
    stats: [
      { icon: DollarSign, number: 'AED 250K', label: 'POC Grants', color: 'text-green-600' },
      { icon: Globe, number: '45+', label: 'Countries Participating', color: 'text-blue-600' },
      { icon: Building, number: '85%', label: 'Implementation Success', color: 'text-purple-600' },
      { icon: Award, number: '12+', label: 'Industry Partners', color: 'text-orange-600' }
    ]
  },
  {
    id: 'deal-dock',
    title: 'Deal Dock',
    subtitle: 'Investment Platform',
    description: 'Exclusive platform connecting high-potential startups with vetted investors across the MENA region.',
    icon: TrendingUp,
    duration: 'Ongoing',
    stage: 'Investment Ready',
    highlights: [
      '$45M+ funding facilitated',
      'AI-powered matching',
      'Vetted investor network',
      'End-to-end support'
    ],
    href: '/programs/deal-dock',
    gradient: 'from-purple-500 to-pink-500',
    stats: [
      { icon: DollarSign, number: '$45M+', label: 'Funding Facilitated', color: 'text-green-600' },
      { icon: Users, number: '120+', label: 'Active Investors', color: 'text-blue-600' },
      { icon: Building, number: '85+', label: 'Startups Funded', color: 'text-purple-600' },
      { icon: Globe, number: '25+', label: 'Countries', color: 'text-orange-600' }
    ]
  }
];

export const getProgramById = (id: string): ProgramData | undefined => {
  return programsData.find(program => program.id === id);
};

export const getProgramsByStage = (stage: string): ProgramData[] => {
  return programsData.filter(program => program.stage === stage);
};
