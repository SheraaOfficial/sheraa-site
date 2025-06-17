
import React from 'react';
import { SEOHead } from '@/components/SEO/SEOHead';
import MainLayout from '@/components/layouts/MainLayout';
import { Hero } from '@/components/Hero';
import { ImpactNumbers } from '@/components/ImpactNumbers';
import { ProgramsOverview } from '@/components/ProgramsOverview';
import { CommunitySection } from '@/components/CommunitySection';
import { SEFSection } from '@/components/SEFSection';
import StartupsShowcase from '@/components/StartupsShowcase';
import { PartnersSection } from '@/components/PartnersSection';

const Index: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Sheraa: Creating the Next Wave of Entrepreneurs"
        description="Sharjah's official hub for aspiring founders and established ventures. We empower changemakers to build impactful businesses and shape the future."
        keywords="Sheraa, Sharjah Entrepreneurship, Startup Incubator, UAE Entrepreneurs, Business Innovation"
      />
      <MainLayout>
        <Hero />
        <ImpactNumbers />
        <ProgramsOverview />
        <StartupsShowcase />
        <CommunitySection />
        <SEFSection />
        <PartnersSection />
      </MainLayout>
    </>
  );
};

export default Index;
