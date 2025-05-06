
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BoardDetailsSection = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section id="board" className="py-20 bg-white relative overflow-hidden">
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute right-0 bottom-0 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl"
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-sheraa-primary">Board of Advisors</h2>
            <p className="text-lg mb-10 leading-relaxed">
              We benefit from the strategic guidance of a distinguished Board of Advisors, comprising 
              leaders from government, industry, academia, and the entrepreneurial community, ensuring 
              our initiatives remain aligned with national priorities and market needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-sheraa-primary/10 to-transparent rounded-xl p-8 border border-sheraa-primary/10 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-8 text-center text-sheraa-dark">Advisory Board Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <motion.div 
                className="bg-white p-4 rounded-lg text-center shadow-sm border border-gray-100"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
              >
                <h4 className="font-semibold mb-0">Government Relations</h4>
              </motion.div>
              <motion.div 
                className="bg-white p-4 rounded-lg text-center shadow-sm border border-gray-100"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
              >
                <h4 className="font-semibold mb-0">Industry Insights</h4>
              </motion.div>
              <motion.div 
                className="bg-white p-4 rounded-lg text-center shadow-sm border border-gray-100"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
              >
                <h4 className="font-semibold mb-0">Academic Research</h4>
              </motion.div>
              <motion.div 
                className="bg-white p-4 rounded-lg text-center shadow-sm border border-gray-100"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
              >
                <h4 className="font-semibold mb-0">Investment Strategy</h4>
              </motion.div>
              <motion.div 
                className="bg-white p-4 rounded-lg text-center shadow-sm border border-gray-100"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
              >
                <h4 className="font-semibold mb-0">Entrepreneurial Experience</h4>
              </motion.div>
              <motion.div 
                className="bg-white p-4 rounded-lg text-center shadow-sm border border-gray-100"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
              >
                <h4 className="font-semibold mb-0">Global Connections</h4>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BoardDetailsSection;
