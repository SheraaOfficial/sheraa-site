
import React from 'react';
import { motion } from 'framer-motion';

export const PartnerSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-16"
    >
      <h3 className="text-2xl font-bold mb-8 text-center text-sheraa-dark">Our Esteemed Partners</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24">
            <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center text-gray-400">
              Partner Logo
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
