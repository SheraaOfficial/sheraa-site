
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEFSection from '@/components/SEFSection';
import { Sparkles } from '@/components/ui/sparkles';
import { motion } from 'framer-motion';

const SEFLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <Sparkles>
              <h1 className="text-5xl font-bold text-sheraa-primary mb-4">Sharjah Entrepreneurship Festival</h1>
            </Sparkles>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for the region's premier entrepreneurship gathering - where innovation meets opportunity.
            </p>
          </motion.div>
          
          <SEFSection />
          
          <div className="mt-24 text-center">
            <motion.h2 
              className="text-3xl font-bold text-sheraa-primary mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Past Events
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore the highlights from our previous Sharjah Entrepreneurship Festivals
            </motion.p>
            
            {/* Placeholder for past events grid/gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Past event cards would go here */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SEFLandingPage;
