
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface LuxuryHeroSectionProps {
  finalPrice: number;
  onReserveBottle: () => void;
  onDiscoverEssence: () => void;
}

const LuxuryHeroSection: React.FC<LuxuryHeroSectionProps> = ({ 
  finalPrice, 
  onReserveBottle, 
  onDiscoverEssence 
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-cream">
      {/* Minimal background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-luxury-beige via-transparent to-luxury-stone" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block"
            >
              <span className="text-sm tracking-[0.2em] uppercase text-luxury-charcoal/70 font-light">
                Limited Edition
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-serif text-luxury-charcoal leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Sharjah
              <span className="block text-luxury-gold italic font-light">Essence</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-luxury-charcoal/80 font-light leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              A refined olfactory journey through the cultural tapestry of Sharjah. 
              Where ancient traditions meet contemporary innovation.
            </motion.p>
            
            <motion.div
              className="text-luxury-gold font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              AED {finalPrice}
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button
              onClick={onReserveBottle}
              className="bg-luxury-charcoal hover:bg-luxury-charcoal/90 text-luxury-cream px-8 py-3 text-sm tracking-wide uppercase font-light transition-all duration-300"
            >
              Reserve Your Bottle
            </Button>
            
            <Button
              onClick={onDiscoverEssence}
              variant="outline"
              className="border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-luxury-cream px-8 py-3 text-sm tracking-wide uppercase font-light transition-all duration-300"
            >
              Discover the Essence
            </Button>
          </motion.div>
        </motion.div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-80 h-96 bg-luxury-beige/30 rounded-sm shadow-2xl flex items-center justify-center">
            {/* Placeholder for actual product image */}
            <div className="w-64 h-80 bg-gradient-to-b from-luxury-gold/20 to-luxury-charcoal/10 rounded-sm flex items-center justify-center">
              <div className="w-32 h-48 bg-luxury-charcoal/80 rounded-sm shadow-inner" />
            </div>
          </div>
          
          {/* Subtle floating elements */}
          <motion.div
            animate={{ y: [-5, 5, -5], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 right-8 w-2 h-2 bg-luxury-gold rounded-full"
          />
          <motion.div
            animate={{ y: [5, -5, 5], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-8 left-8 w-1 h-1 bg-luxury-stone rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LuxuryHeroSection;
