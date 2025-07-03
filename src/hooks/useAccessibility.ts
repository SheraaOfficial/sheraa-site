import { useEffect, useState } from 'react';

interface AccessibilityPreferences {
  reduceMotion: boolean;
  highContrast: boolean;
  largeText: boolean;
}

export const useAccessibility = () => {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>({
    reduceMotion: false,
    highContrast: false,
    largeText: false
  });

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    // Get saved preferences from localStorage
    const savedPreferences = localStorage.getItem('accessibility-preferences');
    if (savedPreferences) {
      const parsed = JSON.parse(savedPreferences);
      setPreferences({
        reduceMotion: prefersReducedMotion || parsed.reduceMotion,
        highContrast: prefersHighContrast || parsed.highContrast,
        largeText: parsed.largeText || false
      });
    } else {
      setPreferences({
        reduceMotion: prefersReducedMotion,
        highContrast: prefersHighContrast,
        largeText: false
      });
    }

    // Apply preferences to document
    const applyPreferences = (prefs: AccessibilityPreferences) => {
      document.documentElement.classList.toggle('reduce-motion', prefs.reduceMotion);
      document.documentElement.classList.toggle('high-contrast', prefs.highContrast);
      document.documentElement.classList.toggle('large-text', prefs.largeText);
    };

    applyPreferences(preferences);
  }, []);

  const updatePreference = (key: keyof AccessibilityPreferences, value: boolean) => {
    const newPreferences = { ...preferences, [key]: value };
    setPreferences(newPreferences);
    localStorage.setItem('accessibility-preferences', JSON.stringify(newPreferences));
    
    // Apply to document
    document.documentElement.classList.toggle('reduce-motion', newPreferences.reduceMotion);
    document.documentElement.classList.toggle('high-contrast', newPreferences.highContrast);
    document.documentElement.classList.toggle('large-text', newPreferences.largeText);
  };

  return {
    preferences,
    updatePreference
  };
};

export default useAccessibility;