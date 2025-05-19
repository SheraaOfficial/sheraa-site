
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { Sparkles } from '@/components/ui/sparkles';

const SEFRegisterCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#1A1F2C] to-[#292D3E] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#9b87f5]/30 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F97316]/20 rounded-full filter blur-[120px]" />
        
        {/* Animated particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Sparkles className="mb-6">
            <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
              Limited VIP Passes Available
            </div>
          </Sparkles>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to be part of 
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] via-[#D6BCFA] to-[#F97316] mt-2">
              SEF'26?
            </span>
          </h2>
          
          <p className="text-xl text-white/80 mb-10">
            Join us for two days of inspiration, connection, and growth at the region's 
            premier entrepreneurship festival.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl mb-10">
            <div className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-2">2</h3>
              <p className="text-white/70">Days</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-2">14K+</h3>
              <p className="text-white/70">Attendees</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-2">300+</h3>
              <p className="text-white/70">Speakers</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center text-white/80">
              <BadgeCheck className="w-5 h-5 text-emerald-400 mr-2" />
              <span>Early bird pricing ends October 1, 2025</span>
            </div>
            <div className="flex items-center text-white/80">
              <BadgeCheck className="w-5 h-5 text-emerald-400 mr-2" />
              <span>VIP passes are limited to 100 attendees</span>
            </div>
          </div>
          
          <GradientButton asChild variant="shimmer" size="xl" className="shadow-glow">
            <Link to="/events/sef/register" className="px-12 py-6">
              Register Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </GradientButton>
          
          <p className="text-white/60 mt-6">Groups of 5+ qualify for special corporate rates</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SEFRegisterCTA;
