
import React from 'react';
import App from './App';
import { PerformanceProvider } from './contexts/PerformanceContext';
import { ErrorBoundary } from './components/layout/ErrorBoundary';
import { ThemeProvider } from './contexts/ThemeContext';

// Fallback component for when the app fails to load
const ErrorFallbackComponent = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
      <p className="mb-4">We're sorry, but there was an error loading the application.</p>
      <button 
        className="bg-primary text-white px-4 py-2 rounded" 
        onClick={() => window.location.reload()}
      >
        Refresh the page
      </button>
    </div>
  </div>
);

// App loading component for better UX
const AppLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function AppWrapper() {
  // Moving this to App.tsx to avoid hook issues
  // The error suggests useEffect is not being used correctly in a component
  
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
