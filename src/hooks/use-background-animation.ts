
import { useEffect, useState } from 'react';

export const useBackgroundAnimation = (scrollY: number): React.CSSProperties => {
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    // Calculate background shift based on scroll position
    const hueRotate = Math.min(scrollY / 10, 45);
    const saturate = 100 + Math.min(scrollY / 50, 30);
    const y = scrollY * 0.05; // Parallax effect

    setStyle({
      filter: `hue-rotate(${hueRotate}deg) saturate(${saturate}%)`,
      transform: `translateY(-${y}px)`,
      transition: 'filter 300ms ease-out',
    });
  }, [scrollY]);

  return style;
};
