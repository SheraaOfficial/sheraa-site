
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface AboutPageProps {
  section?: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ section }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-sheraa-primary mb-8">About Sheraa</h1>
        {/* Content will be implemented based on section prop */}
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
