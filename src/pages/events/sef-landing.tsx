
import React, { useEffect } from 'react';
import { useExperienceTheme } from '@/contexts/ExperienceThemeContext';
import MainLayout from '@/components/layouts/MainLayout';

// Import enhanced SEF components
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

// Import modern enhanced sections
import { SEFEnhancedEventDetails } from './sef/components/SEFEnhancedEventDetails';
import { SEFEnhancedZones } from './sef/components/SEFEnhancedZones';
import { SEFEnhancedSpeakers } from './sef/components/SEFEnhancedSpeakers';
import { SEFEnhancedRegistration } from './sef/components/SEFEnhancedRegistration';

const SEFLandingPage: React.FC = () => {
  const { switchToSEF } = useExperienceTheme();

  useEffect(() => {
    // Switch to SEF theme when landing on this page
    switchToSEF();
    window.scrollTo(0, 0);
  }, [switchToSEF]);

  return (
    <MainLayout className="bg-gradient-to-br from-sheraa-sef-primary/5 via-white to-sheraa-sef-accent/5 dark:from-sheraa-dark dark:via-sheraa-dark/90 dark:to-sheraa-dark">
      {/* Enhanced Hero Section */}
      <SEFEnhancedHero />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Enhanced Event Details Section */}
        <SEFEnhancedEventDetails />
        
        {/* Enhanced SEF Zones */}
        <SEFEnhancedZones />
        
        {/* Enhanced Featured Speakers */}
        <SEFEnhancedSpeakers />
        
        {/* Legacy of SEF Section */}
        <SEFLegacySection />
        
        {/* Festival Passes Section */}
        <SEFFestivalPasses />
        
        {/* Timeline Gallery */}
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
        
        {/* Enhanced Registration CTA */}
        <SEFEnhancedRegistration />
        
        {/* CTA Section */}
        <SEFCtaSection />
        
        {/* Final CTA before Footer */}
        <SEFFooterCTA />
      </main>
    </MainLayout>
  );
};

export default SEFLandingPage;
