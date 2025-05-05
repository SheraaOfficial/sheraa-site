
import React from 'react';
import App from './App';
import { PerformanceProvider } from './contexts/PerformanceContext';

export default function AppWrapper() {
  return (
    <PerformanceProvider>
      <App />
    </PerformanceProvider>
  );
}
