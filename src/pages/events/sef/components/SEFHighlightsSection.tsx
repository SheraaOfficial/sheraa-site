
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SEFHighlightsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#1A1F2C] to-[#292D3E]">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">SEF'25 Highlights</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Relive the energy and inspiration from our previous festival that brought together 
            thousands of innovators, founders, and changemakers.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item * 0.1 }}
              className="relative overflow-hidden rounded-xl aspect-video bg-white/5 backdrop-blur-sm
                border border-white/10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] via-transparent to-transparent 
                opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-bold text-lg mb-1">Highlight Title</h3>
                <p className="text-sm text-white/80 line-clamp-2">
                  Brief description of this particular highlight or moment from SEF'25.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="bg-white/10 text-white border-white/30 
            hover:bg-white/20 hover:border-white/50">
            <a href="https://www.youtube.com/watch?v=example" target="_blank" rel="noopener noreferrer">
              Watch SEF'25 Recap Video <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SEFHighlightsSection;
