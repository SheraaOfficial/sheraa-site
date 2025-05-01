
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getPageTitle, getPageSubtitle } from './utils/sectionUtils';
import PageHeader from './components/PageHeader';

// Import individual section components
import DefaultAboutSection from './components/DefaultAboutSection';
import ApproachSection from './components/ApproachSection';
import VisionSection from './components/VisionSection';
import HubsSection from './components/HubsSection';
import LeadershipSection from './components/LeadershipSection';
import BoardSection from './components/BoardSection';

interface AboutPageProps {
  section?: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ section }) => {
  // Get title and subtitle based on section
  const pageTitle = getPageTitle(section);
  const pageSubtitle = getPageSubtitle(section);
  
  // Determine which section to display
  const renderSection = () => {
    switch (section) {
      case 'approach':
        return <ApproachSection />;
      case 'vision':
        return <VisionSection />;
      case 'hubs':
        return <HubsSection />;
      case 'leadership':
        return <LeadershipSection />;
      case 'board':
        return <BoardSection />;
      default:
        return <DefaultAboutSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <PageHeader title={pageTitle} subtitle={pageSubtitle} />
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
