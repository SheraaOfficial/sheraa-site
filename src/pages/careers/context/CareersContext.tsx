
import React, { createContext, useContext, useState } from 'react';

interface Candidate {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  skills: string[];
  portfolio?: string;
  linkedin?: string;
  coverLetter: string;
  resumeFileName?: string;
  agreeTerms: boolean;
}

interface CareersContextType {
  candidate: Candidate;
  updateCandidate: (field: keyof Candidate, value: any) => void;
  resetForm: () => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isSubmitting: boolean;
  setIsSubmitting: (isSubmitting: boolean) => void;
  submitSuccess: boolean;
  setSubmitSuccess: (success: boolean) => void;
}

const initialCandidate: Candidate = {
  fullName: '',
  email: '',
  phone: '',
  position: '',
  experience: '',
  skills: [],
  portfolio: '',
  linkedin: '',
  coverLetter: '',
  resumeFileName: '',
  agreeTerms: false,
};

const CareersContext = createContext<CareersContextType | undefined>(undefined);

export const CareersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [candidate, setCandidate] = useState<Candidate>(initialCandidate);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const updateCandidate = (field: keyof Candidate, value: any) => {
    setCandidate(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetForm = () => {
    setCandidate(initialCandidate);
    setCurrentStep(0);
    setSubmitSuccess(false);
  };

  return (
    <CareersContext.Provider value={{
      candidate,
      updateCandidate,
      resetForm,
      currentStep,
      setCurrentStep,
      isSubmitting,
      setIsSubmitting,
      submitSuccess,
      setSubmitSuccess
    }}>
      {children}
    </CareersContext.Provider>
  );
};

export const useCareers = () => {
  const context = useContext(CareersContext);
  if (context === undefined) {
    throw new Error('useCareers must be used within a CareersProvider');
  }
  return context;
};
