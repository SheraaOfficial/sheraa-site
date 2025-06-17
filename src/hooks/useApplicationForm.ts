
import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export interface ApplicationFormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Startup Information
  startupName: string;
  startupDescription: string;
  industry: string;
  stage: string;
  
  // Business Model
  businessModel: string;
  targetMarket: string;
  
  // Program Fit
  whyProgram: string;
  expectedOutcomes: string;
  
  // Documents - store as URLs after upload
  pitchDeck_url?: string;
  businessPlan_url?: string;
  financials_url?: string;
}

export const useApplicationForm = (programId: string, programName: string) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<ApplicationFormData>>({});
  const [applicationId, setApplicationId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const updateFormData = useCallback((data: Partial<ApplicationFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  }, []);

  const saveApplication = useCallback(async (data?: Partial<ApplicationFormData>) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to save your application.",
        variant: "destructive"
      });
      return null;
    }

    setLoading(true);
    try {
      const dataToSave = data || formData;
      
      // Remove File objects before saving to database
      const sanitizedData = Object.entries(dataToSave).reduce((acc, [key, value]) => {
        if (value instanceof File) {
          // Skip File objects - they should be uploaded separately and stored as URLs
          return acc;
        }
        acc[key] = value;
        return acc;
      }, {} as any);
      
      if (applicationId) {
        const { error } = await supabase
          .from('applications')
          .update({
            form_data: sanitizedData,
            updated_at: new Date().toISOString()
          })
          .eq('id', applicationId);

        if (error) throw error;
        return applicationId;
      } else {
        const { data: newApp, error } = await supabase
          .from('applications')
          .insert({
            user_id: user.id,
            program_name: programName,
            form_data: sanitizedData,
            status: 'draft'
          })
          .select()
          .single();

        if (error) throw error;
        setApplicationId(newApp.id);
        return newApp.id;
      }
    } catch (error) {
      console.error('Error saving application:', error);
      toast({
        title: "Save failed",
        description: "Could not save your application. Please try again.",
        variant: "destructive"
      });
      return null;
    } finally {
      setLoading(false);
    }
  }, [user, formData, applicationId, programName, toast]);

  const submitApplication = useCallback(async (finalData: ApplicationFormData) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to submit your application.",
        variant: "destructive"
      });
      return false;
    }

    setLoading(true);
    try {
      const appId = await saveApplication(finalData);
      if (!appId) return false;

      const { error } = await supabase
        .from('applications')
        .update({
          status: 'submitted',
          submitted_at: new Date().toISOString()
        })
        .eq('id', appId);

      if (error) throw error;

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
        title: "Application submitted!",
        description: "We'll review your application and get back to you soon."
      });

      return true;
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Submission failed",
        description: "Could not submit your application. Please try again.",
        variant: "destructive"
      });
      return false;
    } finally {
      setLoading(false);
    }
  }, [user, programName, saveApplication, toast]);

  const loadExistingApplication = useCallback(async () => {
    if (!user) return;

    setLoading(true);
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
        setFormData(data.form_data || {});
      }
    } catch (error) {
      console.error('Error loading application:', error);
    } finally {
      setLoading(false);
    }
  }, [user, programName]);

  return {
    formData,
    updateFormData,
    saveApplication,
    submitApplication,
    loadExistingApplication,
    applicationId,
    loading
  };
};
