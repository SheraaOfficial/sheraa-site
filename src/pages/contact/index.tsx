
import React, { lazy, Suspense } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import ContactHero from './components/ContactHero';
import ContactInfoSection from './components/ContactInfoSection';
import ContactFormSection from './components/ContactFormSection';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';
import { useDeepScroll } from '@/hooks/use-interaction';

// Lazy load the map component which can be heavy
const LocationMapSection = lazy(() => 
  import('./components/LocationMapSection').catch(() => ({ 
    default: () => null 
  }))
);

const ContactPage = () => {
  const devicePerformance = useDevicePerformance();
  const deepScroll = useDeepScroll();

  return (
    <MainLayout>
      <ContactHero />

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ContactInfoSection />
          <ContactFormSection />
        </div>
      </section>

      {/* Only load map on medium and high performance devices or after deep scroll */}
      {(devicePerformance !== 'low' || deepScroll) && (
        <section className="py-12 md:py-16 bg-sheraa-light">
          <div className="container mx-auto px-4 md:px-6">
            <Suspense fallback={
              <div className="h-[400px] w-full bg-sheraa-light/50 flex items-center justify-center">
                <p className="text-gray-500">Loading map...</p>
              </div>
            }>
              <LocationMapSection />
            </Suspense>
          </div>
        </section>
      )}
    </MainLayout>
  );
};

export default ContactPage;
