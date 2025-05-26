
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, ShoppingCart, Gift, Truck, Shield, Heart, Sparkles, Award, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';

const SharjahPerfumeLanding = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appliedDiscount, setAppliedDiscount] = useState(false);
  const { toast } = useToast();
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.5]);

  // Auto-apply SEF10 discount for SEF registrants
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('ref') === 'sef' || localStorage.getItem('sef_registered')) {
      setAppliedDiscount(true);
    }
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate HubSpot integration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Set SEF discount flag
      setAppliedDiscount(true);
      localStorage.setItem('sef_discount_claimed', 'true');
      
      toast({
        title: "Success! 💌",
        description: "Your 10% SEF discount code has been sent to your email!",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddToCart = () => {
    // Simulate Stripe/Ziina integration
    toast({
      title: "Redirecting to Payment...",
      description: "You'll be redirected to our secure payment gateway.",
    });
    
    // Here you would integrate with Stripe/Ziina
    console.log('Initiating payment for Sharjah Perfume - AED', appliedDiscount ? 720 : 800);
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const finalPrice = appliedDiscount ? 720 : 800;

  return (
    <div className="min-h-screen bg-[#F7F3EE] overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
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
            Handcrafted luxury perfume inspired by Sharjah's rich heritage
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
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Button
              onClick={scrollToPricing}
              className="bg-[#C8A165] hover:bg-[#B8956A] text-white px-12 py-4 text-lg font-semibold rounded-none relative overflow-hidden group transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Buy for AED {finalPrice}
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#C8A165] to-[#D4AF7A] opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.3 }}
              />
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

      {/* Heritage Story Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-16 h-16 text-[#165A5A] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif text-[#165A5A] mb-6">
              The Essence of Sharjah
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Crafted with the finest ingredients and inspired by the architectural marvels and cultural 
              richness of Sharjah, this exclusive perfume captures the spirit of innovation and tradition 
              that defines the emirate. Each bottle tells a story of artisanal excellence, from the bustling 
              souks to the serene desert landscapes.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C8A165]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#C8A165]" />
                </div>
                <h3 className="text-xl font-semibold text-[#165A5A] mb-2">Handcrafted</h3>
                <p className="text-gray-600">Meticulously created by master perfumers using traditional techniques</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#165A5A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-[#165A5A]" />
                </div>
                <h3 className="text-xl font-semibold text-[#165A5A] mb-2">Premium Quality</h3>
                <p className="text-gray-600">Only the finest natural ingredients from around the world</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C8A165]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-[#C8A165]" />
                </div>
                <h3 className="text-xl font-semibold text-[#165A5A] mb-2">Limited Edition</h3>
                <p className="text-gray-600">Exclusive collection celebrating Sharjah's cultural heritage</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Email Capture Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-[#165A5A] to-[#1A6B6B]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Gift className="w-16 h-16 text-[#C8A165] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Exclusive SEF Discount
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              As a member of the Sharjah Entrepreneurship Festival community, 
              enjoy 10% off your Sharjah Perfume purchase
            </p>

            {!appliedDiscount ? (
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email for discount code"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#C8A165] hover:bg-[#B8956A] text-white px-8"
                >
                  {isSubmitting ? 'Sending...' : 'Get Code'}
                </Button>
              </form>
            ) : (
              <div className="bg-[#C8A165]/20 border-2 border-[#C8A165] rounded-lg p-6 max-w-md mx-auto">
                <p className="text-white text-lg font-semibold">
                  🎉 SEF10 Discount Applied!
                  <br />
                  <span className="text-[#C8A165]">Save AED 80 on your purchase</span>
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Product Gallery */}
      <section className="py-20 bg-[#F7F3EE]">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-[#165A5A] text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Artisan Craftsmanship
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { 
                src: '/lovable-uploads/detail1.jpg', 
                title: 'Handcrafted Excellence',
                description: 'Each bottle is individually crafted using time-honored techniques passed down through generations of perfumers.'
              },
              { 
                src: '/lovable-uploads/detail2.jpg', 
                title: 'Premium Ingredients',
                description: 'Sourced from the finest suppliers worldwide, our ingredients capture the essence of luxury and sophistication.'
              }
            ].map((image, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden rounded-lg border-4 border-[#C8A165]/30 shadow-lg">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=600&fit=crop&crop=center`;
                    }}
                  />
                  
                  {/* SGMB Logo Overlay */}
                  <div className="absolute top-4 right-4 bg-[#C8A165] text-white px-3 py-1 rounded text-sm font-semibold shadow-lg">
                    SGMB
                  </div>
                  
                  {/* Arabesque Border Overlay */}
                  <div className="absolute inset-0 border-2 border-[#C8A165]/50 m-2 rounded pointer-events-none" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-serif text-[#165A5A] mt-4 text-center">
                  {image.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Checkout */}
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
                onClick={handleAddToCart}
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

      {/* Delivery Info */}
      <section className="py-16 bg-[#F7F3EE]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl mx-auto">
              <Truck className="w-16 h-16 text-[#165A5A] mx-auto mb-6" />
              <h2 className="text-3xl font-serif text-[#165A5A] mb-4">
                Delivery Information
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Courier rates & delivery times confirmed soon by Dr Lina
              </p>
              <p className="text-sm text-gray-500 mb-6">
                We ensure safe and timely delivery of your luxury perfume across the UAE and GCC
              </p>
              
              {/* Traditional Dhow Icon */}
              <div className="flex justify-center">
                <svg width="80" height="60" viewBox="0 0 80 60" className="text-[#C8A165]" fill="currentColor">
                  <path d="M5 45c0-5 15-10 35-10s35 5 35 10c0 3-15 5-35 5s-35-2-35-5z"/>
                  <path d="M10 30c5-15 20-20 30-20s25 5 30 20l-5 15H15l-5-15z"/>
                  <path d="M25 10v20M40 8v22M55 12v18"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#165A5A] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-serif mb-4">Sharjah Perfume</h3>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              A luxury fragrance inspired by Sharjah's rich heritage and cultural beauty
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <Crown className="w-6 h-6 text-[#C8A165]" />
              <span className="text-[#C8A165] font-medium">Limited Edition</span>
              <Crown className="w-6 h-6 text-[#C8A165]" />
            </div>
            
            <div className="border-t border-white/20 pt-6">
              <p className="text-white/60 text-sm">
                © 2024 Sharjah Perfume. Part of the SGMB Collection.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SharjahPerfumeLanding;
