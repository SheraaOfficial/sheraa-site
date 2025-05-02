
import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../ContactForm';

const ContactFormSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <ContactForm />
    </motion.div>
  );
};

export default ContactFormSection;
