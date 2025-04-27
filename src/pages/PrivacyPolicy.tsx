
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-sheraa-primary mb-8">Privacy Policy</h1>
        {/* Privacy policy content will be implemented */}
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
