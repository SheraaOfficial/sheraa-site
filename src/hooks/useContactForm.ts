
import { useState, useCallback } from 'react';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: string;
  audience: string;
  subject: string;
  message: string;
  company?: string;
  position?: string;
  preferredContact: 'email' | 'phone' | 'either';
}

export interface ContactFormState {
  formData: ContactFormData;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isSubmitted: boolean;
}

const initialFormData: ContactFormData = {
  fullName: '',
  email: '',
  phone: '',
  inquiryType: '',
  audience: '',
  subject: '',
  message: '',
  company: '',
  position: '',
  preferredContact: 'email'
};

export const useContactForm = () => {
  const [state, setState] = useState<ContactFormState>({
    formData: initialFormData,
    errors: {},
    isSubmitting: false,
    isSubmitted: false
  });

  const updateFormData = useCallback((updates: Partial<ContactFormData>) => {
    setState(prev => ({
      ...prev,
      formData: { ...prev.formData, ...updates },
      errors: { ...prev.errors }
    }));
  }, []);

  const setErrors = useCallback((errors: Record<string, string>) => {
    setState(prev => ({ ...prev, errors }));
  }, []);

  const setSubmitting = useCallback((isSubmitting: boolean) => {
    setState(prev => ({ ...prev, isSubmitting }));
  }, []);

  const setSubmitted = useCallback((isSubmitted: boolean) => {
    setState(prev => ({ ...prev, isSubmitted }));
  }, []);

  const resetForm = useCallback(() => {
    setState({
      formData: initialFormData,
      errors: {},
      isSubmitting: false,
      isSubmitted: false
    });
  }, []);

  return {
    ...state,
    updateFormData,
    setErrors,
    setSubmitting,
    setSubmitted,
    resetForm
  };
};
