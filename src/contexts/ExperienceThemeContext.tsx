
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ExperienceTheme = 'main' | 'sef' | 'dashboard';

interface ExperienceThemeContextType {
  theme: ExperienceTheme;
  setTheme: (theme: ExperienceTheme) => void;
  switchToMain: () => void;
  switchToSEF: () => void;
  switchToDashboard: () => void;
}

const ExperienceThemeContext = createContext<ExperienceThemeContextType | undefined>(undefined);

interface ExperienceThemeProviderProps {
  children: ReactNode;
}

export const ExperienceThemeProvider: React.FC<ExperienceThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ExperienceTheme>('main');

  useEffect(() => {
    // Only run on client side to prevent hydration mismatches
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('sheraa-experience-theme') as ExperienceTheme;
      if (savedTheme && ['main', 'sef', 'dashboard'].includes(savedTheme)) {
        setTheme(savedTheme);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sheraa-experience-theme', theme);
    }
  }, [theme]);

  const switchToMain = () => {
    setTheme('main');
  };
  
  const switchToSEF = () => {
    setTheme('sef');
  };
  
  const switchToDashboard = () => {
    setTheme('dashboard');
  };

  const contextValue: ExperienceThemeContextType = {
    theme,
    setTheme,
    switchToMain,
    switchToSEF,
    switchToDashboard
  };

  return (
    <ExperienceThemeContext.Provider value={contextValue}>
      {children}
    </ExperienceThemeContext.Provider>
  );
};

export const useExperienceTheme = (): ExperienceThemeContextType => {
  const context = useContext(ExperienceThemeContext);
  if (context === undefined) {
    throw new Error('useExperienceTheme must be used within an ExperienceThemeProvider');
  }
  return context;
};
