
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/toaster"
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ExperienceThemeProvider } from './contexts/ExperienceThemeContext';
import { HomepageThemeProvider } from './contexts/ThemeContext';
import { AnalyticsProvider } from './contexts/AnalyticsContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { AccessibilityProvider } from '@/components/accessibility/AccessibilityProvider';
import { PerformanceProvider } from '@/contexts/PerformanceContext';
import SEOHead from '@/components/SEO/SEOHead';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider 
          defaultTheme="light" 
          storageKey="sheraa-ui-theme"
          attribute="class"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <HomepageThemeProvider>
            <ExperienceThemeProvider>
              <AuthProvider>
                <LanguageProvider>
                  <AccessibilityProvider>
                    <PerformanceProvider>
                      <AnalyticsProvider>
                        <BrowserRouter>
                          <SEOHead />
                          <div className="min-h-screen bg-background text-foreground sheraa-gradient-bg">
                            <Toaster />
                            <AppRoutes />
                          </div>
                        </BrowserRouter>
                      </AnalyticsProvider>
                    </PerformanceProvider>
                  </AccessibilityProvider>
                </LanguageProvider>
              </AuthProvider>
            </ExperienceThemeProvider>
          </HomepageThemeProvider>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
