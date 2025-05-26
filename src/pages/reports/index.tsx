
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

const ReportsPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen pt-24 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Reports</h1>
          <p className="text-center text-gray-600">Research and impact reports from Sheraa</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default ReportsPage;
