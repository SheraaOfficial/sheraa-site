
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NewNavigationBar from '@/components/navigation/NewNavigationBar';
import BuyingFunction from '@/components/perfume/BuyingFunction';
import HeroSection from './components/HeroSection';
import HeritageSection from './components/HeritageSection';
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

  const handleBuyNow = () => {
    setShowBuyingForm(true);
  };

  const handleAddToCart = () => {
    setShowBuyingForm(true);
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDiscountApplied = () => {
    setAppliedDiscount(true);
  };

  const finalPrice = appliedDiscount ? 720 : 800;

  return (
    <div className="min-h-screen bg-[#F7F3EE] overflow-x-hidden">
      {/* Navigation */}
      <NewNavigationBar />
      
      {/* Hero Section */}
      <HeroSection 
        finalPrice={finalPrice} 
        onBuyNow={handleBuyNow} 
        onLearnMore={scrollToPricing} 
      />

      {/* Buying Function Modal/Section */}
      {showBuyingForm && (
        <motion.section 
          className="py-20 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-6">
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setShowBuyingForm(false)}
                className="mb-4 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Continue Browsing
              </button>
            </div>
            <BuyingFunction
              price={800}
              discountedPrice={appliedDiscount ? 720 : undefined}
              hasDiscount={appliedDiscount}
              productName="Sharjah Perfume - Premium Collection"
            />
          </div>
        </motion.section>
      )}

      {/* Heritage Story Section */}
      <HeritageSection />

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
        onAddToCart={handleAddToCart} 
      />

      {/* Delivery Info */}
      <DeliveryInfoSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default SharjahPerfumeLanding;
