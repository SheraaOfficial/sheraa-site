
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Index from '@/pages/Index';
import NewIndex from '@/pages/NewIndex';

export const ThemeAwareHomepage: React.FC = () => {
  const { currentTheme } = useTheme();
  
  if (currentTheme === 'corporate') {
    return <Index />;
  }
  
  return <NewIndex />;
};
