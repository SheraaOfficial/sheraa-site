
import { useState, useEffect } from 'react';
import { useLocalStorage } from './use-local-storage';
import { useTheme } from '@/contexts/ThemeContext';

export const useThemeSelection = () => {
  const [hasSelectedTheme, setHasSelectedTheme] = useLocalStorage('sheraa-theme-selected', false);
  const [showThemeModal, setShowThemeModal] = useState(false);
  
  // Safely get theme context - don't crash if not available
  let currentTheme;
  try {
    const themeContext = useTheme();
    currentTheme = themeContext.currentTheme;
  } catch (error) {
    console.warn('Theme context not available, using default');
    currentTheme = 'dynamic';
  }

  useEffect(() => {
    try {
      // Check if user has made a theme selection
      if (!hasSelectedTheme) {
        // Small delay to allow page to load before showing modal
        const timer = setTimeout(() => {
          setShowThemeModal(true);
        }, 1000);
        
        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.warn('Error in theme selection effect:', error);
    }
  }, [hasSelectedTheme]);

  const handleThemeSelected = () => {
    setHasSelectedTheme(true);
    setShowThemeModal(false);
  };

  const resetThemeSelection = () => {
    setHasSelectedTheme(false);
    setShowThemeModal(true);
  };

  return {
    showThemeModal,
    setShowThemeModal,
    hasSelectedTheme,
    handleThemeSelected,
    resetThemeSelection
  };
};
