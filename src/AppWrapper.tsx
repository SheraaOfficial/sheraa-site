
import React, { Suspense, useEffect } from 'react';
import App from './App';
import { PerformanceProvider } from './contexts/PerformanceContext';
import { ErrorBoundary } from './components/layout/ErrorBoundary';

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
  // Preconnect to commonly used domains for performance
  useEffect(() => {
    const preconnectLinks = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];
    
    preconnectLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      if (href.includes('gstatic')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
    
    return () => {
      document.querySelectorAll('link[rel="preconnect"]').forEach(el => el.remove());
    };
  }, []);
  
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
      <PerformanceProvider>
        <Suspense fallback={<AppLoading />}>
          <App />
        </Suspense>
      </PerformanceProvider>
    </ErrorBoundary>
  );
}
