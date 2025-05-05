
import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    id: 'founder-first',
    title: 'Founder-First Philosophy',
    description: 'We prioritize the needs and success of entrepreneurs in everything we do.',
  },
  {
    id: 'collaborative',
    title: 'Collaborative Spirit',
    description: 'We believe the best results come from working together across teams and disciplines.',
  },
  {
    id: 'innovative',
    title: 'Innovative Thinking',
    description: 'We embrace creativity and fresh perspectives to solve complex challenges.',
  },
  {
    id: 'inclusive',
    title: 'Inclusive Community',
    description: 'We celebrate diversity and ensure everyone feels valued and heard.',
  },
  {
    id: 'impact',
    title: 'Impact-Driven',
    description: 'We measure success by the positive change we create in Sharjah's ecosystem.',
  },
];

const CareersValues: React.FC = () => {
  return (
    <section className="py-16 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These core principles guide our work and shape our culture at Sheraa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-default border-t-4 border-[#8B5CF6]"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersValues;
