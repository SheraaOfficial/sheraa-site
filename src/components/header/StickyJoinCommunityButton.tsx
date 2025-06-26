
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

export const StickyJoinCommunityButton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed top-4 right-4 z-50 hidden md:block"
    >
      <Button 
        asChild 
        size="sm" 
        className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <Link to="/community/join" className="flex items-center gap-2">
          <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
          Join Our Community
        </Link>
      </Button>
    </motion.div>
  );
};
