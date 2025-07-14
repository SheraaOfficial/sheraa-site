import React from 'react';
import { motion } from 'framer-motion';

const SimpleHero: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            We are a vibrant community of{' '}
            <span className="text-[#A0826D]">innovators.</span>
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A thriving, diverse ecosystem of corporate trailblazers, national champions, 
            and active investors all working towards the same goal: to shape a future 
            that knows no bounds. Welcome to Sheraa.
          </motion.p>

          {/* Animated Tagline */}
          <motion.div 
            className="text-lg md:text-xl text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="mb-2">We're not waiting for the future to unfold;</p>
            <p className="font-bold text-[#A0826D]">We're actively shaping it.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;