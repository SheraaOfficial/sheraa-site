
import { useState, useEffect } from 'react';

export function useScrollNavigation() {
  const [isSticky, setIsSticky] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener to track when to make the nav sticky
  useEffect(() => {
    const handleScroll = () => {
      // Make the nav sticky after scrolling past 100px
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      
      // Set scrolled state after any scrolling
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Throttle the scroll event for better performance
    let timeout: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          handleScroll();
          timeout = undefined;
        }, 100); // Throttle to once every 100ms
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return { isSticky, isScrolled };
}
