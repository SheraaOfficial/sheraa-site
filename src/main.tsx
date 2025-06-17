
import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/mobile-optimizations.css';
import './index.css';

console.log('Main: Starting React application');
console.log('React version:', React.version);

// Ensure we have a root element
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found. Make sure there is a div with id="root" in your HTML.');
}

console.log('Main: Root element found, creating React root');

// Create root and render app
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
  throw error;
}
