
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Import sections
import SEFHero from './sef/components/SEFHero';
import SEFAbout from './sef/components/SEFAbout';
import SEFFeatures from './sef/components/SEFFeatures';
import SEFSpeakers from './sef/components/SEFSpeakers';
import SEFSchedule from './sef/components/SEFSchedule';
import SEFExperienceZones from './sef/components/SEFExperienceZones';
import SEFTestimonials from './sef/components/SEFTestimonials';
import SEFPartners from './sef/components/SEFPartners';
import SEFFAQ from './sef/components/SEFFAQ';
import SEFGallery from './sef/components/SEFGallery';
import SEFRegisterCTA from './sef/components/SEFRegisterCTA';
import SEFFooterCTA from './sef/components/SEFFooterCTA';

const SEFLandingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Navigation with transparent background */}
      <div className="relative z-50">
        <Navigation />
      </div>
      
      {/* Hero Section with Full-width Background */}
      <SEFHero />
      
      {/* Main Content */}
      <main>
        {/* About SEF Section */}
        <SEFAbout />
        
        {/* Key Features/Highlights */}
        <SEFFeatures />
        
        {/* Featured Speakers Section */}
        <SEFSpeakers />
        
        {/* Schedule Preview */}
        <SEFSchedule />
        
        {/* Experience Zones */}
        <SEFExperienceZones />
        
        {/* Testimonials */}
        <SEFTestimonials />
        
        {/* Partners & Sponsors */}
        <SEFPartners />
        
        {/* Gallery from Previous Festivals */}
        <SEFGallery />
        
        {/* FAQ Section */}
        <SEFFAQ />
        
        {/* Register CTA */}
        <SEFRegisterCTA />
        
        {/* Final CTA before Footer */}
        <SEFFooterCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default SEFLandingPage;
