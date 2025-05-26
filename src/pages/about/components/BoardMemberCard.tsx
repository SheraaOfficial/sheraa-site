
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface BoardMember {
  name: string;
  title: string;
  organization: string;
  sector: string;
  icon: LucideIcon;
  expertise: string[];
}

interface BoardMemberCardProps {
  member: BoardMember;
  index: number;
  sectorColors: Record<string, string>;
}

export const BoardMemberCard: React.FC<BoardMemberCardProps> = ({ 
  member, 
  index, 
  sectorColors 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
      className="group"
    >
      <Card className="h-full border border-purple-100 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
        <CardContent className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <member.icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{member.title}</p>
              <Badge className={sectorColors[member.sector]}>
                {member.sector}
              </Badge>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">{member.organization}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm mb-2 text-gray-700">Areas of Expertise</h4>
            <div className="flex flex-wrap gap-1">
              {member.expertise.map((skill, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
