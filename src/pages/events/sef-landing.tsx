
import React, { useEffect } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Import enhanced components
import SEFEnhancedHero from './sef/components/SEFEnhancedHero';
import SEFLegacySection from './sef/components/SEFLegacySection';
import SEFAbout from './sef/components/SEFAbout';
import SEFFestivalPasses from './sef/components/SEFFestivalPasses';
import SEFTimelineGallery from './sef/components/SEFTimelineGallery';
import SEFFeatures from './sef/components/SEFFeatures';
import SEFSpeakersSection from './sef/components/SEFSpeakersSection';
import SEFExperienceZones from './sef/components/SEFExperienceZones';
import SEFAttendeeSection from './sef/components/SEFAttendeeSection';
import SEFEnhancedTestimonials from './sef/components/SEFEnhancedTestimonials';
import SEFPartners from './sef/components/SEFPartners';
import SEFGallery from './sef/components/SEFGallery';
import SEFFAQ from './sef/components/SEFFAQ';
import SEFCtaSection from './sef/components/SEFCtaSection';
import SEFFooterCTA from './sef/components/SEFFooterCTA';

const SEFLandingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen w-full overflow-hidden">
        {/* Theme Toggle Button */}
        <ThemeToggle />
        
        {/* Navigation with transparent background */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>
        
        {/* Enhanced Hero Section */}
        <SEFEnhancedHero />
        
        {/* Main Content */}
        <main>
          {/* Legacy of SEF Section (New) */}
          <SEFLegacySection />
          
          {/* Festival Passes Section (New) */}
          <SEFFestivalPasses />
          
          {/* Timeline Gallery (New) - Replacing Journey Through Time */}
          <SEFTimelineGallery />
          
          {/* About SEF Section */}
          <SEFAbout />
          
          {/* Key Features/Highlights */}
          <SEFFeatures />
          
          {/* Featured Speakers Section */}
          <SEFSpeakersSection />
          
          {/* Experience Zones */}
          <SEFExperienceZones />
          
          {/* Who Should Attend */}
          <SEFAttendeeSection />
          
          {/* Enhanced Testimonials */}
          <SEFEnhancedTestimonials />
          
          {/* Partners & Sponsors */}
          <SEFPartners />
          
          {/* Gallery from Previous Festivals */}
          <SEFGallery />
          
          {/* FAQ Section */}
          <SEFFAQ />
          
          {/* CTA Section */}
          <SEFCtaSection />
          
          {/* Final CTA before Footer */}
          <SEFFooterCTA />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default SEFLandingPage;
