
import { useState, useEffect } from 'react';

export const useFirstInteraction = (): boolean => {
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (hasInteracted) return;

    // Events that indicate user interaction
    const interactionEvents = [
      'mousemove',
      'click',
      'keydown',
      'touchstart',
      'scroll',
    ];

    const handleInteraction = () => {
      setHasInteracted(true);
      
      // Remove all event listeners once interaction has been detected
      interactionEvents.forEach(event => {
        window.removeEventListener(event, handleInteraction);
      });
    };

    // Add event listeners for all interaction types
    interactionEvents.forEach(event => {
      window.addEventListener(event, handleInteraction, { passive: true });
    });

    // Auto-trigger after a timeout (optional)
    const timer = setTimeout(() => {
      handleInteraction();
    }, 3000);

    return () => {
      interactionEvents.forEach(event => {
        window.removeEventListener(event, handleInteraction);
      });
      clearTimeout(timer);
    };
  }, [hasInteracted]);

  return hasInteracted;
};

export const useDeepScroll = (threshold = 300): boolean => {
  const [deepScroll, setDeepScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!deepScroll && window.scrollY > threshold) {
        setDeepScroll(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [deepScroll, threshold]);

  return deepScroll;
};
