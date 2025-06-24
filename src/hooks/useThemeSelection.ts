
import { useState, useEffect } from 'react';
import { useLocalStorage } from './use-local-storage';
import { useTheme } from '@/contexts/ThemeContext';

export const useThemeSelection = () => {
  const [hasSelectedTheme, setHasSelectedTheme] = useLocalStorage('sheraa-theme-selected', false);
  const [showThemeModal, setShowThemeModal] = useState(false);
  const { currentTheme } = useTheme();

  useEffect(() => {
    // Check if user has made a theme selection
    if (!hasSelectedTheme) {
      // Small delay to allow page to load before showing modal
      const timer = setTimeout(() => {
        setShowThemeModal(true);
      }, 1000);
      
      return () => clearTimeout(timer);
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
