
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilityContextType {
  fontSize: 'normal' | 'large' | 'extra-large';
  highContrast: boolean;
  reduceMotion: boolean;
  screenReaderOnly: boolean;
  setFontSize: (size: 'normal' | 'large' | 'extra-large') => void;
  toggleHighContrast: () => void;
  toggleReduceMotion: () => void;
  toggleScreenReaderMode: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extra-large'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [screenReaderOnly, setScreenReaderOnly] = useState(false);

  // Detect user preferences on mount
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setReduceMotion(true);
    }

    // Check for high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    if (prefersHighContrast) {
      setHighContrast(true);
    }

    // Load saved preferences
    const savedFontSize = localStorage.getItem('accessibility-font-size') as 'normal' | 'large' | 'extra-large';
    if (savedFontSize) {
      setFontSize(savedFontSize);
    }

    const savedHighContrast = localStorage.getItem('accessibility-high-contrast') === 'true';
    setHighContrast(prev => savedHighContrast || prev);

    const savedReduceMotion = localStorage.getItem('accessibility-reduce-motion') === 'true';
    setReduceMotion(prev => savedReduceMotion || prev);
  }, []);

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Font size
    root.classList.remove('large-text', 'extra-large-text');
    if (fontSize === 'large') root.classList.add('large-text');
    if (fontSize === 'extra-large') root.classList.add('extra-large-text');
    
    // High contrast
    root.classList.toggle('high-contrast', highContrast);
    
    // Reduced motion
    root.classList.toggle('reduce-motion', reduceMotion);

    // Save preferences
    localStorage.setItem('accessibility-font-size', fontSize);
    localStorage.setItem('accessibility-high-contrast', String(highContrast));
    localStorage.setItem('accessibility-reduce-motion', String(reduceMotion));
  }, [fontSize, highContrast, reduceMotion]);

  const toggleHighContrast = () => setHighContrast(prev => !prev);
  const toggleReduceMotion = () => setReduceMotion(prev => !prev);
  const toggleScreenReaderMode = () => setScreenReaderOnly(prev => !prev);

  return (
    <AccessibilityContext.Provider value={{
      fontSize,
      highContrast,
      reduceMotion,
      screenReaderOnly,
      setFontSize,
      toggleHighContrast,
      toggleReduceMotion,
      toggleScreenReaderMode
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
