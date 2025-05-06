
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';

// Import components
import PageHeader from './components/PageHeader';
import IntroductionSection from './components/IntroductionSection';
import ApproachSection from './components/ApproachSection';
import VisionSection from './components/VisionSection';
import ImpactSection from './components/ImpactSection';
import HubsSection from './components/HubsSection';
import LeadershipDetailsSection from './components/LeadershipDetailsSection';
import BoardDetailsSection from './components/BoardDetailsSection';

const AboutPage = () => {
  const location = useLocation();
  
  // Scroll to anchor if present in URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Add a slight delay to ensure smooth scrolling after page load
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <MainLayout>
      <PageHeader 
        title="About Sheraa" 
        subtitle="Empowering entrepreneurs, building Sharjah's future."
      />
      
      {/* Introduction Section */}
      <IntroductionSection />

      {/* Our Approach Section */}
      <ApproachSection />

      {/* Our Vision Section */}
      <VisionSection />

      {/* Our Impact Section */}
      <ImpactSection />

      {/* Our Hubs Section */}
      <HubsSection />

      {/* Our Leadership Section */}
      <LeadershipDetailsSection />

      {/* Board of Advisors Section */}
      <BoardDetailsSection />
    </MainLayout>
  );
};

export default AboutPage;
