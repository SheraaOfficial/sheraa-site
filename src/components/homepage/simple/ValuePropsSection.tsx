import React from 'react';
import { motion } from 'framer-motion';

const ValuePropsSection: React.FC = () => {
  const valueProps = [
    {
      title: 'Vast network of',
      subtitle: 'forward-thinking partners'
    },
    {
      title: 'A deep pool of',
      subtitle: 'investment partners'
    },
    {
      title: 'Support for',
      subtitle: 'global market expansion'
    },
    {
      title: 'Company building program',
      subtitle: 'with flexible incentives'
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {prop.title}
              </h3>
              <p className="text-lg text-[#A0826D] font-semibold">
                {prop.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;