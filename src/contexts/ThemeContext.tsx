import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type HomepageTheme = 'corporate' | 'dynamic' | 'immersive' | 'floating' | 'video' | 'cinematic' | 'ultimate';

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
  },
  {
    id: 'immersive',
    name: 'Immersive Experience',
    description: 'Rich visual experience with immersive hero section and advanced animations',
    targetAudience: 'Creative Community, Visual Learners',
    keyFeatures: [
      'Immersive visual design',
      'Advanced motion graphics',
      'Creative storytelling',
      'Rich interactions'
    ],
    useCase: 'Best for creative showcases and visual impact'
  },
  {
    id: 'floating',
    name: 'Floating Elements',
    description: 'Playful design with floating images and dynamic visual elements',
    targetAudience: 'Young Entrepreneurs, Students',
    keyFeatures: [
      'Floating image animations',
      'Playful interactions',
      'Dynamic visual elements',
      'Engaging user experience'
    ],
    useCase: 'Great for engaging younger audiences and student programs'
  },
  {
    id: 'video',
    name: 'Video Background',
    description: 'Video-driven experience with entrepreneur stories and testimonials',
    targetAudience: 'Media-focused Audiences, Storytellers',
    keyFeatures: [
      'Video background hero',
      'Story-driven content',
      'Multimedia experience',
      'Emotional engagement'
    ],
    useCase: 'Perfect for storytelling and emotional connection'
  },
  {
    id: 'cinematic',
    name: 'Cinematic Hero',
    description: 'Cinematic approach with dramatic visuals and sophisticated animations',
    targetAudience: 'High-profile Events, Premium Audiences',
    keyFeatures: [
      'Cinematic visuals',
      'Premium aesthetics',
      'Sophisticated animations',
      'Dramatic impact'
    ],
    useCase: 'Ideal for high-profile events and premium presentations'
  },
  {
    id: 'ultimate',
    name: 'Ultimate Performance',
    description: 'Feature-rich experience combining the best elements from all themes',
    targetAudience: 'All Audiences, Comprehensive Use',
    keyFeatures: [
      'Comprehensive features',
      'Adaptive design',
      'Rich content sections',
      'Maximum engagement'
    ],
    useCase: 'All-in-one solution for maximum impact and functionality'
  }
];

interface ThemeProviderProps {
  children: ReactNode;
}

export const HomepageThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<HomepageTheme>('dynamic');
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') {
      setIsInitialized(true);
      return;
    }

    try {
      // Safely check URL parameters for theme selection
      const urlParams = new URLSearchParams(window.location.search);
      const themeParam = urlParams.get('theme') as HomepageTheme;
      const previewParam = urlParams.get('preview') === 'true';
      
      if (themeParam && themeMetadata.some(t => t.id === themeParam)) {
        setCurrentTheme(themeParam);
      }
      
      if (previewParam) {
        setIsPreviewMode(true);
      }
    } catch (error) {
      console.warn('Error reading URL parameters:', error);
      // Fallback to default theme
      setCurrentTheme('dynamic');
    } finally {
      setIsInitialized(true);
    }
  }, []);

  const setTheme = (theme: HomepageTheme) => {
    try {
      setCurrentTheme(theme);
      
      // Safely update URL parameters
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.set('theme', theme);
        window.history.pushState({}, '', url.toString());
      }
    } catch (error) {
      console.warn('Error setting theme:', error);
      // Still update the theme state even if URL update fails
      setCurrentTheme(theme);
    }
  };

  const setPreviewMode = (enabled: boolean) => {
    try {
      setIsPreviewMode(enabled);
      
      // Safely update URL parameters
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        if (enabled) {
          url.searchParams.set('preview', 'true');
        } else {
          url.searchParams.delete('preview');
        }
        window.history.pushState({}, '', url.toString());
      }
    } catch (error) {
      console.warn('Error setting preview mode:', error);
      // Still update the state even if URL update fails
      setIsPreviewMode(enabled);
    }
  };

  // Don't render children until initialized to prevent hook violations
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sheraa-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading theme...</p>
        </div>
      </div>
    );
  }

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
    // Return safe defaults instead of throwing
    return {
      currentTheme: 'dynamic',
      setTheme: () => {},
      availableThemes: themeMetadata,
      isPreviewMode: false,
      setPreviewMode: () => {}
    };
  }
  return context;
};
