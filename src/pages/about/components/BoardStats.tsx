
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building, Briefcase, Shield } from 'lucide-react';

export const BoardStats: React.FC = () => {
  const stats = [
    { number: "17", label: "Board Members", icon: Users },
    { number: "4", label: "Sectors Represented", icon: Building },
    { number: "15+", label: "Years Combined Experience", icon: Briefcase },
    { number: "100%", label: "Strategic Alignment", icon: Shield }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
    >
      {stats.map((stat, index) => (
        <Card key={index} className="text-center border border-purple-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-3">
              <stat.icon className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-600 mb-1">{stat.number}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </motion.div>
  );
};
