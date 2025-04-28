
import React, { useRef, useEffect, useState } from 'react';
import { useDimensions } from '@/hooks/use-debounced-dimensions';

type BlurLevel = 'none' | 'light' | 'medium' | 'heavy';

interface AnimatedGradientProps {
  colors?: string[];
  speed?: number;
  blur?: BlurLevel;
  className?: string;
  children?: React.ReactNode;
}

const getBlurStrength = (blur?: BlurLevel): string => {
  switch (blur) {
    case 'light':
      return 'blur-sm';
    case 'medium':
      return 'blur-md';
    case 'heavy':
      return 'blur-lg';
    case 'none':
    default:
      return '';
  }
};

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors = ['#FED700', '#FFB800', '#FF6600'],
  speed = 5,
  blur = 'none',
  className = '',
  children
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useDimensions(containerRef);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const blurClass = getBlurStrength(blur);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden rounded-xl">
      {isClient && (
        <div
          className={`absolute inset-0 ${blurClass} ${className}`}
          style={{
            animation: `moveGradient ${speed}s ease-in-out infinite alternate`,
            background: `linear-gradient(120deg, ${colors.join(', ')})`,
            backgroundSize: `${width * 2}px ${height * 2}px`,
          }}
        />
      )}
      {children}
    </div>
  );
};
