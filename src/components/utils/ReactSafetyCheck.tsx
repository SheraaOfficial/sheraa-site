
import React from 'react';

interface ReactSafetyCheckProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const ReactSafetyCheck: React.FC<ReactSafetyCheckProps> = ({ 
  children, 
  fallback = <div>Loading...</div> 
}) => {
  // Comprehensive React availability check
  const checkReactFeatures = () => {
    const requiredFeatures = [
      'useState',
      'useEffect', 
      'useContext',
      'createElement',
      'Fragment'
    ];
    
    return requiredFeatures.every(feature => 
      React && typeof React[feature as keyof typeof React] === 'function'
    );
  };

  if (!React) {
    console.error('ReactSafetyCheck: React is null or undefined');
    return <>{fallback}</>;
  }

  if (!checkReactFeatures()) {
    console.error('ReactSafetyCheck: Required React features are not available:', {
      React: !!React,
      useState: !!(React && React.useState),
      useEffect: !!(React && React.useEffect),
      useContext: !!(React && React.useContext),
      createElement: !!(React && React.createElement),
      Fragment: !!(React && React.Fragment)
    });
    return <>{fallback}</>;
  }

  try {
    return <>{children}</>;
  } catch (error) {
    console.error('ReactSafetyCheck: Error rendering children:', error);
    return <>{fallback}</>;
  }
};
