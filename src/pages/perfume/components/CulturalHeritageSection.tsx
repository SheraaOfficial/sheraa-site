
import React from 'react';
import { motion } from 'framer-motion';

const CulturalHeritageSection: React.FC = () => {
  return (
    <motion.section 
      className="py-24 bg-luxury-beige"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal">
              Rooted in Heritage
            </h2>
            <div className="w-24 h-px bg-luxury-gold mx-auto" />
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-luxury-charcoal/80 font-light leading-relaxed">
              From the ancient trade routes that once carried precious spices through Sharjah's bustling souks, 
              to the contemporary architectural marvels that define the emirate's skyline, this fragrance 
              captures the essence of a city where time stands still and innovation flourishes.
            </p>
            
            <p className="text-lg text-luxury-charcoal/80 font-light leading-relaxed">
              Each note tells the story of Sharjah's entrepreneurial spirit—the boldness of vision, 
              the patience of craft, and the warmth of a community that nurtures dreams into reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 pt-8"
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-luxury-cream rounded-full mx-auto flex items-center justify-center">
                <div className="w-8 h-8 border border-luxury-gold rounded-full" />
              </div>
              <h3 className="text-xl font-serif text-luxury-charcoal">Ancient Traditions</h3>
              <p className="text-sm text-luxury-charcoal/70 font-light">
                Honoring the timeless art of perfumery passed down through generations
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-luxury-cream rounded-full mx-auto flex items-center justify-center">
                <div className="w-8 h-8 border border-luxury-gold rounded-sm rotate-45" />
              </div>
              <h3 className="text-xl font-serif text-luxury-charcoal">Modern Innovation</h3>
              <p className="text-sm text-luxury-charcoal/70 font-light">
                Embracing contemporary techniques to create something extraordinary
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-luxury-cream rounded-full mx-auto flex items-center justify-center">
                <div className="w-6 h-6 border-t border-r border-luxury-gold rotate-45" />
              </div>
              <h3 className="text-xl font-serif text-luxury-charcoal">Entrepreneurial Spirit</h3>
              <p className="text-sm text-luxury-charcoal/70 font-light">
                Celebrating the visionaries who transform dreams into reality
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CulturalHeritageSection;
