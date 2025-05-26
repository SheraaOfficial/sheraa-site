
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

const ForgotPassword = () => {
  return (
    <MainLayout>
      <div className="min-h-screen pt-24 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Reset Password</h1>
          <p className="text-center text-gray-600">Enter your email to reset your password</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default ForgotPassword;
