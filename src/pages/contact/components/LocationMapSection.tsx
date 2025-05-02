
import React from 'react';
import { motion } from 'framer-motion';
import LocationMap from '../LocationMap';

const LocationMapSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold text-sheraa-dark mb-4">Find Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Our hubs are strategically located within Sharjah's vibrant academic and research landscape, ensuring accessibility and fostering collaboration.</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <LocationMap />
      </motion.div>
    </>
  );
};

export default LocationMapSection;
