
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ChevronLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';

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
  mediaSrc?: string;
}

const yearlyData: YearData[] = [{
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
const allSpeakers = yearlyData.flatMap(year => year.speakers.map(speaker => ({
  ...speaker,
  year: year.year
})));

// Impact stats to be animated
const impactStats = [
  { value: "14,000+", label: "Attendees" },
  { value: "300+", label: "Global Speakers" },
  { value: "250+", label: "Activities" },
  { value: "10+", label: "Zones" },
  { value: "71%", label: "Startup Survival Rate" }
];

const inspirationalQuotes = [{
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

// Counter animation hook
const useCountAnimation = (targetValue: string, duration: number = 2, startOnView: boolean = true) => {
  const [count, setCount] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  
  useEffect(() => {
    if (!startOnView || isInView) {
      let start = 0;
      const end = parseInt(targetValue.replace(/\D/g, ""));
      
      // Ensure we don't try to animate non-numeric values
      if (isNaN(end)) {
        setCount(targetValue);
        return;
      }
      
      // Animation duration
      const totalDuration = duration * 1000;
      const frameDuration = 1000 / 60;
      
      // Calculate increment per frame
      const totalFrames = Math.round(totalDuration / frameDuration);
      const increment = end / totalFrames;
      
      // Start animation
      const timer = setInterval(() => {
        start += increment;
        
        if (start >= end) {
          setCount(targetValue); // Ensure we end with the exact target string
          clearInterval(timer);
        } else {
          setCount(Math.floor(start).toString() + (targetValue.includes("+") ? "+" : ""));
        }
      }, frameDuration);
      
      return () => clearInterval(timer);
    }
  }, [targetValue, duration, startOnView, isInView]);
  
  return { count, ref };
};

const SEFLegacySection: React.FC = () => {
  const {
    theme
  } = useTheme();
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const hallOfFameRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-10% 0px"
  });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-10% 0px" });

  // For timeline horizontal scrolling and controls
  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  // For speaker showcase  
  const [activeSpeakerIndex, setActiveSpeakerIndex] = useState(0);
  const [isHallExpanded, setIsHallExpanded] = useState(false);

  // Scroll animations
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Instead of asVars() which doesn't exist, use the transform directly
  const translateXValue = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const handlePrevYear = () => {
    setCurrentYearIndex(prev => prev > 0 ? prev - 1 : yearlyData.length - 1);
  };
  const handleNextYear = () => {
    setCurrentYearIndex(prev => prev < yearlyData.length - 1 ? prev + 1 : 0);
  };
  const handlePrevSpeaker = () => {
    setActiveSpeakerIndex(prev => prev > 0 ? prev - 1 : allSpeakers.length - 1);
  };
  const handleNextSpeaker = () => {
    setActiveSpeakerIndex(prev => prev < allSpeakers.length - 1 ? prev + 1 : 0);
  };

  // 3D hall of fame hover animations
  useEffect(() => {
    if (!hallOfFameRef.current) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!hallOfFameRef.current) return;
      const rect = hallOfFameRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const angleX = (mouseY - centerY) / 25;
      const angleY = (centerX - mouseX) / 25;
      hallOfFameRef.current.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    };
    const handleMouseLeave = () => {
      if (!hallOfFameRef.current) return;
      hallOfFameRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };
    const hallElement = hallOfFameRef.current;
    hallElement.addEventListener('mousemove', handleMouseMove);
    hallElement.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      hallElement.removeEventListener('mousemove', handleMouseMove);
      hallElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Grid animation on scroll
  useEffect(() => {
    if (!hallOfFameRef.current) return;
    const handleScroll = () => {
      if (!hallOfFameRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.innerHeight - rect.top;
      const scrollFactor = Math.max(0, Math.min(1, scrollPosition / (window.innerHeight * 1.5)));

      // Animate grid items
      const items = hallOfFameRef.current.querySelectorAll('.hall-of-fame-item');
      items.forEach((item, index) => {
        const delay = index * 0.05;
        const translateY = 50 - scrollFactor * 50;
        const scale = 0.8 + scrollFactor * 0.2;
        const opacity = scrollFactor;
        (item as HTMLElement).style.transform = `translateY(${translateY}px) scale(${scale})`;
        (item as HTMLElement).style.opacity = `${opacity}`;
        (item as HTMLElement).style.transitionDelay = `${delay}s`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentYear = yearlyData[currentYearIndex];
  
  return <section ref={sectionRef} className={`relative py-24 md:py-32 overflow-hidden ${theme === 'dark' ? 'bg-zinc-900' : 'bg-gray-50'}`} id="sef-legacy">
      {/* Enhanced background elements with stars effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[50%] -left-[10%] w-[80%] h-[80%] rounded-full bg-purple-400/5 dark:bg-purple-400/10 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-3xl"></div>
        
        {/* Stars background */}
        {Array.from({
        length: 50
      }).map((_, i) => <motion.div key={i} className="absolute w-[2px] h-[2px] bg-white/30 rounded-full" initial={{
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        scale: Math.random() * 0.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.3
      }} animate={{
        opacity: [null, Math.random() * 0.7 + 0.3, Math.random() * 0.5 + 0.3],
        scale: [null, Math.random() * 0.5 + 1, Math.random() * 0.5 + 0.5]
      }} transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        repeatType: "reverse"
      }} />)}
      </div>
      
      {/* Section container */}
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
          <motion.span className="inline-block text-sm md:text-base font-semibold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent mb-3" initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6
        }}>
            SEF THROUGH THE YEARS
          </motion.span>
          
          <motion.h2 ref={titleRef} className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 dark:text-white" initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            A Legacy of Inspiration
          </motion.h2>
          
          <motion.p className="text-base md:text-lg text-gray-600 dark:text-gray-300" initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.3
        }}>
            Since 2018, SEF has grown from a local gathering to the region's premier entrepreneurship festival, 
            welcoming over 14,000 attendees and featuring 300+ global speakers across diverse industries.
          </motion.p>
        </div>

        {/* Animated SEF Numbers - NEW SECTION */}
        <div ref={statsRef} className="mb-20 md:mb-32 max-w-5xl mx-auto">
          <motion.div 
            className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {impactStats.map((stat, index) => {
              const { count, ref } = useCountAnimation(stat.value, 2);
              
              return (
                <motion.div 
                  key={index} 
                  className={`p-4 rounded-2xl ${index % 2 === 0 ? 'bg-purple-100/50 dark:bg-purple-900/20' : 'bg-orange-100/50 dark:bg-orange-900/20'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <div ref={ref} className={`text-3xl md:text-5xl font-bold mb-2 ${index % 2 === 0 ? 'text-purple-600 dark:text-purple-400' : 'text-orange-500 dark:text-orange-400'}`}>
                    {count}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
        {/* JOURNEY THROUGH TIME - Using the ScrollExpansion component */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center dark:text-white">
            Journey Through Time
          </h3>
          
          <div className="flex justify-center mb-6 space-x-3">
            <Button variant="outline" size="icon" onClick={handlePrevYear} className="rounded-full hover:bg-purple-500/10 hover:text-purple-500">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="text-xl font-medium dark:text-white">
              {yearlyData[currentYearIndex].year}
            </div>
            
            <Button variant="outline" size="icon" onClick={handleNextYear} className="rounded-full hover:bg-purple-500/10 hover:text-purple-500">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        
          <div className="h-[90vh] overflow-hidden mb-10">
            <ScrollExpandMedia
              mediaType="image"
              mediaSrc={currentYear.mediaSrc || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop"}
              bgImageSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop"
              title={currentYear.theme}
              date={`SEF ${currentYear.year}`}
              scrollToExpand="Scroll to Explore"
              textBlend={true}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-500">
                    {currentYear.year}
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-3 dark:text-white">
                    {currentYear.theme}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                    {currentYear.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {currentYear.speakers.map((speaker, idx) => (
                    <motion.div key={idx} className="relative group" whileHover={{
                      scale: 1.05,
                      zIndex: 5
                    }}>
                      <AspectRatio ratio={1} className="rounded-xl overflow-hidden border-2 border-white/30 shadow-lg">
                        <img src={speaker.image} alt={speaker.name} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                          <p className="text-white text-sm font-medium">{speaker.name}</p>
                        </div>
                      </AspectRatio>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollExpandMedia>
          </div>
          
          {/* Year progress indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {yearlyData.map((_, idx) => <button key={idx} className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentYearIndex ? 'bg-purple-600 w-6' : 'bg-gray-300 dark:bg-gray-600 hover:bg-purple-400'}`} onClick={() => setCurrentYearIndex(idx)} aria-label={`View year ${yearlyData[idx].year}`} />)}
          </div>
        </div>
        
        {/* Hall of Fame section */}
        <div className="mt-32 relative">
          <div className="text-center mb-16">
            <motion.div className="inline-block mb-4" initial={{
            scale: 0.5,
            opacity: 0
          }} whileInView={{
            scale: 1,
            opacity: 1
          }} viewport={{
            once: true,
            margin: "-50px"
          }} transition={{
            duration: 0.5
          }}>
              <Star className="h-10 w-10 text-amber-500/80" strokeWidth={1} fill="rgba(245, 158, 11, 0.3)" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 dark:text-white">
              Speaker Hall of Fame
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Celebrating visionary leaders, innovators and changemakers who have graced the SEF stage and inspired our community.
            </p>
            
            <Button variant="outline" onClick={() => setIsHallExpanded(!isHallExpanded)} className="mb-8 bg-white/10 backdrop-blur-sm border-gray-200 dark:border-gray-700">
              {isHallExpanded ? "View Showcase" : "View All Speakers"}
            </Button>
          </div>
          
          {/* Immersive Speaker Showcase */}
          {!isHallExpanded && <div className="relative pb-12 max-w-5xl mx-auto">
              <div className="flex justify-center mb-8 space-x-3">
                <Button variant="outline" size="icon" onClick={handlePrevSpeaker} className="rounded-full hover:bg-purple-500/10 hover:text-purple-500">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <Button variant="outline" size="icon" onClick={handleNextSpeaker} className="rounded-full hover:bg-purple-500/10 hover:text-purple-500">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              
              <motion.div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl perspective-1000" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.8
          }}>
                {/* Main featured speaker */}
                <motion.div key={activeSpeakerIndex} initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} exit={{
              opacity: 0,
              scale: 0.9
            }} transition={{
              duration: 0.5
            }} className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                    <img src={allSpeakers[activeSpeakerIndex].image} alt={allSpeakers[activeSpeakerIndex].name} className="w-full h-full object-cover object-center" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                      <h3 className="text-3xl md:text-4xl font-bold mb-2">{allSpeakers[activeSpeakerIndex].name}</h3>
                      <p className="text-xl opacity-80">SEF {allSpeakers[activeSpeakerIndex].year}</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Navigation dots */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-30">
                  {allSpeakers.map((_, idx) => <button key={idx} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeSpeakerIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`} onClick={() => setActiveSpeakerIndex(idx)} aria-label={`View speaker ${allSpeakers[idx].name}`} />)}
                </div>
              </motion.div>
            </div>}
          
          {/* Hall of Fame Grid View */}
          {isHallExpanded && <div ref={hallOfFameRef} className="transform transition-all duration-500 ease-out" style={{
          transformStyle: 'preserve-3d'
        }}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
                {allSpeakers.map((speaker, index) => <motion.div key={index} className="hall-of-fame-item opacity-0 transform translate-y-8 transition-all duration-700 ease-out" whileHover={{
              scale: 1.05,
              zIndex: 10,
              transition: {
                duration: 0.2
              }
            }}>
                    <div className="relative overflow-hidden rounded-xl group perspective-500">
                      <div className="transform transition-transform duration-700 group-hover:scale-110" style={{
                  transformStyle: 'preserve-3d'
                }}>
                        <AspectRatio ratio={1}>
                          <img src={speaker.image} alt={speaker.name} className="object-cover w-full h-full" />
                        </AspectRatio>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                        <p className="text-white text-sm font-medium">{speaker.name}</p>
                        <p className="text-white/70 text-xs">SEF {speaker.year}</p>
                      </div>
                    </div>
                  </motion.div>)}
              </div>
            </div>}
        </div>
        
        {/* Inspirational quotes section */}
        <div className="mt-24 md:mt-32 overflow-hidden">
          <div className="relative max-w-5xl mx-auto">
            <div className="opacity-30 text-xl mb-2 text-center dark:text-white">— wisdom through the years —</div>
            
            {/* Rotating quotes */}
            <motion.div className="mark flex overflow-hidden" animate={{
            x: [0, -1000]
          }} transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}>
              {[...inspirationalQuotes, ...inspirationalQuotes].map((quote, i) => <div key={i} className="flex-shrink-0 mx-8 md:mx-12 text-2xl md:text-4xl font-bold text-gray-300 dark:text-gray-700 font-alt">
                  <span className="px-[48px]">{quote.text}</span> <span className="text-gray-400 dark:text-gray-600">{quote.translation}</span>
                </div>)}
            </motion.div>
          </div>
        </div>
        
        {/* Bold statement */}
        <div className="mt-36 text-center">
          <motion.div className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter" initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: "-100px"
        }}>
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Think Different
            </span>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default SEFLegacySection;
