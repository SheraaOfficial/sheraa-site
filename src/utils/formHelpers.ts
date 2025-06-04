
import { FormSubmissionResponse, ContactFormData, ProgramApplicationData } from '@/types/forms';

// Form submission utilities
export const submitContactForm = async (data: ContactFormData): Promise<FormSubmissionResponse> => {
  try {
    // In a real application, this would make an API call
    // For now, we'll simulate the submission
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
    
    console.log('Contact form submitted:', data);
    
    // Simulate success response
    return {
      success: true,
      message: 'Thank you for your inquiry! We\'ll get back to you within 24 hours.',
      data: {
        submissionId: `contact_${Date.now()}`,
        estimatedResponse: '24 hours'
      }
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to submit form. Please try again.',
      errors: [{ field: 'general', message: 'Submission failed' }]
    };
  }
};

export const submitProgramApplication = async (
  programId: string, 
  data: ProgramApplicationData
): Promise<FormSubmissionResponse> => {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(`Program application submitted for ${programId}:`, data);
    
    return {
      success: true,
      message: 'Application submitted successfully! Check your email for next steps.',
      data: {
        applicationId: `app_${programId}_${Date.now()}`,
        trackingCode: `SHERAA-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
      }
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to submit application. Please try again.',
      errors: [{ field: 'general', message: 'Application submission failed' }]
    };
  }
};

// Form data transformation utilities
export const transformContactFormData = (formData: any): ContactFormData => {
  return {
    fullName: formData.fullName || '',
    email: formData.email || '',
    phone: formData.phone || '',
    company: formData.company || '',
    position: formData.position || '',
    inquiryType: formData.inquiryType || 'general',
    audience: formData.audience || 'other',
    subject: formData.subject || '',
    message: formData.message || '',
    preferredContact: formData.preferredContact || 'email',
    urgency: formData.urgency || 'medium'
  };
};

export const transformApplicationFormData = (formData: any): ProgramApplicationData => {
  return {
    // Personal Information
    firstName: formData.firstName || '',
    lastName: formData.lastName || '',
    email: formData.email || '',
    phone: formData.phone || '',
    nationality: formData.nationality || '',
    linkedinProfile: formData.linkedinProfile || '',
    currentRole: formData.currentRole || '',
    previousExperience: formData.previousExperience || '',
    
    // Startup Information
    startup: {
      name: formData.startupName || '',
      description: formData.startupDescription || '',
      website: formData.startupWebsite || '',
      industry: formData.industry || '',
      stage: formData.stage || 'idea',
      fundingRaised: formData.fundingRaised || '',
      teamSize: formData.teamSize || '',
      location: formData.location || ''
    },
    
    // Program Specific
    programType: formData.programType || '',
    motivation: formData.motivation || '',
    expectations: formData.expectations || '',
    referralSource: formData.referralSource || '',
    additionalInfo: formData.additionalInfo || ''
  };
};

// URL parameter utilities for pre-filling forms
export const getFormPreFillData = (): Partial<ContactFormData> => {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  
  return {
    inquiryType: urlParams.get('type') || undefined,
    audience: urlParams.get('audience') || undefined,
    subject: urlParams.get('subject') || undefined
  };
};

// Form progress tracking
export const calculateFormProgress = (formData: any, requiredFields: string[]): number => {
  const completedFields = requiredFields.filter(field => {
    const value = getNestedValue(formData, field);
    return value && value.toString().trim() !== '';
  });
  
  return Math.round((completedFields.length / requiredFields.length) * 100);
};

// Utility to get nested object values
const getNestedValue = (obj: any, path: string): any => {
  return path.split('.').reduce((current, key) => current?.[key], obj);
};

// Form auto-save utilities
export const saveFormToStorage = (formId: string, data: any): void => {
  try {
    localStorage.setItem(`sheraa_form_${formId}`, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  } catch (error) {
    console.warn('Failed to save form data to localStorage:', error);
  }
};

export const loadFormFromStorage = (formId: string): any | null => {
  try {
    const saved = localStorage.getItem(`sheraa_form_${formId}`);
    if (!saved) return null;
    
    const parsed = JSON.parse(saved);
    const isRecent = Date.now() - parsed.timestamp < 24 * 60 * 60 * 1000; // 24 hours
    
    return isRecent ? parsed.data : null;
  } catch (error) {
    console.warn('Failed to load form data from localStorage:', error);
    return null;
  }
};

export const clearFormFromStorage = (formId: string): void => {
  try {
    localStorage.removeItem(`sheraa_form_${formId}`);
  } catch (error) {
    console.warn('Failed to clear form data from localStorage:', error);
  }
};
