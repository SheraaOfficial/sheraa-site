
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/mobile-optimizations.css';
import './index.css';

console.log('Main: Starting React application');
console.log('React version:', React.version);
console.log('React object:', React);

// Ensure React is available globally for debugging
if (typeof window !== 'undefined') {
  (window as any).React = React;
}

// Comprehensive React availability check
const checkReactAvailability = () => {
  const checks = {
    React: !!React,
    useState: !!(React && React.useState),
    useEffect: !!(React && React.useEffect),
    useContext: !!(React && React.useContext),
    createElement: !!(React && React.createElement),
    Fragment: !!(React && React.Fragment)
  };
  
  console.log('React availability checks:', checks);
  
  const missingFeatures = Object.entries(checks)
    .filter(([, available]) => !available)
    .map(([feature]) => feature);
    
  if (missingFeatures.length > 0) {
    throw new Error(`React features not available: ${missingFeatures.join(', ')}`);
  }
  
  return true;
};

// Verify React before proceeding
try {
  checkReactAvailability();
  console.log('Main: React availability check passed');
} catch (error) {
  console.error('Main: React availability check failed:', error);
  throw error;
}

// Ensure we have a root element
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found. Make sure there is a div with id="root" in your HTML.');
}

console.log('Main: Root element found, creating React root');

// Dynamically import App to ensure React is fully initialized
const initializeApp = async () => {
  try {
    // Verify React one more time before importing App
    checkReactAvailability();
    
    const { default: App } = await import('./App');
    console.log('Main: App component imported successfully');
    
    const root = createRoot(rootElement);
    
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    
    console.log('Main: React application rendered successfully');
  } catch (error) {
    console.error('Main: Error during app initialization:', error);
    
    // Fallback: render basic error message
    rootElement.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; text-align: center; font-family: system-ui, -apple-system, sans-serif;">
        <div>
          <h1 style="color: #dc2626; margin-bottom: 16px;">Application Error</h1>
          <p style="color: #666; margin-bottom: 16px;">Failed to initialize the React application.</p>
          <button onclick="window.location.reload()" style="background: #3b82f6; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;">
            Reload Page
          </button>
        </div>
      </div>
    `;
  }
};

// Initialize the app
initializeApp();
