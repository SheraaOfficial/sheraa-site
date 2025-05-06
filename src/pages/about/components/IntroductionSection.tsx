
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const IntroductionSection = () => {
  const { scrollY } = motion.useScroll();
  const y1 = motion.useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = motion.useTransform(scrollY, [0, 300], [0, -30]);
  const opacity1 = motion.useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <motion.div 
        style={{ y: y2, opacity: opacity1 }}
        className="absolute -right-20 top-20 w-72 h-72 bg-sheraa-primary/10 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y1 }}
        className="absolute -left-20 bottom-0 w-80 h-80 bg-sheraa-primary/5 rounded-full blur-3xl"
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-6 text-sheraa-primary">Empowering Entrepreneurs, Building Sharjah's Future</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Sheraa (Sharjah Entrepreneurship Center), we are deeply inspired by Sharjah's unique ability to blend collective 
              strength and unity with individual expression and creativity. This synergy fuels our mission: to cultivate a world-class 
              entrepreneurship ecosystem in Sharjah, nurturing the next generation of innovators and supporting impactful ventures at 
              every stage of their journey.
            </p>

            <div className="bg-gradient-to-br from-sheraa-primary/10 to-sheraa-primary/5 rounded-xl p-8 mt-12 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-sheraa-primary text-center">Our Impact Since 2016</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <motion.div 
                  className="text-center p-4 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl font-bold text-sheraa-dark mb-1">180+</div>
                  <div className="text-sm text-gray-600">Startups Supported</div>
                </motion.div>
                <motion.div 
                  className="text-center p-4 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl font-bold text-sheraa-dark mb-1">$248M+</div>
                  <div className="text-sm text-gray-600">Revenue Generated</div>
                </motion.div>
                <motion.div 
                  className="text-center p-4 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl font-bold text-sheraa-dark mb-1">1,900+</div>
                  <div className="text-sm text-gray-600">Jobs Created</div>
                </motion.div>
                <motion.div 
                  className="text-center p-4 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl font-bold text-sheraa-dark mb-1">71%</div>
                  <div className="text-sm text-gray-600">Startup Survival Rate</div>
                </motion.div>
              </div>

              <div className="mt-8 text-center">
                <Button asChild variant="default" size="lg" className="group bg-sheraa-primary hover:bg-sheraa-primary/90 text-white shadow-md hover:shadow-lg transition-all">
                  <Link to="/about/impact" className="flex items-center gap-2">
                    Full Impact Report
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
