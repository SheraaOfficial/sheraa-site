
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, TruckFast, Shield, ArrowRight } from 'lucide-react';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { Sparkles } from '@/components/ui/sparkles';
import { Input } from '@/components/ui/input';

const PerfumePage: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-amber-50 to-white dark:from-zinc-900 dark:to-zinc-950 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-amber-200/20 dark:bg-amber-900/20 rounded-full filter blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/30 dark:bg-amber-800/20 rounded-full filter blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-amber-900 dark:text-amber-200">
                Sharjah's Signature Scent
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-amber-800/90 dark:text-amber-300/90">
                Handcrafted luxury perfume—now AED 800
              </p>
              <GradientButton asChild size="lg" className="bg-amber-700 hover:bg-amber-800 text-white">
                <Link to="/perfume/buy">
                  Buy for AED 800
                </Link>
              </GradientButton>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/74a04d3e-ab9a-4b78-a725-a456cc8f9394.png" 
                  alt="Sharjah Perfume" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl italic text-amber-800 dark:text-amber-300 font-serif">
              "A scent that embodies the heritage and majesty of Sharjah, crafted with the finest ingredients from around the world."
            </h2>
          </motion.div>
        </div>
      </section>
      
      {/* Craftsmanship Section */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-900 dark:text-amber-200">Artisanal Craftsmanship</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Inspired by the rich cultural heritage of Sharjah's architecture and artistry, our signature scent 
              captures the essence of tradition and luxury in every drop. Each bottle is meticulously crafted by 
              master perfumers with decades of experience in the art of fragrance creation.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-900 dark:text-amber-200">Exquisite Ingredients</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Each bottle is meticulously crafted with notes of amber, oud, and subtle hints of saffron, creating a 
              fragrance that is as unique and distinguished as Sharjah itself. The top notes provide a refreshing opening, 
              while the heart notes reveal the true character of this exclusive scent.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-amber-100 dark:bg-amber-800/30 rounded-full">
                <Heart className="w-8 h-8 text-amber-700 dark:text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-200">Premium Quality</h3>
              <p className="text-gray-700 dark:text-gray-300">Crafted with the finest ingredients for a lasting impression</p>
            </div>
            
            <div className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-amber-100 dark:bg-amber-800/30 rounded-full">
                <ShoppingCart className="w-8 h-8 text-amber-700 dark:text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-200">Exclusive Design</h3>
              <p className="text-gray-700 dark:text-gray-300">Elegant bottle inspired by Sharjah's architectural heritage</p>
            </div>
            
            <div className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-amber-100 dark:bg-amber-800/30 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-amber-700 dark:text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
                  <path d="M12 12v6" />
                  <path d="M12 12 8 8" />
                  <path d="m12 12 4-4" />
                  <rect x="4" y="4" width="16" height="4" rx="1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-200">Gift Ready</h3>
              <p className="text-gray-700 dark:text-gray-300">Perfect for gifting with our premium packaging</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-20 bg-amber-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-amber-900 dark:text-amber-200">Exquisite Craftsmanship</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/lovable-uploads/8d102701-b92b-44de-89f9-acdda63b6884.png"
                alt="Perfume detail 1"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/lovable-uploads/cdccb5a2-e570-4ae8-b40d-1d2c8422af61.png"
                alt="Perfume detail 2"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/lovable-uploads/35a850c6-6901-4128-a54d-839726da459c.png"
                alt="Perfume showcase"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl italic text-amber-800 dark:text-amber-300 font-serif">
              "Each bottle is a masterpiece of artistry and fragrance, reflecting the rich cultural heritage of Sharjah."
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/10 rounded-2xl overflow-hidden shadow-lg">
            <div className="p-8 md:p-12">
              <div className="mb-8 text-center">
                <h3 className="text-sm font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wide">Limited Edition</h3>
                <h2 className="mt-2 text-2xl font-bold text-amber-900 dark:text-amber-200 uppercase tracking-wide">Exclusive Offer</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-amber-900 dark:text-amber-100">Sharjah's Signature Scent</h3>
                  <p className="text-amber-800/80 dark:text-amber-300/80 mb-6">A fragrance that captures the essence of heritage and luxury</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-amber-900 dark:text-amber-200 mb-1">AED 800</div>
                    <div className="text-sm text-amber-700 dark:text-amber-300/70">(VAT & delivery included)</div>
                  </div>
                  
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-amber-800 dark:text-amber-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-700 dark:text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Premium blend of amber and oud
                    </li>
                    <li className="flex items-center text-amber-800 dark:text-amber-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-700 dark:text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Elegant designer bottle
                    </li>
                    <li className="flex items-center text-amber-800 dark:text-amber-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-700 dark:text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Free delivery across UAE
                    </li>
                  </ul>
                  
                  <p className="text-amber-700 dark:text-amber-400 text-sm mb-6">
                    Use code SEF10 for 10% off—auto-applied for SEF registrants.
                  </p>
                  
                  <Button size="lg" className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                    Add to Cart
                  </Button>
                  
                  <div className="text-center mt-4 text-amber-700 dark:text-amber-400 text-sm">
                    Guaranteed secure checkout
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px]">
                    <img 
                      src="/lovable-uploads/74a04d3e-ab9a-4b78-a725-a456cc8f9394.png" 
                      alt="Sharjah Perfume" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center text-amber-700 dark:text-amber-400 text-sm">
                Limited edition. Only available while supplies last.
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-amber-100 dark:bg-amber-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-amber-900 dark:text-amber-100">Claim Your 10% SEF Discount!</h2>
            <p className="text-amber-800 dark:text-amber-300 mb-8">
              Subscribe to our newsletter to receive your exclusive discount code and stay updated on our latest releases.
            </p>
            
            <div className="flex flex-col md:flex-row gap-2 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow bg-white dark:bg-zinc-800 border-amber-200 dark:border-amber-700 focus:ring-amber-500"
              />
              <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                Get My 10% Discount
              </Button>
            </div>
            
            <p className="text-xs text-amber-700/80 dark:text-amber-400/80 mt-4">
              By subscribing, you agree to our terms and privacy policy. We'll send you a verification email.
            </p>
            
            <div className="mt-12">
              <h3 className="font-semibold text-xl mb-2 text-amber-900 dark:text-amber-200">Exclusive Benefits</h3>
              <p className="text-amber-800 dark:text-amber-300">
                Join our mailing list for early access to future limited editions and exclusive events.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Delivery Information */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-amber-900 dark:text-amber-200">Delivery Information</h2>
            <p className="text-lg italic mb-8 text-amber-800 dark:text-amber-300">
              "Courier rates & delivery times confirmed soon by Dr Lina."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-amber-100 dark:bg-amber-900/30 rounded-full">
                <TruckFast className="w-8 h-8 text-amber-700 dark:text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-200">Premium Shipping</h3>
              <p className="text-gray-700 dark:text-gray-300">Free delivery across UAE with tracking available for every order</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-amber-100 dark:bg-amber-900/30 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-amber-700 dark:text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-200">Fast Delivery</h3>
              <p className="text-gray-700 dark:text-gray-300">Premium gift packaging included with every purchase</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-amber-100 dark:bg-amber-900/30 rounded-full">
                <Shield className="w-8 h-8 text-amber-700 dark:text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-200">Secure Shopping</h3>
              <p className="text-gray-700 dark:text-gray-300">100% secure checkout with customer satisfaction guarantee</p>
            </div>
          </div>
          
          <div className="text-center mt-12 text-gray-700 dark:text-gray-300">
            For special delivery requests, please contact our customer service
          </div>
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-800 to-amber-900 dark:from-amber-900 dark:to-amber-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to experience Sharjah's Signature Scent?</h2>
            <p className="text-amber-100 mb-8">
              Take home a piece of Sharjah's rich heritage with our exclusive luxury perfume.
            </p>
            <GradientButton asChild size="xl" className="bg-white text-amber-900 hover:bg-amber-50">
              <Link to="/perfume/buy" className="inline-flex items-center">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </GradientButton>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PerfumePage;
