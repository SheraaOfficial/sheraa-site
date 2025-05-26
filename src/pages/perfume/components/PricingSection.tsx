
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ShoppingCart, Shield, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PricingSectionProps {
  finalPrice: number;
  appliedDiscount: boolean;
  onAddToCart: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ finalPrice, appliedDiscount, onAddToCart }) => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-[#165A5A] to-[#0F4A4A]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/95 backdrop-blur p-8 border-2 border-[#C8A165]/30 shadow-2xl">
            <div className="text-center mb-4">
              <Crown className="w-12 h-12 text-[#C8A165] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-serif text-[#165A5A] mb-2">
                Sharjah Perfume
              </h2>
              <p className="text-gray-600 italic">Limited Edition Luxury Collection</p>
            </div>
            
            <div className="text-center mb-8">
              {appliedDiscount && (
                <p className="text-lg text-gray-500 line-through mb-2">AED 800</p>
              )}
              <p className="text-5xl font-bold text-[#165A5A] mb-2">
                AED {finalPrice}
              </p>
              <p className="text-gray-600">(VAT & delivery included)</p>
              
              {appliedDiscount && (
                <div className="bg-[#C8A165]/10 border border-[#C8A165] rounded-lg p-3 mt-4">
                  <p className="text-[#165A5A] font-semibold">
                    ✨ SEF10 discount applied - Save AED 80!
                  </p>
                </div>
              )}
            </div>

            <Button
              onClick={onAddToCart}
              className="w-full bg-[#C8A165] hover:bg-[#B8956A] text-white py-4 text-lg font-semibold mb-6 transition-all duration-300 transform hover:scale-105"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>

            <div className="text-sm text-gray-600 space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Secure payment via Stripe & Tabby</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Heart className="w-4 h-4" />
                <span>Handcrafted with love in Sharjah</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4" />
                <span>Exclusive limited edition</span>
              </div>
            </div>

            {!appliedDiscount && (
              <div className="mt-6 p-4 bg-[#165A5A]/10 rounded-lg">
                <p className="text-sm text-[#165A5A] text-center">
                  <strong>Use code SEF10 for 10% off</strong>
                  <br />
                  Auto-applied for SEF registrants
                </p>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
