
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ApproachSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="approach" className="py-20 bg-gray-50 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')] bg-fixed opacity-[0.03]"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-sheraa-primary">Our Approach: Founder-First, Community-Driven</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We believe entrepreneurs are the driving force of progress. Our "founder-first" philosophy guides everything we do, 
              ensuring our programs and resources are tailored to the real needs of those building businesses.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We foster an inclusive, collaborative community where founders, mentors, investors, and industry leaders connect, 
              share knowledge, and support one another's growth. This network effect is central to the Sheraa experience, 
              providing invaluable connections and opportunities. The strength of this interconnected ecosystem provides 
              resilience and accelerates growth for participating startups.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-sm mt-10 border border-gray-100"
          >
            <h3 className="text-xl font-bold mb-6 text-sheraa-dark">Our Founder-First Principles</h3>
            <ul className="space-y-6">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="bg-sheraa-primary/20 rounded-full p-2 mr-4 mt-1">
                  <ArrowRight className="w-5 h-5 text-sheraa-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Equity-Free Support</h4>
                  <p className="text-gray-600">We provide equity-free funding and support in many of our programs, allowing founders to maintain full ownership while receiving the resources they need to succeed.</p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="bg-sheraa-primary/20 rounded-full p-2 mr-4 mt-1">
                  <ArrowRight className="w-5 h-5 text-sheraa-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Tailored Mentorship</h4>
                  <p className="text-gray-600">Every founder receives guidance specific to their unique challenges from our network of experienced mentors who have walked the entrepreneurial path before.</p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="bg-sheraa-primary/20 rounded-full p-2 mr-4 mt-1">
                  <ArrowRight className="w-5 h-5 text-sheraa-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Community Integration</h4>
                  <p className="text-gray-600">We connect founders to a supportive ecosystem of peers, partners, and stakeholders for sustainable growth and collaborative innovation that benefits all.</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
