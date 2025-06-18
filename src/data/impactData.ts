
import { ImpactMetric, AnnualReport, SuccessStory, ProgramImpact, ImpactReportData } from '@/types/impact';

export const currentMetrics: ImpactMetric[] = [
  {
    id: '1',
    key: 'startups_supported',
    value: '180+',
    previousValue: '165+',
    change: '+15 from 2023',
    label: 'Startups Supported',
    description: 'Companies launched through our programs',
    icon: 'Building2',
    color: 'text-blue-600 bg-blue-50',
    trend: 'up',
    category: 'startups'
  },
  {
    id: '2',
    key: 'revenue_generated',
    value: '$248M+',
    previousValue: '$210M+',
    change: '+18% from 2023',
    label: 'Revenue Generated',
    description: 'Total revenue by portfolio companies',
    icon: 'DollarSign',
    color: 'text-green-600 bg-green-50',
    trend: 'up',
    category: 'financial'
  },
  {
    id: '3',
    key: 'capital_raised',
    value: '$171M+',
    previousValue: '$142M+',
    change: '+20% from 2023',
    label: 'Capital Raised',
    description: 'Funding secured by our startups',
    icon: 'TrendingUp',
    color: 'text-purple-600 bg-purple-50',
    trend: 'up',
    category: 'financial'
  },
  {
    id: '4',
    key: 'jobs_created',
    value: '1,900+',
    previousValue: '1,700+',
    change: '+200 from 2023',
    label: 'Jobs Created',
    description: 'Employment opportunities generated',
    icon: 'Users',
    color: 'text-orange-600 bg-orange-50',
    trend: 'up',
    category: 'employment'
  },
  {
    id: '5',
    key: 'survival_rate',
    value: '71%',
    previousValue: '68%',
    change: '+3% from 2023',
    label: 'Startup Survival Rate',
    description: 'Above industry average of 50%',
    icon: 'Award',
    color: 'text-emerald-600 bg-emerald-50',
    trend: 'up',
    category: 'startups'
  },
  {
    id: '6',
    key: 'women_led',
    value: '52%',
    previousValue: '48%',
    change: '+4% from 2023',
    label: 'Women-Led Startups',
    description: 'Well above global average',
    icon: 'Target',
    color: 'text-pink-600 bg-pink-50',
    trend: 'up',
    category: 'ecosystem'
  },
  {
    id: '7',
    key: 'youth_upskilled',
    value: '18,000+',
    previousValue: '15,000+',
    change: '+3,000 from 2023',
    label: 'Youth Upskilled',
    description: 'Young entrepreneurs trained',
    icon: 'GraduationCap',
    color: 'text-indigo-600 bg-indigo-50',
    trend: 'up',
    category: 'education'
  },
  {
    id: '8',
    key: 'ecosystem_partners',
    value: '140+',
    previousValue: '120+',
    change: '+20 from 2023',
    label: 'Ecosystem Partners',
    description: 'Strategic collaborations',
    icon: 'Globe',
    color: 'text-teal-600 bg-teal-50',
    trend: 'up',
    category: 'ecosystem'
  }
];

export const annualReports: AnnualReport[] = [
  {
    id: '2024-annual',
    year: '2024',
    title: '2024 Annual Impact Report',
    description: 'Comprehensive overview of Sheraa\'s ecosystem performance, startup success stories, and economic impact on Sharjah',
    pages: '84 pages',
    downloadCount: '2,847',
    featured: true,
    highlights: [
      'Record investment activity',
      '71% startup survival rate',
      '52% women-led startups',
      'Sharjah ranked 7th in MENA'
    ],
    status: 'published',
    publishedAt: '2024-12-01',
    fileSize: '12.5 MB'
  },
  {
    id: '2023-annual',
    year: '2023',
    title: '2023 Annual Impact Report',
    description: 'Year-over-year analysis showing significant growth in startup formation, revenue generation, and job creation',
    pages: '76 pages',
    downloadCount: '4,521',
    featured: false,
    highlights: [
      '180+ startups milestone',
      'International expansion',
      'Government partnerships',
      'SEF record attendance'
    ],
    status: 'published',
    publishedAt: '2023-12-15',
    fileSize: '10.8 MB'
  },
  {
    id: '2022-annual',
    year: '2022',
    title: '2022 Annual Impact Report',
    description: 'Post-pandemic recovery and adaptation, showcasing resilience and digital transformation',
    pages: '68 pages',
    downloadCount: '3,892',
    featured: false,
    highlights: [
      'Digital-first programming',
      'Virtual SEF success',
      'New partnership model',
      'Resilience & adaptation'
    ],
    status: 'published',
    publishedAt: '2022-12-20',
    fileSize: '9.2 MB'
  }
];

export const featuredSuccessStories: SuccessStory[] = [
  {
    id: 'techflow-solutions',
    companyName: 'TechFlow Solutions',
    founderName: 'Sarah Al-Mahmoud',
    sector: 'EdTech',
    program: 'S3 Incubator',
    fundingRaised: '$2.5M Series A',
    jobsCreated: '45+ employees',
    description: 'Revolutionary learning platform serving 100,000+ students across the GCC',
    achievements: [
      'Serving 100,000+ students',
      'Partnerships with 50+ schools',
      'AI-powered personalized learning',
      'Expansion to 3 GCC countries'
    ],
    featured: true
  },
  {
    id: 'greenventure',
    companyName: 'GreenVenture',
    founderName: 'Ahmed Hassan',
    sector: 'Sustainability',
    program: 'Access Sharjah Challenge',
    fundingRaised: '$1.8M Seed',
    jobsCreated: '32+ employees',
    description: 'IoT-powered waste management system deployed in 15+ UAE cities',
    achievements: [
      'Deployed in 15+ cities',
      '40% waste reduction',
      'Smart bin technology',
      'Government partnerships'
    ],
    featured: true
  },
  {
    id: 'healthbridge',
    companyName: 'HealthBridge',
    founderName: 'Fatima Al-Zahra',
    sector: 'HealthTech',
    program: 'S3 Incubator',
    fundingRaised: '$3.2M Series A',
    jobsCreated: '58+ employees',
    description: 'Telemedicine platform connecting rural communities to healthcare',
    achievements: [
      'Serving 50,000+ patients',
      'Available in 5 languages',
      'AI-powered diagnostics',
      'Rural healthcare access'
    ],
    featured: true
  }
];

export const programImpacts: ProgramImpact[] = [
  {
    programName: 'S3 Incubator',
    programId: 's3-incubator',
    startupsSupported: 45,
    successRate: '78%',
    totalFunding: '$89M',
    averageFunding: '$1.98M',
    jobsCreated: 890,
    color: 'from-sheraa-primary to-blue-600',
    description: 'Our flagship incubator for high-growth potential startups'
  },
  {
    programName: 'Start Young',
    programId: 'start-young',
    startupsSupported: 120,
    successRate: '65%',
    totalFunding: '$12M',
    averageFunding: '$100K',
    jobsCreated: 380,
    color: 'from-green-500 to-emerald-600',
    description: 'Youth entrepreneurship and university-based incubation'
  },
  {
    programName: 'Access Sharjah Challenge',
    programId: 'access-sharjah',
    startupsSupported: 15,
    successRate: '87%',
    totalFunding: '$70M',
    averageFunding: '$4.67M',
    jobsCreated: 630,
    color: 'from-purple-500 to-violet-600',
    description: 'Global startup challenge for market expansion'
  }
];

export const impactReportData2024: ImpactReportData = {
  year: '2024',
  metrics: currentMetrics,
  reports: annualReports,
  successStories: featuredSuccessStories,
  programImpacts: programImpacts,
  timeline: [
    {
      year: '2024',
      quarter: 'Q4',
      title: 'Record Breaking Year',
      description: 'Achieved historic milestones across all key metrics',
      metrics: [
        { key: 'startups_supported', value: '180+', label: 'Startups' },
        { key: 'revenue_generated', value: '$248M+', label: 'Revenue' }
      ],
      milestones: [
        'Reached 180+ supported startups',
        'Sharjah ranked 7th in MENA ecosystem',
        'Launched new Centers of Excellence',
        'SEF 2024 attracted 14,000+ attendees'
      ]
    }
  ],
  lastUpdated: new Date().toISOString()
};
