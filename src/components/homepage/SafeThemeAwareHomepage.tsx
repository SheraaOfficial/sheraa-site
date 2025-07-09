import React, { Suspense } from 'react';
import { ComprehensiveErrorBoundary, LazyLoadingErrorFallback } from '@/components/layout/ComprehensiveErrorBoundary';

// Lazy load all theme components to prevent initial loading issues
const UltimateHomepage = React.lazy(() => 
  import('@/pages/NewIndex').then(module => ({ default: module.default })).catch(error => {
    console.error('Failed to load UltimateHomepage:', error);
    return import('@/components/homepage/SimpleHomepage');
  })
);

const CorporateHomepage = React.lazy(() => 
  import('@/pages/Index').then(module => ({ default: module.default })).catch(error => {
    console.error('Failed to load CorporateHomepage:', error);
    return import('@/components/homepage/SimpleHomepage');
  })
);

const SimpleHomepage = React.lazy(() => 
  import('@/components/homepage/SimpleHomepage').then(module => ({ default: module.default }))
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
  console.log('SafeThemeAwareHomepage: Starting render');
  
  let currentTheme = 'dynamic'; // Default fallback
  
  // Safely try to get theme from URL or context
  try {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const themeParam = urlParams.get('theme');
      if (themeParam) {
        currentTheme = themeParam;
        console.log('SafeThemeAwareHomepage: Theme from URL:', themeParam);
      }
    }
    console.log('SafeThemeAwareHomepage: Using theme:', currentTheme);
  } catch (error) {
    console.error('SafeThemeAwareHomepage: Error reading theme from URL:', error);
    // Fallback to basic homepage on any error
    return (
      <Suspense fallback={<LoadingFallback />}>
        <UltimateHomepage />
      </Suspense>
    );
  }

  const renderTheme = () => {
    console.log('SafeThemeAwareHomepage: renderTheme called with theme:', currentTheme);
    
    // Progressive fallback strategy: Corporate -> Ultimate -> Simple
    try {
      switch (currentTheme) {
        case 'corporate':
          console.log('SafeThemeAwareHomepage: Rendering CorporateHomepage');
          return (
            <ComprehensiveErrorBoundary 
              fallback={() => (
                <Suspense fallback={<LoadingFallback />}>
                  <UltimateHomepage />
                </Suspense>
              )}
              maxRetries={1}
            >
              <Suspense fallback={<LoadingFallback />}>
                <CorporateHomepage />
              </Suspense>
            </ComprehensiveErrorBoundary>
          );
        case 'dynamic':
        case 'ultimate':
        default:
          console.log('SafeThemeAwareHomepage: Rendering UltimateHomepage');
          return (
            <ComprehensiveErrorBoundary 
              fallback={() => (
                <Suspense fallback={<LoadingFallback />}>
                  <SimpleHomepage />
                </Suspense>
              )}
              maxRetries={1}
            >
              <Suspense fallback={<LoadingFallback />}>
                <UltimateHomepage />
              </Suspense>
            </ComprehensiveErrorBoundary>
          );
      }
    } catch (error) {
      console.error('SafeThemeAwareHomepage: Critical theme rendering error:', error);
      // Final safety net
      return (
        <Suspense fallback={<LoadingFallback />}>
          <SimpleHomepage />
        </Suspense>
      );
    }
  };

  return (
    <ComprehensiveErrorBoundary 
      fallback={LazyLoadingErrorFallback}
      onError={(error, errorInfo) => {
        console.error('Theme loading error:', error);
        console.error('Error info:', errorInfo);
      }}
      maxRetries={2}
    >
      {renderTheme()}
    </ComprehensiveErrorBoundary>
  );
};