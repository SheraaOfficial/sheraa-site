import React, { createContext, useContext } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Create a simple context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key
});

// Simple translation function that just returns the key for now
const t = (key: string): string => {
  return key;
};

// Simple hook that doesn't require a provider
export const useLanguage = (): LanguageContextType => {
  return {
    language: 'en',
    setLanguage: () => {},
    t
  };
};