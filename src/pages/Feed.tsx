
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

const Feed = () => {
  return (
    <MainLayout>
      <div className="min-h-screen pt-24 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Community Feed</h1>
          <p className="text-center text-gray-600">Stay connected with the Sheraa community</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Feed;
