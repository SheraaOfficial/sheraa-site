
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

const TermsOfUse = () => {
  return (
    <MainLayout>
      <div className="min-h-screen pt-24 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Terms of Use</h1>
          <p className="text-center text-gray-600">Read our terms and conditions</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsOfUse;
