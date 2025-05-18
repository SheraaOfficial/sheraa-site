
import { YearData, InspirationalQuote, ImpactStat } from './types';

export const yearlyData: YearData[] = [{
  year: '2018',
  theme: 'Where We Belong',
  description: "The inaugural festival connected over 1,500 entrepreneurs, investors, and creatives, launching the region's premier entrepreneurship celebration.",
  speakers: [{
    name: 'Gary Vaynerchuk',
    image: '/lovable-uploads/1c771ddf-b819-4587-bd05-7547b8dca2b5.png'
  }, {
    name: 'Sheikha Bodour Al Qasimi',
    image: '/lovable-uploads/93efd6a3-c496-43d2-9401-ad6821c1352b.png'
  }, {
    name: 'Najla Al Midfa',
    image: '/lovable-uploads/1461e9a9-fd41-4085-86e1-6765d0fd4f59.png'
  }],
  backgroundClass: 'bg-gradient-to-b from-purple-500/10 to-pink-500/10',
  mediaSrc: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1170&auto=format&fit=crop'
}, {
  year: '2019',
  theme: 'Reimagining Realities',
  description: "Over 4,000 attendees explored how entrepreneurs are reshaping industries from tech to sustainability, with immersive workshops and global thought leaders.",
  speakers: [{
    name: 'Muna Al Gurg',
    image: '/lovable-uploads/67019a34-88c0-4c00-ba3f-2e89761a0678.png'
  }, {
    name: 'Magnus Olsson',
    image: '/lovable-uploads/78dc4101-2481-4c13-a19f-62dbefeae768.png'
  }, {
    name: 'Ambarish Mitra',
    image: '/lovable-uploads/962e9262-6759-495c-ad9e-5f8fc0043698.png'
  }],
  backgroundClass: 'bg-gradient-to-b from-blue-500/10 to-teal-500/10',
  mediaSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop'
}, {
  year: '2021',
  theme: 'Momentum',
  description: "SEF returned with 8,000+ visitors as the world reopened post-pandemic, focusing on rebuilding momentum for startups with resilience and innovation.",
  speakers: [{
    name: 'Sunny Varkey',
    image: '/lovable-uploads/a7594ccb-820e-40d4-addc-1cf4dfebadfe.png'
  }, {
    name: 'Chris Gardner',
    image: '/lovable-uploads/5c7170ff-c318-404d-82fa-af5c349154db.png'
  }, {
    name: 'Akon',
    image: '/lovable-uploads/c685b8f9-faed-488e-aa6e-2d85cf6191f1.png'
  }],
  backgroundClass: 'bg-gradient-to-b from-amber-500/10 to-orange-500/10',
  mediaSrc: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1169&auto=format&fit=crop'
}, {
  year: '2023',
  theme: 'Where We Belong',
  description: "Our largest edition attracted 14,000+ attendees with 300+ global speakers across 10 vibrant zones, firmly establishing SEF as the region's epicenter of entrepreneurship.",
  speakers: [{
    name: 'Tanmay Bakshi',
    image: '/lovable-uploads/91a7f993-9696-46a1-96a7-59d67803f50f.png'
  }, {
    name: 'Omar Nour',
    image: '/lovable-uploads/9927fa13-2911-40c1-98c4-7c733bbe84bd.png'
  }, {
    name: 'Huda Kattan',
    image: '/lovable-uploads/1c771ddf-b819-4587-bd05-7547b8dca2b5.png'
  }],
  backgroundClass: 'bg-gradient-to-b from-emerald-500/10 to-cyan-500/10',
  mediaSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop'
}];

// Flatten speakers for the Hall of Fame section
export const allSpeakers = yearlyData.flatMap(year => year.speakers.map(speaker => ({
  ...speaker,
  year: year.year
})));

// Impact stats to be animated
export const impactStats: ImpactStat[] = [
  { value: "14,000+", label: "Attendees" },
  { value: "300+", label: "Global Speakers" },
  { value: "250+", label: "Activities" },
  { value: "10+", label: "Zones" },
  { value: "71%", label: "Startup Survival Rate" }
];

export const inspirationalQuotes: InspirationalQuote[] = [{
  text: "Be Present",
  translation: "كن حاضراً"
}, {
  text: "Less is More",
  translation: "القليل هو الكثير"
}, {
  text: "Make Waves",
  translation: "أحدث تغييراً"
}, {
  text: "Stay Hungry",
  translation: "ابق متعطشاً"
}, {
  text: "Find Balance",
  translation: "جد التوازن"
}, {
  text: "Dream Big",
  translation: "احلم بكبير"
}];
