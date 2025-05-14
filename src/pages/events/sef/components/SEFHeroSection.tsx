
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Mic, Users } from 'lucide-react';
import { Sparkles } from '@/components/ui/sparkles';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';

const SEFHeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-md mb-6">
            <Sparkles className="text-[#9b87f5]">
              <span>JANUARY 31 - FEBRUARY 1, 2026</span>
            </Sparkles>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="block">Sharjah Entrepreneurship</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#F97316]">Festival 2026</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Join 14,000+ attendees at the region's largest gathering of entrepreneurial minds.
            Experience transformative talks, workshops, and unparalleled networking opportunities.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <GradientButton asChild variant="shimmer" size="lg" className="shadow-lg hover:shadow-[0_5px_30px_rgba(155,135,245,0.4)]">
              <Link to="/events/sef/register">
                Register Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </GradientButton>
            
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 
                hover:bg-white/20 backdrop-blur-xl hover:border-white/50">
              <Link to="/events/sef/agenda">Explore Agenda</Link>
            </Button>
          </div>
        </motion.div>
        
        {/* Key Event Info Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {[
            { icon: Calendar, label: "January 31 - February 1, 2026" },
            { icon: MapPin, label: "SRTIP, Sharjah, UAE" },
            { icon: Users, label: "14,000+ Attendees" },
            { icon: Mic, label: "300+ Global Speakers" },
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20
                hover:bg-white/15 transition-all duration-300"
            >
              <div className="bg-white/20 p-2.5 rounded-full">
                <item.icon className="h-5 w-5 text-[#9b87f5]" />
              </div>
              <span className="text-white text-sm">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SEFHeroSection;
