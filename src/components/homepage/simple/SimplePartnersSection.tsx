import React from 'react';
import { motion } from 'framer-motion';

const SimplePartnersSection: React.FC = () => {
  // Placeholder partner logos - these would be replaced with actual partner logos
  const partners = [
    'Partner 1', 'Partner 2', 'Partner 3', 'Partner 4',
    'Partner 5', 'Partner 6', 'Partner 7', 'Partner 8'
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Headline */}
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            We're more powerful when we{' '}
            <span className="text-[#A0826D]">work together.</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We're growing our diverse community of partners to accelerate business 
            growth in Sharjah's flourishing tech sector.
          </motion.p>
        </div>

        {/* Partner Logos Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-24"
            >
              <span className="text-gray-400 text-sm font-medium">
                {partner}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SimplePartnersSection;