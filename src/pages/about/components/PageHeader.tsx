
import React from 'react';
import { motion } from 'framer-motion';
import { BeamsBackground } from '@/components/ui/beams-background';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <BeamsBackground intensity="subtle" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
