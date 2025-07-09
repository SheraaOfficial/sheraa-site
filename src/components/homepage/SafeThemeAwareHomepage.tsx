import React, { Suspense } from 'react';
import { ErrorBoundary, ThemeErrorFallback } from '@/components/layout/ErrorBoundary';

// Lazy load all theme components to prevent initial loading issues
const UltimateHomepage = React.lazy(() => 
  import('@/pages/NewIndex').then(module => ({ default: module.default }))
);

const CorporateHomepage = React.lazy(() => 
  import('@/pages/Index').then(module => ({ default: module.default }))
);

const DynamicHomepage = React.lazy(() => 
  import('@/pages/NewIndex').then(module => ({ default: module.default }))
);

// Simple loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sheraa-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

// Safe theme renderer with fallbacks
export const SafeThemeAwareHomepage: React.FC = () => {
  let currentTheme = 'dynamic'; // Default fallback
  
  // Safely try to get theme from URL or context
  try {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const themeParam = urlParams.get('theme');
      if (themeParam) {
        currentTheme = themeParam;
      }
    }
  } catch (error) {
    console.warn('Could not read theme from URL, using default');
  }

  const renderTheme = () => {
    switch (currentTheme) {
      case 'corporate':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <CorporateHomepage />
          </Suspense>
        );
      case 'dynamic':
      case 'ultimate':
      default:
        return (
          <Suspense fallback={<LoadingFallback />}>
            <UltimateHomepage />
          </Suspense>
        );
    }
  };

  return (
    <ErrorBoundary fallback={ThemeErrorFallback}>
      {renderTheme()}
    </ErrorBoundary>
  );
};