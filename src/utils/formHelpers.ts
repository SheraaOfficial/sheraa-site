import { FormSubmissionResponse, ContactFormData, ProgramApplicationData } from '@/types/forms';

// Form submission utilities
export const submitContactForm = async (data: ContactFormData): Promise<FormSubmissionResponse> => {
  try {
    // In a real application, this would make an API call
    // For now, we'll simulate the submission
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
    
    // Removed console.log for security - no longer logging sensitive data
    
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
    
    // Removed console.log for security - no longer logging sensitive data
    
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

// Form data transformation utilities with proper type validation
export const transformContactFormData = (formData: any): ContactFormData => {
  // Validate and sanitize inquiry type
  const validInquiryTypes: ContactFormData['inquiryType'][] = ['program', 'partnership', 'investment', 'general', 'media'];
  const inquiryType = validInquiryTypes.includes(formData.inquiryType) 
    ? formData.inquiryType as ContactFormData['inquiryType']
    : 'general';
  
  // Validate and sanitize audience type  
  const validAudienceTypes: ContactFormData['audience'][] = ['startup', 'investor', 'partner', 'student', 'other'];
  const audience = validAudienceTypes.includes(formData.audience)
    ? formData.audience as ContactFormData['audience'] 
    : 'other';

  return {
    fullName: sanitizeInput(formData.fullName || ''),
    email: sanitizeInput(formData.email || ''),
    phone: sanitizeInput(formData.phone || ''),
    company: sanitizeInput(formData.company || ''),
    position: sanitizeInput(formData.position || ''),
    inquiryType,
    audience,
    subject: sanitizeInput(formData.subject || ''),
    message: sanitizeInput(formData.message || ''),
    preferredContact: (['email', 'phone', 'either'].includes(formData.preferredContact))
      ? formData.preferredContact as ContactFormData['preferredContact']
      : 'email',
    urgency: (['low', 'medium', 'high'].includes(formData.urgency))
      ? formData.urgency as ContactFormData['urgency']
      : 'medium'
  };
};

export const transformApplicationFormData = (formData: any): ProgramApplicationData => {
  return {
    // Personal Information - sanitized
    firstName: sanitizeInput(formData.firstName || ''),
    lastName: sanitizeInput(formData.lastName || ''),
    email: sanitizeInput(formData.email || ''),
    phone: sanitizeInput(formData.phone || ''),
    nationality: sanitizeInput(formData.nationality || ''),
    linkedinProfile: sanitizeUrl(formData.linkedinProfile || ''),
    currentRole: sanitizeInput(formData.currentRole || ''),
    previousExperience: sanitizeInput(formData.previousExperience || ''),
    
    // Startup Information - sanitized
    startup: {
      name: sanitizeInput(formData.startupName || ''),
      description: sanitizeInput(formData.startupDescription || ''),
      website: sanitizeUrl(formData.startupWebsite || ''),
      industry: sanitizeInput(formData.industry || ''),
      stage: formData.stage || 'idea',
      fundingRaised: sanitizeInput(formData.fundingRaised || ''),
      teamSize: sanitizeInput(formData.teamSize || ''),
      location: sanitizeInput(formData.location || '')
    },
    
    // Program Specific - sanitized
    programType: sanitizeInput(formData.programType || ''),
    motivation: sanitizeInput(formData.motivation || ''),
    expectations: sanitizeInput(formData.expectations || ''),
    referralSource: sanitizeInput(formData.referralSource || ''),
    additionalInfo: sanitizeInput(formData.additionalInfo || '')
  };
};

// Input sanitization function
const sanitizeInput = (input: string): string => {
  if (!input || typeof input !== 'string') return '';
  
  // Remove potentially dangerous characters and scripts
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .trim()
    .slice(0, 1000); // Limit length
};

// URL sanitization function
const sanitizeUrl = (url: string): string => {
  if (!url || typeof url !== 'string') return '';
  
  try {
    // Only allow http and https protocols
    const urlObj = new URL(url);
    if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:') {
      return '';
    }
    return urlObj.toString();
  } catch {
    return '';
  }
};

// URL parameter utilities for pre-filling forms
export const getFormPreFillData = (): Partial<ContactFormData> => {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  
  const inquiryType = urlParams.get('type');
  const audience = urlParams.get('audience');
  const subject = urlParams.get('subject');
  
  return {
    inquiryType: inquiryType && ['program', 'partnership', 'investment', 'general', 'media'].includes(inquiryType) 
      ? inquiryType as ContactFormData['inquiryType'] 
      : undefined,
    audience: audience && ['startup', 'investor', 'partner', 'student', 'other'].includes(audience)
      ? audience as ContactFormData['audience']
      : undefined,
    subject: subject ? sanitizeInput(subject) : undefined
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
