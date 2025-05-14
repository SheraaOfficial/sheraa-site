
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';

const SEFCtaSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#1A1F2C] to-[#292D3E] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#9b87f5]/30 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F97316]/20 rounded-full filter blur-[120px]" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to be part of SEF'26?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join us for two days of inspiration, connection, and growth at the region's premier entrepreneurship festival.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <GradientButton asChild variant="shimmer" size="lg" className="shadow-glow">
              <Link to="/events/sef/register">
                Reserve Your Spot <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </GradientButton>
            
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 
                hover:bg-white/20 hover:border-white/50">
              <Link to="/events/sef/be-part-of-sef">Explore Opportunities</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEFCtaSection;
