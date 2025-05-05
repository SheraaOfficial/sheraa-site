
import { useState, useEffect } from 'react';

export function useScrollEffect(threshold = 100) {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > threshold) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    // Initial check
    handleScroll();
    
    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { isTransparent };
}
