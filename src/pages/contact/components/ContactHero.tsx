
import React from 'react';
import { motion } from 'framer-motion';
import { BeamsBackground } from '@/components/ui/beams-background';

const ContactHero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <BeamsBackground intensity="subtle" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch with Sheraa</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We're here to help you connect with Sharjah's entrepreneurship ecosystem. 
              Whether you have questions about our programs, want to explore partnership 
              opportunities, inquire about membership, or simply learn more, please reach out.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
