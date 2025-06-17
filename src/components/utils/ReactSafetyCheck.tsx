
import React from 'react';

interface ReactSafetyCheckProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const ReactSafetyCheck: React.FC<ReactSafetyCheckProps> = ({ 
  children, 
  fallback = <div>Loading...</div> 
}) => {
  // Verify React and its hooks are available
  if (!React || !React.useState || !React.useEffect || !React.useContext) {
    console.error('React hooks are not available:', {
      React: !!React,
      useState: !!(React && React.useState),
      useEffect: !!(React && React.useEffect),
      useContext: !!(React && React.useContext)
    });
    return <>{fallback}</>;
  }

  return <>{children}</>;
};
