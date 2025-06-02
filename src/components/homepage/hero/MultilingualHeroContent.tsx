import React from 'react';
import { EnhancedMultilingualHeroContent } from './EnhancedMultilingualHeroContent';

// Keep the original component as a wrapper for backwards compatibility
export const MultilingualHeroContent: React.FC = () => {
  return <EnhancedMultilingualHeroContent />;
};
