
import { useState, useCallback } from 'react';

export interface ApplicationFormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  
  // Startup Information
  startupName: string;
  startupDescription: string;
  industry: string;
  stage: string;
  fundingRaised: string;
  teamSize: string;
  
  // Program Specific
  programType: string;
  motivation: string;
  previousExperience: string;
  
  // Additional Documents
  pitchDeck?: File;
  businessPlan?: File;
  financials?: File;
}

export interface ApplicationFormState {
  currentStep: number;
  formData: ApplicationFormData;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isValid: boolean;
}

const initialFormData: ApplicationFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  nationality: '',
  startupName: '',
  startupDescription: '',
  industry: '',
  stage: '',
  fundingRaised: '',
  teamSize: '',
  programType: '',
  motivation: '',
  previousExperience: ''
};

export const useApplicationForm = (totalSteps: number = 4) => {
  const [state, setState] = useState<ApplicationFormState>({
    currentStep: 1,
    formData: initialFormData,
    errors: {},
    isSubmitting: false,
    isValid: false
  });

  const updateFormData = useCallback((updates: Partial<ApplicationFormData>) => {
    setState(prev => ({
      ...prev,
      formData: { ...prev.formData, ...updates },
      errors: { ...prev.errors } // Clear specific field errors as user types
    }));
  }, []);

  const setErrors = useCallback((errors: Record<string, string>) => {
    setState(prev => ({ ...prev, errors }));
  }, []);

  const nextStep = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentStep: Math.min(prev.currentStep + 1, totalSteps)
    }));
  }, [totalSteps]);

  const prevStep = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentStep: Math.max(prev.currentStep - 1, 1)
    }));
  }, []);

  const goToStep = useCallback((step: number) => {
    setState(prev => ({
      ...prev,
      currentStep: Math.max(1, Math.min(step, totalSteps))
    }));
  }, [totalSteps]);

  const setSubmitting = useCallback((isSubmitting: boolean) => {
    setState(prev => ({ ...prev, isSubmitting }));
  }, []);

  const resetForm = useCallback(() => {
    setState({
      currentStep: 1,
      formData: initialFormData,
      errors: {},
      isSubmitting: false,
      isValid: false
    });
  }, []);

  return {
    ...state,
    updateFormData,
    setErrors,
    nextStep,
    prevStep,
    goToStep,
    setSubmitting,
    resetForm,
    isFirstStep: state.currentStep === 1,
    isLastStep: state.currentStep === totalSteps,
    progress: (state.currentStep / totalSteps) * 100
  };
};
