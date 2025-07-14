import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Scale, Wifi, GraduationCap } from 'lucide-react';

const AboutSharjahSection: React.FC = () => {
  const benefits = [
    {
      icon: Building2,
      title: 'Thriving business hub',
      description: 'Strategic location connecting East and West markets'
    },
    {
      icon: Scale,
      title: 'Favorable regulatory environment',
      description: 'Business-friendly policies and streamlined processes'
    },
    {
      icon: Wifi,
      title: 'World-class infrastructure',
      description: 'Modern facilities and cutting-edge technology'
    },
    {
      icon: GraduationCap,
      title: 'Cultural capital of the UAE',
      description: 'Rich heritage with world-class educational institutions'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Main Headline */}
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Discover the region's next{' '}
            <span className="text-[#A0826D]">innovation capital</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Welcome to Sharjah.
          </motion.h3>

          {/* Description */}
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            With its business-friendly environment, connectivity to markets in the East and West, 
            exceptional quality of life and world-class educational institutions, it's no wonder 
            Sharjah is fast becoming the region's leading technology and innovation hotspot.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-[#A0826D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-[#A0826D]" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSharjahSection;