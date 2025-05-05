
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import CareersHero from './components/CareersHero';
import CareersBenefits from './components/CareersBenefits';
import CareersValues from './components/CareersValues';
import CareersForm from './components/CareersForm';
import { CareersProvider } from './context/CareersContext';
import { useScrollEffect } from './hooks/useScrollEffect';

const CareersPage: React.FC = () => {
  const { isTransparent } = useScrollEffect();

  return (
    <CareersProvider>
      <MainLayout 
        className="bg-gradient-to-b from-stone-50 to-white"
        headerClassName={isTransparent ? 'bg-transparent transition-all duration-300' : ''}
      >
        <CareersHero />
        <CareersBenefits />
        <CareersValues />
        <div id="application-section" className="pt-16">
          <CareersForm />
        </div>
      </MainLayout>
    </CareersProvider>
  );
};

export default CareersPage;
