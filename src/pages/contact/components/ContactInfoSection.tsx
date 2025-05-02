
import React from 'react';
import { motion } from 'framer-motion';
import ContactInfo from '../ContactInfo';

const ContactInfoSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <ContactInfo />
    </motion.div>
  );
};

export default ContactInfoSection;
