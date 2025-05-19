
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
  
  // Return JSX - this was missing in the original code
  return (
    <div className="my-16 py-10">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Speaker Hall of Fame
      </h3>
      
      <div 
        ref={hallOfFameRef}
        className="relative mx-auto max-w-3xl bg-white/5 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300"
      >
        {/* Active Speaker Display */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3">
            {allSpeakers[activeSpeakerIndex] && (
              <AspectRatio ratio={1/1} className="rounded-xl overflow-hidden border-2 border-white/20">
                <img 
                  src={allSpeakers[activeSpeakerIndex].image} 
                  alt={allSpeakers[activeSpeakerIndex].name}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            )}
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 mr-1" fill="#FBBF24" />
              ))}
            </div>
            {allSpeakers[activeSpeakerIndex] && (
              <>
                <h4 className="text-xl font-bold">{allSpeakers[activeSpeakerIndex].name}</h4>
                <p className="text-sm opacity-70 mb-2">{allSpeakers[activeSpeakerIndex].title}</p>
                <p className="mb-4">{allSpeakers[activeSpeakerIndex].description}</p>
                <p className="text-sm italic opacity-80">"{allSpeakers[activeSpeakerIndex].quote}"</p>
              </>
            )}
          </div>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-center mt-6 space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevSpeaker}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNextSpeaker}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Speaker Grid */}
        <div className={`mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 transition-all duration-500 ${
          isHallExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          {allSpeakers.map((speaker, index) => (
            <div 
              key={index}
              className="hall-of-fame-item aspect-square rounded-lg overflow-hidden cursor-pointer border border-white/10"
              onClick={() => setActiveSpeakerIndex(index)}
            >
              <img 
                src={speaker.image} 
                alt={speaker.name}
                className="w-full h-full object-cover transition-transform hover:scale-110"
              />
            </div>
          ))}
        </div>
        
        {/* Toggle Button */}
        <Button
          variant="ghost"
          className="mx-auto mt-6 block text-sm"
          onClick={() => setIsHallExpanded(!isHallExpanded)}
        >
          {isHallExpanded ? 'Show Less' : 'View All Speakers'}
        </Button>
      </div>
    </div>
  );
};

export default SpeakerHallOfFame;
