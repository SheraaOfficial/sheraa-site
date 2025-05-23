
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { PerfumeSubmenu } from '../components/PerfumeSubmenu';

const PricingPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 to-white dark:from-zinc-900 dark:to-zinc-950 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <PerfumeSubmenu activeItem="pricing" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto mt-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-amber-900 dark:text-amber-200">Pricing</h1>
            
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-amber-800 dark:text-amber-300">
              Sharjah's Signature Scent is offered in an exclusive limited edition, with special pricing for Sharjah Entrepreneurship Festival attendees.
            </p>
            
            <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-xl border border-amber-100 dark:border-amber-800/30">
              <div className="bg-amber-100 dark:bg-amber-900/30 py-6 px-8 border-b border-amber-200 dark:border-amber-800/30">
                <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-200">Limited Edition Release</h2>
                <p className="text-amber-800 dark:text-amber-300">Exclusive luxury perfume with designer packaging</p>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
                  <div>
                    <span className="text-4xl font-bold text-amber-900 dark:text-amber-200">AED 800</span>
                    <span className="text-amber-700 dark:text-amber-400 ml-2">(VAT Included)</span>
                  </div>
                  <div className="text-amber-700 dark:text-amber-400">
                    Use code SEF10 for 10% off
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-amber-900 dark:text-amber-200">Package Includes:</h3>
                    <ul className="space-y-3">
                      {[
                        "50ml Sharjah's Signature Scent perfume",
                        "Elegant designer bottle with custom cap",
                        "Premium embossed gift box",
                        "Certificate of authenticity",
                        "Free shipping across UAE",
                        "30-day satisfaction guarantee"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-amber-700 dark:text-amber-400 mr-2 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8">
                      <GradientButton asChild size="lg" className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                        <Link to="/perfume/buy">
                          Purchase Now
                        </Link>
                      </GradientButton>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center p-4">
                    <img 
                      src="/lovable-uploads/74a04d3e-ab9a-4b78-a725-a456cc8f9394.png" 
                      alt="Sharjah Perfume" 
                      className="max-w-full h-auto max-h-[300px] object-contain rounded-lg"
                    />
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-amber-100 dark:border-amber-800/30">
                  <h3 className="font-semibold text-lg mb-4 text-amber-900 dark:text-amber-200">Special Offers:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-amber-700 dark:text-amber-400 mr-2 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>SEF Attendee Discount:</strong> 10% off with code SEF10
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-amber-700 dark:text-amber-400 mr-2 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Bulk Order (5+ bottles):</strong> 15% discount and custom packaging available
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-amber-700 dark:text-amber-400 mr-2 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Corporate Gifting:</strong> Custom branding options available on request
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-100 dark:border-amber-800/30">
              <h3 className="font-semibold text-lg mb-2 text-amber-900 dark:text-amber-200">Payment Options</h3>
              <p className="text-amber-800 dark:text-amber-300">
                We accept all major credit cards, Apple Pay, and bank transfers. For corporate orders or special payment arrangements,
                please contact our customer service team.
              </p>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Link 
                to="/perfume" 
                className="text-amber-800 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-200 font-medium flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Sharjah's Signature
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PricingPage;
