
import React from 'react';
import { motion } from 'framer-motion';

const StorytellingSection: React.FC = () => {
  return (
    <section className="py-24 bg-luxury-charcoal text-luxury-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <span className="text-sm tracking-[0.2em] uppercase text-luxury-gold font-light">
                A Collaboration
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-luxury-cream">
                Sheraa & Al Hanan
              </h2>
              <div className="w-24 h-px bg-luxury-gold" />
            </div>
            
            <div className="space-y-6 text-luxury-cream/80 font-light leading-relaxed">
              <p className="text-lg">
                This exceptional fragrance emerged from an extraordinary partnership between 
                Sheraa—Sharjah's pioneering entrepreneurship center—and Al Hanan, 
                a distinguished perfumery house renowned for its artisanal mastery.
              </p>
              
              <p>
                Like the most successful ventures, this collaboration was born from a shared vision: 
                to capture the intangible essence of innovation and translate it into something 
                profoundly personal and enduring.
              </p>
              
              <p>
                Al Hanan's master perfumers worked closely with Sheraa's community of visionaries, 
                drawing inspiration from their stories, their struggles, and their triumphs. 
                Each component was selected not merely for its olfactory beauty, but for its 
                symbolic resonance with the entrepreneurial spirit.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <blockquote className="text-luxury-gold italic text-lg font-light border-l-2 border-luxury-gold pl-6">
                "Every entrepreneur carries a unique scent of ambition. 
                This fragrance is our attempt to honor that invisible signature of determination."
              </blockquote>
              <cite className="text-sm text-luxury-cream/60 mt-3 block">
                — Master Perfumer, Al Hanan
              </cite>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="space-y-8">
              {/* Artisanal Process Visual */}
              <div className="bg-luxury-beige/10 p-8 rounded-sm border border-luxury-gold/20">
                <h3 className="text-2xl font-serif text-luxury-cream mb-6">Artisanal Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 border border-luxury-gold rounded-full flex items-center justify-center">
                      <span className="text-xs text-luxury-gold">1</span>
                    </div>
                    <span className="text-sm text-luxury-cream/80">Inspiration gathering from entrepreneurial stories</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 border border-luxury-gold rounded-full flex items-center justify-center">
                      <span className="text-xs text-luxury-gold">2</span>
                    </div>
                    <span className="text-sm text-luxury-cream/80">Careful selection of symbolic ingredients</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 border border-luxury-gold rounded-full flex items-center justify-center">
                      <span className="text-xs text-luxury-gold">3</span>
                    </div>
                    <span className="text-sm text-luxury-cream/80">Months of blending and refinement</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 border border-luxury-gold rounded-full flex items-center justify-center">
                      <span className="text-xs text-luxury-gold">4</span>
                    </div>
                    <span className="text-sm text-luxury-cream/80">Limited production for exclusivity</span>
                  </div>
                </div>
              </div>

              {/* Legacy Element */}
              <div className="text-center space-y-4 pt-8">
                <div className="inline-flex items-center space-x-2 text-luxury-gold">
                  <div className="w-6 h-px bg-luxury-gold" />
                  <span className="text-sm tracking-wider uppercase font-light">Since 2024</span>
                  <div className="w-6 h-px bg-luxury-gold" />
                </div>
                <p className="text-sm text-luxury-cream/60 font-light">
                  A limited edition celebrating eight years of fostering innovation in Sharjah
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;
