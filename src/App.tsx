
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/toaster"
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ExperienceThemeProvider } from './contexts/ExperienceThemeContext';
import { ThemeProvider as HomepageThemeProvider } from './contexts/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

import { AccessibilityProvider } from '@/components/accessibility/AccessibilityProvider';
import { PerformanceProvider } from '@/contexts/PerformanceContext';
import SEOHead from '@/components/SEO/SEOHead';

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
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
                        <SEOHead />
                        <div className="min-h-screen bg-background text-foreground">
                          <Toaster />
                          <AppRoutes />
                        </div>
                      </PerformanceProvider>
                    </AccessibilityProvider>
                  </LanguageProvider>
                </AuthProvider>
              </ExperienceThemeProvider>
            </HomepageThemeProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
