
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEFSection from '@/components/SEFSection';

// Import the component sections
import SEFHeroSection from './sef/components/SEFHeroSection';
import SEFSpeakersSection from './sef/components/SEFSpeakersSection';
import SEFHighlightsSection from './sef/components/SEFHighlightsSection';
import SEFExperienceZonesSection from './sef/components/SEFExperienceZonesSection';
import SEFAttendeeSection from './sef/components/SEFAttendeeSection';
import SEFFaqSection from './sef/components/SEFFaqSection';
import SEFCtaSection from './sef/components/SEFCtaSection';

const SEFLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-r from-[#1A1F2C] to-[#292D3E]">
        <Navigation />
        <SEFHeroSection />
      </div>
      
      <main className="flex-grow">
        {/* Experience Section */}
        <SEFSection />
        
        {/* Featured Speakers Section */}
        <SEFSpeakersSection />
        
        {/* Highlights From Previous Festival */}
        <SEFHighlightsSection />
        
        {/* Experience Zones Section */}
        <SEFExperienceZonesSection />
        
        {/* Who Should Attend Section */}
        <SEFAttendeeSection />
        
        {/* FAQ Preview Section */}
        <SEFFaqSection />
        
        {/* CTA Section */}
        <SEFCtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default SEFLandingPage;
