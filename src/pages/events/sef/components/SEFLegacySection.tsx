
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Legacy years with themes
const legacyYears = [
  { year: 2016, theme: "The Launch", image: "https://picsum.photos/seed/sef2016/800/600" },
  { year: 2017, theme: "Dare to Dream", image: "https://picsum.photos/seed/sef2017/800/600" },
  { year: 2018, theme: "Redefining Innovation", image: "https://picsum.photos/seed/sef2018/800/600" },
  { year: 2019, theme: "Inspiring Minds", image: "https://picsum.photos/seed/sef2019/800/600" },
  { year: 2020, theme: "Resilience & Growth", image: "https://picsum.photos/seed/sef2020/800/600" },
  { year: 2021, theme: "Future Forward", image: "https://picsum.photos/seed/sef2021/800/600" },
  { year: 2022, theme: "Breaking Boundaries", image: "https://picsum.photos/seed/sef2022/800/600" },
  { year: 2023, theme: "The Next Wave", image: "https://picsum.photos/seed/sef2023/800/600" },
  { year: 2024, theme: "Innovation Unleashed", image: "https://picsum.photos/seed/sef2024/800/600" },
  { year: 2025, theme: "Where We Belong", image: "https://picsum.photos/seed/sef2025/800/600" },
];

const SEFLegacySection: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);
          
          if (gridRef.current) {
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
  
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b dark:from-[#1A1F2C] dark:to-[#292D3E] from-gray-100 to-white">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-1/3 w-[40rem] h-[40rem] bg-[#9b87f5]/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-[30rem] h-[30rem] bg-[#F97316]/10 rounded-full filter blur-[100px]" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r dark:from-white dark:to-purple-300 from-purple-700 to-indigo-900">
            The Legacy of SEF
          </h2>
          <p className="text-xl max-w-3xl mx-auto dark:text-white/70 text-gray-600">
            Since 2016, the Sharjah Entrepreneurship Festival has been bringing together innovators, 
            entrepreneurs and changemakers from around the globe. Explore our journey through the years.
          </p>
        </motion.div>
        
        <div 
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 perspective-1000"
        >
          {legacyYears.map((item, index) => (
            <div 
              key={index}
              className="grid__item group cursor-pointer"
            >
              <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 group-hover:scale-[1.02]">
                <div 
                  className="grid__item-img h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-white/60 font-medium">SEF {item.year}</span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-1">{item.theme}</h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-[#9b87f5] to-[#F97316] rounded-full mt-2 transform origin-left transition-all duration-500 group-hover:w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
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
