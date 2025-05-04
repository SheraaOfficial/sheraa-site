
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import LoginForm from "@/components/auth/LoginForm";
import { Card } from "@/components/ui/card";

const LoginPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 max-w-screen-xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-sheraa-primary">
              Welcome Back to Sheraa
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Connect with fellow founders, share your journey, and be part of our vibrant entrepreneurial community.
            </p>
            <div className="hidden md:block bg-gradient-to-r from-sheraa-primary/20 to-sheraa-teal/20 p-6 rounded-lg">
              <blockquote className="italic text-gray-700 border-l-4 border-sheraa-primary pl-4">
                "Sheraa has been instrumental in connecting me with like-minded entrepreneurs and investors who share my vision."
                <footer className="text-sm mt-2 text-sheraa-primary">
                  — Sarah Al Amiri, Tech Founder
                </footer>
              </blockquote>
            </div>
          </div>
          
          <div className="md:w-1/2 max-w-md w-full">
            <Card className="p-8 shadow-lg">
              <LoginForm />
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
