
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Mic, Star, Sparkles } from 'lucide-react';
import { ModernButton } from '@/components/ui/modern-button';
import { AdvancedMotion, FloatingElement } from '@/components/ui/advanced-motion';

export const SEFEnhancedRegistration: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-sheraa-sef-primary via-sheraa-primary to-sheraa-sef-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/20 rounded-full"
            style={{
              left: `${2 + i * 6}%`,
              top: `${10 + (i % 5) * 20}%`,
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
        <AdvancedMotion variant="fadeInUp">
          <FloatingElement intensity="medium">
            <Star className="w-16 h-16 mx-auto mb-6 opacity-90" />
          </FloatingElement>
        </AdvancedMotion>
        
        <AdvancedMotion variant="fadeInUp" delay={0.2}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Shape the Future?
          </h2>
        </AdvancedMotion>
        
        <AdvancedMotion variant="fadeInUp" delay={0.3}>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join 14,000+ changemakers from around the world. Experience two days of inspiration, learning, and high-impact connections that will accelerate your entrepreneurial journey.
          </p>
        </AdvancedMotion>
        
        <AdvancedMotion variant="fadeInUp" delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <ModernButton asChild size="lg" className="bg-white text-sheraa-sef-primary hover:bg-gray-50 shadow-xl hover:shadow-2xl">
              <Link to="/events/sef/register" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Register for SEF 2026</span>
              </Link>
            </ModernButton>
            <ModernButton asChild variant="glass" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/events/sef/be-part" className="flex items-center gap-2">
                <Mic className="w-5 h-5" />
                <span>Become a Speaker</span>
              </Link>
            </ModernButton>
          </div>
        </AdvancedMotion>

        {/* Enhanced Early Bird Notice */}
        <AdvancedMotion variant="fadeInUp" delay={0.6}>
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-white/80 text-sm flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Early Bird Pricing Available | Limited Seats | Register Now</span>
            <Sparkles className="w-4 h-4" />
          </motion.div>
        </AdvancedMotion>
      </div>
      
      {/* Floating elements for visual enhancement */}
      <FloatingElement intensity="medium" className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl">
        <div></div>
      </FloatingElement>
      <FloatingElement intensity="light" className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-3xl">
        <div></div>
      </FloatingElement>
    </section>
  );
};
