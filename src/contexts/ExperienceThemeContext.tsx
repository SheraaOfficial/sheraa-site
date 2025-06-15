import * as React from 'react';
import { ReactNode } from 'react';

export type ExperienceTheme = 'main' | 'sef' | 'dashboard';

interface ExperienceThemeContextType {
  theme: ExperienceTheme;
  setTheme: (theme: ExperienceTheme) => void;
  switchToMain: () => void;
  switchToSEF: () => void;
  switchToDashboard: () => void;
}

const ExperienceThemeContext = React.createContext<ExperienceThemeContextType | undefined>(undefined);

interface ExperienceThemeProviderProps {
  children: ReactNode;
}

export const ExperienceThemeProvider: React.FC<ExperienceThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<ExperienceTheme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('sheraa-experience-theme') as ExperienceTheme;
      if (savedTheme && ['main', 'sef', 'dashboard'].includes(savedTheme)) {
        return savedTheme;
      }
    }
    return 'main';
  });

  React.useEffect(() => {
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
  const context = React.useContext(ExperienceThemeContext);
  if (context === undefined) {
    throw new Error('useExperienceTheme must be used within an ExperienceThemeProvider');
  }
  return context;
};
