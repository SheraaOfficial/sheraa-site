
import React, { useState, useEffect } from 'react';
import { MultiStepApplicationForm } from './MultiStepApplicationForm';
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

      toast({
        title: "Application submitted successfully!",
        description: "We'll review your application and get back to you soon."
      });

      navigate('/dashboard');
    } catch (error) {
      console.error('Submission error:', error);
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
          const fileExt = file.name.split('.').pop();
          const fileName = `${user!.id}/${appId}/${field}.${fileExt}`;
          
          const { error: uploadError } = await supabase.storage
            .from('documents')
            .upload(fileName, file, { upsert: true });

          if (uploadError) throw uploadError;

          // Update form data with file URL
          const { data: { publicUrl } } = supabase.storage
            .from('documents')
            .getPublicUrl(fileName);

          formData[field + '_url'] = publicUrl;
        } catch (error) {
          console.error(`Error uploading ${field}:`, error);
        }
      }
    }
  };

  return (
    <MultiStepApplicationForm
      programId={programId}
      programName={programName}
      steps={steps}
      onSubmit={handleSubmit}
      onSave={handleSave}
      initialData={initialData}
      applicationId={applicationId}
    />
  );
};
