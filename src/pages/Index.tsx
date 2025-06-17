
import React from 'react';
import SEOHead from '@/components/SEO/SEOHead';
import MainLayout from '@/components/layouts/MainLayout';

const Index: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Sheraa: Creating the Next Wave of Entrepreneurs"
        description="Sharjah's official hub for aspiring founders and established ventures. We empower changemakers to build impactful businesses and shape the future."
        keywords="Sheraa, Sharjah Entrepreneurship, Startup Incubator, UAE Entrepreneurs, Business Innovation"
      />
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-sheraa-primary mb-4">
              Welcome to Sheraa
            </h1>
            <p className="text-lg text-gray-600">
              Creating the Next Wave of Entrepreneurs
            </p>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Index;
