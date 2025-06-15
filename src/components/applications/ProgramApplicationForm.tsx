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
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { uploadFile } from '@/utils/fileUpload';

interface ProgramApplicationFormProps {
  programId: string;
  programName: string;
}

export const ProgramApplicationForm: React.FC<ProgramApplicationFormProps> = ({
  programId,
  programName
}) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [applicationId, setApplicationId] = useState<string | null>(null);
  const [initialData, setInitialData] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
  }, [user, programId]);

  const loadExistingApplication = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .eq('user_id', user.id)
        .eq('program_name', programName)
        .eq('status', 'draft')
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setApplicationId(data.id);
        setInitialData(data.form_data || {});
      }
    } catch (error) {
      console.error('Error loading application:', error);
    }
  };

  const handleSubmit = async (formData: any) => {
    if (!user) return;

    try {
      let appId = applicationId;

      if (!appId) {
        // Create new application
        const { data, error } = await supabase
          .from('applications')
          .insert({
            user_id: user.id,
            program_name: programName,
            form_data: formData,
            status: 'submitted',
            submitted_at: new Date().toISOString()
          })
          .select()
          .single();

        if (error) throw error;
        appId = data.id;
      } else {
        // Update existing application
        const { error } = await supabase
          .from('applications')
          .update({
            form_data: formData,
            status: 'submitted',
            submitted_at: new Date().toISOString()
          })
          .eq('id', appId);

        if (error) throw error;
      }

      // Handle file uploads if any
      await handleFileUploads(formData, appId);

      // Create notification
      await supabase
        .from('notifications')
        .insert({
          user_id: user.id,
          title: 'Application Submitted',
          message: `Your ${programName} application has been submitted successfully.`,
          type: 'success',
          category: 'application'
        });

      setShowSuccessModal(true);
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
      throw error;
    }
  };

  const handleSave = async (formData: any) => {
    if (!user) return;

    try {
      if (applicationId) {
        const { error } = await supabase
          .from('applications')
          .update({
            form_data: formData
          })
          .eq('id', applicationId);

        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from('applications')
          .insert({
            user_id: user.id,
            program_name: programName,
            form_data: formData,
            status: 'draft'
          })
          .select()
          .single();

        if (error) throw error;
        setApplicationId(data.id);
      }
    } catch (error) {
      console.error('Save error:', error);
    }
  };

  const handleFileUploads = async (formData: any, appId: string) => {
    const fileFields = ['pitchDeck', 'businessPlan', 'financials'];
    
    for (const field of fileFields) {
      const file = formData[field];
      if (file && file instanceof File) {
        try {
          const filePath = `${user!.id}/${appId}/${field}`;
          const result = await uploadFile(file, 'documents', filePath);
          
          if (result.success && result.url) {
            formData[field + '_url'] = result.url;
          } else {
            console.error(`Error uploading ${field}:`, result.error);
          }
        } catch (error) {
          console.error(`Error uploading ${field}:`, error);
        }
      }
    }
  };

  return (
    <ApplicationErrorBoundary>
      <EnhancedMultiStepForm
        programId={programId}
        programName={programName}
        steps={steps}
        onSubmit={handleSubmit}
        onSave={handleSave}
        initialData={initialData}
        applicationId={applicationId}
      />
      <ApplicationSuccessModal 
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        programName={programName}
      />
    </ApplicationErrorBoundary>
  );
};
