
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-sheraa-primary mb-8">Contact Us</h1>
        {/* Contact form and information will be implemented */}
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
