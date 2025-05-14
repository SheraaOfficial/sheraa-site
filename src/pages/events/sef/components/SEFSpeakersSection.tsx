
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const SEFSpeakersSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-4">Featured Speakers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn from 300+ global leaders, industry titans, and inspiring founders sharing insights 
            across technology, finance, sustainability, and more.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[1, 2, 3, 4].map((speaker) => (
            <motion.div
              key={speaker}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: speaker * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all"
            >
              <div className="relative">
                <AspectRatio ratio={1 / 1} className="bg-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/40 to-[#F97316]/40 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300" />
                </AspectRatio>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-lg text-sheraa-primary">Speaker Name</h3>
                <p className="text-sm text-gray-500 mb-3">Position, Company</p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  Expert in technology innovation and business transformation.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-sheraa-primary text-sheraa-primary hover:bg-sheraa-primary/5">
            <Link to="/events/sef/speakers">
              View All Speakers <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SEFSpeakersSection;
