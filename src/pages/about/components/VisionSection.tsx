
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section id="vision" className="py-20 bg-white relative overflow-hidden">
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute -right-32 bottom-0 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl"
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-sheraa-primary">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              To establish Sharjah as a leading global hub for entrepreneurship and innovation, 
              recognized for its supportive ecosystem, high-impact startups, and contribution to 
              a diversified, knowledge-based economy.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our focus extends beyond mere company formation; we aim to cultivate changemakers 
              who address pressing challenges and contribute positively to society.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="bg-gradient-to-tr from-sheraa-primary/10 to-transparent rounded-xl p-8 my-10 border border-sheraa-primary/20"
          >
            <h3 className="text-xl font-bold mb-6 text-sheraa-dark">Key Strategic Priorities</h3>
            <ul className="space-y-5">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="bg-sheraa-primary/20 rounded-full p-2 mr-4 mt-1">
                  <ArrowRight className="w-5 h-5 text-sheraa-primary" />
                </div>
                <p className="text-gray-700 leading-relaxed">Building a thriving entrepreneurship ecosystem that nurtures innovation through collaboration and support</p>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="bg-sheraa-primary/20 rounded-full p-2 mr-4 mt-1">
                  <ArrowRight className="w-5 h-5 text-sheraa-primary" />
                </div>
                <p className="text-gray-700 leading-relaxed">Supporting startups that contribute to economic diversification and create sustainable job opportunities</p>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="bg-sheraa-primary/20 rounded-full p-2 mr-4 mt-1">
                  <ArrowRight className="w-5 h-5 text-sheraa-primary" />
                </div>
                <p className="text-gray-700 leading-relaxed">Fostering inclusive entrepreneurship with strong representation of women-led ventures and diverse founders</p>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="bg-sheraa-primary/20 rounded-full p-2 mr-4 mt-1">
                  <ArrowRight className="w-5 h-5 text-sheraa-primary" />
                </div>
                <p className="text-gray-700 leading-relaxed">Creating sustainable businesses that address real-world challenges and build a more resilient future</p>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex justify-center">
            <GradientButton size="lg" asChild>
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
