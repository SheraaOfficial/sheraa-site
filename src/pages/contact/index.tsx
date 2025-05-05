
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import ContactHero from './components/ContactHero';
import ContactInfoSection from './components/ContactInfoSection';
import ContactFormSection from './components/ContactFormSection';
import LocationMapSection from './components/LocationMapSection';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';

const ContactPage = () => {
  const devicePerformance = useDevicePerformance();

  return (
    <MainLayout>
      <ContactHero />

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ContactInfoSection />
          <ContactFormSection />
        </div>
      </section>

      {/* Only load map on medium and high performance devices */}
      {devicePerformance !== 'low' && (
        <section className="py-12 md:py-16 bg-sheraa-light">
          <div className="container mx-auto px-4 md:px-6">
            <LocationMapSection />
          </div>
        </section>
      )}
    </MainLayout>
  );
};

export default ContactPage;
