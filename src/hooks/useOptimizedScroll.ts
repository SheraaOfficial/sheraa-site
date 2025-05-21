
import { useState, useEffect } from 'react';

interface ScrollState {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  scrollPercentage: number;
}

export const useOptimizedScroll = (): ScrollState => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: null,
    scrollPercentage: 0,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const calculateScrollPercentage = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      return scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
    };

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      setScrollState({
        scrollY: currentScrollY,
        scrollDirection: currentScrollY > lastScrollY ? 'down' : 'up',
        scrollPercentage: calculateScrollPercentage(),
      });
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        // Use requestAnimationFrame for more performant scroll handling
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    // Set initial values
    setScrollState({
      scrollY: window.scrollY,
      scrollDirection: null,
      scrollPercentage: calculateScrollPercentage(),
    });

    // Add scroll listener with passive option for performance
    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return scrollState;
};
