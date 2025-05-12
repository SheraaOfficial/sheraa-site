
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureItemProps {
  title: string;
  description: string;
  value: number;
  subtext: string;
  icon: LucideIcon;
  index: number;
}

const FeatureItem = ({ 
  title, 
  description, 
  icon: Icon, 
  subtext, 
  value, 
  index 
}: FeatureItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: 0.1 * index
      }}
      className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center"
    >
      <div className="mb-3 p-2.5 rounded-full bg-sheraa-primary/10">
        <Icon className="h-5 w-5 text-sheraa-primary" />
      </div>
      <h3 className="text-lg md:text-2xl font-bold mb-1 text-sheraa-primary">{title}</h3>
      <p className="text-gray-600 text-xs md:text-sm">{description}</p>
      <span className="text-xs text-gray-500 mt-2">{subtext}</span>
    </motion.div>
  );
};

export default FeatureItem;
