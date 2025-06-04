
export interface TestimonialData {
  id: string;
  name: string;
  role?: string;
  company?: string;
  startup?: string;
  program?: string;
  achievement?: string;
  quote: string;
  image?: string;
  category: 'startup' | 'investor' | 'partner' | 'student' | 'alumni';
  programId?: string;
}

export const testimonialsData: TestimonialData[] = [
  // Start Young Testimonials
  {
    id: 'fatima-alzahra',
    name: 'Fatima Al-Zahra',
    program: 'Startup Dojo 2023',
    startup: 'EcoLearn',
    achievement: 'Raised AED 200K seed funding',
    quote: 'Startup Dojo transformed my environmental education idea into a funded startup. The mentorship was incredible and the network opened doors I never imagined.',
    category: 'student',
    programId: 'start-young'
  },
  {
    id: 'mohammed-binrashid',
    name: 'Mohammed Bin Rashid',
    program: 'Startup Dojo+ 2023',
    startup: 'HealthTech Solutions',
    achievement: 'Accepted into S3 Incubator',
    quote: 'The intensive 4-week Dojo+ program prepared me perfectly for the next level. Now we\'re scaling with S3 and targeting regional expansion.',
    category: 'student',
    programId: 'start-young'
  },
  {
    id: 'aisha-rahman',
    name: 'Aisha Rahman',
    program: 'Startup Dojo 2022',
    startup: 'AgriSmart',
    achievement: 'Partnership with 15 farms',
    quote: 'From university student to agritech entrepreneur in 8 weeks. The program taught me everything from customer discovery to fundraising.',
    category: 'alumni',
    programId: 'start-young'
  },
  
  // S3 Incubator Testimonials
  {
    id: 'omar-hassan',
    name: 'Omar Hassan',
    role: 'CEO',
    startup: 'Baytuki',
    program: 'S3 Incubator Cohort 3',
    achievement: 'AED 1.2M Series A raised',
    quote: 'S3\'s equity-free model was game-changing. We kept full ownership while getting world-class support. The revenue-sharing approach aligned perfectly with our growth.',
    category: 'startup',
    programId: 's3-incubator'
  },
  {
    id: 'sara-almidfa',
    name: 'Sara Al-Midfa',
    role: 'Founder',
    startup: 'Caena',
    program: 'S3 Incubator Cohort 2',
    achievement: '300% revenue growth in 6 months',
    quote: 'The mentorship network at S3 is unparalleled. Having access to 30+ industry experts gave us insights we couldn\'t get anywhere else.',
    category: 'startup',
    programId: 's3-incubator'
  },
  
  // Deal Dock Testimonials
  {
    id: 'khalid-investor',
    name: 'Khalid Al-Mansoori',
    role: 'Managing Partner',
    company: 'Gulf Ventures',
    quote: 'Deal Dock gives us access to the highest quality startup deal flow in the region. The vetting process ensures we only see investment-ready companies.',
    category: 'investor',
    programId: 'deal-dock'
  },
  {
    id: 'maya-startup',
    name: 'Maya Chen',
    role: 'Founder',
    startup: 'KRISPR',
    achievement: '$2.1M Series A through Deal Dock',
    quote: 'Deal Dock connected us with the right investors who understood our vision. The platform made fundraising efficient and transparent.',
    category: 'startup',
    programId: 'deal-dock'
  },
  
  // Access Sharjah Challenge Testimonials
  {
    id: 'alex-green',
    name: 'Alex Thompson',
    role: 'CEO',
    startup: 'Green Future Project',
    program: 'Access Sharjah Challenge 2023',
    achievement: 'AED 250K POC with BEEAH',
    quote: 'ASC provided direct access to major industry players. Our POC with BEEAH validated our solution and opened doors across the GCC.',
    category: 'startup',
    programId: 'access-sharjah'
  },
  
  // Partner Testimonials
  {
    id: 'dr-hassan-beeah',
    name: 'Dr. Hassan Al-Nuaimi',
    role: 'Chief Technology Officer',
    company: 'BEEAH Group',
    quote: 'Our partnership with Sheraa through Access Sharjah Challenge has connected us with innovative solutions that directly address our sustainability goals.',
    category: 'partner'
  },
  {
    id: 'amira-crescent',
    name: 'Amira Abdel-Rahman',
    role: 'Investment Director',
    company: 'Crescent Enterprises',
    quote: 'Sheraa consistently delivers high-quality startups that align with our investment thesis. The ecosystem they\'ve built is truly world-class.',
    category: 'partner'
  }
];

export const getTestimonialsByProgram = (programId: string): TestimonialData[] => {
  return testimonialsData.filter(testimonial => testimonial.programId === programId);
};

export const getTestimonialsByCategory = (category: TestimonialData['category']): TestimonialData[] => {
  return testimonialsData.filter(testimonial => testimonial.category === category);
};

export const getFeaturedTestimonials = (limit: number = 6): TestimonialData[] => {
  // Return a mix of categories for homepage/general use
  const featured = [
    ...getTestimonialsByCategory('startup').slice(0, 2),
    ...getTestimonialsByCategory('student').slice(0, 2),
    ...getTestimonialsByCategory('investor').slice(0, 1),
    ...getTestimonialsByCategory('partner').slice(0, 1)
  ];
  
  return featured.slice(0, limit);
};
