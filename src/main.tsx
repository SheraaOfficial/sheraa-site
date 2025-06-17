
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/mobile-optimizations.css';
import './index.css';

console.log('Main: Starting React application');
console.log('React version:', React.version);
console.log('React object:', React);

// Ensure React is available globally for debugging
if (typeof window !== 'undefined') {
  (window as any).React = React;
}

// Ensure we have a root element
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found. Make sure there is a div with id="root" in your HTML.');
}

console.log('Main: Root element found, creating React root');

// Verify React is available before proceeding
if (!React || !React.useState || !React.useContext) {
  console.error('React is not properly available:', React);
  throw new Error('React is not properly initialized');
}

// Create root and render app with additional error handling
const root = createRoot(rootElement);

try {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  console.log('Main: React application rendered successfully');
} catch (error) {
  console.error('Main: Error rendering React application:', error);
  // Fallback rendering without StrictMode if there's an issue
  try {
    root.render(<App />);
    console.log('Main: React application rendered successfully (without StrictMode)');
  } catch (fallbackError) {
    console.error('Main: Fallback rendering also failed:', fallbackError);
    throw error;
  }
}
