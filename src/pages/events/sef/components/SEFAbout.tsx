
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MapPin, Calendar } from 'lucide-react';

const SEFAbout: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-sheraa-dark/30 dark:to-sheraa-dark/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sheraa-sef-primary/10 border border-sheraa-sef-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-sheraa-sef-primary" />
              <span className="text-sm font-medium text-sheraa-sef-primary">About SEF 2026</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
              Where Innovation Meets <span className="bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent">Opportunity</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              SEF is more than just a festival; it's the region's largest gathering of entrepreneurial minds. 
              Under the theme "Where We Belong," SEF unites visionaries, investors, innovators, and aspiring 
              changemakers from across the globe.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              For two electrifying days at the Sharjah Research, Technology, and Innovation Park (SRTIP), 
              experience a convergence of ideas, opportunities, and community spirit designed to fuel the 
              next wave of impactful entrepreneurship.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-sheraa-sef-primary" />
                <span className="font-medium">January 31 - February 1, 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-sheraa-sef-primary" />
                <span className="font-medium">Sharjah Research, Technology & Innovation Park</span>
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent hover:shadow-xl transition-all duration-300">
              <Link to="/events/sef/register" className="flex items-center gap-2">
                Register for SEF 2026
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-sheraa-sef-primary/20 to-sheraa-sef-accent/20 rounded-3xl overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="SEF 2026 Event"
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sheraa-sef-primary/20 to-transparent" />
            </div>
            
            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-sheraa-dark rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-800"
            >
              <div className="text-2xl font-bold text-sheraa-sef-primary">14,000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Expected Attendees</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="absolute -top-6 -right-6 bg-white dark:bg-sheraa-dark rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-800"
            >
              <div className="text-2xl font-bold text-sheraa-sef-accent">300+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Global Speakers</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SEFAbout;
