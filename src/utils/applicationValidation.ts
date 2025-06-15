
import { ApplicationFormData } from '@/hooks/useApplicationForm';

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export const validateApplicationStep = (
  stepId: string,
  formData: Partial<ApplicationFormData>
): ValidationResult => {
  const errors: ValidationError[] = [];

  switch (stepId) {
    case 'personal':
      if (!formData.firstName?.trim()) {
        errors.push({ field: 'firstName', message: 'First name is required' });
      }
      if (!formData.lastName?.trim()) {
        errors.push({ field: 'lastName', message: 'Last name is required' });
      }
      if (!formData.email?.trim()) {
        errors.push({ field: 'email', message: 'Email is required' });
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.push({ field: 'email', message: 'Please enter a valid email address' });
      }
      if (!formData.phone?.trim()) {
        errors.push({ field: 'phone', message: 'Phone number is required' });
      }
      break;

    case 'startup':
      if (!formData.startupName?.trim()) {
        errors.push({ field: 'startupName', message: 'Startup name is required' });
      }
      if (!formData.startupDescription?.trim()) {
        errors.push({ field: 'startupDescription', message: 'Startup description is required' });
      } else if (formData.startupDescription.length < 50) {
        errors.push({ field: 'startupDescription', message: 'Description must be at least 50 characters' });
      }
      if (!formData.industry?.trim()) {
        errors.push({ field: 'industry', message: 'Industry is required' });
      }
      if (!formData.stage?.trim()) {
        errors.push({ field: 'stage', message: 'Startup stage is required' });
      }
      break;

    case 'business':
      if (!formData.businessModel?.trim()) {
        errors.push({ field: 'businessModel', message: 'Business model is required' });
      } else if (formData.businessModel.length < 100) {
        errors.push({ field: 'businessModel', message: 'Business model must be at least 100 characters' });
      }
      if (!formData.targetMarket?.trim()) {
        errors.push({ field: 'targetMarket', message: 'Target market is required' });
      } else if (formData.targetMarket.length < 50) {
        errors.push({ field: 'targetMarket', message: 'Target market must be at least 50 characters' });
      }
      break;

    case 'fit':
      if (!formData.whyProgram?.trim()) {
        errors.push({ field: 'whyProgram', message: 'Why this program is required' });
      } else if (formData.whyProgram.length < 100) {
        errors.push({ field: 'whyProgram', message: 'Response must be at least 100 characters' });
      }
      if (!formData.expectedOutcomes?.trim()) {
        errors.push({ field: 'expectedOutcomes', message: 'Expected outcomes is required' });
      } else if (formData.expectedOutcomes.length < 50) {
        errors.push({ field: 'expectedOutcomes', message: 'Expected outcomes must be at least 50 characters' });
      }
      break;

    case 'documents':
      if (!formData.pitchDeck) {
        errors.push({ field: 'pitchDeck', message: 'Pitch deck is required' });
      }
      break;
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateCompleteApplication = (formData: ApplicationFormData): ValidationResult => {
  const errors: ValidationError[] = [];
  
  // Validate all steps
  const steps = ['personal', 'startup', 'business', 'fit', 'documents'];
  
  steps.forEach(stepId => {
    const stepValidation = validateApplicationStep(stepId, formData);
    errors.push(...stepValidation.errors);
  });

  return {
    isValid: errors.length === 0,
    errors
  };
};
