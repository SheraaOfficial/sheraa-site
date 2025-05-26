
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const AppWrapper: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="relative">
          <ThemeToggle />
          <App />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppWrapper;
