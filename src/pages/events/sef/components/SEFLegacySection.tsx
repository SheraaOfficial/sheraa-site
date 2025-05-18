
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';

interface SpeakerData {
  name: string;
  image: string;
  role?: string;
}

interface YearData {
  year: string;
  theme: string;
  description: string;
  speakers: SpeakerData[];
  backgroundClass: string;
}

const yearlyData: YearData[] = [
  {
    year: '2018',
    theme: 'Where We Belong',
    description: "The inaugural festival connected over 1,500 entrepreneurs, investors, and creatives, launching the region's premier entrepreneurship celebration.",
    speakers: [
      { name: 'Gary Vaynerchuk', image: '/lovable-uploads/1c771ddf-b819-4587-bd05-7547b8dca2b5.png' },
      { name: 'Sheikha Bodour Al Qasimi', image: '/lovable-uploads/93efd6a3-c496-43d2-9401-ad6821c1352b.png' },
      { name: 'Najla Al Midfa', image: '/lovable-uploads/1461e9a9-fd41-4085-86e1-6765d0fd4f59.png' }
    ],
    backgroundClass: 'bg-gradient-to-b from-purple-500/10 to-pink-500/10'
  },
  {
    year: '2019',
    theme: 'Reimagining Realities',
    description: "Over 4,000 attendees explored how entrepreneurs are reshaping industries from tech to sustainability, with immersive workshops and global thought leaders.",
    speakers: [
      { name: 'Muna Al Gurg', image: '/lovable-uploads/67019a34-88c0-4c00-ba3f-2e89761a0678.png' },
      { name: 'Magnus Olsson', image: '/lovable-uploads/78dc4101-2481-4c13-a19f-62dbefeae768.png' },
      { name: 'Ambarish Mitra', image: '/lovable-uploads/962e9262-6759-495c-ad9e-5f8fc0043698.png' }
    ],
    backgroundClass: 'bg-gradient-to-b from-blue-500/10 to-teal-500/10'
  },
  {
    year: '2021',
    theme: 'Momentum',
    description: "SEF returned with 8,000+ visitors as the world reopened post-pandemic, focusing on rebuilding momentum for startups with resilience and innovation.",
    speakers: [
      { name: 'Sunny Varkey', image: '/lovable-uploads/a7594ccb-820e-40d4-addc-1cf4dfebadfe.png' },
      { name: 'Chris Gardner', image: '/lovable-uploads/5c7170ff-c318-404d-82fa-af5c349154db.png' },
      { name: 'Akon', image: '/lovable-uploads/c685b8f9-faed-488e-aa6e-2d85cf6191f1.png' }
    ],
    backgroundClass: 'bg-gradient-to-b from-amber-500/10 to-orange-500/10'
  },
  {
    year: '2023',
    theme: 'Where We Belong',
    description: "Our largest edition attracted 14,000+ attendees with 300+ global speakers across 10 vibrant zones, firmly establishing SEF as the region's epicenter of entrepreneurship.",
    speakers: [
      { name: 'Tanmay Bakshi', image: '/lovable-uploads/91a7f993-9696-46a1-96a7-59d67803f50f.png' },
      { name: 'Omar Nour', image: '/lovable-uploads/9927fa13-2911-40c1-98c4-7c733bbe84bd.png' },
      { name: 'Huda Kattan', image: '/lovable-uploads/1c771ddf-b819-4587-bd05-7547b8dca2b5.png' }
    ],
    backgroundClass: 'bg-gradient-to-b from-emerald-500/10 to-cyan-500/10'
  },
];

const inspirationalQuotes = [
  { text: "Be Present", translation: "在场/当下" },
  { text: "Less is More", translation: "简胜" },
  { text: "Make Waves", translation: "破浪" },
  { text: "Stay Hungry", translation: "求渴" },
  { text: "Find Balance", translation: "中和" },
  { text: "Dream Big", translation: "远志" }
];

const SEFLegacySection: React.FC = () => {
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-10% 0px" });
  
  // Horizontal scroll for years
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Grid animation on scroll
  useEffect(() => {
    if (!gridRef.current) return;
    
    const handleScroll = () => {
      if (!gridRef.current || !sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.innerHeight - rect.top;
      const scrollFactor = Math.max(0, Math.min(1, scrollPosition / (window.innerHeight * 1.5)));
      
      // Animate grid items
      const items = gridRef.current.querySelectorAll('.grid-item');
      items.forEach((item, index) => {
        const delay = index * 0.05;
        const translateY = 50 - (scrollFactor * 50);
        const scale = 0.8 + (scrollFactor * 0.2);
        const opacity = scrollFactor;
        
        (item as HTMLElement).style.transform = `translateY(${translateY}px) scale(${scale})`;
        (item as HTMLElement).style.opacity = `${opacity}`;
        (item as HTMLElement).style.transitionDelay = `${delay}s`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`relative py-24 md:py-32 overflow-hidden ${theme === 'dark' ? 'bg-zinc-900' : 'bg-gray-50'}`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[50%] -left-[10%] w-[80%] h-[80%] rounded-full bg-purple-400/5 dark:bg-purple-400/10 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-3xl"></div>
      </div>
      
      {/* Section container */}
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.span 
            className="inline-block text-sm md:text-base font-semibold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            SEF THROUGH THE YEARS
          </motion.span>
          
          <motion.h2 
            ref={titleRef}
            className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A Legacy of Inspiration
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Since 2018, SEF has grown from a local gathering to the region's premier entrepreneurship festival, 
            welcoming over 14,000 attendees and featuring 300+ global speakers across diverse industries.
          </motion.p>
        </div>
        
        {/* 3D horizontal timeline */}
        <div className="relative overflow-x-hidden pb-12">
          <motion.div 
            className="flex space-x-6 md:space-x-12"
            style={{ translateX: !isMobile ? translateX.asVars() : 0 }}
            initial={{ x: 0 }}
            animate={isMobile ? { x: [0, -500, 0] } : {}}
            transition={isMobile ? { duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" } : {}}
          >
            {yearlyData.map((yearData, index) => (
              <motion.div
                key={yearData.year}
                className={`flex-shrink-0 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg ${yearData.backgroundClass} dark:bg-opacity-20 backdrop-blur-sm p-6 md:p-8 w-[280px] md:w-[400px]`}
                initial={{ opacity: 0, y: 50, rotateY: 15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.03, rotateY: 5, z: 10 }}
              >
                <span className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-500">
                  {yearData.year}
                </span>
                <h3 className="text-xl md:text-2xl font-bold mt-3 mb-2 dark:text-white">
                  {yearData.theme}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6">
                  {yearData.description}
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {yearData.speakers.map((speaker, i) => (
                    <div key={i} className="relative group">
                      <AspectRatio ratio={1} className="w-16 md:w-20 rounded-lg overflow-hidden">
                        <img 
                          src={speaker.image} 
                          alt={speaker.name} 
                          className="object-cover w-full h-full transition-transform group-hover:scale-110" 
                        />
                      </AspectRatio>
                      <div className="opacity-0 group-hover:opacity-100 absolute -bottom-10 left-0 bg-black/80 text-white text-xs p-1 rounded whitespace-nowrap transition-opacity">
                        {speaker.name}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Inspirational quotes section */}
        <div className="mt-24 overflow-hidden">
          <div className="relative max-w-5xl mx-auto">
            {/* Rotating mark with quotes */}
            <motion.div 
              className="mark flex overflow-hidden"
              animate={{ 
                x: [0, -1000],
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity,
                repeatType: "loop", 
                ease: "linear"
              }}
            >
              {[...inspirationalQuotes, ...inspirationalQuotes].map((quote, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 mx-8 md:mx-12 text-2xl md:text-4xl font-bold text-gray-300 dark:text-gray-700 font-alt"
                >
                  <span>{quote.text}</span> <span className="text-gray-400 dark:text-gray-600">{quote.translation}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* 3D Grid of speakers (simplified) */}
        <div className="mt-32 relative">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 dark:text-white">
            Featured Speakers Through The Years
          </h3>
          
          <div 
            ref={gridRef} 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            {yearlyData.flatMap((year) => 
              year.speakers.map((speaker, i) => (
                <div 
                  key={`${year.year}-${i}`} 
                  className="grid-item opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <AspectRatio ratio={1}>
                      <motion.img 
                        src={speaker.image} 
                        alt={speaker.name} 
                        className="object-cover w-full h-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </AspectRatio>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3">
                      <p className="text-white text-sm font-medium">{speaker.name}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        
        {/* Bold statement */}
        <div className="mt-36 text-center">
          <motion.div 
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Think Different
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SEFLegacySection;
