
import React from 'react';
import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';

const DeliveryInfoSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F7F3EE]">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <Truck className="w-16 h-16 text-[#165A5A] mx-auto mb-6" />
            <h2 className="text-3xl font-serif text-[#165A5A] mb-4">
              Delivery Information
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Courier rates & delivery times confirmed soon by Dr Lina
            </p>
            <p className="text-sm text-gray-500 mb-6">
              We ensure safe and timely delivery of your luxury perfume across the UAE and GCC
            </p>
            
            {/* Traditional Dhow Icon */}
            <div className="flex justify-center">
              <svg width="80" height="60" viewBox="0 0 80 60" className="text-[#C8A165]" fill="currentColor">
                <path d="M5 45c0-5 15-10 35-10s35 5 35 10c0 3-15 5-35 5s-35-2-35-5z"/>
                <path d="M10 30c5-15 20-20 30-20s25 5 30 20l-5 15H15l-5-15z"/>
                <path d="M25 10v20M40 8v22M55 12v18"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliveryInfoSection;
