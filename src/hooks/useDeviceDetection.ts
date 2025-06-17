
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

export const useIsTablet = (): boolean => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width < 1024);
    };
    
    // Check on initial load
    checkDevice();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkDevice);
    
    // Clean up
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isTablet;
};

export const useIsDesktop = (): boolean => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    // Check on initial load
    checkDevice();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkDevice);
    
    // Clean up
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isDesktop;
};
