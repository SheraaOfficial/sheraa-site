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
  return <div className="mb-20">
      
      
      
    
      
      
      {/* Year progress indicators */}
      
    </div>;
};
export default JourneyThroughTime;