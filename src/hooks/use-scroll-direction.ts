
import { useState, useEffect } from 'react';

export const useScrollDirection = (scrollY: number): 'up' | 'down' | null => {
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (scrollY === 0 && lastScrollY === 0) {
      // Initial page load - don't set a direction yet
      return;
    }

    if (scrollY > lastScrollY) {
      setDirection('down');
    } else if (scrollY < lastScrollY) {
      setDirection('up');
    }

    setLastScrollY(scrollY);
  }, [scrollY, lastScrollY]);

  return direction;
};
