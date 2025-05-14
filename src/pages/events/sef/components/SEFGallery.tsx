
import React from 'react';
import { motion } from 'framer-motion';

// Generate placeholder images
const images = Array(6).fill(null).map((_, i) => `https://picsum.photos/seed/sef${i+1}/500/300`);

const SEFGallery = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-[#9b87f5] mb-4">
            SEF Memories
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6">
            Festival Highlights
          </h2>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Relive the energy and inspiration from previous festivals that brought together 
            thousands of innovators, founders, and changemakers.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden aspect-video cursor-pointer group"
            >
              <img 
                src={image} 
                alt={`SEF highlight ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-lg">SEF'25 Moment</h3>
                  <p className="text-white/80 text-sm">A memorable experience from last year's festival</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 font-medium text-[#9b87f5] hover:text-[#8b77e5] transition-colors">
            <span>View Gallery Archive</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SEFGallery;
