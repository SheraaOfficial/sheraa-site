
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { BeamsBackground } from '@/components/ui/beams-background';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import LocationMap from './LocationMap';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <ContactInfo />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <ContactForm />
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-sheraa-light">
          <div className="container mx-auto px-4 md:px-6">
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
