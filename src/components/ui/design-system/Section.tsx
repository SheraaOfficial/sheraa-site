
import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  containerSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  background?: 'default' | 'muted' | 'primary' | 'gradient';
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  spacing = 'lg',
  containerSize = 'xl',
  className,
  background = 'default',
  id
}) => {
  const spacingClasses = {
    sm: 'section-py-sm',
    md: 'section-py-md',
    lg: 'section-py-lg',
    xl: 'section-py-xl'
  };

  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted/30',
    primary: 'bg-sheraa-primary text-white',
    gradient: 'bg-gradient-to-br from-sheraa-primary/5 via-white to-sheraa-teal/5 dark:from-sheraa-primary/10 dark:via-sheraa-dark/30 dark:to-sheraa-teal/10'
  };

  return (
    <section 
      id={id}
      className={cn(
        spacingClasses[spacing],
        backgroundClasses[background],
        'relative overflow-hidden',
        className
      )}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};
