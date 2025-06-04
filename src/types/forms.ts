
export interface BaseFormData {
  [key: string]: any;
}

export interface FormStep {
  id: string;
  title: string;
  description?: string;
  fields: string[];
  isOptional?: boolean;
}

export interface FormConfig {
  steps: FormStep[];
  totalSteps: number;
  allowSkipSteps?: boolean;
  saveProgress?: boolean;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  data?: any;
  errors?: ValidationError[];
}

// Application Form Types
export interface StartupFormData {
  name: string;
  description: string;
  website?: string;
  industry: string;
  stage: 'idea' | 'mvp' | 'early-revenue' | 'growth' | 'scale';
  fundingRaised: string;
  teamSize: string;
  location: string;
}

export interface PersonalFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  linkedinProfile?: string;
  currentRole?: string;
  previousExperience?: string;
}

export interface ProgramApplicationData extends PersonalFormData {
  startup: StartupFormData;
  programType: string;
  motivation: string;
  expectations: string;
  referralSource?: string;
  additionalInfo?: string;
}

// Contact Form Types
export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  position?: string;
  inquiryType: 'program' | 'partnership' | 'investment' | 'general' | 'media';
  audience: 'startup' | 'investor' | 'partner' | 'student' | 'other';
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'either';
  urgency: 'low' | 'medium' | 'high';
}

// Membership Form Types
export interface MembershipApplicationData extends PersonalFormData {
  startup: StartupFormData;
  membershipType: 'individual' | 'startup' | 'corporate';
  interests: string[];
  goals: string[];
  networkingPreferences: string[];
  eventInterests: string[];
}

// Investment Form Types
export interface InvestorProfileData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  position: string;
  investorType: 'angel' | 'vc' | 'corporate' | 'family-office' | 'government';
  investmentFocus: string[];
  checkSize: string;
  geographicFocus: string[];
  previousInvestments?: string;
  linkedinProfile?: string;
}

export interface StartupProfileData extends StartupFormData {
  founders: PersonalFormData[];
  financials: {
    currentRevenue?: string;
    projectedRevenue?: string;
    burnRate?: string;
    cashRunway?: string;
  };
  fundraising: {
    targetAmount: string;
    useOfFunds: string;
    previousRounds?: string;
    currentInvestors?: string;
  };
  traction: {
    customers?: string;
    userGrowth?: string;
    partnerships?: string;
    achievements?: string;
  };
}
