
import { useEffect } from 'react';
import { useIsMobile } from './use-mobile';

export const useSmoothScroll = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (isMobile) return; // Skip on mobile for performance
    
    let isScrolling = false;
    let clickTimeout: number | null = null;
    
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestAnchor = target.closest('a');
      
      if (closestAnchor && closestAnchor.getAttribute('href')?.startsWith('#')) {
        if (isScrolling) return; // Prevent multiple rapid scrolls
        
        if (clickTimeout) clearTimeout(clickTimeout);
        
        clickTimeout = window.setTimeout(() => {
          e.preventDefault();
          isScrolling = true;
          
          const id = closestAnchor.getAttribute('href')?.substring(1);
          const element = document.getElementById(id || '');
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 100,
              behavior: 'smooth'
            });
            
            // Reset scrolling flag after animation completes
            setTimeout(() => {
              isScrolling = false;
            }, 1000);
          } else {
            isScrolling = false;
          }
        }, 50);
      }
    };
    
    document.addEventListener('click', handleAnchorClick, { passive: false });
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      if (clickTimeout) clearTimeout(clickTimeout);
    }
  }, [isMobile]);
};
