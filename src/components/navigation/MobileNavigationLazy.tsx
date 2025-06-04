
import React, { lazy, Suspense } from 'react';
import { Loader2 } from 'lucide-react';

// Lazy load the mobile menu to improve initial load performance
const MobileMenuLazy = lazy(() => 
  import('./SophisticatedMobileMenu').then(module => ({
    default: module.SophisticatedMobileMenu
  }))
);

interface MobileNavigationLazyProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: any[];
  isPathActive: (path: string, subItems?: any) => boolean;
}

export const MobileNavigationLazy: React.FC<MobileNavigationLazyProps> = ({ 
  isOpen,
  onClose,
  navigationItems,
  isPathActive
}) => {
  // Only render when open to save resources
  if (!isOpen) return null;
  
  return (
    <Suspense fallback={
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <Loader2 className="w-8 h-8 text-sheraa-primary animate-spin" />
      </div>
    }>
      <MobileMenuLazy
        isOpen={isOpen}
        onClose={onClose}
        navigationItems={navigationItems}
        isPathActive={isPathActive}
      />
    </Suspense>
  );
};
