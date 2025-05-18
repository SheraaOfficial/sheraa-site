
import React from 'react';
import { motion } from 'framer-motion';
import { useCountAnimation } from './hooks/useCountAnimation';
import { impactStats } from './data';

interface ImpactStatsProps {
  isInView: boolean;
}

const ImpactStats: React.FC<ImpactStatsProps> = ({ isInView }) => {
  return (
    <div className="mb-20 md:mb-32 max-w-5xl mx-auto">
      <motion.div 
        className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
      >
        {impactStats.map((stat, index) => {
          const { count, ref } = useCountAnimation(stat.value, 2);
          
          return (
            <motion.div 
              key={index} 
              className={`p-4 rounded-2xl ${index % 2 === 0 ? 'bg-purple-100/50 dark:bg-purple-900/20' : 'bg-orange-100/50 dark:bg-orange-900/20'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <div ref={ref} className={`text-3xl md:text-5xl font-bold mb-2 ${index % 2 === 0 ? 'text-purple-600 dark:text-purple-400' : 'text-orange-500 dark:text-orange-400'}`}>
                {count}
              </div>
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ImpactStats;
