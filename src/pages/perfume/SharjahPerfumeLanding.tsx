
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BuyingFunction from '@/components/perfume/BuyingFunction';
import LuxuryHeroSection from './components/LuxuryHeroSection';
import CulturalHeritageSection from './components/CulturalHeritageSection';
import ScentPyramidSection from './components/ScentPyramidSection';
import StorytellingSection from './components/StorytellingSection';
import EmailCaptureSection from './components/EmailCaptureSection';
import ProductGallerySection from './components/ProductGallerySection';
import PricingSection from './components/PricingSection';
import DeliveryInfoSection from './components/DeliveryInfoSection';
import FooterSection from './components/FooterSection';

const SharjahPerfumeLanding = () => {
  const [appliedDiscount, setAppliedDiscount] = useState(false);
  const [showBuyingForm, setShowBuyingForm] = useState(false);

  // Auto-apply SEF10 discount for SEF registrants
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('ref') === 'sef' || localStorage.getItem('sef_registered')) {
      setAppliedDiscount(true);
    }
  }, []);

  const handleReserveBottle = () => {
    setShowBuyingForm(true);
  };

  const handleDiscoverEssence = () => {
    document.getElementById('heritage')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDiscountApplied = () => {
    setAppliedDiscount(true);
  };

  const finalPrice = appliedDiscount ? 720 : 800;

  return (
    <div className="min-h-screen bg-luxury-cream overflow-x-hidden">
      {/* Luxury Hero Section */}
      <LuxuryHeroSection 
        finalPrice={finalPrice} 
        onReserveBottle={handleReserveBottle} 
        onDiscoverEssence={handleDiscoverEssence} 
      />

      {/* Buying Function Modal/Section */}
      {showBuyingForm && (
        <motion.section 
          className="py-20 bg-luxury-beige"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-6">
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setShowBuyingForm(false)}
                className="mb-4 px-6 py-2 border border-luxury-charcoal/30 text-luxury-charcoal rounded-sm hover:bg-luxury-charcoal hover:text-luxury-cream transition-colors font-light text-sm tracking-wide"
              >
                Continue Exploring
              </button>
            </div>
            <BuyingFunction
              price={800}
              discountedPrice={appliedDiscount ? 720 : undefined}
              hasDiscount={appliedDiscount}
              productName="Sharjah Essence - Limited Edition"
            />
          </div>
        </motion.section>
      )}

      {/* Cultural Heritage Section */}
      <div id="heritage">
        <CulturalHeritageSection />
      </div>

      {/* Scent Pyramid Section */}
      <ScentPyramidSection />

      {/* Storytelling Section */}
      <StorytellingSection />

      {/* Email Capture Section */}
      <EmailCaptureSection 
        appliedDiscount={appliedDiscount} 
        onDiscountApplied={handleDiscountApplied} 
      />

      {/* Product Gallery */}
      <ProductGallerySection />

      {/* Pricing & Checkout */}
      <PricingSection 
        finalPrice={finalPrice} 
        appliedDiscount={appliedDiscount} 
        onAddToCart={handleReserveBottle} 
      />

      {/* Delivery Info */}
      <DeliveryInfoSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default SharjahPerfumeLanding;
