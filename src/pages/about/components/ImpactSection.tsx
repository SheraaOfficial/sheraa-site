
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 bg-gray-50 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=2000&auto=format&fit=crop')] bg-fixed opacity-[0.03]"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-sheraa-primary">Our Impact</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Since our launch in 2016 under the patronage of H.H. Dr. Sheikh Sultan bin Muhammad Al Qasimi, 
              Ruler of Sharjah, and the leadership of Chairperson H.E. Sheikha Bodour Bint Sultan Al Qasimi, 
              Sheraa has made a significant mark in the entrepreneurial ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-2">180+</div>
              <div className="text-sm text-gray-600">Startups Supported</div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-2">$248M+</div>
              <div className="text-sm text-gray-600">Revenue Generated</div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-2">$171M+</div>
              <div className="text-sm text-gray-600">Capital Raised</div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-sheraa-primary mb-2">1,900+</div>
              <div className="text-sm text-gray-600">Jobs Created</div>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button asChild variant="gradient" size="lg" className="group">
              <Link to="/about/impact" className="flex items-center gap-2">
                View Full Impact Report
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
