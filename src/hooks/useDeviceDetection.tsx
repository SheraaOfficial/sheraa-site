
import { useState, useEffect } from 'react';

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkDevice();
    
    // Add event listener for window resize with throttling
    let timeoutId: NodeJS.Timeout;
    const throttledCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkDevice, 100);
    };
    
    window.addEventListener('resize', throttledCheck, { passive: true });
    
    // Clean up
    return () => {
      window.removeEventListener('resize', throttledCheck);
      clearTimeout(timeoutId);
    };
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
    
    checkDevice();
    
    let timeoutId: NodeJS.Timeout;
    const throttledCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkDevice, 100);
    };
    
    window.addEventListener('resize', throttledCheck, { passive: true });
    
    return () => {
      window.removeEventListener('resize', throttledCheck);
      clearTimeout(timeoutId);
    };
  }, []);

  return isTablet;
};

export const useIsDesktop = (): boolean => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkDevice();
    
    let timeoutId: NodeJS.Timeout;
    const throttledCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkDevice, 100);
    };
    
    window.addEventListener('resize', throttledCheck, { passive: true });
    
    return () => {
      window.removeEventListener('resize', throttledCheck);
      clearTimeout(timeoutId);
    };
  }, []);

  return isDesktop;
};
