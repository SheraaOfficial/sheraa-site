
import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  size = 'xl', 
  className 
}) => {
  const sizeClasses = {
    xs: 'container-xs',
    sm: 'container-sm',
    md: 'container-md',
    lg: 'container-lg',
    xl: 'container-xl',
    '2xl': 'container-2xl'
  };

  return (
    <div className={cn(sizeClasses[size], className)}>
      {children}
    </div>
  );
};
