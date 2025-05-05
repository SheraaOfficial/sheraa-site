
import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';

const CareersHero: React.FC = () => {
  const scrollToApplication = () => {
    const element = document.getElementById('application-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-transparent mix-blend-overlay" />
        <div className="absolute inset-0 bg-white/60" />
      </div>
      
      <div className="container mx-auto px-4 py-20 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Join the team shaping <span className="text-[#8B5CF6]">Sharjah's</span> future
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Work alongside innovators, entrepreneurs, and changemakers in a dynamic environment where your ideas can truly make an impact.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <GradientButton onClick={scrollToApplication} className="px-8 py-3 text-base">
              Apply Now
            </GradientButton>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#D6BCFA]/20 z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
      />
      <motion.div 
        className="absolute top-20 right-40 w-20 h-20 rounded-full bg-[#8B5CF6]/10 z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      />
    </div>
  );
};

export default CareersHero;
