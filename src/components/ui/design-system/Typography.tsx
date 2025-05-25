
import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const DisplayXL: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'h1' 
}) => (
  <Component className={cn('typography-display-xl', className)}>
    {children}
  </Component>
);

export const DisplayLG: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'h1' 
}) => (
  <Component className={cn('typography-display-lg', className)}>
    {children}
  </Component>
);

export const DisplayMD: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'h2' 
}) => (
  <Component className={cn('typography-display-md', className)}>
    {children}
  </Component>
);

export const HeadingXL: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'h2' 
}) => (
  <Component className={cn('typography-heading-xl', className)}>
    {children}
  </Component>
);

export const HeadingLG: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'h3' 
}) => (
  <Component className={cn('typography-heading-lg', className)}>
    {children}
  </Component>
);

export const HeadingMD: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'h4' 
}) => (
  <Component className={cn('typography-heading-md', className)}>
    {children}
  </Component>
);

export const BodyLG: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'p' 
}) => (
  <Component className={cn('typography-body-lg', className)}>
    {children}
  </Component>
);

export const BodyBase: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'p' 
}) => (
  <Component className={cn('typography-body-base', className)}>
    {children}
  </Component>
);

export const BodySM: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'p' 
}) => (
  <Component className={cn('typography-body-sm', className)}>
    {children}
  </Component>
);

// Gradient text component for Sheraa branding
export const GradientText: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'span' 
}) => (
  <Component className={cn(
    'bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent',
    className
  )}>
    {children}
  </Component>
);
