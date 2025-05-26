
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <MainLayout>
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
          <Link to="/" className="bg-[#165A5A] text-white px-6 py-3 rounded-lg hover:bg-[#165A5A]/90">
            Go Home
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
