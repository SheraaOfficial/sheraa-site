
import React from 'react';
import { motion } from 'framer-motion';
import { Building, Globe, BookOpen, Coffee, Heart, Users } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: 'Impactful Work',
    description: 'Contribute directly to the growth of Sharjah\'s entrepreneurial ecosystem',
    icon: Building,
  },
  {
    id: 2,
    title: 'Global Exposure',
    description: 'Connect with international entrepreneurs, investors, and industry leaders',
    icon: Globe,
  },
  {
    id: 3,
    title: 'Continuous Learning',
    description: 'Access to workshops, conferences, and professional development opportunities',
    icon: BookOpen,
  },
  {
    id: 4,
    title: 'Work-Life Balance',
    description: 'Flexible policies that respect your personal time and wellbeing',
    icon: Coffee,
  },
  {
    id: 5,
    title: 'Comprehensive Benefits',
    description: 'Competitive salary, health insurance, and other valuable perks',
    icon: Heart,
  },
  {
    id: 6,
    title: 'Diverse Community',
    description: 'Join a vibrant, inclusive team with diverse backgrounds and perspectives',
    icon: Users,
  },
];

const CareersBenefits: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Work With Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Sheraa, we're more than just a workplace. We're a community committed to innovation,
            growth, and making a real difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-stone-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersBenefits;
