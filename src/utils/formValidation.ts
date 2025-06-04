import { ContactFormData } from '@/types/forms';
import { ApplicationFormData } from '@/hooks/useApplicationForm';

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean;
  message: string;
}

export interface ValidationSchema {
  [key: string]: ValidationRule[];
}

// Common validation patterns
export const validationPatterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\+]?[1-9][\d]{0,15}$/,
  url: /^https?:\/\/.+/,
  name: /^[a-zA-Z\s]+$/
};

// Common validation messages
export const validationMessages = {
  required: (field: string) => `${field} is required`,
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  minLength: (field: string, min: number) => `${field} must be at least ${min} characters`,
  maxLength: (field: string, max: number) => `${field} must not exceed ${max} characters`,
  pattern: (field: string) => `${field} format is invalid`
};

// Application form validation schema
export const applicationFormSchema: ValidationSchema = {
  firstName: [
    { required: true, message: validationMessages.required('First name') },
    { minLength: 2, message: validationMessages.minLength('First name', 2) },
    { pattern: validationPatterns.name, message: 'First name should only contain letters' }
  ],
  lastName: [
    { required: true, message: validationMessages.required('Last name') },
    { minLength: 2, message: validationMessages.minLength('Last name', 2) },
    { pattern: validationPatterns.name, message: 'Last name should only contain letters' }
  ],
  email: [
    { required: true, message: validationMessages.required('Email') },
    { pattern: validationPatterns.email, message: validationMessages.email }
  ],
  phone: [
    { required: true, message: validationMessages.required('Phone') },
    { pattern: validationPatterns.phone, message: validationMessages.phone }
  ],
  startupName: [
    { required: true, message: validationMessages.required('Startup name') },
    { minLength: 2, message: validationMessages.minLength('Startup name', 2) }
  ],
  startupDescription: [
    { required: true, message: validationMessages.required('Startup description') },
    { minLength: 50, message: validationMessages.minLength('Startup description', 50) },
    { maxLength: 500, message: validationMessages.maxLength('Startup description', 500) }
  ],
  industry: [
    { required: true, message: validationMessages.required('Industry') }
  ],
  stage: [
    { required: true, message: validationMessages.required('Startup stage') }
  ],
  motivation: [
    { required: true, message: validationMessages.required('Motivation') },
    { minLength: 100, message: validationMessages.minLength('Motivation', 100) }
  ]
};

// Contact form validation schema
export const contactFormSchema: ValidationSchema = {
  fullName: [
    { required: true, message: validationMessages.required('Full name') },
    { minLength: 2, message: validationMessages.minLength('Full name', 2) }
  ],
  email: [
    { required: true, message: validationMessages.required('Email') },
    { pattern: validationPatterns.email, message: validationMessages.email }
  ],
  inquiryType: [
    { required: true, message: validationMessages.required('Inquiry type') }
  ],
  subject: [
    { required: true, message: validationMessages.required('Subject') },
    { minLength: 5, message: validationMessages.minLength('Subject', 5) }
  ],
  message: [
    { required: true, message: validationMessages.required('Message') },
    { minLength: 20, message: validationMessages.minLength('Message', 20) }
  ]
};

// Generic validation function
export const validateField = (value: any, rules: ValidationRule[]): string | null => {
  for (const rule of rules) {
    if (rule.required && (!value || (typeof value === 'string' && !value.trim()))) {
      return rule.message;
    }
    
    if (value && rule.minLength && value.length < rule.minLength) {
      return rule.message;
    }
    
    if (value && rule.maxLength && value.length > rule.maxLength) {
      return rule.message;
    }
    
    if (value && rule.pattern && !rule.pattern.test(value)) {
      return rule.message;
    }
    
    if (value && rule.custom && !rule.custom(value)) {
      return rule.message;
    }
  }
  
  return null;
};

// Validate entire form
export const validateForm = (data: any, schema: ValidationSchema): Record<string, string> => {
  const errors: Record<string, string> = {};
  
  Object.keys(schema).forEach(field => {
    const error = validateField(data[field], schema[field]);
    if (error) {
      errors[field] = error;
    }
  });
  
  return errors;
};

// Validate step of multi-step form
export const validateApplicationStep = (step: number, data: ApplicationFormData): Record<string, string> => {
  const stepFields: Record<number, string[]> = {
    1: ['firstName', 'lastName', 'email', 'phone'],
    2: ['startupName', 'startupDescription', 'industry', 'stage'],
    3: ['motivation'],
    4: [] // File uploads and final review
  };
  
  const fieldsToValidate = stepFields[step] || [];
  const stepSchema: ValidationSchema = {};
  
  fieldsToValidate.forEach(field => {
    if (applicationFormSchema[field]) {
      stepSchema[field] = applicationFormSchema[field];
    }
  });
  
  return validateForm(data, stepSchema);
};
