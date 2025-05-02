
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactHero from './components/ContactHero';
import ContactInfoSection from './components/ContactInfoSection';
import ContactFormSection from './components/ContactFormSection';
import LocationMapSection from './components/LocationMapSection';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <ContactHero />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <ContactInfoSection />
            <ContactFormSection />
          </div>
        </section>

        <section className="py-16 bg-sheraa-light">
          <div className="container mx-auto px-4 md:px-6">
            <LocationMapSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
