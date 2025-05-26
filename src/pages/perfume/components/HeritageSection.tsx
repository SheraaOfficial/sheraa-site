
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Crown } from 'lucide-react';

const HeritageSection: React.FC = () => {
  return (
    <motion.section 
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Sparkles className="w-16 h-16 text-[#165A5A] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif text-[#165A5A] mb-6">
            The Essence of Sharjah
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafted with the finest ingredients and inspired by the architectural marvels and cultural 
            richness of Sharjah, this exclusive perfume captures the spirit of innovation and tradition 
            that defines the emirate. Each bottle tells a story of artisanal excellence, from the bustling 
            souks to the serene desert landscapes, embodying the entrepreneurial spirit that drives Sharjah forward.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C8A165]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#C8A165]" />
              </div>
              <h3 className="text-xl font-semibold text-[#165A5A] mb-2">Handcrafted Excellence</h3>
              <p className="text-gray-600">Meticulously created by master perfumers using traditional techniques passed down through generations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#165A5A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-[#165A5A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#165A5A] mb-2">Premium Quality</h3>
              <p className="text-gray-600">Only the finest natural ingredients sourced from around the world, ensuring unparalleled quality</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C8A165]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[#C8A165]" />
              </div>
              <h3 className="text-xl font-semibold text-[#165A5A] mb-2">Limited Edition</h3>
              <p className="text-gray-600">Exclusive collection celebrating Sharjah's cultural heritage and entrepreneurial spirit</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeritageSection;
