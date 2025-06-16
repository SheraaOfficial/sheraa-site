
import React, { useState, useEffect } from 'react';
import { EnhancedMultiStepForm } from './EnhancedMultiStepForm';
import { ApplicationErrorBoundary } from './ApplicationErrorBoundary';
import { ApplicationSuccessModal } from './ApplicationSuccessModal';
import { 
  PersonalInformationStep,
  StartupInformationStep,
  BusinessModelStep,
  ProgramFitStep,
  DocumentsStep
} from './ApplicationFormSteps';
import { useApplicationForm } from '@/hooks/useApplicationForm';
import { uploadFile } from '@/utils/fileUpload';
import { useAuth } from '@/contexts/AuthContext';

interface ProgramApplicationFormProps {
  programId: string;
  programName: string;
}

export const ProgramApplicationForm: React.FC<ProgramApplicationFormProps> = ({
  programId,
  programName
}) => {
  const { user } = useAuth();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const {
    formData,
    updateFormData,
    saveApplication,
    submitApplication,
    loadExistingApplication,
    applicationId,
    loading
  } = useApplicationForm(programId, programName);

  const steps = [
    {
      id: 'personal',
      title: 'Personal Information',
      description: 'Tell us about yourself',
      component: PersonalInformationStep,
      isRequired: true,
      validationRules: ['firstName', 'lastName', 'email', 'phone']
    },
    {
      id: 'startup',
      title: 'Startup Information',
      description: 'Describe your startup',
      component: StartupInformationStep,
      isRequired: true,
      validationRules: ['startupName', 'startupDescription', 'industry', 'stage']
    },
    {
      id: 'business',
      title: 'Business Model',
      description: 'How does your business work?',
      component: BusinessModelStep,
      isRequired: true,
      validationRules: ['businessModel', 'targetMarket']
    },
    {
      id: 'fit',
      title: 'Program Fit',
      description: 'Why this program?',
      component: ProgramFitStep,
      isRequired: true,
      validationRules: ['whyProgram', 'expectedOutcomes']
    },
    {
      id: 'documents',
      title: 'Documents',
      description: 'Upload required documents',
      component: DocumentsStep,
      isRequired: true,
      validationRules: ['pitchDeck']
    }
  ];

  useEffect(() => {
    loadExistingApplication();
  }, [loadExistingApplication]);

  const handleSubmit = async (finalFormData: any) => {
    if (!user) return;

    try {
      // Handle file uploads if any
      const processedData = await handleFileUploads(finalFormData);
      
      const success = await submitApplication(processedData);
      if (success) {
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
      throw error;
    }
  };

  const handleSave = async (data: any) => {
    await saveApplication(data);
  };

  const handleFileUploads = async (data: any) => {
    if (!user || !applicationId) return data;

    const fileFields = ['pitchDeck', 'businessPlan', 'financials'];
    const processedData = { ...data };
    
    for (const field of fileFields) {
      const file = data[field];
      if (file && file instanceof File) {
        try {
          const filePath = `${user.id}/${applicationId}/${field}`;
          const result = await uploadFile(file, 'documents', filePath);
          
          if (result.success && result.url) {
            processedData[field + '_url'] = result.url;
            delete processedData[field]; // Remove the file object
          } else {
            console.error(`Error uploading ${field}:`, result.error);
          }
        } catch (error) {
          console.error(`Error uploading ${field}:`, error);
        }
      }
    }

    return processedData;
  };

  if (loading && !formData) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sheraa-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your application...</p>
        </div>
      </div>
    );
  }

  return (
    <ApplicationErrorBoundary>
      <EnhancedMultiStepForm
        programId={programId}
        programName={programName}
        steps={steps}
        onSubmit={handleSubmit}
        onSave={handleSave}
        initialData={formData}
        applicationId={applicationId || undefined}
      />
      <ApplicationSuccessModal 
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        programName={programName}
      />
    </ApplicationErrorBoundary>
  );
};
