
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { ProgramApplicationForm } from '@/components/applications/ProgramApplicationForm';
import { useAuth } from '@/contexts/AuthContext';
import { MobileLoading } from '@/components/ui/mobile-loading';

const programMap: Record<string, string> = {
  's3-incubator': 'S3 Incubator',
  'startup-dojo': 'Startup Dojo',
  'access-sharjah': 'Access Sharjah Challenge',
  'sme-support': 'SME Support'
};

const ApplicationFormPage: React.FC = () => {
  const { programId } = useParams<{ programId: string }>();
  const { user, loading } = useAuth();

  if (loading) {
    return <MobileLoading message="Loading application..." />;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (!programId || !programMap[programId]) {
    return <Navigate to="/programs" replace />;
  }

  const programName = programMap[programId];

  return (
    <MainLayout
      seoTitle={`${programName} Application - Sheraa`}
      seoDescription={`Apply for the ${programName} program at Sheraa`}
    >
      <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {programName} Application
              </h1>
              <p className="text-gray-600">
                Complete your application to join Sheraa's {programName} program
              </p>
            </div>
            
            <ProgramApplicationForm 
              programId={programId}
              programName={programName}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApplicationFormPage;
