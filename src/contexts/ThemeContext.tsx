
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type HomepageTheme = 'corporate' | 'dynamic';

interface ThemeMetadata {
  id: HomepageTheme;
  name: string;
  description: string;
  targetAudience: string;
  keyFeatures: string[];
  useCase: string;
}

interface ThemeContextType {
  currentTheme: HomepageTheme;
  setTheme: (theme: HomepageTheme) => void;
  availableThemes: ThemeMetadata[];
  isPreviewMode: boolean;
  setPreviewMode: (enabled: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themeMetadata: ThemeMetadata[] = [
  {
    id: 'corporate',
    name: 'Corporate Professional',
    description: 'Clean, professional design focusing on credibility and detailed information presentation',
    targetAudience: 'Corporate Partners, Government Officials, Investors',
    keyFeatures: [
      'Formal design language',
      'Detailed impact metrics',
      'Professional testimonials',
      'Comprehensive program overview'
    ],
    useCase: 'Ideal for formal presentations and stakeholder meetings'
  },
  {
    id: 'dynamic',
    name: 'Dynamic Performance',
    description: 'Modern, engaging design with performance optimization and interactive elements',
    targetAudience: 'Entrepreneurs, Students, Tech Community',
    keyFeatures: [
      'Performance-optimized loading',
      'Interactive animations',
      'Modern visual effects',
      'Mobile-first approach'
    ],
    useCase: 'Perfect for engaging young entrepreneurs and showcasing innovation'
  }
];

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<HomepageTheme>('dynamic');
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  useEffect(() => {
    // Check URL parameters for theme selection
    const urlParams = new URLSearchParams(window.location.search);
    const themeParam = urlParams.get('theme') as HomepageTheme;
    const previewParam = urlParams.get('preview') === 'true';
    
    if (themeParam && ['corporate', 'dynamic'].includes(themeParam)) {
      setCurrentTheme(themeParam);
    }
    
    if (previewParam) {
      setIsPreviewMode(true);
    }
  }, []);

  const setTheme = (theme: HomepageTheme) => {
    setCurrentTheme(theme);
    
    // Update URL parameters
    const url = new URL(window.location.href);
    url.searchParams.set('theme', theme);
    window.history.pushState({}, '', url.toString());
  };

  const setPreviewMode = (enabled: boolean) => {
    setIsPreviewMode(enabled);
    
    // Update URL parameters
    const url = new URL(window.location.href);
    if (enabled) {
      url.searchParams.set('preview', 'true');
    } else {
      url.searchParams.delete('preview');
    }
    window.history.pushState({}, '', url.toString());
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        availableThemes: themeMetadata,
        isPreviewMode,
        setPreviewMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
