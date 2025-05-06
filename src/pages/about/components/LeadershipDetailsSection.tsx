
import React from 'react';
import { motion } from 'framer-motion';

const LeadershipDetailsSection = () => {
  return (
    <section id="leadership" className="py-20 bg-gray-50 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2000&auto=format&fit=crop')] bg-fixed opacity-[0.02]"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-sheraa-primary">Our Leadership</h2>
            <p className="text-lg mb-0 leading-relaxed">
              Sheraa is guided by a visionary leadership team committed to empowering entrepreneurs and 
              strengthening Sharjah's ecosystem.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-sheraa-primary/10">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop" 
                  alt="H.E. Sheikha Bodour Bint Sultan Al Qasimi"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">H.E. Sheikha Bodour Bint Sultan Al Qasimi</h3>
              <p className="text-sheraa-primary mb-4">Chairperson</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-sheraa-primary/10">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop" 
                  alt="Najla Al Midfa"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Najla Al Midfa</h3>
              <p className="text-sheraa-primary mb-4">Vice-Chairperson</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-sheraa-primary/10">
                <img 
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=300&auto=format&fit=crop" 
                  alt="Sara Al Nuaimi"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Sara Al Nuaimi</h3>
              <p className="text-sheraa-primary mb-4">Chief Executive Officer</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipDetailsSection;
