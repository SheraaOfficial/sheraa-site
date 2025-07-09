import { SlideContent } from '../modern/ModernVideoSlider';

// Young Entrepreneur Persona Slides
const youngSlides: SlideContent[] = [
  {
    id: 'young-1',
    title: 'Turn Your Ideas Into Reality',
    subtitle: 'The Future Belongs to Young Innovators',
    description: 'Join Sheraa\'s youth programs and transform your creative ideas into successful startups. Get mentorship, funding, and the skills you need to change the world.',
    ctaText: 'Start Your Journey',
    ctaLink: '/v3/young/dashboard',
    persona: 'young',
    backgroundColor: 'hsl(var(--young-lavender))',
    textColor: 'white',
    videoUrl: '/videos/young-hero.mp4'
  },
  {
    id: 'young-2',
    title: 'Learn By Doing',
    subtitle: 'Hands-On Entrepreneurship Education',
    description: 'Experience gamified learning, real challenges, and connect with like-minded young entrepreneurs building tomorrow\'s solutions.',
    ctaText: 'Join Challenges',
    ctaLink: '/v3/young/challenges',
    persona: 'young',
    backgroundColor: 'hsl(var(--young-rose-pink))',
    textColor: 'white',
    imageUrl: '/images/young-learning.jpg'
  },
  {
    id: 'young-3',
    title: 'Build Your Network',
    subtitle: 'Connect with Future Leaders',
    description: 'Meet peers, find co-founders, and access a global network of young entrepreneurs, mentors, and industry experts.',
    ctaText: 'Find Your Tribe',
    ctaLink: '/v3/young/peer-matching',
    persona: 'young',
    backgroundColor: 'hsl(var(--young-warm-coral))',
    textColor: 'white',
    imageUrl: '/images/young-network.jpg'
  }
];

// Adult Entrepreneur Persona Slides
const adultSlides: SlideContent[] = [
  {
    id: 'adult-1',
    title: 'Scale Your Startup',
    subtitle: 'Professional Growth Programs',
    description: 'Access Sheraa\'s comprehensive incubation programs, including our flagship S3 Incubator, designed for serious entrepreneurs ready to scale.',
    ctaText: 'Explore Programs',
    ctaLink: '/v3/program-match',
    persona: 'adult',
    backgroundColor: 'hsl(var(--sheraa-primary))',
    textColor: 'white',
    videoUrl: '/videos/adult-hero.mp4'
  },
  {
    id: 'adult-2',
    title: 'Access Capital & Markets',
    subtitle: 'Funding and Growth Opportunities',
    description: 'Connect with investors, secure funding, and gain access to Sharjah\'s thriving business ecosystem through our extensive partner network.',
    ctaText: 'Get Funded',
    ctaLink: '/programs/s3-incubator',
    persona: 'adult',
    backgroundColor: 'hsl(var(--sheraa-secondary))',
    textColor: 'white',
    imageUrl: '/images/adult-funding.jpg'
  },
  {
    id: 'adult-3',
    title: 'Expert Mentorship',
    subtitle: 'Learn from Industry Leaders',
    description: 'Receive guidance from successful entrepreneurs, industry experts, and investors who have built and scaled successful companies.',
    ctaText: 'Find Mentors',
    ctaLink: '/community/mentorship',
    persona: 'adult',
    backgroundColor: 'hsl(var(--sheraa-accent))',
    textColor: 'white',
    imageUrl: '/images/adult-mentorship.jpg'
  }
];

// Stakeholder Persona Slides
const stakeholderSlides: SlideContent[] = [
  {
    id: 'stakeholder-1',
    title: 'Partner with Innovation',
    subtitle: 'Strategic Ecosystem Collaboration',
    description: 'Join Sharjah\'s leading innovation ecosystem. Partner with Sheraa to access cutting-edge startups, drive corporate innovation, and shape the future.',
    ctaText: 'Become a Partner',
    ctaLink: '/partnerships',
    persona: 'stakeholder',
    backgroundColor: 'hsl(var(--warm-gold))',
    textColor: 'white',
    videoUrl: '/videos/stakeholder-hero.mp4'
  },
  {
    id: 'stakeholder-2',
    title: 'Investment Opportunities',
    subtitle: 'High-Growth Startup Pipeline',
    description: 'Access vetted, high-potential startups across key sectors. Join our investor network and be part of Sharjah\'s entrepreneurial success stories.',
    ctaText: 'View Portfolio',
    ctaLink: '/v3/stakeholders',
    persona: 'stakeholder',
    backgroundColor: 'hsl(var(--mocha-500))',
    textColor: 'white',
    imageUrl: '/images/stakeholder-investment.jpg'
  },
  {
    id: 'stakeholder-3',
    title: 'Economic Impact',
    subtitle: 'Building Sharjah\'s Future',
    description: 'Contribute to Sharjah\'s economic diversification and innovation leadership. Partner with us to create jobs, drive growth, and build lasting impact.',
    ctaText: 'Learn More',
    ctaLink: '/about/impact',
    persona: 'stakeholder',
    backgroundColor: 'hsl(var(--sheraa-primary))',
    textColor: 'white',
    imageUrl: '/images/stakeholder-impact.jpg'
  }
];

// General Audience Slides
const generalSlides: SlideContent[] = [
  {
    id: 'general-1',
    title: 'Welcome to Sheraa',
    subtitle: 'Sharjah\'s Entrepreneurship Hub',
    description: 'Discover how Sheraa empowers entrepreneurs at every stage of their journey. From idea validation to scaling globally, we\'re here to support your success.',
    ctaText: 'Explore Sheraa',
    ctaLink: '/v3/general',
    persona: 'general',
    backgroundColor: 'hsl(var(--sheraa-primary))',
    textColor: 'white',
    videoUrl: '/videos/general-hero.mp4'
  },
  {
    id: 'general-2',
    title: '180+ Startups Supported',
    subtitle: 'Proven Track Record of Success',
    description: 'Join a thriving ecosystem that has supported over 180 startups, generated $248M+ in revenue, and created 1,900+ jobs across the region.',
    ctaText: 'See Our Impact',
    ctaLink: '/about/impact',
    persona: 'general',
    backgroundColor: 'hsl(var(--sheraa-teal))',
    textColor: 'white',
    imageUrl: '/images/general-impact.jpg'
  },
  {
    id: 'general-3',
    title: 'Find Your Path',
    subtitle: 'Programs for Every Entrepreneur',
    description: 'Whether you\'re a student with an idea, a startup ready to scale, or an investor looking for opportunities, Sheraa has the right program for you.',
    ctaText: 'Get Started',
    ctaLink: '/programs',
    persona: 'general',
    backgroundColor: 'hsl(var(--sheraa-secondary))',
    textColor: 'white',
    imageUrl: '/images/general-programs.jpg'
  }
];

export const allSliderContent = {
  young: youngSlides,
  adult: adultSlides,
  stakeholder: stakeholderSlides,
  general: generalSlides
};