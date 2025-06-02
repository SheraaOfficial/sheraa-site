
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Star, ArrowRight } from 'lucide-react';

const SEFFooterCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-sheraa-sef-primary via-sheraa-primary to-sheraa-sef-accent text-white relative overflow-hidden">
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Star className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Don't Miss SEF 2026
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of changemakers, innovators, and entrepreneurs at the region's most impactful festival. 
            Your next breakthrough could be just one connection away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-sheraa-sef-primary hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Register Now
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/events" className="flex items-center gap-2">
                Explore More Events
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <motion.div 
            className="mt-8 text-white/80 text-sm"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🎟️ Early Bird Pricing Available | 🎯 Limited Seats | 🌟 Register Today
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEFFooterCTA;
