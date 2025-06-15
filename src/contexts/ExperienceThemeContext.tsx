
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ExperienceTheme = 'minimal' | 'vibrant' | 'professional' | 'creative';

interface ExperienceThemeContextType {
  currentTheme: ExperienceTheme;
  setTheme: (theme: ExperienceTheme) => void;
}

const ExperienceThemeContext = createContext<ExperienceThemeContextType | undefined>(undefined);

interface ExperienceThemeProviderProps {
  children: ReactNode;
}

export const ExperienceThemeProvider: React.FC<ExperienceThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ExperienceTheme>('vibrant');

  const setTheme = (theme: ExperienceTheme) => {
    setCurrentTheme(theme);
  };

  return (
    <ExperienceThemeContext.Provider
      value={{
        currentTheme,
        setTheme
      }}
    >
      {children}
    </ExperienceThemeContext.Provider>
  );
};

export const useExperienceTheme = (): ExperienceThemeContextType => {
  const context = useContext(ExperienceThemeContext);
  if (!context) {
    throw new Error('useExperienceTheme must be used within an ExperienceThemeProvider');
  }
  return context;
};
