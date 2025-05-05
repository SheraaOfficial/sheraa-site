
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Startup } from '../types/startup';

interface StartupCardProps {
  startup: Startup;
  index: number;
}

export const StartupCard: React.FC<StartupCardProps> = ({ startup, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-16 w-16 border-2 border-gray-100">
              <AvatarImage src={startup.logo} alt={startup.name} />
              <AvatarFallback className="bg-sheraa-primary/5 text-sheraa-primary font-semibold">
                {startup.name[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold text-lg text-sheraa-primary">{startup.name}</h3>
              <div className="mt-1">
                <Badge variant="soft-coral">{startup.sector}</Badge>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{startup.description}</p>
          
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">Program</span>
              <span className="text-sm font-medium">{startup.program}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">Stage</span>
              <span className="text-sm font-medium">{startup.stage}</span>
            </div>
            <a 
              href={startup.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sheraa-primary hover:underline text-sm"
            >
              Visit website →
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
