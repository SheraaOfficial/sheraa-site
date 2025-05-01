
import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const VisionSection = () => {
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-sheraa-primary">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-6">
              To establish Sharjah as a leading global hub for entrepreneurship and innovation, 
              recognized for its supportive ecosystem, high-impact startups, and contribution to 
              a diversified, knowledge-based economy.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg text-gray-700 mb-6">
              Our focus extends beyond mere company formation; we aim to cultivate changemakers 
              who address pressing challenges and contribute positively to society.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-sheraa-primary/5 rounded-xl p-6 md:p-8 my-10">
            <h3 className="text-xl font-bold mb-4 text-sheraa-dark">Key Strategic Priorities</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-sheraa-primary/20 rounded-full p-1 mr-3 mt-1">
                  <ArrowRight className="w-4 h-4 text-sheraa-primary" />
                </div>
                <p>Building a thriving entrepreneurship ecosystem that nurtures innovation</p>
              </li>
              <li className="flex items-start">
                <div className="bg-sheraa-primary/20 rounded-full p-1 mr-3 mt-1">
                  <ArrowRight className="w-4 h-4 text-sheraa-primary" />
                </div>
                <p>Supporting startups that contribute to economic diversification</p>
              </li>
              <li className="flex items-start">
                <div className="bg-sheraa-primary/20 rounded-full p-1 mr-3 mt-1">
                  <ArrowRight className="w-4 h-4 text-sheraa-primary" />
                </div>
                <p>Fostering inclusive entrepreneurship with strong representation of women-led ventures</p>
              </li>
              <li className="flex items-start">
                <div className="bg-sheraa-primary/20 rounded-full p-1 mr-3 mt-1">
                  <ArrowRight className="w-4 h-4 text-sheraa-primary" />
                </div>
                <p>Creating sustainable businesses that address real-world challenges</p>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex justify-center">
            <GradientButton asChild>
              <Link to="/programs" className="flex items-center gap-2">
                Explore Our Programs 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </GradientButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
