
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

const Signup = () => {
  return (
    <MainLayout>
      <div className="min-h-screen pt-24 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Sign Up</h1>
          <p className="text-center text-gray-600">Create your Sheraa account</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Signup;
