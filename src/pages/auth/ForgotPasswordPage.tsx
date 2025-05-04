
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import { Card } from "@/components/ui/card";

const ForgotPasswordPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 max-w-screen-xl">
        <div className="max-w-md mx-auto">
          <Card className="p-8 shadow-lg">
            <ForgotPasswordForm />
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ForgotPasswordPage;
