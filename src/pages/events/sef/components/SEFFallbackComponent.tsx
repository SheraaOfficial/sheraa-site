
import React from 'react';
import { motion } from 'framer-motion';
import { Construction, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface SEFFallbackComponentProps {
  componentName: string;
  description?: string;
}

const SEFFallbackComponent: React.FC<SEFFallbackComponentProps> = ({ 
  componentName, 
  description = "This section is currently being enhanced for the best SEF experience." 
}) => {
  return (
    <section className="py-16 bg-gradient-to-r from-sheraa-sef-primary/10 to-sheraa-sef-accent/10">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm rounded-2xl p-8 border border-sheraa-sef-primary/20">
            <Construction className="w-16 h-16 mx-auto text-sheraa-sef-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              {componentName}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-sheraa-sef-primary hover:bg-sheraa-sef-primary/90">
                <Link to="/contact" className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Get Updates
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/events">View All Events</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEFFallbackComponent;
