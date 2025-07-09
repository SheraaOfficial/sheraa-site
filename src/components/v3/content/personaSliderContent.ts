import { SlideContent } from '../modern/ModernVideoSlider';

// Young Entrepreneur Persona Content
export const youngEntrepreneurSlides: SlideContent[] = [
  {
    id: 'young-gamified-hero',
    title: 'Level Up Your Startup Game',
    subtitle: 'Gamified entrepreneurship for the next generation',
    description: 'Join 18,000+ young innovators in an epic startup adventure. Complete challenges, earn badges, and transform your ideas into real businesses with peer support.',
    videoUrl: '/videos/young-gamified-startup.mp4', // Placeholder
    imageUrl: '/lovable-uploads/young-gamified-hero.jpg',
    ctaText: 'Start Your Adventure',
    ctaLink: '/v3/young/startup-dojo',
    persona: 'young',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--young-lavender)), hsl(var(--young-rose-pink)))',
    textColor: 'white'
  },
  {
    id: 'young-startup-dojo',
    title: 'Startup Dojo: Build & Win',
    subtitle: 'Next workshop: Feb 15, 2025 | 50 spots left',
    description: 'Join our legendary 8-week incubation program. Build your MVP, pitch to real investors, and compete for $16,000 in grants. 81% of participants are Emirati youth.',
    videoUrl: '/videos/startup-dojo-action.mp4',
    imageUrl: '/lovable-uploads/startup-dojo-workshop.jpg',
    ctaText: 'Claim Your Spot',
    ctaLink: '/programs/startup-dojo/apply',
    persona: 'young',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--young-warm-coral)), hsl(var(--young-butter-yellow)))',
    textColor: 'white'
  },
  {
    id: 'young-peer-matching',
    title: 'Find Your Co-Founder Match',
    subtitle: 'Swipe right on collaboration',
    description: 'Connect with like-minded student entrepreneurs across UAE universities. Our AI matches you based on skills, interests, and startup compatibility.',
    videoUrl: '/videos/peer-matching-demo.mp4',
    imageUrl: '/lovable-uploads/peer-matching-interface.jpg',
    ctaText: 'Start Matching',
    ctaLink: '/v3/young/peer-matching',
    persona: 'young',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--young-soft-mint)), hsl(var(--young-sage-green)))',
    textColor: 'white'
  },
  {
    id: 'young-achievements',
    title: 'Unlock Epic Achievements',
    subtitle: 'Your startup journey, gamified',
    description: 'Earn badges for milestones: First Pitch, Customer Discovery, MVP Launch, Funding Secured. Compete on leaderboards and celebrate wins with the community.',
    videoUrl: '/videos/achievement-celebration.mp4',
    imageUrl: '/lovable-uploads/achievement-showcase.jpg',
    ctaText: 'View Achievements',
    ctaLink: '/v3/young/achievements',
    persona: 'young',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--young-peach)), hsl(var(--young-sky-blue)))',
    textColor: 'white'
  }
];

// Adult Entrepreneur Persona Content
export const adultEntrepreneurSlides: SlideContent[] = [
  {
    id: 'adult-business-acceleration',
    title: 'Scale Your Business Impact',
    subtitle: 'Professional acceleration for serious entrepreneurs',
    description: 'Join 200+ founders who raised $171M+ through our proven S3 Incubator system. Get $30,000 equity-free funding and expert mentorship to reach your next milestone.',
    videoUrl: '/videos/business-acceleration.mp4',
    imageUrl: '/lovable-uploads/business-dashboard.jpg',
    ctaText: 'Apply to S3 Incubator',
    ctaLink: '/programs/s3-incubator/apply',
    persona: 'adult',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--sheraa-primary)), hsl(var(--sheraa-secondary)))',
    textColor: 'white'
  },
  {
    id: 'adult-deal-dock',
    title: 'Deal Dock: Investment Ready',
    subtitle: 'Live: 24 active investment opportunities',
    description: 'Access our exclusive investor platform with real-time funding opportunities. Connect directly with VCs, angels, and corporate investors actively seeking deals.',
    videoUrl: '/videos/deal-dock-platform.mp4',
    imageUrl: '/lovable-uploads/deal-dock-interface.jpg',
    ctaText: 'Explore Opportunities',
    ctaLink: '/programs/deal-dock',
    persona: 'adult',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--sheraa-teal)), hsl(var(--sheraa-accent)))',
    textColor: 'white'
  },
  {
    id: 'adult-success-metrics',
    title: 'Success Stories: $248M+ Revenue',
    subtitle: '71% startup survival rate | 1,900+ jobs created',
    description: 'Our alumni have generated over $248M in revenue and created thousands of jobs. Join a proven ecosystem with industry-leading success rates.',
    videoUrl: '/videos/success-testimonials.mp4',
    imageUrl: '/lovable-uploads/success-metrics.jpg',
    ctaText: 'See Success Stories',
    ctaLink: '/community/startups',
    persona: 'adult',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--sheraa-secondary)), hsl(var(--sheraa-primary)))',
    textColor: 'white'
  },
  {
    id: 'adult-network-access',
    title: 'Executive Network Access',
    subtitle: '140+ ecosystem partners | 30+ expert mentors',
    description: 'Tap into Sharjah\'s most powerful business network. Get direct access to government officials, corporate leaders, and successful entrepreneurs.',
    videoUrl: '/videos/network-visualization.mp4',
    imageUrl: '/lovable-uploads/network-map.jpg',
    ctaText: 'Join the Network',
    ctaLink: '/community/membership/apply',
    persona: 'adult',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--sheraa-accent)), hsl(var(--sheraa-teal)))',
    textColor: 'white'
  }
];

// Stakeholder/Investor Persona Content
export const stakeholderSlides: SlideContent[] = [
  {
    id: 'stakeholder-partnership-roi',
    title: 'Partnership ROI: $37M+ Returns',
    subtitle: 'Strategic partnerships driving measurable impact',
    description: 'Our partners have seen exceptional returns through startup collaborations, pilot programs, and strategic investments. Join leading organizations shaping Sharjah\'s future.',
    videoUrl: '/videos/partnership-roi.mp4',
    imageUrl: '/lovable-uploads/roi-dashboard.jpg',
    ctaText: 'Explore Partnerships',
    ctaLink: '/community/partnerships',
    persona: 'stakeholder',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--warm-gold)), hsl(var(--mocha-500)))',
    textColor: 'white'
  },
  {
    id: 'stakeholder-mou-calendar',
    title: 'Government Collaboration Timeline',
    subtitle: 'Next MOU signing: March 2025 | 15+ partnerships active',
    description: 'Stay connected with upcoming government initiatives, policy developments, and strategic partnership opportunities across key sectors.',
    videoUrl: '/videos/government-partnerships.mp4',
    imageUrl: '/lovable-uploads/mou-signing.jpg',
    ctaText: 'View Calendar',
    ctaLink: '/events',
    persona: 'stakeholder',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--mocha-500)), hsl(var(--warm-gold)))',
    textColor: 'white'
  },
  {
    id: 'stakeholder-investment-portfolio',
    title: 'Live Investment Dashboard',
    subtitle: 'Real-time performance tracking',
    description: 'Monitor your portfolio companies, track key metrics, and access detailed performance analytics. Get insights into the next generation of high-growth startups.',
    videoUrl: '/videos/investment-dashboard.mp4',
    imageUrl: '/lovable-uploads/investment-portfolio.jpg',
    ctaText: 'Access Dashboard',
    ctaLink: '/v3/stakeholders/dashboard',
    persona: 'stakeholder',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--sheraa-primary)), hsl(var(--warm-gold)))',
    textColor: 'white'
  },
  {
    id: 'stakeholder-strategic-alliances',
    title: 'Strategic Alliance Network',
    subtitle: 'Premium networking & deal flow',
    description: 'Connect with C-level executives, government leaders, and international investors. Access exclusive deal flow and co-investment opportunities.',
    videoUrl: '/videos/executive-network.mp4',
    imageUrl: '/lovable-uploads/strategic-alliances.jpg',
    ctaText: 'Join Network',
    ctaLink: '/v3/stakeholders/network',
    persona: 'stakeholder',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--warm-gold)), hsl(var(--sheraa-primary)))',
    textColor: 'white'
  }
];

// General Audience Persona Content
export const generalAudienceSlides: SlideContent[] = [
  {
    id: 'general-ecosystem-overview',
    title: 'Welcome to Innovation',
    subtitle: 'Sharjah\'s premier entrepreneurship ecosystem',
    description: 'Discover your path in Sharjah\'s vibrant innovation hub. Whether you\'re a student, entrepreneur, or partner, find your place in our thriving community.',
    videoUrl: '/videos/ecosystem-overview.mp4',
    imageUrl: '/lovable-uploads/ecosystem-aerial.jpg',
    ctaText: 'Explore Ecosystem',
    ctaLink: '/v3',
    persona: 'general',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--sheraa-primary)), hsl(var(--sheraa-teal)))',
    textColor: 'white'
  },
  {
    id: 'general-program-discovery',
    title: 'Find Your Perfect Program',
    subtitle: 'Personalized program matching',
    description: 'Take our 3-minute assessment to discover which Sheraa program aligns with your goals, experience level, and entrepreneurial ambitions.',
    videoUrl: '/videos/program-discovery.mp4',
    imageUrl: '/lovable-uploads/program-matching.jpg',
    ctaText: 'Take Assessment',
    ctaLink: '/v3/program-match',
    persona: 'general',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--sheraa-teal)), hsl(var(--sheraa-secondary)))',
    textColor: 'white'
  },
  {
    id: 'general-community-impact',
    title: 'Community Impact Stories',
    subtitle: 'Real people, real impact',
    description: 'Hear from founders, students, and partners who have transformed their lives and communities through Sheraa\'s programs and initiatives.',
    videoUrl: '/videos/impact-stories.mp4',
    imageUrl: '/lovable-uploads/community-impact.jpg',
    ctaText: 'Watch Stories',
    ctaLink: '/about/impact',
    persona: 'general',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--sheraa-secondary)), hsl(var(--sheraa-accent)))',
    textColor: 'white'
  },
  {
    id: 'general-event-calendar',
    title: 'Upcoming Events & Workshops',
    subtitle: 'Next: SEF 2026 | Jan 31-Feb 1',
    description: 'Join 14,000+ attendees at the region\'s largest entrepreneurship festival. Plus workshops, pitch nights, and networking events throughout the year.',
    videoUrl: '/videos/event-highlights.mp4',
    imageUrl: '/lovable-uploads/sef-crowd.jpg',
    ctaText: 'View Events',
    ctaLink: '/events',
    persona: 'general',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--sheraa-accent)), hsl(var(--sheraa-primary)))',
    textColor: 'white'
  },
  {
    id: 'general-getting-started',
    title: 'Start Your Journey Today',
    subtitle: 'Personalized onboarding experience',
    description: 'Get customized recommendations, connect with mentors, and access resources tailored to your unique entrepreneurial journey and interests.',
    videoUrl: '/videos/onboarding-journey.mp4',
    imageUrl: '/lovable-uploads/journey-start.jpg',
    ctaText: 'Get Started',
    ctaLink: '/eligibility',
    persona: 'general',
    backgroundColor: 'linear-gradient(135deg, hsl(var(--sheraa-primary)), hsl(var(--sheraa-secondary)))',
    textColor: 'white'
  }
];

// Export all content
export const allSliderContent = {
  young: youngEntrepreneurSlides,
  adult: adultEntrepreneurSlides,
  stakeholder: stakeholderSlides,
  general: generalAudienceSlides
};