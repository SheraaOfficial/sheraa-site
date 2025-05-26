
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingCart, Crown, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  finalPrice: number;
  onBuyNow: () => void;
  onLearnMore: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ finalPrice, onBuyNow, onLearnMore }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.5]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/hero.jpg'), linear-gradient(135deg, #C8A165 0%, #165A5A 100%)`
          }}
        />
        
        {/* Animated Geometric Overlay */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#C8A165]/30 via-transparent to-[#165A5A]/30" />
          
          {/* Animated Islamic Geometric Patterns */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-[#C8A165] rotate-45"
            animate={{ rotate: [45, 135, 45] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-[#165A5A] rotate-12"
            animate={{ rotate: [12, 102, 12] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-16 h-16 border border-[#C8A165]/60"
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </motion.div>
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ y: y1, opacity }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="flex items-center justify-center gap-2 mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Crown className="w-8 h-8 text-[#C8A165]" />
          <span className="text-[#C8A165] text-lg font-medium tracking-wider">LUXURY COLLECTION</span>
          <Crown className="w-8 h-8 text-[#C8A165]" />
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-serif text-white mb-6 tracking-wide"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Sharjah
          <span className="block text-[#C8A165] italic">Perfume</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/90 mb-2 font-light"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Handcrafted luxury perfume inspired by Sharjah's rich heritage and cultural tapestry
        </motion.p>
        
        <motion.div
          className="flex items-center justify-center gap-2 mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <Award className="w-5 h-5 text-[#C8A165]" />
          <span className="text-[#C8A165] font-medium">Now AED {finalPrice} (VAT & Delivery Included)</span>
          <Award className="w-5 h-5 text-[#C8A165]" />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Button
            onClick={onBuyNow}
            className="bg-[#C8A165] hover:bg-[#B8956A] text-white px-12 py-4 text-lg font-semibold rounded-none relative overflow-hidden group transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Buy Now - AED {finalPrice}
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#C8A165] to-[#D4AF7A] opacity-0 group-hover:opacity-100"
              initial={false}
              transition={{ duration: 0.3 }}
            />
          </Button>
          
          <Button
            onClick={onLearnMore}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[#165A5A] px-8 py-4 text-lg font-semibold rounded-none transition-all duration-300"
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
