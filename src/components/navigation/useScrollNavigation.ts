
import { useState, useEffect } from 'react';

export function useScrollNavigation() {
  const [isSticky, setIsSticky] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Track scroll direction
      setIsScrollingUp(scrollPosition < lastScrollY);
      setLastScrollY(scrollPosition);
      
      // Make the nav sticky after scrolling past 100px
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
        }, 100);
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, [lastScrollY]);

  return { isSticky, isScrolled, isScrollingUp };
}
