
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { yearlyData } from './data';
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { motion } from 'framer-motion';

const JourneyThroughTime: React.FC = () => {
  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  
  const handlePrevYear = () => {
    setCurrentYearIndex(prev => prev > 0 ? prev - 1 : yearlyData.length - 1);
  };
  
  const handleNextYear = () => {
    setCurrentYearIndex(prev => prev < yearlyData.length - 1 ? prev + 1 : 0);
  };
  
  const currentYear = yearlyData[currentYearIndex];
  
  return (
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
        {yearlyData.map((_, idx) => (
          <button 
            key={idx} 
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentYearIndex ? 'bg-purple-600 w-6' : 'bg-gray-300 dark:bg-gray-600 hover:bg-purple-400'}`} 
            onClick={() => setCurrentYearIndex(idx)} 
            aria-label={`View year ${yearlyData[idx].year}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default JourneyThroughTime;
