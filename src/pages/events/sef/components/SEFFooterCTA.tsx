
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, Calendar, Bell } from 'lucide-react';

const SEFFooterCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-sheraa-sef-primary via-sheraa-primary to-sheraa-sef-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/20 rounded-full"
            style={{
              left: `${2 + i * 5}%`,
              top: `${10 + (i % 6) * 15}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <Star className="w-16 h-16 mx-auto mb-6 opacity-90" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Ready to Shape the Future?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed"
        >
          Join 14,000+ changemakers from around the world at SEF 2026. Experience two days of inspiration, 
          learning, and high-impact connections that will accelerate your entrepreneurial journey.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-8"
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button size="lg" className="bg-white text-sheraa-sef-primary hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <Bell className="mr-2 w-5 h-5" />
              Get Notified When Registration Opens
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Calendar className="mr-2 w-5 h-5" />
              Add to Calendar
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Early Bird Notice */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <motion.p
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-white/80 text-lg font-medium"
          >
            🎟️ Early Bird Pricing Available | 🎯 Limited Seats | 🌟 Register Soon
          </motion.p>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="border-t border-white/20 pt-8 text-center"
        >
          <p className="text-white/70 mb-4">Questions about SEF 2026?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a href="mailto:info@sheraa.ae" className="text-white/90 hover:text-white transition-colors">
              📧 info@sheraa.ae
            </a>
            <a href="tel:+97165094000" className="text-white/90 hover:text-white transition-colors">
              📞 +971 6 509 4000
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEFFooterCTA;
