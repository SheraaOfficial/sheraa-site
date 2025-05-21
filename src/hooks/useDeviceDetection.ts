
import { useState, useEffect } from 'react';

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkDevice();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkDevice);
    
    // Clean up
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile;
};
