
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { allSpeakers } from './data';

const SpeakerHallOfFame: React.FC = () => {
  const [activeSpeakerIndex, setActiveSpeakerIndex] = useState(0);
  const [isHallExpanded, setIsHallExpanded] = useState(false);
  const hallOfFameRef = useRef<HTMLDivElement>(null);
  
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
      if (!hallOfFameRef.current) return;
      const rect = hallOfFameRef.current.getBoundingClientRect();
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

  return (
    <div className="mt-32 relative">
      <div className="text-center mb-16">
        <motion.div 
          className="inline-block mb-4" 
          initial={{ scale: 0.5, opacity: 0 }} 
          whileInView={{ scale: 1, opacity: 1 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.5 }}
        >
          <Star className="h-10 w-10 text-amber-500/80" strokeWidth={1} fill="rgba(245, 158, 11, 0.3)" />
        </motion.div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 dark:text-white">
          Speaker Hall of Fame
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Celebrating visionary leaders, innovators and changemakers who have graced the SEF stage and inspired our community.
        </p>
        
        <Button 
          variant="outline" 
          onClick={() => setIsHallExpanded(!isHallExpanded)} 
          className="mb-8 bg-white/10 backdrop-blur-sm border-gray-200 dark:border-gray-700"
        >
          {isHallExpanded ? "View Showcase" : "View All Speakers"}
        </Button>
      </div>
      
      {/* Immersive Speaker Showcase */}
      {!isHallExpanded && (
        <div className="relative pb-12 max-w-5xl mx-auto">
          <div className="flex justify-center mb-8 space-x-3">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrevSpeaker} 
              className="rounded-full hover:bg-purple-500/10 hover:text-purple-500"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNextSpeaker} 
              className="rounded-full hover:bg-purple-500/10 hover:text-purple-500"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <motion.div 
            className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl perspective-1000" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}
          >
            {/* Main featured speaker */}
            <motion.div 
              key={activeSpeakerIndex} 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.9 }} 
              transition={{ duration: 0.5 }} 
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <img 
                  src={allSpeakers[activeSpeakerIndex].image} 
                  alt={allSpeakers[activeSpeakerIndex].name} 
                  className="w-full h-full object-cover object-center" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{allSpeakers[activeSpeakerIndex].name}</h3>
                  <p className="text-xl opacity-80">SEF {allSpeakers[activeSpeakerIndex].year}</p>
                </div>
              </div>
            </motion.div>
            
            {/* Navigation dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-30">
              {allSpeakers.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeSpeakerIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`} 
                  onClick={() => setActiveSpeakerIndex(idx)} 
                  aria-label={`View speaker ${allSpeakers[idx].name}`} 
                />
              ))}
            </div>
          </motion.div>
        </div>
      )}
      
      {/* Hall of Fame Grid View */}
      {isHallExpanded && (
        <div ref={hallOfFameRef} className="transform transition-all duration-500 ease-out" style={{ transformStyle: 'preserve-3d' }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
            {allSpeakers.map((speaker, index) => (
              <motion.div 
                key={index} 
                className="hall-of-fame-item opacity-0 transform translate-y-8 transition-all duration-700 ease-out" 
                whileHover={{
                  scale: 1.05,
                  zIndex: 10,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="relative overflow-hidden rounded-xl group perspective-500">
                  <div 
                    className="transform transition-transform duration-700 group-hover:scale-110" 
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <AspectRatio ratio={1}>
                      <img src={speaker.image} alt={speaker.name} className="object-cover w-full h-full" />
                    </AspectRatio>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <p className="text-white text-sm font-medium">{speaker.name}</p>
                    <p className="text-white/70 text-xs">SEF {speaker.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeakerHallOfFame;
