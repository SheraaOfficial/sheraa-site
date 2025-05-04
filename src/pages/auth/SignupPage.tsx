
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import SignupForm from "@/components/auth/SignupForm";
import { Card } from "@/components/ui/card";

const SignupPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 max-w-screen-xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-sheraa-primary">
              Join Sheraa's Founder Community
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Create your founder profile, connect with mentors and peers, and access resources to help your venture thrive.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-sheraa-primary/10 p-2 rounded-full">
                  <svg className="h-6 w-6 text-sheraa-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-sheraa-primary">Build Your Founder Profile</h3>
                  <p className="text-gray-600">Showcase your experience, skills, and ventures</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-sheraa-primary/10 p-2 rounded-full">
                  <svg className="h-6 w-6 text-sheraa-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-sheraa-primary">Connect & Network</h3>
                  <p className="text-gray-600">Grow your professional network with like-minded entrepreneurs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-sheraa-primary/10 p-2 rounded-full">
                  <svg className="h-6 w-6 text-sheraa-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-sheraa-primary">Share Your Journey</h3>
                  <p className="text-gray-600">Post updates and insights from your entrepreneurial path</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 max-w-md w-full">
            <Card className="p-8 shadow-lg">
              <SignupForm />
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignupPage;
