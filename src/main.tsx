
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/mobile-optimizations.css';
import './index.css';

// Ensure React is globally available for debugging
if (typeof window !== 'undefined') {
  (window as any).React = React;
}

console.log('main.tsx loaded');
console.log('React available:', !!React);
console.log('React.useState available:', !!React.useState);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
