import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SimpleProgramsSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to take your startup to the next level?{' '}
            <span className="text-[#A0826D]">We can take you there.</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-xl text-gray-600 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            When you join Sheraa you are plugged into a community where collaboration thrives. 
            Visionary founders and innovators deploy disruptive technologies in high-growth 
            companies to transform industries. Access the resources, expertise and opportunities 
            you need to accelerate your company's growth.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-[#A0826D] hover:bg-[#A0826D]/90 text-white px-8 py-4 text-lg"
              asChild
            >
              <Link to="/programs">View Our Programs</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SimpleProgramsSection;