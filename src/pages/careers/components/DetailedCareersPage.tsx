
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import CareersHeroSection from './CareersHeroSection';
import WhyJoinSection from './WhyJoinSection';
import JobOpeningsSection from './JobOpeningsSection';
import ApplicationProcess from './ApplicationProcess';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Trophy, Zap, MessageSquare } from 'lucide-react';

const DetailedCareersPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-sheraa-dark">
        {/* Hero Section */}
        <CareersHeroSection />

        {/* Why Join Section */}
        <WhyJoinSection />

        {/* Job Openings */}
        <JobOpeningsSection />

        {/* Application Process */}
        <ApplicationProcess />

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10" />
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${20 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <Trophy className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Shape the Future of Entrepreneurship?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join a team where your work creates ripple effects across the entire MENA startup ecosystem. 
              Every day brings new challenges, growth opportunities, and the satisfaction of building something truly meaningful.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-sheraa-primary hover:bg-gray-50 shadow-xl group">
                Start Your Application
                <Zap className="ml-2 w-4 h-4 transition-transform group-hover:scale-110" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <MessageSquare className="mr-2 w-4 h-4" />
                Questions? Let's Talk
              </Button>
            </div>

            {/* Contact info */}
            <div className="mt-8 text-white/80 text-sm">
              <p>📧 careers@sheraa.ae | 📞 +971 6 509 4000</p>
            </div>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default DetailedCareersPage;
