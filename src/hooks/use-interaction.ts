
import { useState, useEffect } from 'react';

export const useFirstInteraction = () => {
  const [firstInteraction, setFirstInteraction] = useState(false);
  
  useEffect(() => {
    const handleInteraction = () => setFirstInteraction(true);
    
    // Consider first scroll or click as first interaction with passive event listeners
    window.addEventListener('scroll', handleInteraction, { once: true, passive: true });
    window.addEventListener('click', handleInteraction, { once: true });
    
    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
    };
  }, []);
  
  return firstInteraction;
};

export const useDeepScroll = () => {
  const [deepScroll, setDeepScroll] = useState(false);
  
  useEffect(() => {
    // Optimized tracking of deep scroll for the lowest priority components with throttling
    let scrollTimeout: number | null = null;
    const handleScroll = () => {
      if (scrollTimeout === null) {
        scrollTimeout = window.setTimeout(() => {
          if (window.scrollY > window.innerHeight * 0.5) {
            setDeepScroll(true);
            window.removeEventListener('scroll', handleScroll);
          }
          scrollTimeout = null;
        }, 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) window.clearTimeout(scrollTimeout);
    };
  }, []);
  
  return deepScroll;
};
