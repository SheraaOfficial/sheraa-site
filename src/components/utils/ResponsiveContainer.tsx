
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  mobileClassName?: string;
  desktopClassName?: string;
  id?: string;
}

/**
 * A container component that applies different classNames based on device type
 */
export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = '',
  mobileClassName = '',
  desktopClassName = '',
  id
}) => {
  const isMobile = useIsMobile();
  
  const combinedClassName = `${className} ${isMobile ? mobileClassName : desktopClassName}`;
  
  return (
    <div className={combinedClassName} id={id}>
      {children}
    </div>
  );
};

/**
 * A component that only renders on mobile devices
 */
export const MobileOnly: React.FC<{ children: React.ReactNode, className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  const isMobile = useIsMobile();
  
  if (!isMobile) return null;
  
  return <div className={className}>{children}</div>;
};

/**
 * A component that only renders on desktop devices
 */
export const DesktopOnly: React.FC<{ children: React.ReactNode, className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  const isMobile = useIsMobile();
  
  if (isMobile) return null;
  
  return <div className={className}>{children}</div>;
};
