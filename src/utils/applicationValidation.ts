
import { ApplicationFormData } from '@/hooks/useApplicationForm';

export interface ValidationError {
  field: string;
  message: string;
}

export interface StepValidation {
  isValid: boolean;
  errors: ValidationError[];
  completionPercentage: number;
}

// Validation rules for each step
export const validatePersonalInformation = (data: Partial<ApplicationFormData>): StepValidation => {
  const errors: ValidationError[] = [];
  const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
  
  if (!data.firstName?.trim()) {
    errors.push({ field: 'firstName', message: 'First name is required' });
  }
  
  if (!data.lastName?.trim()) {
    errors.push({ field: 'lastName', message: 'Last name is required' });
  }
  
  if (!data.email?.trim()) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }
  
  if (!data.phone?.trim()) {
    errors.push({ field: 'phone', message: 'Phone number is required' });
  } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(data.phone.replace(/\s/g, ''))) {
    errors.push({ field: 'phone', message: 'Please enter a valid phone number' });
  }
  
  const completedFields = requiredFields.filter(field => 
    data[field as keyof ApplicationFormData]?.toString().trim()
  ).length;
  
  return {
    isValid: errors.length === 0,
    errors,
    completionPercentage: Math.round((completedFields / requiredFields.length) * 100)
  };
};

export const validateStartupInformation = (data: Partial<ApplicationFormData>): StepValidation => {
  const errors: ValidationError[] = [];
  const requiredFields = ['startupName', 'startupDescription', 'industry', 'stage'];
  
  if (!data.startupName?.trim()) {
    errors.push({ field: 'startupName', message: 'Startup name is required' });
  }
  
  if (!data.startupDescription?.trim()) {
    errors.push({ field: 'startupDescription', message: 'Startup description is required' });
  } else if (data.startupDescription.length < 50) {
    errors.push({ field: 'startupDescription', message: 'Description must be at least 50 characters' });
  }
  
  if (!data.industry?.trim()) {
    errors.push({ field: 'industry', message: 'Industry selection is required' });
  }
  
  if (!data.stage?.trim()) {
    errors.push({ field: 'stage', message: 'Startup stage is required' });
  }
  
  const completedFields = requiredFields.filter(field => 
    data[field as keyof ApplicationFormData]?.toString().trim()
  ).length;
  
  return {
    isValid: errors.length === 0,
    errors,
    completionPercentage: Math.round((completedFields / requiredFields.length) * 100)
  };
};

export const validateBusinessModel = (data: Partial<ApplicationFormData>): StepValidation => {
  const errors: ValidationError[] = [];
  const requiredFields = ['businessModel', 'targetMarket'];
  
  if (!data.businessModel?.trim()) {
    errors.push({ field: 'businessModel', message: 'Business model description is required' });
  } else if (data.businessModel.length < 100) {
    errors.push({ field: 'businessModel', message: 'Business model must be at least 100 characters' });
  }
  
  if (!data.targetMarket?.trim()) {
    errors.push({ field: 'targetMarket', message: 'Target market description is required' });
  } else if (data.targetMarket.length < 50) {
    errors.push({ field: 'targetMarket', message: 'Target market must be at least 50 characters' });
  }
  
  const completedFields = requiredFields.filter(field => 
    data[field as keyof ApplicationFormData]?.toString().trim()
  ).length;
  
  return {
    isValid: errors.length === 0,
    errors,
    completionPercentage: Math.round((completedFields / requiredFields.length) * 100)
  };
};

export const validateProgramFit = (data: Partial<ApplicationFormData>): StepValidation => {
  const errors: ValidationError[] = [];
  const requiredFields = ['whyProgram', 'expectedOutcomes'];
  
  if (!data.whyProgram?.trim()) {
    errors.push({ field: 'whyProgram', message: 'Please explain why this program is right for you' });
  } else if (data.whyProgram.length < 100) {
    errors.push({ field: 'whyProgram', message: 'Response must be at least 100 characters' });
  }
  
  if (!data.expectedOutcomes?.trim()) {
    errors.push({ field: 'expectedOutcomes', message: 'Please describe your expected outcomes' });
  } else if (data.expectedOutcomes.length < 100) {
    errors.push({ field: 'expectedOutcomes', message: 'Response must be at least 100 characters' });
  }
  
  const completedFields = requiredFields.filter(field => 
    data[field as keyof ApplicationFormData]?.toString().trim()
  ).length;
  
  return {
    isValid: errors.length === 0,
    errors,
    completionPercentage: Math.round((completedFields / requiredFields.length) * 100)
  };
};

export const validateDocuments = (data: Partial<ApplicationFormData>): StepValidation => {
  const errors: ValidationError[] = [];
  
  if (!data.pitchDeck) {
    errors.push({ field: 'pitchDeck', message: 'Pitch deck is required' });
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    completionPercentage: data.pitchDeck ? 100 : 0
  };
};

// Main validation function for any step
export const validateApplicationStep = (stepId: string, data: Partial<ApplicationFormData>): StepValidation => {
  switch (stepId) {
    case 'personal':
      return validatePersonalInformation(data);
    case 'startup':
      return validateStartupInformation(data);
    case 'business':
      return validateBusinessModel(data);
    case 'fit':
      return validateProgramFit(data);
    case 'documents':
      return validateDocuments(data);
    default:
      return { isValid: true, errors: [], completionPercentage: 0 };
  }
};
