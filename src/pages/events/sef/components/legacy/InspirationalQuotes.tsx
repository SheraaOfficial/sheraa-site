
import React from 'react';
import { motion } from 'framer-motion';
import { inspirationalQuotes } from './data';

const InspirationalQuotes: React.FC = () => {
  return (
    <div className="mt-24 md:mt-32 overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        <div className="opacity-30 text-xl mb-2 text-center dark:text-white">— wisdom through the years —</div>
        
        {/* Rotating quotes */}
        <motion.div 
          className="mark flex overflow-hidden" 
          animate={{ x: [0, -1000] }} 
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        >
          {[...inspirationalQuotes, ...inspirationalQuotes].map((quote, i) => (
            <div key={i} className="flex-shrink-0 mx-8 md:mx-12 text-2xl md:text-4xl font-bold text-gray-300 dark:text-gray-700 font-alt">
              <span className="px-[48px]">{quote.text}</span> <span className="text-gray-400 dark:text-gray-600">{quote.translation}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InspirationalQuotes;
