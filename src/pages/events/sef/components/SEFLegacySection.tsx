
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Badge } from '@/components/ui/badge';

// Speakers data with images, names, and roles for each year
const legacyYears = [
  { 
    year: 2016, 
    theme: "The Launch", 
    description: "The inaugural SEF marked the beginning of Sharjah's entrepreneurial revolution, setting the foundation for a vibrant ecosystem.",
    speakers: [
      { name: "H.E. Sheikha Bodour Al Qasimi", role: "Chairperson, Sheraa", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Magnus Olsson", role: "Co-founder, Careem", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Fadi Ghandour", role: "Executive Chairman, Wamda Capital", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
    ]
  },
  { 
    year: 2017, 
    theme: "Dare to Dream", 
    description: "This edition inspired attendees to push boundaries and transform bold visions into reality through innovation and determination.",
    speakers: [
      { name: "Gary Vaynerchuk", role: "Entrepreneur & Author", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Elissa Freiha", role: "Founder, WOMENA", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Ronaldo Mouchawar", role: "Co-founder, Souq.com", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
    ]
  },
  { 
    year: 2018, 
    theme: "Redefining Innovation", 
    description: "SEF 2018 explored how entrepreneurs can create meaningful impact through sustainable and forward-thinking business models.",
    speakers: [
      { name: "Ray Dalia", role: "Founder, Bridgewater Associates", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Arlan Hamilton", role: "Founder, Backstage Capital", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Prince Khaled bin Alwaleed", role: "Founder, KBW Ventures", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
    ]
  },
  { 
    year: 2019, 
    theme: "Inspiring Minds", 
    description: "This edition focused on fostering creativity and knowledge-sharing to empower the next generation of changemakers.",
    speakers: [
      { name: "Steve Wozniak", role: "Co-founder, Apple", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Mona Ataya", role: "CEO, Mumzworld", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Hala Fadel", role: "Chair, MIT Enterprise Forum", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
    ]
  },
  { 
    year: 2020, 
    theme: "Resilience & Growth", 
    description: "In a year of global challenges, SEF 2020 celebrated adaptability and finding opportunities amid uncertainty.",
    speakers: [
      { name: "Dr. Jane Goodall", role: "Primatologist & Anthropologist", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Khalid Al Ameri", role: "Content Creator & Entrepreneur", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Muna AbuSulayman", role: "Media Personality & Entrepreneur", image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
    ]
  },
  { 
    year: 2021, 
    theme: "Future Forward", 
    description: "SEF 2021 looked ahead to emerging technologies and trends shaping the post-pandemic business landscape.",
    speakers: [
      { name: "Marc Randolph", role: "Co-founder, Netflix", image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Gitanjali Rao", role: "Young Innovator & TIME Kid of the Year", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Dr. Shefaa Hamza", role: "Digital Health Entrepreneur", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
    ]
  },
  { 
    year: 2022, 
    theme: "Breaking Boundaries", 
    description: "This edition celebrated pioneers pushing the limits of innovation across industries and geographic borders.",
    speakers: [
      { name: "Simon Sinek", role: "Author & Optimist", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Huda Kattan", role: "Founder, Huda Beauty", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Fadel Adib", role: "Professor, MIT Media Lab", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
    ]
  },
  { 
    year: 2023, 
    theme: "The Next Wave", 
    description: "SEF 2023 explored emerging technologies and market opportunities that will define the coming decade.",
    speakers: [
      { name: "H.E. Omar Al Olama", role: "UAE Minister of AI", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Sheikha Shamma Al Nahyan", role: "CEO, UAE Independent Climate Change Accelerators", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Thierry Henry", role: "Football Legend & Entrepreneur", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
    ]
  },
  { 
    year: 2024, 
    theme: "Innovation Unleashed", 
    description: "This year's festival focused on breakthrough technologies and unconventional approaches transforming industries.",
    speakers: [
      { name: "Wim Hof", role: "Athlete & Health Expert", image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Dr. Aisha Bin Bishr", role: "Digital Transformation Leader", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Fares Ghandour", role: "Partner, Wamda Capital", image: "https://images.unsplash.com/photo-1548449112-96a38a643324?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
    ]
  },
  { 
    year: 2025, 
    theme: "Where We Belong", 
    description: "The upcoming edition will bring together the global community to explore the future of entrepreneurship and human connection.",
    speakers: [
      { name: "Coming Soon", role: "Featured Speaker", image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Coming Soon", role: "Featured Speaker", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
      { name: "Coming Soon", role: "Featured Speaker", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
    ]
  },
];

// Inspirational quotes that relate to entrepreneurship
const quotes = [
  "Be Present - Show up fully for every opportunity",
  "Less is More - Focus on what truly matters",
  "Make Waves - Create meaningful impact in the world",
  "Stay Hungry - Never lose your curiosity and drive",
  "Find Balance - Harmonize ambition with wellbeing",
  "Dream Big - Envision possibilities beyond limits",
  "Flow State - Immerse yourself in the journey",
  "Be Limitless - Break through perceived boundaries",
  "Mindful Moment - Stay aware in a world of noise"
];

const SEFLegacySection: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [activeQuote, setActiveQuote] = useState(0);
  const { theme } = useTheme();
  
  // Effect to rotate through inspirational quotes
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setActiveQuote(prev => (prev + 1) % quotes.length);
    }, 5000);
    
    return () => clearInterval(quoteInterval);
  }, []);
  
  useEffect(() => {
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);
          
          if (gridRef.current) {
            // Set up 3D perspective for the grid
            gsap.set(gridRef.current, {
              perspective: 1000,
            });
            
            // Grid items animation
            const gridItems = gridRef.current.querySelectorAll('.grid__item');
            
            gridItems.forEach((item, index) => {
              gsap.fromTo(
                item,
                {
                  opacity: 0,
                  y: 100,
                  rotateX: -30,
                  scale: 0.9,
                  filter: 'blur(10px)'
                },
                {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                  filter: 'blur(0px)',
                  duration: 1.2,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: item,
                    start: 'top bottom-=100',
                    end: 'center center',
                    toggleActions: 'play none none reverse',
                  },
                  delay: index * 0.05
                }
              );
            });

            // Speaker cards animation
            const speakerItems = document.querySelectorAll('.speaker-card');
            speakerItems.forEach((item, index) => {
              gsap.fromTo(
                item,
                {
                  opacity: 0,
                  y: 50,
                  scale: 0.95,
                },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.8,
                  ease: 'power2.out',
                  scrollTrigger: {
                    trigger: item,
                    start: 'top bottom-=80',
                    toggleActions: 'play none none reverse',
                  },
                  delay: index * 0.1
                }
              );
            });
            
            // Quotes rotation animation
            const quoteText = document.querySelector('.quote-text');
            if (quoteText) {
              gsap.to('.quote-text', {
                y: -20,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.in',
                repeat: -1,
                repeatDelay: 4.5,
                yoyo: true
              });
            }
            
            // Parallax effect for section background
            gsap.to('.parallax-bg', {
              y: '30%',
              ease: 'none',
              scrollTrigger: {
                trigger: '.legacy-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
              }
            });
          }
        } catch (error) {
          console.error('Failed to load GSAP:', error);
        }
      }
    };
    
    initializeAnimations();
    
    return () => {
      // Clean up ScrollTrigger
      if (typeof window !== 'undefined') {
        try {
          const ScrollTrigger = (window as any).ScrollTrigger;
          if (ScrollTrigger) {
            ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
          }
        } catch (error) {
          console.error('Error cleaning up ScrollTrigger:', error);
        }
      }
    };
  }, []);

  const handleYearClick = (year: number) => {
    setActiveYear(activeYear === year ? null : year);
  };
  
  return (
    <section 
      className={`legacy-section py-24 px-4 relative overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-[#1A1F2C] to-[#292D3E]' 
          : 'bg-gradient-to-b from-gray-100 to-white'
      }`}
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="parallax-bg absolute inset-0">
          {/* Colorful gradients for background */}
          <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-[#9b87f5]/10 rounded-full filter blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-[#F97316]/10 rounded-full filter blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-[#9b87f5]/5 rounded-full filter blur-[150px] opacity-50" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={`text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 bg-clip-text text-transparent ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-white to-purple-300'
              : 'bg-gradient-to-r from-purple-700 to-indigo-900'
          }`}>
            THE LEGACY OF SEF
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            Since 2016, the Sharjah Entrepreneurship Festival has been bringing together innovators, 
            entrepreneurs and changemakers from around the globe. Explore our journey through the years.
          </p>
          
          {/* Inspirational Quote */}
          <motion.div 
            className="mt-8 quote-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="relative h-8 overflow-hidden">
              <p className={`quote-text absolute w-full left-0 text-lg font-medium italic ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-700'
              }`}>
                "{quotes[activeQuote]}"
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Timeline Navigation */}
        <div className="flex items-center justify-center flex-wrap gap-4 mb-16 relative">
          {/* Visual timeline line */}
          <div className={`absolute h-1 top-1/2 transform -translate-y-1/2 left-0 right-0 z-0 ${
            theme === 'dark' ? 'bg-white/10' : 'bg-gray-200'
          }`}></div>
          
          {legacyYears.map((item, index) => (
            <motion.button
              key={item.year}
              className={`relative z-10 px-4 py-2 rounded-full transition-all duration-300 ${
                activeYear === item.year 
                  ? 'bg-gradient-to-r from-[#9b87f5] to-[#F97316] text-white shadow-lg scale-110' 
                  : `${theme === 'dark' ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-white/20`
              }`}
              onClick={() => handleYearClick(item.year)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.year}
            </motion.button>
          ))}
        </div>
        
        {/* 3D Grid for Year Content */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 gap-16 perspective-1000 pb-16"
        >
          {legacyYears.map((item, index) => (
            <motion.div
              key={item.year}
              className={`grid__item mb-24 ${activeYear !== null && activeYear !== item.year ? 'opacity-50' : ''}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Year Info */}
                <div className="md:w-1/3 text-center md:text-left perspective-1000">
                  <div className="transform hover:rotate-y-10 transition-transform duration-700">
                    <Badge className={`mb-4 px-3 py-1 text-sm font-normal ${
                      theme === 'dark' ? 'bg-white/20 text-white' : 'bg-indigo-100 text-indigo-800'
                    }`}>
                      Edition {index + 1}
                    </Badge>
                    
                    <span className={`text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-br ${
                      theme === 'dark' 
                        ? 'from-[#9b87f5] to-[#F97316]' 
                        : 'from-purple-700 to-orange-500'
                    }`}>
                      {item.year}
                    </span>
                    
                    <h3 className={`text-3xl font-bold mt-2 mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>
                      {item.theme}
                    </h3>
                    
                    <p className={`text-lg mb-6 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>
                    
                    <div className="h-1 w-24 mx-auto md:mx-0 bg-gradient-to-r from-[#9b87f5] to-[#F97316] rounded-full" />
                  </div>
                </div>
                
                {/* Speakers Grid - 3D Perspective Effect */}
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
                  {item.speakers.map((speaker, speakerIndex) => (
                    <motion.div
                      key={`${item.year}-${speakerIndex}`}
                      className={`speaker-card rounded-xl overflow-hidden shadow-lg transform transition-all duration-700 hover:rotate-y-10 ${
                        theme === 'dark' 
                          ? 'bg-gray-800/50 backdrop-blur-sm border border-white/10' 
                          : 'bg-white border border-gray-200'
                      }`}
                      whileHover={{ 
                        y: -10, 
                        boxShadow: theme === 'dark' 
                          ? '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)' 
                          : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="h-60 overflow-hidden relative">
                        <img 
                          src={speaker.image} 
                          alt={speaker.name} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="p-4">
                        <h4 className={`font-bold text-xl ${
                          theme === 'dark' ? 'text-white' : 'text-gray-800'
                        }`}>
                          {speaker.name}
                        </h4>
                        
                        <p className={`${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {speaker.role}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* "Think Different" Quote Section */}
        <motion.div 
          className="text-center mt-12 mb-16 perspective-1000 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <div className={`text-5xl md:text-8xl font-black uppercase tracking-tighter ${
            theme === 'dark' 
              ? 'text-white/10' 
              : 'text-gray-200'
          }`}>
            THINK DIFFERENT
          </div>
        </motion.div>
        
        {/* Final CTA */}
        <div className="text-center mt-16">
          <motion.div
            className="inline-flex perspective-1000"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <button className="px-8 py-3 bg-gradient-to-br from-[#9b87f5] to-[#D6BCFA] text-white font-medium rounded-full 
              hover:shadow-[0_5px_30px_rgba(155,135,245,0.6)] transition-all duration-300 transform hover:translate-y-[-2px]">
              Explore All SEF Editions
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SEFLegacySection;
