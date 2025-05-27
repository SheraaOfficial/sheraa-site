
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import CareersHeroSection from './CareersHeroSection';
import WhyJoinSection from './WhyJoinSection';
import JobOpeningsSection from './JobOpeningsSection';
import ApplicationProcess from './ApplicationProcess';
import ApplicationForm from './ApplicationForm';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Trophy, Zap, MessageSquare } from 'lucide-react';

const DetailedCareersPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-sheraa-dark min-h-screen">
        {/* Hero Section */}
        <CareersHeroSection />

        {/* Why Join Section */}
        <WhyJoinSection />

        {/* Job Openings with Apply Handler */}
        <JobOpeningsSection />

        {/* Application Process */}
        <ApplicationProcess />

        {/* Application Form */}
        <section className="py-12 md:py-20 bg-gray-50 dark:bg-sheraa-dark/30" id="apply">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to Apply?</h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
                Submit your application and take the first step towards joining our mission to empower entrepreneurs across the region.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <ApplicationForm />
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12 md:py-20 bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white relative overflow-hidden"
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
            <Trophy className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 opacity-90" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-4">
              Questions About Your Application?
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
              Our team is here to help you throughout the application process. 
              Don't hesitate to reach out if you need any clarification or assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button 
                size="lg" 
                className="bg-white text-sheraa-primary hover:bg-gray-50 shadow-xl group w-full sm:w-auto"
                onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center gap-2">
                  Apply Now
                  <Zap className="w-4 h-4 transition-transform group-hover:scale-110" />
                </span>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                <MessageSquare className="mr-2 w-4 h-4" />
                Contact HR Team
              </Button>
            </div>

            {/* Contact info */}
            <div className="mt-6 md:mt-8 text-white/80 text-sm px-4">
              <p>📧 careers@sheraa.ae | 📞 +971 6 509 4000</p>
            </div>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
};

export default DetailedCareersPage;
