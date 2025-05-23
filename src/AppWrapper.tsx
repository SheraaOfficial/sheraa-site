
import React from 'react';
import App from './App';
import { PerformanceProvider } from './contexts/PerformanceContext';
import { ErrorBoundary } from './components/layout/ErrorBoundary';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ui/theme-toggle';

// Fallback component for when the app fails to load
const ErrorFallbackComponent = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md">
      <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Something went wrong</h1>
      <p className="mb-4 dark:text-gray-300">We're sorry, but there was an error loading the application.</p>
      <button 
        className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white px-4 py-2 rounded" 
        onClick={() => window.location.reload()}
      >
        Refresh the page
      </button>
    </div>
  </div>
);

// App loading component for better UX
const AppLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div className="w-16 h-16 border-4 border-sheraa-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function AppWrapper() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
      <PerformanceProvider>
        <ThemeProvider>
          <React.Suspense fallback={<AppLoading />}>
            <App />
          </React.Suspense>
        </ThemeProvider>
      </PerformanceProvider>
    </ErrorBoundary>
  );
}
